import React from 'react';
export default class Model extends React.Component {

    render() {
        return (
            <div className="modal-popup">
                <div className="modal fade show d-block">
                    <div className="modal-dialog model-sm">
                        <div className="modal-content">
                            {/* <div className="modal-header">
                                <h5 className="modal-title text-primary text-center">{this.props.modeltitle}</h5>

                            </div> */}
                            {/* <div className="modal-body ">
                                {this.props.body}
                            </div> */}
                            <div className="modal-body bg-primary">
                                <table className="table table-hover">
                                    <tbody className='text-light'>
                                        {this.props.body}
                                    </tbody>
                                </table>
                            </div>
                            <div className="modal-footer bg-primary">
                                <button type="button" className="btn btn-dark" onClick={this.props.handleClose}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}