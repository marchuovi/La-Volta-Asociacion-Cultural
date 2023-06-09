import React from 'react'
import NavbarAdmin from '../../components/admin/NavbarAdmin'
import Footer from '../../components/admin/footer/Footer'
import Sidebar from '../../components/admin/Sidebar'
import ShowPayments from '../../components/admin/ShowPayments'


function Payments() {
  return (
    <div>
        <div className="sb-nav-fixed">
          <NavbarAdmin />
            <div>
              <div className='d-flex'>
                <Sidebar />
                <ShowPayments/>
              </div>
            <div className='content'>
             

            </div>
        </div>
        </div>
        <Footer />
    </div>
  )
}

export default Payments
