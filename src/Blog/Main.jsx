import React, { Component } from 'react'
import HeaderUser from './HeaderUser'
import PageContentUser from './PageContentUser'

export class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <HeaderUser />
                <PageContentUser />
            </React.Fragment>
        )
    }
}

export default Main