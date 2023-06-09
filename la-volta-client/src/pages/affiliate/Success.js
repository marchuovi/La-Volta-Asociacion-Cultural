import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../../components/admin/footer/Footer';
import Navbar from '../../components/Navbar';

function Success() {
  return (
<>
    <Navbar/>
    <div className="bg-success">
        <div className="bg-warning border rounded rounded-3 border-5 border-success text-success text-center">
          <h2 className='px-5 pt-5 '>Aportació realitzada amb èxit!</h2>
          <h4 className='px-5 pt-5 '>Gràcies per ser amic de La Volta. La teva aportació és molt important per a la nostra associació.</h4>
          <h6 className='p-5 '>Tornar al meu perfil<span> <Link className="text-success" to="/affiliate/profile">aquí.</Link></span></h6>
        </div>
    </div>
    <Footer/>
</>
  );
}

export default Success