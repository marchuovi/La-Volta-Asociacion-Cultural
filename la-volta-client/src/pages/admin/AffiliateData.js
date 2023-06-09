import React from 'react'
import NavbarAdmin from '../../components/admin/NavbarAdmin'
import Sidebar from '../../components/admin/Sidebar'
import Footer
 from '../../components/admin/footer/Footer'
import ShowAffiliate from '../../components/admin/ShowAffiliate'

function AffiliateData() {
  return (
    <>
        <div className="sb-nav-fixed">
        <NavbarAdmin />
        <div>
        <div className='d-flex'>
            <Sidebar />
            <ShowAffiliate/>
        </div>
            <div className='content'>

            </div>
        </div>
        </div>
        <Footer />
    </>
  )
}

export default AffiliateData