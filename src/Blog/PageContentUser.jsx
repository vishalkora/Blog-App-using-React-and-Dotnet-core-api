import React, { Component } from 'react'
import About from './About'
export class PageContentUser extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid p-0">
                    {/* <!-- About--> */}
                    <About />
                    <hr className="m-0" />
                    {/* <!-- Markets--> */}
                    <section className="resume-section" id="markets">
                        <div className="resume-section-content">
                            <h2 className="mb-5">Markets</h2>
                            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                                <div className="flex-grow-1">
                                    <h3 className="mb-0">Lorem ipsum Lorem ipsum Lorem ipsum</h3>
                                    <div className="subheading mb-3">Lorem ipsum</div>
                                    <div><span className="text-info fs-4">“First in Business Worldwide” </span>illustrates the growing importance that the CNBC viewers put in our products. As opposed to being passive viewers, research shows that more and more CNBC audience act on, and makes decisions based on our news and information.</div>
                                </div>
                                <div className="flex-shrink-0"><span className="text-primary">March 2022 - May 2022</span></div>
                            </div>

                        </div>
                    </section>
                    <hr className="m-0" />
                    {/* <!-- Business--> */}
                    <section className="resume-section" id="business">
                        <div className="resume-section-content">
                            <h2 className="mb-5">Business</h2>
                            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                                <div className="flex-grow-1">
                                    <h3 className="mb-0">Lorem ipsum Lorem ipsum Lorem ipsum</h3>
                                    <div className="subheading mb-3">Lorem ipsum</div>
                                    <div><span className="text-info fs-4">“First in Business Worldwide” </span>illustrates the growing importance that the CNBC viewers put in our products. As opposed to being passive viewers, research shows that more and more CNBC audience act on, and makes decisions based on our news and information.</div>
                                </div>
                                <div className="flex-shrink-0"><span className="text-primary">March 2022 - May 2022</span></div>
                            </div>
                        </div>
                    </section>
                    <hr className="m-0" />
                    {/* <!-- Investing--> */}
                    <section className="resume-section" id="investing">
                        <div className="resume-section-content">
                            <h2 className="mb-5">Investing</h2>
                            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                                <div className="flex-grow-1">
                                    <h3 className="mb-0">Lorem ipsum Lorem ipsum Lorem ipsum</h3>
                                    <div className="subheading mb-3">Lorem ipsum</div>
                                    <div><span className="text-info fs-4">“First in Business Worldwide” </span>illustrates the growing importance that the CNBC viewers put in our products. As opposed to being passive viewers, research shows that more and more CNBC audience act on, and makes decisions based on our news and information.</div>
                                </div>
                                <div className="flex-shrink-0"><span className="text-primary">March 2022 - May 2022</span></div>
                            </div>
                        </div>
                    </section>
                    <hr className="m-0" />
                    {/* <!-- Technology--> */}
                    <section className="resume-section" id="technology">
                        <div className="resume-section-content">
                            <h2 className="mb-5">Technology</h2>
                            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                                <div className="flex-grow-1">
                                    <h3 className="mb-0">Lorem ipsum Lorem ipsum Lorem ipsum</h3>
                                    <div className="subheading mb-3">Lorem ipsum</div>
                                    <div><span className="text-info fs-4">“First in Business Worldwide” </span>illustrates the growing importance that the CNBC viewers put in our products. As opposed to being passive viewers, research shows that more and more CNBC audience act on, and makes decisions based on our news and information.</div>
                                </div>
                                <div className="flex-shrink-0"><span className="text-primary">March 2022 - May 2022</span></div>
                            </div>

                        </div>
                    </section>
                </div>
            </React.Fragment>
        )
    }
}

export default PageContentUser