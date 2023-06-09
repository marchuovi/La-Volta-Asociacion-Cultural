import React from "react";
import { useState } from "react";
import serviceAxios from "../../services/serviceAxios";
import Swal from "sweetalert2";
import { useNavigate, Link, useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/admin/footer/Footer";
import '../../styles.css';

function Register() {
  const state = useLocation();
  
  console.log(state.state)

  const donationForm = state.state

  const navigate = useNavigate();

  const [registerInput, setRegister] = useState({
    name: "",
    firstname: "",
    email: "",
    password: "",
    error_list: [],
  });

  const handleInput = (e) => {
    e.persist();
    setRegister({ ...registerInput, [e.target.name]: e.target.value });
  };

  const registerSubmit = (e) => {
    e.preventDefault();

    serviceAxios()
      .getCookies()
      .then((response) => {
        serviceAxios()
          .postRegister(registerInput)
          .then((res) => {
            if (res.data.status === 200) {
              localStorage.setItem("auth_token", res.data.token);
              localStorage.setItem("auth_name", res.data.username);
              localStorage.setItem("auth_Id", res.data.userId);
              Swal.fire({
              title: "S'ha registrat correctament",
              color: 'white',
              background: '#87EA00',
              confirmButtonColor: '#8506A9',
              
            })
              navigate("/affiliate/profile", {state : donationForm});
            } else {
              setRegister({
                ...registerInput,
                error_list: res.data.validation_errors,
              });
            }
          });
      });
  };

  return (
    <div>
      <Navbar />
      <div className="bg-success ">
        <div className=" bg-warning border rounded rounded-3 border-5 border-success">
          <div className="text-center">
            <h6 className="text-css fs-3 pt-5 fw-bold text-success">
              Fes-te amic de La Volta
            </h6>
            <h6 className="px-4 pt-5 fs-5 text-success text-css">
              Per fer efectiva la donació és necessari registrar-se i seguir
              els passos indicats
            </h6>
          </div>

          <div className="container py-5 ">
            <div className="row justify-content-center ">
              <div className="col-md-6 ">
                <div className="card border-0 ">
                  <div className="card-body bg-warning text-secondary">
                    <form onSubmit={registerSubmit}>
                      <div className="form-group mb-3">
                        <label className="text-css fs-6 text-success mb-2 " for="name">
                          Nom
                        </label>
                        <input
                          type="text"
                          name="name"
                          onChange={handleInput}
                          value={registerInput.name}
                          className="form-control"
                        />
                        <span className="text-secondary">{registerInput.error_list.name}</span>
                      </div>

                      <div className="form-group mb-3">
                        <label className="text-success" for="lastname">
                          Cognoms
                        </label>
                        <input
                          type="text"
                          name="lastname"
                          onChange={handleInput}
                          value={registerInput.lastname}
                          className="form-control"
                        />
                        <span>{registerInput.error_list.lastname}</span>
                      </div>

                      <div className="form-group mb-3">
                        <label className="text-success" for="email">
                          Correu electrònic
                        </label>
                        <input
                          type="text"
                          name="email"
                          onChange={handleInput}
                          value={registerInput.email}
                          className="form-control"
                        />
                        <span>{registerInput.error_list.email}</span>
                      </div>

                      <div className="form-group mb-3">
                        <label className="text-success" for="password">
                          Contrasenya
                        </label>
                        <input
                          type="password"
                          name="password"
                          onChange={handleInput}
                          value={registerInput.password}
                          className="form-control"
                        />
                        <span className="">
                          {registerInput.error_list.password}
                        </span>
                      </div>
                      <div className="form-group mb-3 text-center">
                        <button type="submit" className="btn btn-danger text-css fs-5 mt-3">
                          Registra't
                        </button>
                      </div>
                    </form>
                  </div>

                  <div className="text-center bg-warning">
                    <h6 className="text-css px-4 pt-5 fs-6 text-success">
                      Si ja teniu un compte d'usuari, accediu al vostre perfil
                      <span> <Link className="text-success text-css fs-6" to="/login" state={donationForm}>
                        aquí.
                      </Link>
                      </span>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Register;
