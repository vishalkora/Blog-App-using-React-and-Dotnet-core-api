import React, { Component } from 'react'

export class About extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid p-0">
                    <section className="resume-section" id="about">
                        <div className="resume-section-content">
                            <h2 className="mb-0"><span className="text-secondary">CNBC</span><br />
                                <span className="text-info">Firstin</span><span className="text-success">Business</span><br />
                                <span className="text-primary">Worldwide</span>
                            </h2>
                            <div className="subheading mb-5 text-dark">
                                3542 SG Highway · Ahmedabad, Gujarat-380810 · (+91) 998-8468-998 ·
                                <a href="mailto:name@email.com" className="text-secondary">cnbc@gmail.com</a>
                                <p className='fs-3 text-danger'><span className="spinner-grow text-danger"></span><u>Live</u></p>
                            </div>
                            <p className="lead mb-3 text-dark"><span className="text-info fs-4">“First in Business Worldwide” </span>illustrates the growing importance that the CNBC viewers put in our products. As opposed to being passive viewers, research shows that more and more CNBC audience act on, and makes decisions based on our news and information.</p>
                            <div className="social-icons">
                                <a className="social-icon" href="#!"><i className="fab fa-linkedin-in text-dark"></i></a>
                                <a className="social-icon" href="#!"><i className="fab fa-github text-dark"></i></a>
                                <a className="social-icon" href="#!"><i className="fab fa-twitter text-dark"></i></a>
                                <a className="social-icon" href="#!"><i className="fab fa-facebook-f text-dark"></i></a>
                            </div>
                        </div>
                    </section>
                </div>
            </React.Fragment>
        )
    }
}
export default About