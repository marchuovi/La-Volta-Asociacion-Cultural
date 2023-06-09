import axios from 'axios';
import { useEffect, useState } from 'react';
import {Outlet, useNavigate, Navigate} from 'react-router-dom';
import Swal from 'sweetalert2';


function AdminPrivateRoute() {

    //const auth = localStorage.getItem('auth_name');
    const navigate = useNavigate();
    const [Authenticated, setAuthenticated] = useState(false);
    const [loading, setloading] = useState(true);

    console.log()

    useEffect(() => {

        axios.get(`/api/checkingAuthenticated`).then( rest => {
            if(rest.status === 200)
            {
                setAuthenticated(true);
            }
            setloading(false);
        });
        return () => {
            setAuthenticated(false);
      }
    }, []);

    axios.interceptors.response.use(undefined, function axiosRetryInterceptor(error) {
        if(error.response.status === 401)
        {
            Swal.fire({
                icon: 'error',
                iconColor:'white',
                title: "Accés denegat",
                color: 'white',
                background: '#87EA00',
                showConfirmButton: false,
                timer: 1500,

            });
            navigate('/');
        }
        return Promise.reject(error);
    });

    axios.interceptors.response.use(function (response) {
        return response;
        }, function (error) {
            if(error.response.status === 403) // Access Denied
            {
                Swal.fire({
                    icon: 'error',
                    iconColor:'white',
                    title: "No estàs autoritzat",
                    color: 'white',
                    background: '#87EA00',
                    showConfirmButton: false,
                    timer: 1500,

                });
                navigate('/');
            }
            else if(error.response.status === 404) // Page Not Found
            {
                Swal.fire({
                    icon: 'error',
                    iconColor:'white',
                    title: "Pàgina no trobada",
                    color: 'white',
                    background: '#87EA00',
                    showConfirmButton: false,
                    timer: 1500,

                });
                navigate('/');
            }
            return Promise.reject(error);
        }
    );

    if(loading)
    {
        return <h1 className="text-danger">Loading...</h1>
    }
    
  return (

    
    Authenticated ? <Outlet /> : <Navigate to='/' />

    )
}

  

export default AdminPrivateRoute
