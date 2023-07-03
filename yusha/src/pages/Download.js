import React, { useState } from "react";
import Footer from "../components/Footer";
import NewsletterForm from "../components/NewsletterForm";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function Download(){
    const [checkout, setCheckOut] = useState(false);

    return(
        <div >
        <body>
        {/* header starts */}
        <header>


            {/* inner hero start */}
            <div id="innerHero">
                <div className="container">
                    <div className="row inner-hero-row align-items-center">
                        <div className="col-lg-6 order-lg-1 order-2">
                            <div className="inner-hero-content">
                                <h1>Great things cannot be made alone!</h1>
                                <p>Yusha is on your side. Deliver animations as if you had a production studio. Download
                                    Yusha today!</p>
                                <div className="banner-btnbox soft-btnbox">
                                    <a href="#pricing" className="btn cs-btn">Get Started</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-2 order-1">
                            <div className="inner-hero-img mb-lg-0 mb-4">
                                <img src="images/working-together.jpg" className="img-fluid" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* inner hero end */}
        </header>
        {/* banner end */}
        {/* Price section starts */}
        <section className="dwnld-price" id="pricing">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="price-body" >
                            <h2>Early Access Program</h2>
                            <p className="price-des mb-5">Currently we are offering for a one-time payment to join our
                                early access program. This entails recieveing all future updates after Yusha leaves
                                beta. In return we will survey our members whenever a feature release is announced!</p>
                            <div className="beta">
                                <h4>Beta</h4>
                                <h4 className="beta-border ">$ 5.00 <span>/ One-time payment</span></h4>
                                <ul>
                                    <li>
                                        <span><i className="fa fa-solid fa-check"></i></span><p>Initial software
                                        platform</p>
                                    </li>
                                    <li>
                                        <span><i className="fa fa-solid fa-check"></i></span> <p>Basic animation
                                        tools</p>
                                    </li>
                                    <li>
                                        <span><i className="fa fa-solid fa-check"></i></span> <p>Yusha’s automation
                                        feature</p>
                                    </li>
                                    <li>
                                        <span><i className="fa fa-solid fa-check"></i></span> <p>Receive all future
                                        updates even after Absolute Beta program ends</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="paypal">
                                <PayPalScriptProvider options={{ clientId: "AeRLSdtA4MqNXCkVvt7oC0UjkZd-WZ4bisb3YqPqxVYvFwX5zsm3Pd7y02LOmkdFKYG_rXasS_h7bm95" }}>
                                    <div className="paypal-btn">
                                    <PayPalButtons
                                        createOrder={(data, actions) => {
                                            return actions.order.create({
                                                purchase_units: [
                                                    {
                                                        amount: {
                                                            value: "5.00",
                                                        },
                                                    },
                                                ],
                                            });
                                        }}
                                        onApprove={(data, actions) => {
                                            return actions.order.capture().then((details) => {
                                                const name = details.payer.name.given_name;
                                                alert(`Transaction completed by ${name}`);
                                            });
                                        }}
                                    />
                                    </div>
                                </PayPalScriptProvider>

                                <div id="paypal-button-container"></div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Price section ends */}

        {/* what is include starts  */}
        <section className="work include">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2>What’s Included?</h2>
                        <h4>Here is what you can expect when you download Yusha.</h4>
                    </div>
                </div>
                <div className="row">
                    <div className=" col-md-6 col-lg-4 m-10">
                        <div className="work-box include-box">
                            <div className="include-icon speed-icon">
                                <img src="images/speed.png" className="img-fluid" alt=""/>
                            </div>
                            <h4>Animation tools for speed</h4>
                            <p>Provide us your character sheets. We can help draw your character doing their scene ready
                                to be edited so you can focus on editing the flow of your work.</p>
                        </div>
                    </div>
                    <div className=" col-md-6 col-lg-4 m-10">
                        <div className="work-box include-box">
                            <div className="include-icon">
                                <img src="images/support.png" className="img-fluid" alt=""/>
                            </div>
                            <h4>Familiar platform support</h4>
                            <p>Yusha’s animation platform is powered by Blender, so users have access to the animations
                                tools and layout with an immense amount of support.</p>
                        </div>
                    </div>
                    <div className=" col-md-6 col-lg-4 m-10">
                        <div className="work-box include-box">
                            <div className="include-icon">
                                <img src="images/helping.png" className="img-fluid" alt=""/>
                            </div>
                            <h4>A helping hand from Yusha</h4>
                            <p>The Yusha team is dedicated to continuously improving the product. Yusha is working to
                                fix your issues and help debug with you.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* what is include starts  */}

        {/* connect with section starts */}
        {/*<section className="connect-us">*/}
        {/*    <div className="container">*/}
        {/*        <div className="row align-items-center">*/}
        {/*            <div className="col-lg-6 pt-lg-5">*/}
        {/*                <div className="people-left">*/}
        {/*                    <h2>People are at the heart of Yusha!</h2>*/}
        {/*                    <p>Join our newsletter to keep up to date with all future releases, product updates,*/}
        {/*                        specials, and news about Yusha!</p>*/}
        {/*                    <div className="form">*/}
        {/*                        <form action="https://sheetdb.io/api/v1/6en1ynd9h3yx2" method="POST" id="sheetdb-form"*/}
        {/*                              form*/}
        {/*                              id="email-form">*/}
        {/*                            <div className="form-left">*/}
        {/*                                <label htmlFor="">Enter your email.</label>*/}
        {/*                                <input type="email" name="data[email]" className="form-control"*/}
        {/*                                       placeholder="janedoe@email.com"/>*/}
        {/*                            </div>*/}
        {/*                            <div className="form-right">*/}
        {/*                                <input type="submit" form="email-form" value="Subscribe"*/}
        {/*                                       className="submit cs-btn"/>*/}


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
        {/* connect with section ends */}
        {/* footer start here */}
        <NewsletterForm />
        <Footer />
        {/* footer end here */}

        {/* Option 1: Bootstrap Bundle with Popper */}

        </body>
        </div>
    );
}