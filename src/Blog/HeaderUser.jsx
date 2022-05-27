import React, { Component } from 'react'
import image from "../CNBC.png";
import { NavLink } from 'react-router-dom'

export class HeaderUser extends Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
                    <a className="navbar-brand js-scroll-trigger" href="#page-top">
                        <span className="d-block d-lg-none">CNBC NEWS</span>
                        <span className="d-none d-lg-block d-flex justify-content-center"><img src={image} className="img-responsive mx-auto my-auto  mx-auto mb-2" width="269" height="200" /></span>
                        {/* <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="" alt="..." /></span> */}
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav">
                            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">About</a></li>
                            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#markets">Markets</a></li>
                            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#business">Business</a></li>
                            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#investing">Investing</a></li>
                            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#technology">Technology</a></li>
                        </ul>
                    </div>
                    <u><NavLink className="nav-link js-scroll-trigger text-dark h5" to='/admin'>Signin</NavLink></u>

                </nav>

            </React.Fragment >
        )
    }
}

export default HeaderUser