import Footer from "../components/Footer";
import NewsletterForm from "../components/NewsletterForm";
import BrevoForm from "../components/BrevoForm";
import React from "react";
import { HashLink , NavHashLink } from 'react-router-hash-link';
import MultiLingualContent from "../components/MultilingualContent/multilingualContent";

export default function About() {
    return(
    <div className="gradientBG">
    <div id="top">
        <header className="about-banner">
        <div className="container ">
            <div className="row about-banner-row justify-content-center align-items-center">
                <div className="col-lg-12 text-center about-banner-con  banner_content">
                    <h1><MultiLingualContent contentID="about_hero_title" /></h1>
                    <h4><MultiLingualContent contentID="about_hero_sub" /></h4>
                    <div className="flex-row">
                        <div className="banner-btnbox soft-btnbox">
                            <HashLink to="#signUp" className="btn cs-btn"><MultiLingualContent contentID="about_hero_signUpBtn" /></HashLink>
                            <a href="support" className="btn cs-btn-about"><MultiLingualContent contentID="about_hero_contactBtn" /></a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </header>
    <section className=" animation-community">
        <div className="container">
            {/* Ai Animation row starts */}
            <div className="row pt-lg-5 align-items-center pb-5">
                {/* mobile responsive part starts*/}
                <div className="col-lg-6 mobile-res">
                    <div className="hand-drawn-left people">
                        <img src="images/people-are-at.png" className="img-fluid" alt=""/>
                    </div>
                </div>
                {/* mobile responsive part end*/}
                <div className="col-lg-6">
                    <div className="hand-drawn-right">
                        <h2><MultiLingualContent contentID="about_section1_title" /></h2>

                        <p><MultiLingualContent contentID="about_section1_body1" /></p>
                        <p><MultiLingualContent contentID="about_section1_body2" /></p>
                        <p><MultiLingualContent contentID="about_section1_body3" /></p>


                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="hand-drawn-left">
                        <img src="images/about1.png" className="img-fluid" alt=""/>
                    </div>
                </div>
            </div>
            {/* Ai Animation row ends */}
            {/* Grow-together row starts */}
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="hand-drawn-left boy">
                        <img src="images/about2.png" className="img-fluid" alt=""/>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="hand-drawn-right">
                        <h2>
                            <MultiLingualContent contentID="about_section2_title" />
                        </h2>
                        <p>
                            <MultiLingualContent contentID="about_section2_body1" /></p>

                        <p><MultiLingualContent contentID="about_section2_body2" /></p>

                    </div>
                </div>
            </div>
            {/* Grow-together row ends */}
        </div>
    </section>
    {/* animation community  section end */}

    {/* Our Mission section starts */}
    <section className="mission">
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h2><MultiLingualContent contentID="about_mission_title" /></h2>
                    <div className="mission-img m-auto">
                        <img src="images/YushaRaisedHand.png" className="img-fluid" alt=""/>
                    </div>
                    <h4>
                        <MultiLingualContent contentID="about_mission_sub" />
                    </h4>
                </div>
            </div>
        </div>
    </section>
    {/* Our Mission section ends */}
    {/* team section starts */}
    <section className="team" >
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h2><MultiLingualContent contentID="about_team_title1" /> <span><MultiLingualContent contentID="about_team_title2" /></span> <MultiLingualContent contentID="about_team_title3" /></h2>
                    <h4><MultiLingualContent contentID="about_team_sub" /></h4>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-lg-4 m-10">
                    <div className="team-box">
                        <div className="image-container m-auto">
                            <img src="images/Shamal.png" className="team-img img-fluid" alt=""/>
                            <img src="images/Shamal_Hover.png" className="imgTop team-img img-fluid" alt=""/>
                        </div>
                        <div className="team-text-box">
                            <h3>
                                <MultiLingualContent contentID="about_team_shamal_name" /> <span><MultiLingualContent contentID="about_team_shamal_pro" /></span>
                            </h3>
                            <h5><MultiLingualContent contentID="about_team_shamal_title" /></h5>
                            <p>
                                <MultiLingualContent contentID="about_team_shamal_body" />
                            </p>
                            <a href="https://www.linkedin.com/in/shamaldias/" target="_blank">
                                <img src="images/icon_linkedin.png" className="icon img-fluid" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 m-10">
                    <div className="team-box">
                        <div className="image-container m-auto">
                            <img src="images/Yusha_Dab.png" className="imgBtm img-fluid team-img" alt=""/>
                            <img src="images/Yusha_Hover.png" className="imgTop team-img img-fluid" alt=""/>
                        </div>
                        <div className="team-text-box">
                            <h3>
                                <MultiLingualContent contentID="about_team_yusha_name" /> <span><MultiLingualContent contentID="about_team_yusha_pro" /></span>
                            </h3>
                            <h5><MultiLingualContent contentID="about_team_yusha_title" /></h5>
                            <p>
                                <MultiLingualContent contentID="about_team_yusha_body" />
                            </p>
                            <div>
                                <a href="https://discord.gg/vEUsd6WJRj" target="_blank">
                                    <img src="images/icon_discord.png" className="icon img-fluid"  alt=""/>
                                </a>
                                <a href="https://www.linkedin.com/company/yusha-ai/about/" target="_blank">
                                    <img src="images/icon_linkedin.png" className="icon img-fluid" alt=""/>
                                </a>
                                <a href="https://www.instagram.com/yusha.animation/" target="_blank">
                                    <img src="images/icon_instagram.png" className="icon img-fluid" alt=""/>
                                </a>
                                <a href="https://www.tiktok.com/@animate_with_yusha?lang=en" target="_blank">
                                    <img src="images/icon_tiktok.png" className="icon img-fluid" alt=""/>
                                </a>
                                <a href="https://www.youtube.com/@yusha-ai" target="_blank">
                                    <img src="images/icon_youtube.png" className="icon img-fluid" alt=""/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<div className="col-md-6 col-lg-4 m-10">*/}
                {/*    <div className="team-box">*/}
                {/*        <div className="image-container m-auto">*/}
                {/*            <img src="images/Ryan_M.png" className="imgBtm img-fluid team-img" alt=""/>*/}
                {/*            <img src="images/Ryan_Hover.png" className="imgTop team-img img-fluid" alt=""/>*/}
                {/*        </div>*/}
                {/*        <div className="team-text-box">*/}
                {/*            <h3>*/}
                {/*                Ryan M. | <span>He/Him</span>*/}
                {/*            </h3>*/}
                {/*            <h5>CMO</h5>*/}
                {/*            <p>*/}
                {/*                So excited for the world to experience what we’re making!*/}
                {/*            </p>*/}
                {/*            <a href="https://www.linkedin.com/in/rmaule" target="_blank">*/}
                {/*                <img src="images/icon_linkedin.png" className="icon img-fluid" alt=""/>*/}
                {/*            </a>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className="col-md-6 col-lg-4 m-10">
                    <div className="team-box">
                        <div className="image-container m-auto">
                            <img src="images/floren.png" className="imgBtm img-fluid team-img" alt=""/>
                            <img src="images/Floren_Hover.png" className="imgTop team-img img-fluid" alt=""/>
                        </div>
                        <div className="team-text-box">
                            <h3>
                                <MultiLingualContent contentID="about_team_floren_name" /> <span><MultiLingualContent contentID="about_team_floren_pro" /></span>
                            </h3>
                            <h5><MultiLingualContent contentID="about_team_floren_title" /></h5>
                            <p>
                                <MultiLingualContent contentID="about_team_floren_body" />
                            </p>
                            <a href="https://www.linkedin.com/in/florenlee880" target="_blank">
                                <img src="images/icon_linkedin.png" className="icon img-fluid" alt=""/>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4 m-10">
                    <div className="team-box">
                        <div className="image-container m-auto">
                            <img src="images/joseph.png" className="imgBtm img-fluid team-img" alt=""/>
                            <img src="images/Joseph_Hover.png" className="imgTop team-img img-fluid" alt=""/>
                        </div>
                        <div className="team-text-box">
                            <h3>
                                <MultiLingualContent contentID="about_team_joseph_name" /> <span><MultiLingualContent contentID="about_team_joseph_pro" /></span>
                            </h3>
                            <h5><MultiLingualContent contentID="about_team_joseph_title" /></h5>
                            <p>
                                <MultiLingualContent contentID="about_team_joseph_body" />
                            </p>
                            <a href="https://www.linkedin.com/in/joseph-baba-b41b31132/" target="_blank">
                                <img src="images/icon_linkedin.png" className="icon img-fluid" alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 m-10">
                    <div className="team-box">
                        <div className="image-container m-auto">
                            <img src="images/johnnie.png" className="imgBtm img-fluid team-img" alt=""/>
                            <img src="images/Johnnie_Hover.png" className="imgTop team-img img-fluid" alt=""/>
                        </div>
                        <div className="team-text-box">
                            <h3>
                                <MultiLingualContent contentID="about_team_johnnie_name" /> <span><MultiLingualContent contentID="about_team_johnnie_pro" /></span>
                            </h3>
                            <h5><MultiLingualContent contentID="about_team_johnnie_title" /></h5>
                            <p>
                                <MultiLingualContent contentID="about_team_johnnie_body" />
                            </p>
                            <a href="https://www.linkedin.com/in/johnnie-baba-1b6b45132/" target="_blank">
                                <img src="images/icon_linkedin.png" className="icon img-fluid" alt=""/>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4 m-10">
                    <div className="team-box">
                        <div className="image-container m-auto">
                            <img src="images/Haley_Default_Img.png" className="imgBtm img-fluid team-img" alt=""/>
                            <img src="images/Haley_Hover_Img.png" className="imgTop team-img img-fluid" alt=""/>
                        </div>
                        <div className="team-text-box">
                            <h3>
                                <MultiLingualContent contentID="about_team_haley_name" /> <span><MultiLingualContent contentID="about_team_haley_pro" /></span>
                            </h3>
                            <h5><MultiLingualContent contentID="about_team_haley_title" /></h5>
                            <p>
                                <MultiLingualContent contentID="about_team_haley_body" />
                            </p>
                            <a href="https://www.linkedin.com/in/haleywhittington/" target="_blank">
                                <img src="images/icon_linkedin.png" className="icon img-fluid" alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 m-10">
                    <div className="team-box">
                        <div className="image-container m-auto">
                            <img src="images/Matt_Default_Img.png" className="imgBtm img-fluid team-img" alt=""/>
                            <img src="images/Matt_Hover_Img.png" className="imgTop team-img img-fluid" alt=""/>
                        </div>
                        <div className="team-text-box">
                            <h3>
                                <MultiLingualContent contentID="about_team_matt_name" /> <span><MultiLingualContent contentID="about_team_matt_pro" /></span>
                            </h3>
                            <h5><MultiLingualContent contentID="about_team_matt_title" /></h5>
                            <p>
                                <MultiLingualContent contentID="about_team_matt_body" />
                            </p>
                            <a href="https://www.linkedin.com/in/matt-folsom/" target="_blank">
                                <img src="images/icon_linkedin.png" className="icon img-fluid" alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* team section ends */}
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
    <div id="signUp">
        <BrevoForm />
    </div>
    <Footer />
    </div>
    </div>
);
}

