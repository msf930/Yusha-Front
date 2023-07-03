import Footer from "../components/Footer";

export default function Support(){
    return(
        <div id="top">
        <body>
        {/* header starts */}
        <header>


            {/* inner hero start */}
            <div id="innerHero">
                <div className="container">
                    <div className="row inner-hero-row align-items-center">
                        <div className="col-lg-6 order-lg-1 order-2">
                            <div className="inner-hero-content">
                                <h1>We are here if you need help!</h1>
                                <p>With everything new questions are raised ask us any questions you may have. We want
                                    to help!</p>
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
        {/* banner end */}
        {/* connect with section starts */}
        <section className="connect-us">
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
        {/* connect with section ends */}
        {/* cant't find sectin start here */}
        <section className="can-find">
            <div className="find-container">
                <div >
                    <div >
                        <h2>Can’t find what you’re looking for?</h2>
                        <h4>Drop us a message! We are more than happy to assist you.</h4>
                        <div className="find-form">
                            <form target="_blank" action="https://formsubmit.co/1d89877885f1f03e31955fce4be144db"
                                  method="POST">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label htmlFor="">Enter your name.</label>
                                        <input type="text" name="name" placeholder="First & Last Name"
                                               className="form-control"/>
                                            <label htmlFor="">Enter your phone number.</label>
                                            <input type="text" name="phone" placeholder="Phone Number"
                                                   className="form-control"/>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="">Enter your email.</label>
                                        <input type="email" name="email" placeholder="janedoe@gmail.com"
                                               className="form-control"/>
                                            <label htmlFor="">What’s the subject?</label>
                                            <input type="text" name="subject" placeholder="Ex. I want to help!"
                                                   className="form-control"/>
                                    </div>
                                    <div className="col-md-12">
                                        <label htmlFor="">Description</label>
                                        <textarea name="desc" id="" cols="30" placeholder="Ex. I want to share my art."
                                                  rows="10" className="form-control"></textarea>
                                        <input type="submit" className="submit cs-btn" value="Send Message"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* cant't find sectin end here */}
        {/* footer start here */}
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