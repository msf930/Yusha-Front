import {Link, Outlet} from "react-router-dom";
import { HashLink , NavHashLink } from 'react-router-hash-link';
import LanguageButton from "./LanguageButton";
import MultiLingualContent from "./MultilingualContent/multilingualContent";




export default function MainNav() {
    return(
        <div>
            <div className="header fixed-top">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <HashLink className="navbar-brand"
                                  to="/#">
                            <img
                                src="images/logo.png" className="img-fluid navLogo"
                                alt=""/>
                        </HashLink>
                        <LanguageButton/>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                        >
                            <span className="fa-solid fa-bars"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navLinkContainer navbar-nav align-items-center ms-auto mb-2 text-center mb-lg-0">


                                <li className="nav-item">
                                    <NavHashLink className="nav-link" to="/about"><MultiLingualContent contentID="nav_about" /></NavHashLink>
                                </li>
                                <li className="nav-item">
                                    <NavHashLink className="nav-link" to="/software"><MultiLingualContent contentID="nav_software" /></NavHashLink>
                                </li>
                                {/*<li className="nav-item">*/}
                                {/*    <NavHashLink className="nav-link" to="/download#">Download</NavHashLink>*/}
                                {/*</li>*/}
                                <li className="nav-item">
                                    <NavHashLink className="nav-link" to="/blog"><MultiLingualContent contentID="nav_blog" /></NavHashLink>
                                </li>
                                <li className="nav-item">
                                    <NavHashLink className="nav-link" to="/support"><MultiLingualContent contentID="nav_support" /></NavHashLink>
                                </li>
                                <li className="nav-item nav-btn">
                                    <HashLink className=" btn cs-btn" to="#signUp"><MultiLingualContent contentID="nav_btn" /></HashLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

        <Outlet/>
        </div>
    );
}