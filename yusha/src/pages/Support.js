import Footer from "../components/Footer";
import {HashLink} from "react-router-hash-link";
import React from "react";
import BrevoForm from "../components/BrevoForm";
import MultiLingualContent from "../components/MultilingualContent/multilingualContent";

export default function Support(){
    return(
        <div id="top" >
        <body >
        {/* header starts */}
        <header className="gradientBG">


            {/* inner hero start */}
            <div id="innerHero">
                <div className="container">
                    <div className="row inner-hero-row align-items-center">
                        <div className="col-lg-6 order-lg-1 order-2">
                            <div className="inner-hero-content">
                                <h1><MultiLingualContent contentID="support_hero_title" /></h1>
                                <p><MultiLingualContent contentID="support_hero_sub" /></p>
                                <HashLink to="#contactForm" className="btn cs-btn"><MultiLingualContent contentID="support_hero_btn" /></HashLink>
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-2 order-1">
                            <div className="inner-hero-img mb-lg-0 mb-4">
                                <img src="images/drawing-made.jpeg" className="img-fluid" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* inner hero end */}
        </header>
        <div className="discordContainer">
            <div className="discordText">
                <h2 className='discordTitle'><MultiLingualContent contentID="support_discord_title" /></h2>
                <h4 className="discordBottomText"><MultiLingualContent contentID="support_discord_sub" /></h4>
            </div>
            <div className="discordWidget">
                <iframe
                    src="https://e.widgetbot.io/channels/1061838271291859045/1061978127720525955"
                    allow="clipboard-write; fullscreen"
                    className="discord-Iframe"
                >
                </iframe>
            </div>
        </div>

        <section className="can-find gradientBG" id="contactForm">
            <div className="find-container" >
                <div >
                    <div >
                        <h2><MultiLingualContent contentID="support_form_title" /></h2>
                        <h4><MultiLingualContent contentID="support_form_sub" /></h4>
                        <div className="find-form">
                            <form target="_blank" action="https://formsubmit.co/1d89877885f1f03e31955fce4be144db"
                                  method="POST">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label htmlFor=""><MultiLingualContent contentID="support_form_name" /></label>
                                        <input type="text" name="name" placeholder="First & Last Name"
                                               className="form-control"/>
                                        <label htmlFor=""><MultiLingualContent contentID="support_form_phone" /></label>
                                        <input type="text" name="phone" placeholder="Phone Number"
                                               className="form-control"/>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor=""><MultiLingualContent contentID="support_form_email" /></label>
                                        <input type="email" name="email" placeholder="janedoe@gmail.com"
                                               className="form-control"/>
                                        <label htmlFor=""><MultiLingualContent contentID="support_form_subject" /></label>
                                        <input type="text" name="subject" placeholder="Ex. I want to help!"
                                               className="form-control"/>
                                    </div>
                                    <div className="col-md-12">
                                        <label htmlFor=""><MultiLingualContent contentID="support_form_description" /></label>
                                        <textarea name="desc" id="" cols="30" placeholder="Ex. I want to share my art."
                                                  rows="10" className="form-control"></textarea>
                                        {/*<input type="submit" className="submit cs-btn" value="Send Message"/>*/}
                                        <button name="name" value="value" type="submit" className="submit cs-btn"><MultiLingualContent contentID="support_form_btn" /></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* banner end */}
        {/* connect with section starts */}
        <section className="connect-us" id="contactForm">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 mb-4">
                        <h2><MultiLingualContent contentID="support_connect_title" /></h2>
                        <h4><MultiLingualContent contentID="support_connect_sub" /></h4>
                    </div>
                    <div className="col-lg-12 ">
                        <div className="connect-icon">
                            <div className="connect-iconbox">
                                <a href="https://discord.gg/vEUsd6WJRj" target="_blank"><i className="fa-brands fa-discord"></i></a>
                            </div>
                            <div className="connect-iconbox">
                                <a href="https://www.linkedin.com/company/yusha-ai/about/ " target="_blank"><i
                                    className="fa-brands fa-linkedin"></i></a>
                            </div>
                            <div className="connect-iconbox">
                                <a href="https://www.instagram.com/yusha.animation/"target="_blank"><i
                                    className="fa-brands fa-instagram"></i></a>
                            </div>
                            <div className="connect-iconbox">
                                <a href="https://www.tiktok.com/@animate_with_yusha?lang=en"target="_blank"><i
                                    className="fa-brands fa-tiktok"></i></a>
                            </div>
                            <div className="connect-iconbox">
                                <a href="https://www.youtube.com/@yusha-ai"target="_blank"><i
                                    className="fa-brands fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* connect with section ends */}
        {/* cant't find sectin start here */}

        {/* cant't find sectin end here */}
        {/* footer start here */}
        <div id="signUp">
            <BrevoForm/>
        </div>
       <Footer />
        {/* footer end here */}

        {/* Option 1: Bootstrap Bundle with Popper */}
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
                crossOrigin="anonymous"></script>
        </body>
        </div>
    );
}