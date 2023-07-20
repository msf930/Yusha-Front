import Footer from "../components/Footer";
import NewsletterForm from "../components/NewsletterForm";
import BrevoForm from "../components/BrevoForm";

export default function Software(){
    return(
        <div>
        <body>
        {/* header starts */}
        <header>


            {/* inner hero start */}
            <div id="innerHero">
                <div className="container">
                    <div className="row inner-hero-row align-items-center">
                        <div className="col-lg-6 order-lg-1 order-2">
                            <div className="inner-hero-content">
                                <h1>Yusha's Vision</h1>
                                <p className="mb-4">Our goal is to simplify the early stages of the animation process giving creators a more
                                    fleshed out template to start from.</p>
                                <div className="banner-btnbox soft-btnbox">
                                    <a href="download#pricing" className="btn cs-btn">Get Started</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-2 order-1">
                            <div className="inner-hero-img">
                                <div className="creativity-right f-play-video mb-4 mb-lg-0">
                                    <img src="images/white_yusha.png" className=" play-button img-fluid" data-bs-toggle="modal"
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
                                                                        src="https://www.youtube.com/embed/NP1kHFRVln8" allowfullscreen></iframe>
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
                    <div className="col-md-12 text-center">
                        <h2>How Does it Work?</h2>
                        <h4>Yusha can be broken into 3 main steps:</h4>
                    </div>
                </div>
                <div className="row">
                    <div className=" col-md-6 col-lg-4 m-10">
                        <div className="work-box">
                            <div className="work-icon">
                                <h1>1</h1>
                            </div>
                            <h4>Share your character sheets</h4>
                            <p>Provide us your character sheets. We can help draw your character doing their scene ready to be edited so
                                you can focus on editing the flow of your work.</p>
                        </div>
                    </div>
                    <div className=" col-md-6 col-lg-4 m-10">
                        <div className="work-box">
                            <div className="work-icon">
                                <h1>2</h1>
                            </div>
                            <h4>Sketch initial and end pose</h4>
                            <p>Sketch out stick figures or sketches of the beginning and ending scene and tell us how many frames you
                                need your scene to be. So we know what you want the scene to look like.</p>
                        </div>
                    </div>
                    <div className=" col-md-6 col-lg-4 m-10">
                        <div className="work-box">
                            <div className="work-icon">
                                <h1>3</h1>
                            </div>
                            <h4>Press play</h4>
                            <p>Watch your animation be fleshed out and come to life! Then decide if you would like to look at the
                                animation layers and edit each frame to what you desire.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
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
                            <p>Provide us your character sheets. We can help draw your character doing their scene ready to be edited so
                                you can focus on editing the flow of your work.</p>
                        </div>
                    </div>
                    <div className=" col-md-6 col-lg-4 m-10">
                        <div className="work-box include-box">
                            <div className="include-icon">
                                <img src="images/support.png" className="img-fluid" alt=""/>
                            </div>
                            <h4>Familiar platform support</h4>
                            <p>Yusha’s animation platform is powered by Blender, so users have access to the animations tools and layout
                                with an immense amount of support.</p>
                        </div>
                    </div>
                    <div className=" col-md-6 col-lg-4 m-10">
                        <div className="work-box include-box">
                            <div className="include-icon">
                                <img src="images/helping.png" className="img-fluid" alt=""/>
                            </div>
                            <h4>A helping hand from Yusha</h4>
                            <p>The Yusha team is dedicated to continuously improving the product. Yusha is working to fix your issues
                                and help debug with you.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* what is include starts  */}
        {/* Software Updates section starts */}
        <section className="Software soft-updt" id="softwareUpdate">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2>Software Updates</h2>
                        <div className="soft-des soft-des2">
                            <h4>Here are the latest updates to the Yusha software.</h4>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-lg-4">
                        <div className="soft-img-box imgbox-h">
                            <div className="soft-img img-h">
                                <img src="images/monkey.png" className="img-fluid" alt=""/>
                            </div>
                            <div className="soft-box-content">
                                <h4>Solving how to color</h4>
                                <p>Our first phase into coloring is going well. We have a lot of cleaning and refining to do for our MVP
                                    release, but we are proud of how we are starting off so far!</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="soft-img-box imgbox-h">
                            <div className="soft-img img-h">
                                <img src="images/horse-min.gif" className="img-fluid" alt=""/>
                            </div>
                            <div className="soft-box-content">
                                <h4>Our very first rendering of a scene</h4>
                                <p>During our first phase of trying to draw out characters. We had colors being off, really blurry, and not
                                    accurate to the original work. but we continued on for the pursuit of making a more accurate drawing
                                    process.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="soft-img-box imgbox-h">
                            <div className="soft-img img-h">
                                <img src="images/rig.gif" className="img-fluid" alt=""/>
                            </div>
                            <div className="soft-box-content">

                                <h4>We have a better understanding of skeletons</h4>
                                <p>Our first milestone in being able to understand how to manually produce character armatures and rig their
                                    models! With this we can move to the next phase of doing it without manual support.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
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
        <BrevoForm/>
        <Footer />
    </div>
    );
}