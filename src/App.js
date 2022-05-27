import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";
import Main from './Blog/Main';
import About from './Blog/About';
import Header from './Blog/Header';
import CreateCategory from './Blog/CreateCategory';
import CreateBlog from './Blog/CreateBlog';
import ManageSubject from './Blog/ManageSubject';
import ManageBlog from './Blog/ManageBlog';
import Error from './Blog/Error';
import EditSubject from './Blog/EditSubject';

export class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Routes>
          <Route exact path='/' element={<About />} />
          <Route exact path='/*' element={<Error />} />
          <Route exact path='/user' element={<Main />} />
          <Route exact path='/admin/addsubject' element={<CreateCategory />} />
          <Route exact path='/admin/createblog' element={<CreateBlog />} />
          <Route exact path='/admin/managesubject' element={<ManageSubject />} />
          <Route exact path='/admin/editsubject/:sid' element={<EditSubject {...this.props} />} />
          <Route exact path='/admin/manageblog' element={<ManageBlog />} />
        </Routes>
      </React.Fragment>
    )
  }
}

export default App