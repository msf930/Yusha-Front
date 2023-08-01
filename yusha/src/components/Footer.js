import {Link,Outlet} from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export default function Footer(){
    return(
        <div>
            <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-6">
                        <div className="footer-first">
                            <ul>
                                <li>
                                    <div className="logo-img">
                                        <img src="images/logo.png" className="img-fluid" alt=""/>
                                    </div>
                                </li>
                                <li>
                                    <p>© 2023 Yusha Inc.</p>
                                </li>
                                <li>
                                    <p>All Rights Reserved.</p>
                                </li>
                                <li>
                                    <ul className="footer-icon">
                                        <li>
                                            <a href="https://discord.gg/vEUsd6WJRj" target="_blank"><i
                                                className="fa-brands fa-discord"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/company/yusha-ai/about/" target="_blank"><i
                                                className="fa-brands fa-linkedin"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/yusha.animation/" target="_blank"><i
                                                className="fa-brands fa-instagram"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.tiktok.com/@animate_with_yusha?lang=en" target="_blank"><i
                                                className="fa-brands fa-tiktok"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.youtube.com/@yusha-ai" target="_blank"><i
                                                className="fa-brands fa-youtube"></i></a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="footer-second">
                            <ul>
                                <li className="list-header">
                                    Software
                                </li>
                                <li>
                                    <HashLink to="/download#top">Download</HashLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="footer-second">
                            <ul>
                                <li className="list-header">
                                    Company
                                </li>
                                <li>
                                    <HashLink to="/about#top">About</HashLink>
                                </li>
                                <li>
                                    <HashLink to="/blog#top">Blog</HashLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="footer-second">
                            <ul>
                                <li className="list-header">
                                    Resources
                                </li>
                                <li>
                                    {/*<a href="software.html#softwareUpdate">Updates</a>*/}
                                    <HashLink to="/software#softwareUpdate">Updates</HashLink>
                                </li>
                                <li>
                                    <HashLink to="/support#top">Contact Us</HashLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </footer>
            <Outlet/>
        </div>
    );
}