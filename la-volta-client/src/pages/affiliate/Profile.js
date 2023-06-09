import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/admin/footer/Footer";
import { useLocation, Link} from "react-router-dom";
import serviceAxios from "../../services/serviceAxios";
import '../../styles.css'


function Profile() {
  
  const  {state}  = useLocation();
  


  let donationId = ''
  if(state!== null){ 
    const amount = state.amount
    const donationType = state.donationType
  if(amount === "5" && donationType === "puntual") {donationId = 1};
  if(amount === "5" && donationType === "mensual") {donationId = 2};
  if(amount === "5" && donationType === "anual") {donationId = 3}; 
  if(amount === "10" && donationType === "puntual") {donationId = 4};
  if(amount === "10" && donationType === "mensual") {donationId = 5};
  if(amount === "10" && donationType === "anual") {donationId = 6}; 
  if(amount === "15" && donationType === "puntual") {donationId = 7};
  if(amount === "15" && donationType === "mensual") {donationId = 8};
  if(amount === "15" && donationType === "anual") {donationId = 9}; 
  if(amount === "25" && donationType === "puntual") {donationId = 10};
  if(amount === "25" && donationType === "mensual") {donationId = 11};
  if(amount === "25" && donationType === "anual") {donationId = 12}; 
}

   async function stripeSubmit(id){
    await serviceAxios().checkout(id).then((res) => {
      console.log(res.data.url)
      window.location.replace(res.data.url);
       
      }).catch((error) => {
        console.log(error)
      });
    
    }
    
  

 

  let divDonation = "";

  if (state === null) {
    divDonation = (
      <>
      <p className="m-3 text-black justify-content-center">
        Vols fer una nova donació?
      <span> <Link className="text-css btn btn-danger mt-4 d-flex justify-content-center mx-auto" to="/" >
       Aquí
     </Link>
     </span>
     </p>
     </>
    );
  } else if (state) {
    divDonation = (
    <div>
      <p className="text-black d-flex justify-content-center">
        Tens un import {state.donationType} pendent de
        pagament de {state.amount}€.
      </p>
      <p className="text-black text-center"> 
        Pots canviar la teva aportació <span> <Link className="text-black" to="/" >aquí.</Link></span>
      </p>
      <button  onClick={() => stripeSubmit(donationId)} className="btn btn-danger my-5 text-whit d-flex justify-content-center mx-auto">Continuar amb el pagament</button>
       
    </div>
    );
  } 
  const userName = window.localStorage.getItem('auth_name');
  const userId = window.localStorage.getItem('auth_Id');

  return (
    <div className="sb-nav-fixed">
      <Navbar />

      <main className="">
        <div className="m-5 text-success text-center ">
          <h3 className="text-css fs-2 mb-3">Hola {userName}!</h3>
          <h6>Aquest és el teu perfil amic de La Volta</h6> 
        </div>
        <div className="justify-content-center mx-auto">
        <div className="section-amic justify-content-center mx-auto ">
          <div className="section-amic-left bg-success text-center rounded-2 mb-4 ms-3">
            <div className="section-amic-text mt-3 mx-3">
              <h6>Ajuda a que La Volta faci realitat els seus projectes culturals gràcies a una donació</h6>
            </div>
          <div>{divDonation}</div>
          <div className="text-success"></div>
        </div>
        <div className="section-amic-right bg-success text-center rounded-2 ms-3 me-3 ">
          <div className="section-amic-text mt-3 mb-4 mx-3">
            <h6>Vols canviar el teu compte amic</h6>
            <Link to={`/affiliate/edit/${userId}`} state={state} className='text-css btn btn-danger mt-4 d-flex justify-content-center mx-auto'>Compte</Link>
          </div>
          </div>
        </div>
        </div>
      </main>
      <div className="sb-topnav">
      <Footer />
      </div>

    </div>
  );
}

export default Profile;
