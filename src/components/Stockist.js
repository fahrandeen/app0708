import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchStockists, toggleStockist, getVisibleStockist } from '../reducers/stockist'
import FooterLink from './FooterLink';

class Stockist extends Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         isLoading: true,
    //         hasErrored: false,
    //         stockists: [
    //             // {
    //             //     "id": 1,
    //             //     "code": "1001010",
    //             //     "name": "Nisrin-Panadura",
    //             //     "address1": "Horethuduwa",
    //             //     "address2": "Moratuwa",
    //             //     "isActive": true,
    //             //     "contactNumber": "0777123456",
    //             //     "contactPerson": "Nisrin"
    //             // },
    //             // {
    //             //     "id": 2,
    //             //     "code": "1001011",
    //             //     "name": "Nisrin-Moratuwa",
    //             //     "address1": "Horethuduwa",
    //             //     "address2": "Moratuwa",
    //             //     "isActive": true,
    //             //     "contactNumber": "0777123456",
    //             //     "contactPerson": "Nisrin"
    //             // }
    //         ]
    //     }
    // }

    componentDidMount() {
        // using redux to fetch
         setInterval(() => {
            this.props.fetchStockists()
         }, 1000);


        // fetch('http://demo5787785.mockable.io/stockists')
        // fetch('https://5d479f42992ea9001444c91f.mockapi.io/stockists')
        //     .then((res) => {
        //         if(!res.ok){
        //             throw Error(res.statusText)
        //         }
        //         this.setState({ isLoading: false})
        //         return res
        //     })
        //     .then(res => res.json())
        //     .then((data) => {
        //         this.setState({ stockists: data })
        //     })
        //     .catch(() => this.setState({ hasErrored: true}))

        // const script = document.createElement("script")
        // script.src = 'js/content.js';
        // script.async = true;
        // document.body.appendChild(script);
    }

    render() {
        return (
            <div>
                {/* Content Wrapper. Contains page content */}
                <div className="content-wrapper">
                    {/* Content Header (Page header) */}
                    <section className="content-header">
                        <h1>Stockist
                            <small>Details</small>
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
                                        <h3 className="box-title"><FooterLink/></h3>
                                    </div>
                                    {/* /.box-header */}
                                    <div className="box-body">

                                        {/* <table id="example1" class="table table-bordered table-hover">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Code</th>
                                                    <th>Name</th>
                                                    <th>Address1</th>
                                                    <th>Address2</th>
                                                    <th>Contact</th>
                                                    <th>Telephone</th>
                                                    <th>Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {this.props.stockists.map((stk =>
                                                    <tr key={stk.id}>
                                                        <td>{stk.id}</td>
                                                        <td>{stk.code}</td>
                                                        <td>{stk.name}</td>
                                                        <td>{stk.address1}</td>
                                                        <td>{stk.address2}</td>
                                                        <td>{stk.contactPerson}</td>
                                                        <td>{stk.contactNumber}</td>
                                                        <td>
                                                            <input type="checkbox"
                                                                defaultChecked={stk.isActive}
                                                            />
                                                        </td>
                                                    </tr>
                                                ))}

                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Code</th>
                                                    <th>Name</th>
                                                    <th>Address1</th>
                                                    <th>Address2</th>
                                                    <th>Contact</th>
                                                    <th>Telephone</th>
                                                    <th>Status</th>
                                                </tr>
                                            </tfoot>
                                        </table> */}






                              
                                         <table className="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Code</th>
                                                    <th>Name</th>
                                                    <th>Address1</th>
                                                    <th>Address2</th>
                                                    <th>Contact</th>
                                                    <th>Telephone</th>
                                                    <th>Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                {this.props.stockists.map(stk =>(
                                                    <tr key={stk.id}>
                                                        <td>{stk.id}</td>
                                                        <td>{stk.code}</td>
                                                        <td>{stk.name}</td>
                                                        <td>{stk.address1}</td>
                                                        <td>{stk.address2}</td>
                                                        <td>{stk.contactPerson}</td>
                                                        <td>{stk.contactNumber}</td>
                                                        <td>
                                                            <input type="checkbox"
                                                                onChange={() => this.props.toggleStockist(stk.id)}
                                                                checked={stk.isActive}
                                                            />
                                                        </td>
                                                    </tr>
                                                ))}

                                            </tbody>
                                        </table>
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
    (state, ownProps) => ({ stockists: getVisibleStockist(state.stockists, ownProps.filter)}),
    { fetchStockists, toggleStockist }
)(Stockist)