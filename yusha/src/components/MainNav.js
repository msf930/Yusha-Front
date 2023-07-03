import {Link, Outlet} from "react-router-dom";
import { HashLink , NavHashLink } from 'react-router-hash-link';


export default function MainNav() {
    return(
        <div>
            <div className="header fixed-top">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <HashLink className="navbar-brand" to="/#"><img src="images/yusha-logo-new.png" className="img-fluid "
                                                                           alt=""/></HashLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                        >
                            <span className="fa-solid fa-bars"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav align-items-center ms-auto mb-2 text-center mb-lg-0">
                                <li className="nav-item">
                                    <NavHashLink className="nav-link" to="/about#">About</NavHashLink>
                                </li>
                                <li className="nav-item">
                                    <NavHashLink className="nav-link" to="/software#">Software</NavHashLink>
                                </li>
                                <li className="nav-item">
                                    <NavHashLink className="nav-link" to="/download#">Download</NavHashLink>
                                </li>
                                <li className="nav-item">
                                    <NavHashLink className="nav-link" to="/blog#">Blog</NavHashLink>
                                </li>
                                <li className="nav-item">
                                    <NavHashLink className="nav-link" to="/support#">Support</NavHashLink>
                                </li>
                                <li className="nav-item nav-btn">
                                    <HashLink className=" btn cs-btn" to="/download#pricing">Get Started</HashLink>
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