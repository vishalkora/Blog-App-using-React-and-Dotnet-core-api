import React, { Component } from 'react'

export class Error extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid p-0">
                    <section className="resume-section" id="category">
                        <div className="resume-section-content text-center">
                            <h1>
                                <span className="text-secondary">O</span>o<span className="text-success">p</span><span className="text-primary">s</span>!</h1>
                            <h2>
                                404 Not Found</h2>
                            <div>
                                Sorry, an error has occured, Requested page not found!
                            </div>
                            {/* <div>
                                <a href="http://www.jquery2dotnet.com" className="btn bg-primary text-dark btn-lg"><span className="glyphicon glyphicon-home"></span>
                                    Take Me Home </a><a href="http://www.jquery2dotnet.com" className="btn btn-default btn-lg"><span className="glyphicon glyphicon-envelope"></span> Contact Support </a>
                            </div> */}
                        </div>
                    </section>
                </div>
            </React.Fragment>
        )
    }
}

export default Error;