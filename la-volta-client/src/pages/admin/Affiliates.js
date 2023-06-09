import React from 'react'
import ShowUsers from '../../components/admin/ShowUsers'
import NavbarAdmin from '../../components/admin/NavbarAdmin'
import Footer from '../../components/admin/footer/Footer'
import Sidebar from '../../components/admin/Sidebar'

function Affiliates() {
  return (
      <div>
        <div className="sb-nav-fixed">
        <NavbarAdmin />
        <div>
        <div className='d-flex'>
            <Sidebar />
            <ShowUsers />
        </div>
            <div className='content'>

            </div>
        </div>
        </div>
        <Footer />
    </div>
    
         
  )
}


export default Affiliates
