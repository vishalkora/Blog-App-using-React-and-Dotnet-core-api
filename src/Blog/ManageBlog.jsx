import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Model from './Model';
import axios from 'axios';
export class ManageBlog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bid: '',
            sid: '',
            writer: '',
            title: '',
            synopsis: '',
            description: '',
            corporate_action: '',
            languages: '',
            result: [],
        }
    }
    componentDidMount() {
        this.blogList();
    }
    blogList() {
        fetch("http://localhost:5000/api/blog/list?title=" + this.state.title + "&" + "writer=" + this.state.writer)
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    result: json,
                });
                console.log("data", this.state.result);
            })
    }
    deleteblog = (data) => {
        this.setState({ mtitle: "Delete", body: this.viewDelete(data), isShowpopup: true })
    }
    viewDelete = (data) => {
        return <>
            <div>
                <h3 className='text-dark'>{data.title} Are you want to delete ?</h3>
                <button className='m-2 btn btn-outline-danger mt-1 ' onClick={() => this.handleDelete(data)}>Yes</button>
                <button className='m-2 btn btn-outline-success mt-1' onClick={() => this.setState({ isShowpopup: false })}>No</button>
            </div>
        </>
    }
    handleDelete = (datas) => {

        debugger;
        const data = {
            bid: Number(datas.bid),
        }
        axios.delete("http://localhost:5000/api/blog/delete?bid=" + data.bid)
        this.setState({ isShowpopup: false });
        this.blogList();
    }
    viewData = (data) => {
        debugger;
        this.setState({ mtitle: "test", body: this.viewArea(data), isShowpopup: true })

    }
    viewArea = (data) => {
        return <>
            <label className='h4'>Title:{data.title}</label><br />
            <label className='h4'>Synopsis:{data.synopsis}</label>
        </>
    }
    filterData = (e) => {
        let filterData = Object.assign({}, this.state);
        filterData[e.target.name] = e.target.value;
        this.setState(filterData);
    }
    render() {
        const total = this.state.result.length;
        return (
            <React.Fragment>
                <div className="container-fluid p-0">
                    <section className="resume-section">
                        <div className="resume-section-content">
                            <h2 className="mb-5"><span className='text-primary fs-1'>M</span>anage<sup className='text-secondary'>Exist</sup>Blog</h2>
                            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                                <div className="flex-grow-1">
                                    <h3 className="mb-0 text-dark mb-5"><u>Total:</u><span>{total}</span></h3>
                                    <div className='panel panel-default mb-5'>
                                        <div className='row panel-body'>
                                            <input type="text" className="col-sm-5 fs-5" style={{ border: 'none', borderBottom: '2px solid black', borderRight: '30px solid white' }} name="title" value={this.state.title} onChange={(e) => this.filterData(e)} placeholder='Search Title' />
                                            <input type="text" className="col-sm-5 fs-5" style={{ border: 'none', borderBottom: '2px solid black' }} name="writer" value={this.state.writer} onChange={(e) => this.filterData(e)} placeholder='Search Writer' />
                                            <button className="col-sm-2 btn btn-warning text-dark " onClick={(e) => this.blogList(e.target.value)}>Submit</button>
                                        </div>
                                    </div>
                                    {
                                        this.state.result.length > 0 ? <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Title</th>
                                                    <th colSpan='3' className='text-center'>Manage</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.state.result.map((data, key = 1) => (
                                                    <tr>
                                                        <td>{key + 1}</td>
                                                        <td>{data.title}</td>
                                                        {/* <td><button className='btn  border border-0'> <NavLink className='' to={`/admin/editsubject/${data.sid}`}><i className="bi bi-pencil-square h4 text-info"></i></NavLink></button></td> */}
                                                        <td><button className='btn btn-outline-info border border-0' onClick={() => { this.viewData(data) }} ><i className="bi bi-card-list h4 text-info"></i></button></td>
                                                        <td><button className='btn  border border-0' onClick={() => { this.deleteblog(data) }} > <i className="bi bi-trash h4 text-danger"></i></button></td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table> : <div className="">
                                            {/* <div className=""><span className='text-dark fs-1'>500<sup><i className="fa fa-cogs fs-2 text-dark"></i></sup></span></div>
                                            <span className="h2">Opps! Internal Server Error!</span><br />
                                            <span className="h5">Unfortunately we're having trouble loading the page you are looking for. Please come back in a while.</span> */}
                                            {/* <div className=""><span className='text-dark fs-1'>500<sup><i className="fa fa-cogs fs-2 text-dark"></i></sup></span></div> */}
                                            <span className="h2">Opps! No Record Found!</span><br />
                                            {/* <span className="h5">Unfortunately we're having trouble loading the page you are looking for. Please come back in a while.</span> */}
                                        </div>}
                                </div>
                                <div className="flex-shrink-0"><NavLink className='text-dark' to='/admin/createblog'><span className="fs-5">Create New Blog</span></NavLink></div>
                            </div>
                            {
                                this.state.isShowpopup && <Model mtitle={this.state.title} body={this.state.body} handleClose={() => this.setState({ isShowpopup: false })}></Model>
                            }
                        </div>
                    </section>
                </div>
            </React.Fragment>)
    }
}

export default ManageBlog;