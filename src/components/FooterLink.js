import React from 'react'
import { NavLink } from 'react-router-dom'

export default (match) => (
    <div>
        <table className="table table-hover">
            <thead>
                <tr>
                    <th><NavLink to='/stockist/all'>All</NavLink></th>
                    <th><NavLink to='/stockist/active'>Active</NavLink></th>
                    <th><NavLink to='/stockist/notActive'>In-Active</NavLink></th>
                </tr>
            </thead>
        </table>
        {/* <Link to='/'>All</Link>
        <Link to='/active'>Active</Link>
        <Link to='/notActive'>In-Active</Link> */}
    </div>
)