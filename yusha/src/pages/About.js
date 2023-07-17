import Footer from "../components/Footer";
import NewsletterForm from "../components/NewsletterForm";

export default function About() {
    return(
    <div id="top">
        <header className="about-banner">
        <div className="container ">
            <div className="row about-banner-row justify-content-center align-items-center">
                <div className="col-lg-12 text-center about-banner-con  banner_content">
                    <h1>Yusha’s Storyboard !</h1>
                    <h4>Our company goals, values, and who we are :)</h4>
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
                        <h2>We want to see a new wave of animators!</h2>

                        <p>We understand the pain and beauty of making animation, but for the average person making your own show is
                            nearly impossible. </p>
                        <p>Cost, time, and effort is exponential! Yusha will make it more convenient for animators or people to tell
                            their story through animation without the major barrier of entry.</p>


                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="hand-drawn-lef people">
                        <img src="images/people-are-at.png" className="img-fluid" alt=""/>
                    </div>
                </div>
            </div>
            {/* Ai Animation row ends */}
            {/* Grow-together row starts */}
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="hand-drawn-left boy">
                        <img src="images/boy-animation.jpeg" className="img-fluid" alt=""/>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="hand-drawn-right">
                        <h2>
                            We want an alternative to AI art
                        </h2>
                        <p>
                            Seeing the rise of AI art and how it was taking other creator's work
                            to produce images, we knew eventually they would try to make AI
                            animations. To support an industry we love our goal is to expidite the
                            process, but ultimately leaving it to the creators to decide how they
                            want their creation to look.
                        </p>
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
                    <h2>Our Mission</h2>
                    <div className="mission-img m-auto">
                        <img src="images/people-are-at.png" className="img-fluid" alt=""/>
                    </div>
                    <h4>
                        To remove the barrier of entry into the animation space to allow individual creators to tell their otherwise
                        unheard stories.
                    </h4>
                </div>
            </div>
        </div>
    </section>
    {/* Our Mission section ends */}
    {/* team section starts */}
    <section className="team">
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h2>Small But <span>Mighty</span> Team</h2>
                    <h4>This is real, this is us. It’s exactly who we’re supposed to be.</h4>
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
                                Shamal D. | <span>He/Him</span>
                            </h3>
                            <h5>Founder/Lead Developer</h5>
                            <p>
                                Animations are life. Life is an animation.
                            </p>
                            <a href="https://www.linkedin.com/in/shamaldias/">
                                <img src="images/icon_linkedin.png" className="icon img-fluid" alt=""/>
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
                                Yusha | <span>Yu/Sha</span>
                            </h3>
                            <h5>Master Animator</h5>
                            <p>
                                Making animation easier since 2023. Let's animate together!
                            </p>
                            <div>
                                <a href="https://discord.gg/vEUsd6WJRj">
                                    <img src="images/icon_discord.png" className="icon img-fluid" alt=""/>
                                </a>
                                <a href="https://www.linkedin.com/company/yusha-ai/about/">
                                    <img src="images/icon_linkedin.png" className="icon img-fluid" alt=""/>
                                </a>
                                <a href="https://www.instagram.com/yusha.animation/">
                                    <img src="images/icon_instagram.png" className="icon img-fluid" alt=""/>
                                </a>
                                <a href="https://www.tiktok.com/@animate_with_yusha?lang=en">
                                    <img src="images/icon_tiktok.png" className="icon img-fluid" alt=""/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 m-10">
                    <div className="team-box">
                        <div className="image-container m-auto">
                            <img src="images/Ryan_M.png" className="imgBtm img-fluid team-img" alt=""/>
                            <img src="images/Ryan_Hover.png" className="imgTop team-img img-fluid" alt=""/>
                        </div>
                        <div className="team-text-box">
                            <h3>
                                Ryan M. | <span>He/Him</span>
                            </h3>
                            <h5>CMO</h5>
                            <p>
                                So excited for the world to experience what we’re making!
                            </p>
                            <a href="https://www.linkedin.com/in/rmaule">
                                <img src="images/icon_linkedin.png" className="icon img-fluid" alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 m-10">
                    <div className="team-box">
                        <div className="image-container m-auto">
                            <img src="images/floren.png" className="imgBtm img-fluid team-img" alt=""/>
                            <img src="images/Floren_Hover.png" className="imgTop team-img img-fluid" alt=""/>
                        </div>
                        <div className="team-text-box">
                            <h3>
                                Floren L. | | <span>She/Her</span>
                            </h3>
                            <h5>Lead UX Developer</h5>
                            <p>
                                As a creative, nothing beats being able to turn your ideas into reality.
                            </p>
                            <a href="https://www.linkedin.com/in/florenlee880">
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
                                Joseph B. | <span>He/Him</span>
                            </h3>
                            <h5>Community Manager</h5>
                            <p>
                                Animations are love. A passionate medium to evoke one's story.
                            </p>
                            <a href="https://www.linkedin.com/in/joseph-baba-b41b31132/">
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
                                Johnnie B. | <span>He/Him</span>
                            </h3>
                            <h5>Content Marketing</h5>
                            <p>
                                If you are what you animate then I only want to animate the good stuff.
                            </p>
                            <a href="https://www.linkedin.com/in/johnnie-baba-1b6b45132/">
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
                                Haley W. | <span>She/Her</span>
                            </h3>
                            <h5>Digital Marketing Strategist</h5>
                            <p>
                                So passionate about animations that I help market Yusha to you!
                            </p>
                            <a href="https://www.linkedin.com/in/haleywhittington/">
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
                                Matt F. | <span>He/Him</span>
                            </h3>
                            <h5>Fullstack Web Developer</h5>
                            <p>
                               Animation is like a box of chocolates.  It's sweet.
                            </p>
                            <a href="https://www.linkedin.com/in/matt-folsom/">
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
    <NewsletterForm />
    <Footer />
    </div>

);
}

