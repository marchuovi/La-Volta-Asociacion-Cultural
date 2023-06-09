import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useState } from "react";
import Footer from "../components/admin/footer/Footer"
import Swal from "sweetalert2";

function Home() {

  const navigate = useNavigate();
  
  const [donationForm, setDonationForm] = useState({donationType:'', amount: ''});
  
  console.log(donationForm)

  const handleInput = (event) => {
          setDonationForm({
            ...donationForm,
            [event.target.name]: event.target.value
          })

          
        }

    
        function validationForm(event) {
          event.preventDefault();
          if(donationForm.donationType !== '' && donationForm.amount !== ''){
            if(!localStorage.getItem('auth_token')) {
              navigate('/register', {state : donationForm});
            } else {
              navigate('/affiliate/profile', {state : donationForm});
            }
            
          }
          if(donationForm.donationType === ''){
            Swal.fire({
              title: "Tria el tipus de donació",
              color: 'white',
              background: '#87EA00',
              confirmButtonColor: '#8506A9',})          
          }
          if(donationForm.amount === ''){
            Swal.fire({
              title: "Tria la quantitat de la teva aportació",
              color: 'white',
              background: '#87EA00',
              confirmButtonColor: '#8506A9',
            })
          }
        }     

  return (
      <>
      <Navbar />


      <div className="bg-success">
        <div className="bg-warning border rounded rounded-3 border-5 border-success">
          <div className="text-center">
            <h6 className="px-4 pt-5 mt-1 fs-3 text-success fw-bold">
            Fes-te amic de La Volta i aporta la teva donació
            </h6>
            <h5 className="px-4 pt-1 fs-5 text-success"> Gràcies al teu suport, aquest projecte seguirà endavant </h5>
            <h6 className="px-4 pt-5 fs-6 text-success">
            Tria la quantia, afegeix les teves dades i completa el procés de donació
            </h6>
              <h6 className="px-4 pt-1 fs-6 text-success">
                Així de fàcil!
              </h6>
            </div>

        
        <form id="form" onSubmit={validationForm}> 
          <fieldset className="text-white d-flex justify-content-center" required>    

              <div className="m-4">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="donationType"
                    id="gridRadios1"
                    value="puntual"
                    onChange={handleInput}/>

                    <label class="form-check-label" for="gridRadios1">Donació puntual</label>
                </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  value="mensual"
                  name="donationType"
                  id="gridRadios2"
                  onChange={handleInput}/>

                <label class="form-check-label" for="gridRadios2">Donació mensual</label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  value="anual"
                  name="donationType"
                  id="gridRadios2"
                  onChange={handleInput}/>

                <label class="form-check-label" for="gridRadios2">Donació anual</label>
              </div>
            </div>

          </fieldset>

          <fieldset required>
            <div class="btn-pagos gap-3 mx-auto pt-6 pb-4">
              <button class="btn btn-success btn-lg p-5 fw-bold fs-3 m-4" name="amount" type="button" value="5" onClick={handleInput}>5 €</button>
              <button class="btn btn-success btn-lg p-5 fw-bold fs-3 m-4" name="amount" type="button" value="10" onClick={handleInput}>10 €</button>
              <button class="btn btn-success btn-lg p-5 fw-bold fs-3 m-4" name="amount" type="button" value="15" onClick={handleInput}>15 €</button>
              <button class="btn btn-success btn-lg p-5 fw-bold fs-3 m-4" name="amount" type="button" value="25" onClick={handleInput}>25 €</button>
            </div>
  
            <div className="d-flex justify-content-center pt-5">
              <button type="submit" className="col-4 btn btn-success btn-lg ">
              <p className="text-css pt-3 fs-6 fw-bold">Fer una donació puntual de
 l'import que desitgis</p> 
              </button>
            </div>
          </fieldset>
          <div class="d-flex justify-content-center">
            <button type="submit" className="boton-seguent btn btn-danger mt-5 btn-lg" >
              <h6 className="m-3">Següent pas</h6>
            </button>
          </div>
        </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
