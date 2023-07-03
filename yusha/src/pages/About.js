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
                        <div className="team-img m-auto">
                            <img src="images/Shamal.png" className="img-fluid" alt=""/>
                        </div>
                        <h3>
                            Shamal D. | <span>He/Him</span>
                        </h3>
                        <h5>Founder/Lead Developer</h5>
                        <p>
                            Born and raised in the Bay Area, he majored in Applied Physics at the University of Washington, Seattle.
                            He currently works as full-stack developer.
                        </p>
                        <p>
                            Fun Fact: Loves competitive robotics!
                        </p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 m-10">
                    <div className="team-box">
                        <div className="team-img m-auto">
                            <img src="images/Yusha-Headshot.png" className="img-fluid" alt=""/>
                        </div>
                        <h3>
                            Yusha | <span>Yu/Sha</span>
                        </h3>
                        <h5>Master Animator</h5>
                        <p>
                            Yusha plans to inspire animators to get back to their roots of hand style drawing to share their stories.
                            Yusha will open the doors to the wonderful world of animation for many to enjoy!
                        </p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 m-10">
                    <div className="team-box">
                        <div className="team-img m-auto">
                            <img src="images/floren.png" className="img-fluid" alt=""/>
                        </div>
                        <h3>
                            Floren L. | | <span>She/Her</span>
                        </h3>
                        <h5>Lead UX Developer</h5>
                        <p>
                            As a creative, nothing beats being able to turn your ideas into reality. I find myself always having
                            something to learn/research about in animation, all while enjoying watching creators bring life to their
                            characters.
                        </p>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4 m-10">
                    <div className="team-box">
                        <div className="team-img m-auto">
                            <img src="images/joseph.png" className="img-fluid" alt=""/>
                        </div>
                        <h3>
                            Joseph B. | <span>He/Him</span>
                        </h3>
                        <h5>Lead Social Media Manager</h5>
                        <p>
                            He was born and raised in CA and had previous experience moderating his own Discord server. Did you know
                            that a group of weasels is called “confusion.”
                        </p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 m-10">
                    <div className="team-box">
                        <div className="team-img m-auto">
                            <img src="images/Marvin.png" className="img-fluid" alt=""/>
                        </div>
                        <h3>
                            Marvin A. | <span>He/Him</span>
                        </h3>
                        <h5>Lead Full Stack Developer</h5>
                        <p>
                            He was born in SF and is a jack of all trades. From 3D Blender animation, 3D modeling, and rigging to
                            Godot game development, graphic, and brand design. He loves going out to eat burgers and fries.
                        </p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 m-10">
                    <div className="team-box">
                        <div className="team-img m-auto">
                            <img src="images/johnnie.png" className="img-fluid" alt=""/>
                        </div>
                        <h3>
                            Johnnie B. | <span>He/Him</span>
                        </h3>
                        <h5>Developer</h5>
                        <p>
                            He was born and raised in the Bay Area. He transitioned from Aerospace Engineering to Computer Science at
                            Cal Poly SLO. He enjoys making content, working out, Anime and food. Fun fact: his brother likes weasels
                            and a group of crows is called “murder.”
                        </p>
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

