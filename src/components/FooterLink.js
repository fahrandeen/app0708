import React from 'react'
import { Link } from 'react-router-dom'

export default (props) => (
    <div>
        <table className="table table-hover">
            <thead>
                <tr>
                    <th><Link to='/'>All</Link></th>
                    <th><Link to='/active'>Active</Link></th>
                    <th><Link to='/notActive'>In-Active</Link></th>
                </tr>
            </thead>
        </table>
        {/* <Link to='/'>All</Link>
        <Link to='/active'>Active</Link>
        <Link to='/notActive'>In-Active</Link> */}
    </div>
)