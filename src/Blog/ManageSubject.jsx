import axios from 'axios';
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Model from './Model';
export class ManageSubject extends Component {
    constructor(props) {
        super(props)

        this.state = {
            sid: '',
            subject_name: '',
            result: [],
            isShowpopup: false
        }
    }
    componentDidMount() {
        this.subjectList();
    }
    subjectList() {
        fetch(
            "http://localhost:5000/api/subject/list")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    result: json,
                });
                console.log("data", this.state.result);
            })
    }
    deletesubject = (data) => {
        this.setState({ title: "Delete", body: this.viewDelete(data), isShowpopup: true })
    }
    viewDelete = (data) => {
        return <>
            <div>
                <h3 className='text-dark'>{data.subject_name} Are you want to delete ?</h3>
                <button className='m-2 btn btn-outline-danger mt-1 ' onClick={() => this.handleDelete(data)}>Yes</button>
                <button className='m-2 btn btn-outline-success mt-1' onClick={() => this.setState({ isShowpopup: false })}>No</button>
            </div>
        </>
    }
    handleDelete = (datas) => {

        debugger;
        const data = {
            sid: Number(datas.sid),
        }
        axios.delete("http://localhost:5000/api/subject/delete?sid=" + data.sid)
        this.setState({ isShowpopup: false });
    }
    viewData = (data) => {
        debugger;
        this.setState({ title: "test", body: this.viewArea(data), isShowpopup: true })

    }
    viewArea = (data) => {
        return <>
            <label className='h4'>Subject:{data.subject_name}</label>
        </>
    }
    render() {
        const total = this.state.result.length;
        return (
            <React.Fragment>
                <div className="container-fluid p-0">
                    <section className="resume-section">
                        <div className="resume-section-content">
                            <h2 className="mb-5"><span className='text-primary fs-1'>M</span>anage<sup className='text-secondary'>Exist</sup>Subject</h2>
                            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                                <div className="flex-grow-1">
                                    <h3 className="mb-0 text-dark mb-5"><u>Total:</u> <span>{total}</span></h3>
                                    {
                                        this.state.result.length > 0 ? <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Subject</th>
                                                    <th colSpan='2' className='text-center'>Manage</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.state.result.map((data, key = 1) => (
                                                    <tr>
                                                        <td>{key + 1}</td>
                                                        <td>{data.subject_name}</td>
                                                        <td><button className='btn  border border-0'> <NavLink className='' to={`/admin/editsubject/${data.sid}`}><i className="bi bi-pencil-square h4 text-info"></i></NavLink></button></td>
                                                        {/* <td><button className='btn btn-outline-info border border-0' onClick={() => { this.viewData(data) }} ><i className="bi bi-card-list h4 text-info"></i></button></td> */}
                                                        <td><button className='btn  border border-0' onClick={() => { this.deletesubject(data) }} > <i className="bi bi-trash h4 text-danger"></i></button></td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table> : <div className="">
                                            <span className="h2">Opps! No Record Found!</span><br />
                                        </div>}
                                </div>
                                <div className="flex-shrink-0"><NavLink className='text-dark' to='/admin/addsubject'><span className="fs-5">Create New Subject</span></NavLink></div>
                            </div>
                        </div>
                        {
                            this.state.isShowpopup && <Model title={this.state.title} body={this.state.body} handleClose={() => this.setState({ isShowpopup: false })}></Model>
                        }
                    </section>
                </div>
            </React.Fragment>
        )
    }
}

export default ManageSubject;