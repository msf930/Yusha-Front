import Footer from "../components/Footer";
import SanityPost from "../components/SanityPost";
import {useEffect,useState} from "react";
import {Link} from "react-router-dom";
import BrevoForm from "../components/BrevoForm";
import client from "../client";
import BlockContent from "@sanity/block-content-to-react";





export default function Blog(){

    //SANITY
    const [featuredPost, setFeaturedPost] = useState([])
    useEffect(() => {
        const fetchFeat = async () => {
           const featResponse = await client.fetch(
                `*[_type == "post"] | order(publishedAt desc) [0] {
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
            const featData = await featResponse;
            setFeaturedPost(featData);
        }
        fetchFeat();
    }, [])

    const [allPosts, setAllPosts] = useState([])
    useEffect(() => {
        const fetchAll = async () => {
           const allResponse = await client.fetch(
                `*[_type == "post"] | order(publishedAt desc)[1..-1]{
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
                const allData = await allResponse;
            setAllPosts(allData);
        }
        fetchAll();
    }, [])


/////////////////////////////////////////////////////////////////////

    // const [workouts, setWorkouts] = useState(null)
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
    //
    //
    //         if (response.ok) {
    //             const arr = [];
    //             for(let j = 1; j < json.length; j++) {
    //                 arr.push(json[j])
    //             }
    //             setWorkouts(arr)
    //         }
    //     }
    //     fetchWorkouts()
    // }, [])
    //
    // if(!workouts) return"";










    return(
        <div>
            <header className="blog-banner">
                <div className="container ">
                    <div className="row banner-row justify-content-center align-items-center">
                        <div className="col-lg-12 text-center about-banner-con  banner_content">
                            <h1>Yusha’s Blog</h1>
                            <h4>The latest updates to the Yusha software and news from the industry</h4>
                        </div>
                    </div>
                </div>
            </header>

            {/*SANITY FEATURED*/}
            <section className="blog-featured" id="pricing">
                <div id="innerHero">
                    <div className="container">
                        <div className="row  align-items-center">
                            <div className="col-lg-6  ">
                                <div className="inner-hero-img mb-lg-0 mb-4 order-lg-2 ">
                                    <Link to={`/blog/${featuredPost?.slug?.current}`}>
                                    <img src={featuredPost?.mainImage?.asset?.url} className="img-fluid" alt=""/>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-6  ">
                                <div className="inner-hero-content order-lg-1">
                                    {featuredPost?.tags?.map(featTag => (
                                        <label className="blog-page-tag">{featTag}</label>
                                    ))}
                                    <Link to={`/blog/${featuredPost?.slug?.current}`}>
                                        <div className="blog-featured-title">{featuredPost?.title}</div>
                                    </Link>
                                    <div className="blog-featured-summary">
                                        <BlockContent
                                            blocks={featuredPost.summary}
                                            projectId="pnj4edkv"
                                            dataset="production"
                                        />
                                    </div>
                                    <Link to={`/blog/${featuredPost?.slug?.current}`}>
                                        <h5 className="readMore">Read More <span><i
                                            className="fa-sharp fa-solid fa-arrow-right"></i></span>
                                        </h5>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <div className="container">
                    <div className="row">
                            {allPosts.map(post => (
                                <SanityPost key={post?.slug} post={post}/>
                            ))}
                    </div>
                </div>
            <section className="connect-us-blog">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mb-4">
                            <h2>Connect with Us!</h2>
                            <h4>We’re here! Let’s talk.</h4>
                        </div>
                        <div className="col-lg-8 m-auto">
                            <div className="connect-icon">
                                <div className="connect-iconbox">
                                    <a href="https://discord.gg/vEUsd6WJRj"><i className="fa-brands fa-discord"></i></a>
                                </div>
                                <div className="connect-iconbox">
                                    <a href="https://www.linkedin.com/company/yusha-ai/about/"><i
                                        className="fa-brands fa-linkedin"></i></a>
                                </div>
                                <div className="connect-iconbox">
                                    <a href="https://www.instagram.com/yusha.animation/"><i
                                        className="fa-brands fa-instagram"></i></a>
                                </div>
                                <div className="connect-iconbox">
                                    <a href="https://www.tiktok.com/@animate_with_yusha?lang=en"><i
                                        className="fa-brands fa-tiktok"></i></a>
                                </div>
                                <div className="connect-iconbox">
                                    <a href="https://www.youtube.com/@yusha-ai" target="_blank"><i
                                        className="fa-brands fa-youtube"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div id="signUp">
                <BrevoForm />
            </div>
            <Footer />

        </div>
    );
}
