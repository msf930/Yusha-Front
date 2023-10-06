import {Link,Outlet} from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import MultiLingualContent from "./MultilingualContent/multilingualContent";

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
                                    <p><MultiLingualContent contentID="footer_rights" /></p>
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
                                    <MultiLingualContent contentID="footer_software" />
                                </li>
                                <li>
                                    <HashLink to="/software#softwareUpdate"><MultiLingualContent contentID="footer_updates" /></HashLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="footer-second">
                            <ul>
                                <li className="list-header">
                                    <MultiLingualContent contentID="footer_company" />
                                </li>
                                <li>
                                    <HashLink to="/about"><MultiLingualContent contentID="footer_about" /></HashLink>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="footer-second">
                            <ul>
                                <li className="list-header">
                                    <MultiLingualContent contentID="footer_resources" />
                                </li>
                                <li>
                                    <HashLink to="/blog"><MultiLingualContent contentID="footer_blog" /></HashLink>
                                </li>
                                <li>
                                    <HashLink to="/support#contactForm"><MultiLingualContent contentID="footer_contact" /></HashLink>
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