import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import '../../styles.css';
import serviceAxios from '../../services/serviceAxios';
import Swal from 'sweetalert2';

const ShowUsers = () => {

    const [ users, setUsers ] = useState( [] )
    useEffect ( ()=> {
        getUsers()
    }, [])

    const getUsers = async () => {
        await serviceAxios().getUsers()
      .then(res => {    
        setUsers(res.data)})
    }

    const deleteUser = async (id) => {
      await Swal.fire({
        title: 'Desitja eliminar aquest soci de la base de dades?',
        text: "No podràs revertir això!",
        icon: 'warning',
        iconColor:'white',
        showCancelButton: true,
        confirmButtonColor: '#8506A9',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
        color: 'white',
        background: '#87EA00',
      }).then((result) => {
        if (result.isConfirmed) {
          serviceAxios().deleteUser(id)
          Swal.fire({
            text: "S'ha suprimit el compte d'usuari.",
            icon: 'success',
            iconColor:'white',
            confirmButtonColor: '#8506A9',
            color: 'white',
            background: '#87EA00',
          })
        
        }
      })
         
       getUsers()
    }
  return (
    <div className='d-grid gap-2 row d-flex justify-content-center mx-auto'>
        <Link to="/admin/create" className='text-css fs-5 btn btn-danger mt-2 mb-1 text-white'>Crear nou afiliat</Link>
        <table className='table table-striped text-css fs-6'>
            <thead className='bg-black text-success '>
                <tr>
                    <th>Id</th>
                    <th>Nom</th>
                    <th>Cognom</th>
                    <th>Correu Electrònic</th>
                    <th>Acció</th>
                </tr>
            </thead>
            <tbody>
                { users.map( (user) => (
                <tr className='text-white' key={user.id}>
                    <td className='text-white'> {user.id} </td>
                    <td className='text-white'> {user.name} </td>
                    <td className='text-white'> {user.lastname} </td>
                    <td className='text-white'> {user.email} </td>
                    <td>
                        <Link to={`/admin/edit/${user.id}`} className='btn btn-danger mx-2 mb-1 text-css fs-6'>Editar</Link>
                        <button onClick={ ()=>deleteUser(user.id) } className='text-css fs-6 btn btn-danger mx-2 mb-1'>Suprimir</button>
                        <Link to={`/admin/affiliate/${user.id}`} className='text-css fs-6 btn btn-danger mx-2 mb-1'>Detalls i pagaments
                        </Link>
                    </td>
                </tr>
                )) }
            </tbody>
        </table>
    </div>
  )
}

export default ShowUsers
