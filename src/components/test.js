import React, { Component } from 'react'
import { connect } from 'react-redux'

class Test extends Component {
    render() {
        return (
            <div>
                {/* Content Wrapper. Contains page content */}
                <div className="content-wrapper">
                    {/* Content Header (Page header) */}
                    <section className="content-header">
                        <h1>Add New Test
                            {/* <small>Details</small> */}
                        </h1>
                        <ol className="breadcrumb">
                            <li><a href="fake.url"><i className="fa fa-dashboard" /> Home</a></li>
                            <li><a href="fake.url">Tables</a></li>
                            <li className="active">Data tables</li>
                        </ol>
                    </section>

                    {/* Main content */}
                    <section className="content">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="box">
                                    <div className="box-header">
                                        <h3 className="box-title">Test Address</h3>
                                    </div>
                                    {/* /.box-header */}
                                    <div className="box-body">

                                        










                                    </div>
                                    {/* /.box-body */}
                                </div>
                                {/* /.box */}
                            </div>
                            {/* /.col */}
                        </div>
                        {/* /.row */}
                    </section>
                    {/* /.content */}
                </div>
                {/* /.content-wrapper */}
            </div>

        )
    }
}

export default connect(

)(Test)

