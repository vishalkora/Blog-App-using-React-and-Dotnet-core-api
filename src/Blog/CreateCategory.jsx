import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import axios from 'axios';
export class CreateCategory extends Component {
    constructor(props) {
        super(props)

        this.state = {
            sid: '',
            subject_name: '',
            message: ''
        }
    }
    SuccessData = () => {
        this.setState({ subject_name: "", message: "Insert Succesfully !" })
    }
    handleSubmit = (event) => {
        debugger;
        let data = {
            subject_name: this.state.subject_name
        }
        axios.post("http://localhost:5000/api/subject/add", data)
            .then(res => {
                debugger;
                console.log(res);
                console.log(res.data);
                this.SuccessData();
            }).catch((error) => {
                console.log(error)
            })
    }
    handleChangedata = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value }, () => { console.log(this.state) });
    }
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid p-0">
                    <section className="resume-section" id="category">
                        <div className="resume-section-content">
                            <h2 className="mb-5"><span className='text-primary fs-1'>A</span>dd<sup className='text-secondary'>New</sup>Subject</h2>
                            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                                <div className="flex-grow-1">
                                    <NavLink to='/admin/managesubject'><h3 className="mb-0 text-primary mb-5"><u>Posted Subject</u></h3></NavLink>
                                    <form className='row' >
                                        <h4 className='text-end text-success'>{this.state.message}</h4>
                                        <div className="mb-4 col-sm-12">
                                            <label className="form-label fs-4">Subject</label>
                                            <input type="text" className="form-control fs-4 gg" style={{ border: 'none', borderBottom: '2px solid black' }} placeholder='Enter Subject Name' name='subject_name' value={this.state.subject_name} onChange={this.handleChangedata} />
                                        </div>
                                        <button type="button" className="btn btn-warning text-dark fs-5 form-control p-3 " onClick={this.handleSubmit}>Save</button>
                                    </form>
                                </div>
                                <div className="flex-shrink-0"><NavLink className='text-dark' to='/admin/createblog'><span className="fs-5">Create New Blog</span></NavLink></div>
                            </div>
                        </div>
                    </section>
                </div>
            </React.Fragment>
        )
    }
}

export default CreateCategory