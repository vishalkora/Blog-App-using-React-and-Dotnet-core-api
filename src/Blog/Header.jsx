import React, { Component } from 'react'
import image from "../CNBC.png";
import { NavLink } from 'react-router-dom'

export class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
                    <div className="navbar-brand js-scroll-trigger" >
                        <span className="d-block d-lg-none">CNBC NEWS</span>
                        <span className="d-none d-lg-block d-flex justify-content-center"> <NavLink to='/'><img src={image} className="img-responsive mx-auto my-auto  mx-auto mb-2" width="269" height="200" /></NavLink> </span>
                        {/* <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="" alt="..." /></span> */}
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ">
                            <NavLink className="nav-link js-scroll-trigger fs-5" to='/'>About</NavLink>
                            <NavLink className="nav-link js-scroll-trigger fs-5" to='/admin/addsubject'>Add Subject</NavLink>
                            <NavLink className="nav-link js-scroll-trigger fs-5" to='/admin/createblog'>Create Blog</NavLink>
                        </ul>
                    </div>
                    <u><NavLink className="nav-link js-scroll-trigger text-dark h5" to='/'>Logout</NavLink></u>
                </nav>
            </React.Fragment>
        )
    }
}

export default Header;