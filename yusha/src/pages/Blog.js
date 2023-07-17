import Footer from "../components/Footer";
import NewsletterForm from "../components/NewsletterForm";
import Post from "../components/Post";
import {useEffect,useState} from "react";
import {Link} from "react-router-dom";




export default function Blog(){

    const [workouts, setWorkouts] = useState(null)
    const [featured, setFeatured] = useState([])


    useEffect(() => {
        const fetchWorkouts = async () => {
            //const response = await fetch('/api/workouts')
            const response = await fetch(`/api/workouts`)
            const jsonRaw = await response.json()
            const json = [];
            const now = Date.now();
            for(let k = 0; k < jsonRaw.length; k++) {
                const postTime = new Date(jsonRaw[k].date);
                if ( postTime.getTime() < now){
                    json.push(jsonRaw[k])
                }
            }
            console.log("length " + json.length);

            for(let i = 0; i < 1; i++) {
                setFeatured(json[i])
            }
            if (response.ok) {
                const arr = [];
                for(let j = 1; j < json.length; j++) {
                    arr.push(json[j])
                }
                setWorkouts(arr)
            }
        }
        fetchWorkouts()
    }, [])
    if(!workouts) return"";

    const featTagArr = []
    const splitTagArr = featured.tags.split("*");
    if (splitTagArr[0] != ""){
        splitTagArr.forEach((featTag) => {
            featTagArr.push(featTag);
        })
    }


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
            <section className="blog-featured" id="pricing">
                <div id="innerHero">
                    <div className="container">
                        <div className="row  align-items-center">
                            <div className="col-lg-6  ">
                                <div className="inner-hero-img mb-lg-0 mb-4 order-lg-2 ">
                                    <Link to={`/blog/${featured._id}`}>
                                    <img src={featured.image} className="img-fluid" alt=""/>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-6  ">
                                <div className="inner-hero-content order-lg-1">
                                    {featTagArr && featTagArr.map(featTag => (
                                        <label className="blog-tag">{featTag}</label>
                                    ))}
                                    <Link to={`/blog/${featured._id}`}>
                                    <div className="blog-featured-title">{featured.title}</div>
                                    </Link>
                                    <div className="blog-featured-summary">{featured.summary}</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
                <div className="container">
                    <div className="row">
                            {workouts && workouts.map(workout => (
                                <Post key={workout._id} workout={workout}/>
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
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <NewsletterForm />
            <Footer />

        </div>
    );
}
