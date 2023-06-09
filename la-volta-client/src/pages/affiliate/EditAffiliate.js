import axios from "axios";
import React, {useState, useEffect} from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Footer from "../../components/admin/footer/Footer";
import Navbar from "../../components/Navbar";
import '../../styles.css';
import Swal from "sweetalert2";

const endpoint = 'http://localhost:8000/api/user/'

const EditUser = () => {

    const  {state}  = useLocation();
console.log(state);


    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('auth_token')
    const navigate = useNavigate()
    const {id} = useParams()
    
    const update = async (e) => {
       e.preventDefault()
       await axios.put(`${endpoint}${id}`, {
            name: name,
            lastname: lastname,
            email: email,
            password: password,
       })
       Swal.fire({
        icon: 'success',
        title: "Els canvis s'han desat",
        showConfirmButton: false,
        timer: 1500,
        iconColor:'white',
        color: 'white',
        background: '#87EA00',
      })
       navigate('/affiliate/profile', {state: state})
    }

    useEffect( () =>{
        const getUserById = async () => {
            const response = await axios.get(`${endpoint}${id}`)
            setName(response.data.name)
            setLastname(response.data.lastname)
            setEmail(response.data.email) 
            setPassword(response.data.password)  
        }
        getUserById()
        //·eslint-disable-next-line-react-hooks/exhaustive-deps
    }, [] )

    return (
        <div>
        <Navbar />
        <h2 className="text-css fs-5 text-success my-2 text-center"> La meva compte amic</h2>
    
        <div className='d-flex'>
        <div className="mx-auto mt-3 text-success justify-content-center">
            <div>
                <h3 className="text-success my-2 text-center">Edita el teu perfil</h3>
            </div>
        <form className="text-success" onSubmit={update}>
            <div className="mb-3">
                <label className="text-css fs-6 form-label">Nom</label>
                <input
                    value={name}
                    onChange={ (e)=> setName(e.target.value)}
                    type='text'
                    className="form-control"
                />
            </div>
            <div className="mb-3">
                <label className="text-css fs-6 form-label">Cognom</label>
                <input
                    value={lastname}
                    onChange={ (e)=> setLastname(e.target.value)}
                    type='text'
                    className="form-control"
                />
            </div>
            <div className="mb-3">
                <label className="text-css fs-6 form-label">Correu electrònic</label>
                <input
                    value={email}
                    onChange={ (e)=> setEmail(e.target.value)}
                    type='text'
                    className="form-control"
                />
            </div>
            <div className="mb-3">
                <label className="text-css fs-6 form-label">Contrasenya</label>
                <input
                    value={password}
                    onChange={ (e)=> setPassword(e.target.value)}
                    type='password'
                    className="form-control"
                />
            </div>
            <div className="justify-content-center mx-auto d-flex">
                <button type='submit' className="text-css fs-6 btn btn-danger">Desa</button>
            </div>
            {/* <div>
                <button type='submit' className="text-css fs-6 btn btn-danger my-2 mb-3">Donar-te de baixa de la Volta</button>
            </div> */}
        </form>
        </div>
        </div>
        <Footer />
        </div>
        
    )

}

export default EditUser