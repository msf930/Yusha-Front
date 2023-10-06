import Footer from "../components/Footer";
import {useEffect, useState} from "react";
import BrevoForm from "../components/BrevoForm.js";
import HomeHeaderForm from "../components/HomeHeaderForm.js";
import PricingBrevoForm from "../components/PricingBrevoForm.js";
import client from "../client";
import SanityPost from "../components/SanityPost";
import MultiLingualContent from "../components/MultilingualContent/multilingualContent";


export default function Home() {

    const [homePosts, setHomePosts] = useState([])
    useEffect(() => {
        const fetchHome = async () => {
            const homeResponse = await client.fetch(
                `*[_type == "post"] | order(publishedAt desc)[0..3]{
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


    // const [workouts, setWorkouts] = useState(null)
    // const [featured, setFeatured] = useState([])
    //
    //
    // useEffect(() => {
    //     const fetchWorkouts = async () => {
    //         //const response = await fetch('/api/workouts')
    //         const response = await fetch(`/api/workouts`)
    //         const jsonRaw = await response.json()
    //         const json = [];
    //         const now = Date.now();
    //         for(let k = 0; k < jsonRaw.length; k++) {
    //             const postTime = new Date(jsonRaw[k].date);
    //             if ( postTime.getTime() < now){
    //                 json.push(jsonRaw[k])
    //             }
    //         }
    //         console.log("length " + json.length);
    //
    //         for(let i = 0; i < 1; i++) {
    //             setFeatured(json[i])
    //         }
    //         if (response.ok) {
    //             const arr = [];
    //             for(let j = 0; j < 4; j++) {
    //                 arr.push(json[j])
    //             }
    //             setWorkouts(arr)
    //         }
    //     }
    //     fetchWorkouts()
    // }, [])
    // if(!workouts) return"";
    //
    // const featTagArr = []
    // const splitTagArr = featured.tags.split("*");
    // if (splitTagArr[0] != ""){
    //     splitTagArr.forEach((featTag) => {
    //         featTagArr.push(featTag);
    //     })
    // }

    return(
        <div className="gradientBG">
            {/* header starts */}
            {/*<div className="homeHeader">*/}
            {/*    /!* header end *!/*/}

            {/*    <div className="container">*/}

            {/*        <div className="row banner-row align-items-center">*/}
            {/*            <div className="headerContainer">*/}
            {/*                <div className="banner-content">*/}
            {/*                    <h1>Animate your drawings faster!</h1>*/}
            {/*                    <h4>The animation tool that allows<br/> you to create more.</h4>*/}
            {/*                    <div className="banner-btnbox">*/}
            {/*                        <a href="download#pricing" className="btn cs-btn">Get Started</a>*/}
            {/*                        <a href="software" className="btn cs-btn cs-btn-secondary">Learn more</a>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div>
                <HomeHeaderForm />
            </div>
            {/* banner end */}
            {/* all creator section starts */}
            <section className="all-creator">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-2 col-lg-3">
                            <div className="creator-left">
                                <img src="images/yusha_left.png" className="img-fluid" alt=""/>
                            </div>
                        </div>
                        <div className="col-md-8 col-lg-6">
                            <div className="creator-middle mb-4">
                                <h1 className="cs-text"><MultiLingualContent contentID="home_creator_title" /></h1>
                                <h4><MultiLingualContent contentID="home_creator_body" /></h4>
                            </div>
                        </div>
                        <div className="col-md-2 col-lg-3">
                            <div className="creator-left">
                                <img src="images/Yusha_Right.png" className="img-fluid" alt=""/>
                            </div>
                        </div>
                    </div>
                    {/* Hand-drawn row starts */}
                    <div className="row align-items-center pt-5">
                        <div className="col-lg-6">
                            <div className="hand-drawn-left pe-lg-5 pe-0 mb-md-4">
                                <img src="images/helping-hands.png" className="img-fluid cs-shadow rounded-4" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="hand-drawn-right">
                                <h4><MultiLingualContent contentID="home_section_1_sub" /></h4>
                                <h2><MultiLingualContent contentID="home_section_1_title" /></h2>
                                <h4><MultiLingualContent contentID="home_section_1_body" /></h4>
                                <div className="goals">
                                    <a href="about"><MultiLingualContent contentID="home_section_1_link" /> <span><i
                                        className="fa-sharp fa-solid fa-arrow-right"></i></span></a>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* Hand-drawn row ends */}
                    {/* Ai Animation row starts */}
                    <div className="row pt-5 align-items-center py-4">
                        {/* mobile responsive part starts*/}
                        <div className="col-lg-6 mobile-res">
                            <div className="hand-drawn-left ps-lg-5 ps-0 mb-md-4">
                                <img src="images/animation-tool-min.gif" className="img-fluid" alt=""/>
                            </div>
                        </div>
                        {/* mobile responsive part end*/}
                        <div className="col-lg-6 order-lg-1 order-2">
                            <div className="hand-drawn-right">
                                <h4><MultiLingualContent contentID="home_section_2_sub" /></h4>
                                <h2><MultiLingualContent contentID="home_section_2_title" /></h2>
                                <h4><MultiLingualContent contentID="home_section_2_body" /></h4>
                                <div className="goals">
                                    <a href="software"><MultiLingualContent contentID="home_section_2_link" /> <span><i
                                        className="fa-sharp fa-solid fa-arrow-right"></i></span></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-2 order-1">
                            <div className="hand-drawn-lef ps-lg-5 ps-0 mb-md-4">
                                <img src="images/animation-tool-min.gif" className="img-fluid w-100 cs-shadow" alt=""/>
                            </div>
                        </div>
                    </div>
                    {/* Ai Animation row ends */}
                    {/* Grow-together row starts */}
                    <div className="row align-items-center py-5">
                        <div className="col-lg-6">
                            <div className="hand-drawn-left pe-md-5 pe-0 mb-md-4">
                                <img src="images/growth.png" className="img-fluid cs-shadow" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="hand-drawn-right">
                                <h4><MultiLingualContent contentID="home_section_3_sub" /></h4>
                                <h2><MultiLingualContent contentID="home_section_3_title" /></h2>
                                <h4><MultiLingualContent contentID="home_section_3_body" /></h4>
                                <div className="grow-connect">
                                    <a href="support"><MultiLingualContent contentID="home_section_3_link" /> <span><i
                                        className="fa-sharp fa-solid fa-arrow-right"></i></span></a>
                                    <ul>
                                        <li>
                                            <a href="https://discord.gg/vEUsd6WJRj" target="_blank"><img src="images/discord.png" className="img-fluid" alt=""/></a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/company/yusha-ai/about/" target="_blank"><img  src="images/linkdin.png" className="img-fluid" alt=""/></a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/yusha.animation/" target="_blank"><img src="images/instagram.png" className="img-fluid" alt=""/></a>
                                        </li>
                                        <li>
                                            <a href="https://www.tiktok.com/@animate_with_yusha?lang=en"target="_blank"><img src="images/tiktok.png" className="img-fluid tiktok" alt=""/></a>
                                        </li>
                                        <li>
                                            <a href="https://www.youtube.com/@yusha-ai" target="_blank"><img src="images/youtube.png" className="img-fluid tiktok" alt=""/></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Grow-together row ends */}
                </div>
            </section>
            {/* all creator section end */}
            {/* Creativity section starts */}
            <section className="Creativity">
                <div className="container">
                    <div className="row align-items-center p-md-5">
                        <div className="col-lg-6 order-lg-1 order-2">
                            <div className="Creativity-left">
                                <h2><MultiLingualContent contentID="home_video_title" /></h2>
                                <h4><MultiLingualContent contentID="home_video_sub1" /></h4>
                                <h4><MultiLingualContent contentID="home_video_sub2" /></h4>
                                <a href="https://www.youtube.com/@yusha4224"><MultiLingualContent contentID="home_video_link" /> <span><i
                                    className="fa-sharp fa-solid fa-arrow-right"></i></span></a>
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-2 order-1">
                            <div className="creativity-right f-play-video my-4 mb-lg-0">
                                <img src="images/white_yusha.png" className="play-button img-fluid" data-bs-toggle="modal"
                                     data-bs-target="#exampleModal" alt=""/>
                                {/* Modal */}
                                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                                     aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                            <div className="modal-body">
                                                <div className="work_video">
                                                    <div className="embed-responsive embed-responsive-16by9">
                                                        <iframe className="embed-responsive-item" width="100%" height="600"
                                                                src="https://www.youtube.com/embed/NP1kHFRVln8"
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
            </section>

            {/* Creativity section ends */}
            {/* Price section starts */}
            {/*<section className="price">*/}
            {/*    <div className="container">*/}
            {/*        <div className="row">*/}
            {/*            <div className="col-lg-12">*/}
            {/*                <div className="price-body" >*/}
            {/*                    <h2>Pricing</h2>*/}
            {/*                    <h4>Here is our current plan and what it includes.</h4>*/}
            {/*                    <div className="beta">*/}
            {/*                        <h4>Absolute Beta</h4>*/}
            {/*                        <h4 className="beta-border ">$ 5.00 <span>/ One-time payment</span></h4>*/}
            {/*                        <ul>*/}
            {/*                            <li>*/}
            {/*                                <span><i className="fa-solid fa-check"></i></span>*/}
            {/*                                <p>Initial software platform</p>*/}
            {/*                            </li>*/}
            {/*                            <li>*/}
            {/*                                <span><i className="fa-solid fa-check"></i></span>*/}
            {/*                                <p>Basic animation tools</p>*/}
            {/*                            </li>*/}
            {/*                            <li>*/}
            {/*                                <span><i className="fa-solid fa-check"></i></span>*/}
            {/*                                <p>Yusha’s automation feature</p>*/}
            {/*                            </li>*/}
            {/*                            <li>*/}
            {/*                                <span><i className="fa-solid fa-check"></i></span>*/}
            {/*                                <p>Receive all future updates even after Absolute Beta program ends</p>*/}
            {/*                            </li>*/}
            {/*                        </ul>*/}
            {/*                        <div className="price-btn">*/}
            {/*                            <a href="download#pricing" className="btn cs-btn">Select Plan</a>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}
            <div id="signUp">
                <PricingBrevoForm/>
            </div>
            <section className="whatsIncluded">
                <div className="whatsIncludedHeader">
                    <h2><MultiLingualContent contentID="home_included_title" /></h2>
                    <h4 className="m-10"><MultiLingualContent contentID="home_included_sub" /></h4>
                </div>
                <div className="includedItemContainer">
                    <div className="includedItem">
                        <img src="images/yushaFast.png" className="includedImg"/>
                        <h4 className="includedItemTitle"><MultiLingualContent contentID="home_included_item1_title" /></h4>
                        <p className="includedItemBody"><MultiLingualContent contentID="home_included_item1_body" /></p>
                    </div>
                    <div className="includedItem">
                        <img src="images/yushaHearts.png" className="includedImg"/>
                        <h4 className="includedItemTitle"><MultiLingualContent contentID="home_included_item2_title" /></h4>
                        <p className="includedItemBody"><MultiLingualContent contentID="home_included_item2_body" /></p>
                    </div>
                    <div className="includedItem">
                        <img src="images/yushaHelp.png" className="includedImg"/>
                        <h4 className="includedItemTitle"><MultiLingualContent contentID="home_included_item3_title" /></h4>
                        <p className="includedItemBody"><MultiLingualContent contentID="home_included_item3_body" /></p>
                    </div>
                </div>
            </section>
            <section className="home-blog-featured" id="homeBlog">
                <div id="innerHero">
                    <div className="container">
                        <div className="home-blog-section-title">
                            <div>
                                <h2 className="blog-featured-title"><MultiLingualContent contentID="home_blog_title" /></h2>
                            </div>
                            <div className="blog-sub-title">
                                <h4 className="blog-featured-summary"><MultiLingualContent contentID="home_blog_sub" /></h4>
                                <a href="blog" className="home-blog-viewMoreBtn"><MultiLingualContent contentID="home_blog_link" /> <span><i
                                    className="fa-sharp fa-solid fa-arrow-right"></i></span></a>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                {homePosts && homePosts.map(post => (
                                    <SanityPost key={post.slug} post={post}/>
                                ))}
                            </div>
                        </div>
                        {/*<div className="row  align-items-center">*/}
                        {/*    <div className="col-lg-6  ">*/}
                        {/*        <div className="inner-hero-img mb-lg-0 mb-4 order-lg-2 ">*/}
                        {/*            <Link to={`/homePost/${featured._id}`}>*/}
                        {/*                <img src={featured.image} className="img-fluid" alt=""/>*/}
                        {/*            </Link>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    <div className="col-lg-6  ">*/}
                        {/*        <div className="inner-hero-content order-lg-1">*/}
                        {/*            {featTagArr && featTagArr.map(featTag => (*/}
                        {/*                <label className="blog-tag">{featTag}</label>*/}
                        {/*            ))}*/}
                        {/*            <Link to={`/homePost/${featured._id}`}>*/}
                        {/*                <div className="blog-featured-title">{featured.title}</div>*/}
                        {/*            </Link>*/}
                        {/*            <div className="blog-featured-summary">{featured.summary}</div>*/}
                        {/*            <Link to={`/homePost/${featured._id}`}>*/}
                        {/*                <img src="images/readMore.png" className="py-3" />*/}
                        {/*            </Link>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}

                        {/*</div>*/}
                    </div>
                </div>
            </section>
            {/* Price section ends */}
            {/* Software Updates section starts */}
            {/*<section className="Software">*/}
            {/*    <div className="container">*/}
            {/*        <div className="row align-items-end mb-4">*/}
            {/*            <div className="col-md-12">*/}
            {/*                <h2>Our Blog</h2>*/}
            {/*                <h4>Here are the latest updates to the Yusha software.</h4>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="row">*/}
            {/*            <div className="col-md-6 col-lg-4">*/}
            {/*                <div className="soft-img-box">*/}
            {/*                    <div className="soft-img">*/}
            {/*                        <img src="images/ai.jpg" className="img-fluid" alt=""/>*/}
            {/*                    </div>*/}
            {/*                    <h4>Netflix hosts it's first AI animation</h4>*/}
            {/*                    <p>The studio behind the show stated they tried it because of low staff and to save time in between*/}
            {/*                        frames.*/}
            {/*                        But what does it mean for the animation industry if studios that can't afford their employees slowly*/}
            {/*                        phase*/}
            {/*                        them out? Yusha hopes to be the alternative letting creators to produce their own works instead.</p>*/}
            {/*                    <div className="read">*/}
            {/*                        <a href="https://www.vice.com/en/article/bvmqkv/netflix-anime-dog-and-the-boy-ai-generated-art">Learn*/}
            {/*                            More </a>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="col-md-6 col-lg-4">*/}
            {/*                <div className="soft-img-box">*/}
            {/*                    <div className="soft-img">*/}
            {/*                        <img src="images/ai2.jpeg" className="img-fluid" alt=""/>*/}
            {/*                    </div>*/}
            {/*                    <h4>Motion capture + Animation</h4>*/}
            {/*                    <p>A youtube channel made their own animation by applying an AI filter over their video. While one of*/}
            {/*                        many,*/}
            {/*                        it's a get example of how the animation space is changing a lot and the barrier of entry is slowly*/}
            {/*                        opening*/}
            {/*                        up! With these softwares we will get to see new people joining the industry and hopefully some of them*/}
            {/*                        will get into traditional animation!</p>*/}
            {/*                    <div className="read">*/}
            {/*                        <a href="https://www.youtube.com/watch?v=_9LX9HSQkWo&t=2s&ab_channel=CorridorCrew">Learn More </a>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="col-md-6 col-lg-4">*/}
            {/*                <div className="soft-img-box">*/}
            {/*                    <div className="soft-img">*/}
            {/*                        <img src="images/ai3.jpeg" className="img-fluid" alt=""/>*/}
            {/*                    </div>*/}
            {/*                    <h4>Working in animation is brutal</h4>*/}
            {/*                    <p>In Hacker News, details that most animators struggle in the industry leading to extremely high*/}
            {/*                        turnover.*/}
            {/*                        Which is sad to see, people leaving an industry they were passionate about orignally. With Yusha we*/}
            {/*                        want*/}
            {/*                        to keep people in the industry by letting people have options to producing content faster and*/}
            {/*                        hopefully*/}
            {/*                        for their own audience.</p>*/}
            {/*                    <div className="read">*/}
            {/*                        <a href="https://news.ycombinator.com/item?id=28111718">Learn More </a>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}
            {/* Software Updates section ends */}
            {/* connect with section starts */}
            {/*<section className="connect-us">*/}
            {/*    <div className="container">*/}
                    {/* <div className="row">
            <div className="col-lg-12">
              <h2>Connect with Us!</h2>
              <p className="connect-desc">We’re here! Let’s talk.</p>
            </div>
            <div className="col-lg-8 col-md-10 mx-auto mb-lg-0 mb-md-5">
              <div className="connect-icon">
                <div className="connect-iconbox">
                  <a href="https://discord.gg/vEUsd6WJRj"><i className="fa-brands fa-discord"></i></a>
                </div>
                <div className="connect-iconbox">
                  <a href="https://www.linkedin.com/company/yusha-ai/about/"><i className="fa-brands fa-linkedin"></i></a>
                </div>
                <div className="connect-iconbox">
                  <a href="https://www.instagram.com/yusha.animation/"><i className="fa-brands fa-instagram"></i></a>
                </div>
                <div className="connect-iconbox">
                  <a href="https://www.tiktok.com/@animate_with_yusha?lang=en"><i className="fa-brands fa-tiktok"></i></a>
                </div>
              </div>
            </div>
          </div> */}

            {/*    </div>*/}
            {/*</section>*/}
            <Footer />
        </div>
    );
}

