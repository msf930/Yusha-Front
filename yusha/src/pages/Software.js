import Footer from "../components/Footer";
import PricingBrevoForm from "../components/PricingBrevoForm";
import SoftwareHeaderBrevoForm from "../components/SoftwareHeaderBrevoForm";
import React, {useEffect, useState} from "react";
import client from "../client";
import SanityPost from "../components/SanityPost";
import MultiLingualContent from "../components/MultilingualContent/multilingualContent";
import SoftwareDownload from "../components/SoftwareDownload";
import AWS from "aws-sdk";

export default function Software(){


    //sets blog posts
    const [homePosts, setHomePosts] = useState([])
    useEffect(() => {
        const fetchHome = async () => {
            const homeResponse = await client.fetch(
                `*[_type == "post" && update == true] | order(publishedAt desc)[0..2]{
        title,
        slug,
        tags,
        body,
        summary,
        categories,
        publishedAt,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt
        }
      }`
            )
            const homeData = await homeResponse;
            setHomePosts(homeData);
        }
        fetchHome();
    }, [])


    //sets download counter
    const [downloads, setDownloads] = useState([])
    useEffect(() => {
        const fetchDownlodads = async () => {
            const downloadResponse = await client.fetch(
                `*[_type == "downloads"]{
        downloads
      }`
            )
            const downloadData = await downloadResponse;
            setDownloads(downloadData);
        }
        fetchDownlodads();
    }, [])

    const downloadArr = downloads;
    const countArr = [];

    downloadArr.forEach((item) => {
        countArr.push(item.downloads);
    });
    const finalCount = countArr[0];
    const incrementedCount = finalCount + 1;
    console.log(finalCount);


    //updates new download count
    const updateDownloads = async () => {
        const countUpdate = await client
            .patch('ed4153f2-9f09-4e62-bfc4-0d33d5589272')
            .set({downloads: incrementedCount})
            .commit()

    }




    //gets software download url
    const [software, setSoftware] = useState([])
    useEffect(() => {
        const fetchSoftware = async () => {
            const softwareResponse = await client.fetch(
                `*[_type == "softwareDownload"]{
        software{
            asset->{
            url
            }
            }
        }`
            )
            const softwareData = await softwareResponse;
            setSoftware(softwareData);
        }
        fetchSoftware();
    }, [])


    //AWS S3 CONFIG
    const region = "us-west-2";
    const accessKeyId = "AKIA4YOOEBDDQESOL3XZ";
    const secretAccessKey = "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";

    AWS.config.update({
        region:region,
        credentials:new AWS.Credentials(accessKeyId,secretAccessKey)
    });

    const s3 = new AWS.S3();




    return(
        <div >
        <body className="gradientBG">
        {/* header starts */}
        <header className="softwareHeader">


            {/* inner hero start */}
            <div id="innerHero">
                <div className="container">
                    <div className="row inner-hero-row align-items-center">
                        <div className="col-lg-6 order-lg-1 order-2">
                            <SoftwareHeaderBrevoForm/>
                        </div>
                        <div className="col-lg-6 order-lg-2 order-1">
                            <div className="inner-hero-img">
                                <div className="creativity-right f-play-video mb-4 mb-lg-0">
                                    <img src="images/yushaSoftware.png" className=" play-button img-fluid" data-bs-toggle="modal"
                                         data-bs-target="#exampleModal" alt=""/>
                                        {/* Modal */}
                                        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                                             aria-hidden="true">
                                            <div className="modal-dialog modal-dialog-centered">
                                                <div className="modal-content">
                                                    <div className="modal-body">
                                                        <div className="work_video">
                                                            <div className="embed-responsive embed-responsive-16by9">
                                                                <iframe className="embed-responsive-item" width="100%" height="600"
                                                                        src="https://www.youtube.com/embed/-ESmT6c8zkg?si=2XjJLx5KqielHcry" allowfullscreen></iframe>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    {/* Modal */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* inner hero end */}
        </header>
        {/* banner end */}
        {/* how does it work section starts  */}
        <section className="work">
            <div className="container">
                <div className="row">
                    <div className="workTextHead">
                        <h2><MultiLingualContent contentID="sw_work_title" /></h2>
                        <h4><MultiLingualContent contentID="sw_work_sub" /></h4>
                    </div>
                </div>
                <div className="row">
                    <div className=" col-md-6 col-lg-4 m-10">
                        <div className="work-box">
                            <div className="work-icon">
                                <h1><MultiLingualContent contentID="sw_work_item1_number" /></h1>
                            </div>
                            <h4><MultiLingualContent contentID="sw_work_item1_title" /></h4>
                            <p><MultiLingualContent contentID="sw_work_item1_body" /></p>
                        </div>
                    </div>
                    <div className=" col-md-6 col-lg-4 m-10">
                        <div className="work-box">
                            <div className="work-icon">
                                <h1><MultiLingualContent contentID="sw_work_item2_number" /></h1>
                            </div>
                            <h4><MultiLingualContent contentID="sw_work_item2_title" /></h4>
                            <p><MultiLingualContent contentID="sw_work_item2_body" /></p>
                        </div>
                    </div>
                    <div className=" col-md-6 col-lg-4 m-10">
                        <div className="work-box">
                            <div className="work-icon">
                                <h1><MultiLingualContent contentID="sw_work_item3_number" /></h1>
                            </div>
                            <h4><MultiLingualContent contentID="sw_work_item3_title" /></h4>
                            <p><MultiLingualContent contentID="sw_work_item3_body" /></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="watchContainer">
            <div className="container ">
                <div className="row work-row align-items-center">
                    <div className="col-lg-6 order-lg-1 order-2">
                        <div className="watchTextContainer ">
                            <h2 className="watchText"><MultiLingualContent contentID="sw_watch_title" /></h2>
                            <h4 className="watchText"><MultiLingualContent contentID="sw_watch_sub" /></h4>
                            <a href="https://www.youtube.com/@yusha-ai" target="_blank" className="watchLink"><MultiLingualContent contentID="sw_watch_link" /> <span><i className="fa-sharp fa-solid fa-arrow-right"></i></span></a>
                        </div>
                    </div>
                    <div className="col-lg-6 order-lg-2 order-1">
                        <div className="inner-hero-img">
                            <div className="creativity-right f-play-video mb-4 mb-lg-0">
                                <img src="images/index-banner.png" className=" play-button img-fluid workImage"
                                     data-bs-toggle="modal"
                                     data-bs-target="#exampleModal" alt=""/>
                                {/* Modal */}
                                <div className="modal fade" id="exampleModal" tabIndex="-1"
                                     aria-labelledby="exampleModalLabel"
                                     aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                            <div className="modal-body">
                                                <div className="work_video">
                                                    <div className="embed-responsive embed-responsive-16by9">
                                                        <iframe className="embed-responsive-item" width="100%"
                                                                height="600"
                                                                src="https://www.youtube.com/embed/-ESmT6c8zkg?si=2XjJLx5KqielHcry"
                                                                allowFullScreen></iframe>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Modal */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
        <div id="signUp">
            <PricingBrevoForm/>
        </div>
        {/* how does it work section starts  */}
        {/* Creativity section starts */}
        {/* <section className="Creativity">
              <div className="container">
                <div className="row align-items-center p-lg-5">
                  <div className="col-lg-6">
                    <div className="Creativity-left">
                      <h2>Watch Yusha at Work!</h2>
                      <h4>Here is a quick tutorial of  how to use Yusha’s software. </h4>
                      <a href="#" >Watch video on YouTube <span><i className="fa fa-sharp fa-solid fa-arrow-right"></i></span></a>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="Creativity-right f-play-video mb-4 mb-lg-0">
                      <img src="images/index-banner.png" className="play-button img-fluid"  data-bs-toggle="modal"
                      data-bs-target="#exampleModal" alt=""/>
      
                      Modal */}
        {/* <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                      aria-hidden="true">
                      <div className="modal-dialog modal-dialog-centered">
                          <div className="modal-content">
                              <div className="modal-body">
                                  <div className="work_video">
                                      <div className="embed-responsive embed-responsive-16by9">
                                          <iframe className="embed-responsive-item" width="100%" height="600"
                                              src="https://www.youtube.com/embed/NP1kHFRVln8"
                                              allowfullscreen></iframe>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section> */}
        {/* Creativity section ends */}
        {/* what is include starts  */}
        {/*<section className="work include">*/}
        {/*    <div className="container">*/}
        {/*        <div className="row">*/}
        {/*            <div className="col-md-12 text-center">*/}
        {/*                <h2>What’s Included?</h2>*/}
        {/*                <h4>Here is what you can expect when you download Yusha.</h4>*/}
        {/*            </div>*/}
        {/*        </div>*/}
        {/*        <div className="row">*/}
        {/*            <div className=" col-md-6 col-lg-4 m-10">*/}
        {/*                <div className="work-box include-box">*/}
        {/*                    <div className="include-icon speed-icon">*/}
        {/*                        <img src="images/speed.png" className="img-fluid" alt=""/>*/}
        {/*                    </div>*/}
        {/*                    <h4>Animation tools for speed</h4>*/}
        {/*                    <p>Provide us your character sheets. We can help draw your character doing their scene ready to be edited so*/}
        {/*                        you can focus on editing the flow of your work.</p>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*            <div className=" col-md-6 col-lg-4 m-10">*/}
        {/*                <div className="work-box include-box">*/}
        {/*                    <div className="include-icon">*/}
        {/*                        <img src="images/support.png" className="img-fluid" alt=""/>*/}
        {/*                    </div>*/}
        {/*                    <h4>Familiar platform support</h4>*/}
        {/*                    <p>Yusha’s animation platform is powered by Blender, so users have access to the animations tools and layout*/}
        {/*                        with an immense amount of support.</p>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*            <div className=" col-md-6 col-lg-4 m-10">*/}
        {/*                <div className="work-box include-box">*/}
        {/*                    <div className="include-icon">*/}
        {/*                        <img src="images/helping.png" className="img-fluid" alt=""/>*/}
        {/*                    </div>*/}
        {/*                    <h4>A helping hand from Yusha</h4>*/}
        {/*                    <p>The Yusha team is dedicated to continuously improving the product. Yusha is working to fix your issues*/}
        {/*                        and help debug with you.</p>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*</section>*/}
        {/* what is include starts  */}
        {/* Software Updates section starts */}
        <section className="whatsIncluded">
            <div className="whatsIncludedHeader">
                <h2><MultiLingualContent contentID="sw_included_title" /></h2>
                <h4 className="m-10"><MultiLingualContent contentID="sw_included_sub" /></h4>
            </div>
            <div className="includedItemContainer">
                <div className="includedItem">
                    <img src="images/yushaFast.png"/>
                    <h4 className="includedItemTitle"><MultiLingualContent contentID="sw_included_item1_title" /></h4>
                    <p className="includedItemBody"><MultiLingualContent contentID="sw_included_item1_body" /></p>
                </div>
                <div className="includedItem">
                    <img src="images/yushaHearts.png"/>
                    <h4 className="includedItemTitle"><MultiLingualContent contentID="sw_included_item2_title" /></h4>
                    <p className="includedItemBody"><MultiLingualContent contentID="sw_included_item2_body" /></p>
                </div>
                <div className="includedItem">
                    <img src="images/yushaHelp.png"/>
                    <h4 className="includedItemTitle"><MultiLingualContent contentID="sw_included_item3_title" /></h4>
                    <p className="includedItemBody"><MultiLingualContent contentID="sw_included_item3_body" /></p>
                </div>
            </div>
        </section>
        <section className="Software soft-updt" id="softwareUpdate">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2><MultiLingualContent contentID="sw_updates_title" /></h2>
                        <div className="soft-des soft-des2">
                            <h4><MultiLingualContent contentID="sw_updates_sub" /></h4>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {/*<div className="col-md-6 col-lg-4">*/}
                    {/*    <div className="soft-img-box imgbox-h">*/}
                    {/*        <div className="soft-img img-h">*/}
                    {/*            <img src="images/monkey.png" className="img-fluid" alt=""/>*/}
                    {/*        </div>*/}
                    {/*        <div className="soft-box-content">*/}
                    {/*            <h4>Solving how to color</h4>*/}
                    {/*            <p>Our first phase into coloring is going well. We have a lot of cleaning and refining to do for our MVP*/}
                    {/*                release, but we are proud of how we are starting off so far!</p>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="col-md-6 col-lg-4">*/}
                    {/*    <div className="soft-img-box imgbox-h">*/}
                    {/*        <div className="soft-img img-h">*/}
                    {/*            <img src="images/horse-min.gif" className="img-fluid" alt=""/>*/}
                    {/*        </div>*/}
                    {/*        <div className="soft-box-content">*/}
                    {/*            <h4>Our very first rendering of a scene</h4>*/}
                    {/*            <p>During our first phase of trying to draw out characters. We had colors being off, really blurry, and not*/}
                    {/*                accurate to the original work. but we continued on for the pursuit of making a more accurate drawing*/}
                    {/*                process.</p>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="col-md-6 col-lg-4">*/}
                    {/*    <div className="soft-img-box imgbox-h">*/}
                    {/*        <div className="soft-img img-h">*/}
                    {/*            <img src="images/rig.gif" className="img-fluid" alt=""/>*/}
                    {/*        </div>*/}
                    {/*        <div className="soft-box-content">*/}

                    {/*            <h4>We have a better understanding of skeletons</h4>*/}
                    {/*            <p>Our first milestone in being able to understand how to manually produce character armatures and rig their*/}
                    {/*                models! With this we can move to the next phase of doing it without manual support.</p>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className="container">
                        <div className="row">
                            {homePosts && homePosts.map(post => (
                                <SanityPost key={post.slug} post={post}/>
                            ))}
                        </div>
                    </div>
                    <div className="container">
                        <div className="row text-white">
                            {downloads && downloads.map(post => (
                                post.downloads
                            ))}
                        </div>
                    </div>
                    {/*<div>*/}
                    {/*    <a href={`${software[0]?.software.asset?.url}?dl=`} onClick={updateDownloads}*/}
                    {/*        >Download</a>*/}
                    {/*</div>*/}
                    {/*<div className="container ">*/}
                    {/*    <div className="row about-banner-row justify-content-center align-items-center">*/}
                    {/*        <div className="col-lg-12 text-center about-banner-con  banner_content">*/}
                    {/*            <h1><MultiLingualContent contentID="about_hero_title" /></h1>*/}
                    {/*            <h4><MultiLingualContent contentID="about_hero_sub" /></h4>*/}
                    {/*            <div className="flex-row">*/}
                    {/*                <div className="banner-btnbox soft-btnbox">*/}
                    {/*                    <div>*/}
                    {/*                        <a className="btn cs-btn-software"*/}
                    {/*                           href={s3.getSignedUrl("getObject",{*/}
                    {/*                               Bucket: "yushatestzip",*/}
                    {/*                               Key: "animals_hero_toucan.zip",*/}
                    {/*                           })}*/}
                    {/*                           onClick={updateDownloads}*/}
                    {/*                        >Download Mac*/}

                    {/*                        </a>*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}

                    {/*    </div>*/}
                    {/*</div>*/}

                </div>
            </div>
        </section>
        {/*<section>*/}
        {/*    <div className="container">*/}
        {/*        <div className="row">*/}
        {/*            {homePosts && homePosts.map(post => (*/}
        {/*                <SanityUpdate key={post.slug} post={post}/>*/}
        {/*            ))}*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*</section>*/}
        {/* Software Updates section ends */}
        {/* connect with section starts */}
        {/*<section className="connect-us">*/}
        {/*    <div className="container">*/}
        {/*        <div className="row align-items-center">*/}
        {/*            <div className="col-lg-6 pt-lg-5">*/}
        {/*                <div className="people-left">*/}
        {/*                    <h2>People are at the heart of Yusha!</h2>*/}
        {/*                    <p>Join our newsletter to keep up to date with all future releases, product updates, specials, and news*/}
        {/*                        about Yusha!</p>*/}
        {/*                    <div className="form">*/}
        {/*                        <form action="https://sheetdb.io/api/v1/6en1ynd9h3yx2" method="POST" id="sheetdb-form" form*/}
        {/*                              id="email-form">*/}
        {/*                            <div className="form-left">*/}
        {/*                                <label for="">Enter your email.</label>*/}
        {/*                                <input type="email" name="data[email]" className="form-control" placeholder="janedoe@email.com"/>*/}
        {/*                            </div>*/}
        {/*                            <div className="form-right">*/}
        {/*                                <input type="submit" form="email-form" value="Subscribe" className="submit cs-btn"/>*/}

        {/*                            </div>*/}
        {/*                        </form>*/}
        {/*                    </div>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*            <div className="col-lg-6">*/}
        {/*                <div className="people-right">*/}
        {/*                    <img src="images/people-are-at.png" className="img-fluid" alt=""/>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*        </div>*/}

        {/*    </div>*/}
        {/*</section>*/}

        </body>
        <Footer />
    </div>
    );
}