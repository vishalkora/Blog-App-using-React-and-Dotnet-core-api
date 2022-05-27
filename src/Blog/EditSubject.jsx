import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
export class EditSubject extends Component {
    constructor(props) {
        super(props)

        this.state = {
            sid: '',
            subject_name: '',
            message: ''
        }
    }
    // componentDidMount() {
    //     debugger;
    //     let { sid } = this.props.match.params;
    //     this.fetchData(sid);
    // }

    fetchData = (sid) => {
        alert(sid)
    };

    handleChangedata = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value }, () => {
            // console.log(this.state);
            console.log("id", this.props.match.params);
        });
    }
    render() {
        return (
            <React.Fragment>
                <div class="container-fluid p-0">
                    <section class="resume-section" id="category">
                        <div class="resume-section-content">
                            <h2 class="mb-5"><span className='text-primary fs-1'>E</span>dit<sup className='text-secondary'>Exist</sup>Subject</h2>
                            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                                <div class="flex-grow-1">
                                    <NavLink to='/admin/managesubject'><h3 class="mb-0 text-primary mb-5"><u>Posted Subject</u></h3></NavLink>
                                    <form className='row' >
                                        {/* <h4 className='text-end text-success'>{this.state.message}</h4> */}
                                        <div class="mb-5 col-sm-12">
                                            <label class="form-label fs-4">Subject</label>
                                            <input type="text" class="form-control fs-4 gg" style={{ border: 'none', borderBottom: '2px solid black' }} placeholder='Enter Subject Name' name='subject_name' value={this.state.subject_name} onChange={this.handleChangedata} />
                                        </div>
                                        <button type="button" class="btn btn-warning text-dark fs-5 form-control p-3 " onClick={this.handleSubmit}>Update</button>
                                    </form>
                                </div>
                                <div class="flex-shrink-0"><NavLink className='text-dark' to='/admin/createblog'><span class="fs-5">Create New Blog</span></NavLink></div>
                            </div>
                        </div>
                    </section>
                </div>
            </React.Fragment>
        )
    }
}

export default EditSubject;