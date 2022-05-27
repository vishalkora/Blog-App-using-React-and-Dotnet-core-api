import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import axios from 'axios';
export class CreateBlog extends Component {
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
            message: '',
            result: []
        }
    }
    componentDidMount() {
        this.subjectList();
    }
    handleChangedata = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value }, () => { console.log(this.state) });
    }
    SuccessData = () => {
        this.setState({ message: "Insert Succesfully !", writer: '', title: '', synopsis: '', description: '' })
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
    handleSubmit = (event) => {
        debugger;
        let data = {
            sid: this.state.sid,
            writer: this.state.writer,
            title: this.state.title,
            synopsis: this.state.synopsis,
            description: this.state.description,
            corporate_action: "",
            languages: ""
        }
        axios.post("http://localhost:5000/api/blog/add", data)
            .then(res => {
                debugger;
                console.log(res);
                console.log(res.data);
                this.SuccessData();
            }).catch((error) => {
                console.log(error)
            })
    }
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid p-0">
                    <section className="resume-section" id="blog">
                        <div className="resume-section-content">
                            <h2 className="mb-5"><span className='text-primary fs-1'>C</span>reate<sup className='text-secondary'>New</sup>Blog</h2>
                            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                                <div className="flex-grow-1">
                                    <NavLink to='/admin/manageblog'> <h3 className="mb-0 text-primary mb-5"><u>Posted Blog</u></h3></NavLink>
                                    {/* <div className="subheading mb-3 text-primary">Posted Blog</div> */}
                                    {/* <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p> */}
                                    <form className='row'>
                                        <h4 className='text-end text-success'>{this.state.message}</h4>
                                        <div className="mb-5 col-sm-6" >
                                            <label className="form-label fs-4" >Subject</label>
                                            <select className='form-control text-dark fs-5' style={{ border: 'none', borderBottom: '2px solid black' }} name='sid' placeholder='Select subject' onChange={this.handleChangedata}>
                                                {
                                                    this.state.result.map(data => (<>
                                                        <option value={data.sid} >{data.subject_name}</option>

                                                    </>))
                                                }
                                            </select>
                                        </div>
                                        <div className="mb-5 col-sm-6" >
                                            <label className="form-label fs-4" >Writer</label>
                                            <input type="text" className="form-control fs-5" style={{ border: 'none', borderBottom: '2px solid black' }} name='writer' placeholder='Enter writer name' value={this.state.writer} onChange={this.handleChangedata} />
                                        </div>
                                        <div className="mb-5 col-sm-12">
                                            <label className="form-label fs-4">Title</label>
                                            <input type="text" className="form-control fs-4 gg" style={{ border: 'none', borderBottom: '2px solid black' }} name='title' placeholder='Enter title here' value={this.state.title} onChange={this.handleChangedata} />
                                        </div>
                                        <div className="mb-5 col-sm-4" >
                                            <label className="form-label fs-4" >Synopsis</label>
                                            <input type="text" className="form-control fs-5" style={{ border: 'none', borderBottom: '2px solid black' }} name='synopsis' placeholder='Enter synopsis' value={this.state.synopsis} onChange={this.handleChangedata} />
                                        </div>
                                        <div className="mb-5 col-sm-8" >
                                            <label className="form-label fs-4" >Description</label>
                                            <input type="text" className="form-control fs-5" style={{ border: 'none', borderBottom: '2px solid black' }} name='description' placeholder='Enter description' value={this.state.description} onChange={this.handleChangedata} />
                                        </div>
                                        <div className="mb-5 col-sm-6">
                                            <label className="form-label fs-4" >Corporate Acions</label><br />
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="" />
                                            <label for="vehicle1" className='p-2 text-dark'>Announcement </label>
                                            <input type="checkbox" id="vehicle2" name="vehicle2" value="" />
                                            <label for="vehicle2" className='p-2 text-dark'>Bonus</label>
                                            <input type="checkbox" id="vehicle3" name="vehicle3" value="" />
                                            <label for="vehicle3" className='p-2 text-dark'>Dividend</label>
                                        </div>


                                        <div className="mb-5 col-sm-6">
                                            <label className="form-label fs-4">Languages</label><br />
                                            <input type="radio" id="English" name="fav_language" value="English" />
                                            <label for="English" className='p-2 text-dark'>English</label>
                                            <input type="radio" id="Hindi" name="fav_language" value="Hindi" />
                                            <label for="Hindi " className='p-2 text-dark'>Hindi</label>

                                        </div>
                                        <button type="button" className="btn btn-warning text-dark fs-5 form-control p-3 " onClick={this.handleSubmit}>Publish</button>
                                    </form>
                                </div>
                                <div className="flex-shrink-0"><NavLink className='text-dark' to='/admin/addsubject'><span className="fs-5">Create New Subject</span></NavLink></div>
                            </div>
                        </div>
                    </section>
                </div>
            </React.Fragment>
        )
    }
}

export default CreateBlog