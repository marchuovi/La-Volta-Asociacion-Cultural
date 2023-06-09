import React from 'react'
import { Link } from 'react-router-dom'
import './sidebar.css'
const Sidebar = () => {
  return (
    <nav className="d-flex">
        <div id="sidebar-container" className="bg-black">
            <ul className='list-unstyled mt-4'>
                <li>
                    <Link className='text-css fs-5 text-success  text-decoration-none'  to="/admin/dashboard">Inici</Link>
                </li>
                <li>
                    <Link className='text-css fs-5 text-success text-decoration-none' to="/admin/affiliates">Amics</Link>
                </li>
                <li>
                    <Link className='text-css fs-5 text-success  text-decoration-none' to="/admin/payments">Pagaments</Link>
                </li>
                <li>
                
                </li>
            </ul>
        </div>
    </nav>
  );
}

export default Sidebar;
