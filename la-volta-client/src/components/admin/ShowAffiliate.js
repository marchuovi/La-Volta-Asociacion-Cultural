import React, {useEffect, useState} from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import serviceAxios from '../../services/serviceAxios';
import Swal from 'sweetalert2';

const ShowAffiliate = () => {

    const navigate = useNavigate()
    const {id} = useParams()
    const [ user, setUser ] = useState([])
    const [order, setOrders] = useState([])

    async function getUser(){
        await serviceAxios().getUserById(id)
        .then(res => {
          setUser(res.data)
          console.log(res)
        })
    }     
    useEffect(() => {getUser()},[])

    async function orders(){
        await serviceAxios().allOrders()
        .then(res => {
          setOrders(res.data)
        })
        }
        useEffect(() => {orders()},[])

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
                navigate('/admin/affiliates')
              }
            })           
          }
          async function deleteOrder(id){
            await 
            Swal.fire({
                title: 'Desitja eliminar aquest pagament de la base de dades?',
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
                  serviceAxios().deleteOrder(id)
                  Swal.fire({
                    text: "S'ha suprimit el pagament.",
                    icon: 'success',
                    iconColor:'white',
                    confirmButtonColor: '#8506A9',
                    color: 'white',
                    background: '#87EA00',
                  })
                }
              })
            orders()
          }
          useEffect(() => {orders()},[])
  return (
    <div className='d-grid gap-2 row d-flex justify-content-center mx-auto'>
        <h4 className='text-success text-css fs-4 text-center'>Dades del soci Amic</h4>
        <table className='table table-striped'>
            <thead className='bg-black text-white'>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Lastname</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                
                <tr className='text-success' key={user.id}>
                    <td className='text-success'> {user.id} </td>
                    <td className='text-success'> {user.name} </td>
                    <td className='text-success'> {user.lastname} </td>
                    <td className='text-success'> {user.email} </td>
                    <td>
                        <Link to={`/admin/edit/${user.id}`} className='btn btn-danger mx-2 mb-1'>Editar</Link>
                        <button onClick={ ()=>deleteUser(user.id) } className='btn btn-danger mb-1'>Suprimir</button>
                    </td>
                </tr>
              
            </tbody>
        </table>
        <h4 className='text-success text-center text-css fs-4'>Pagaments</h4>

        <table className='table table-striped'>
            <thead className='bg-black text-success'>
                <tr>
                    <th>Id del soci</th>
                    <th>Estat</th>
                    <th>Import</th>
                    <th>Data</th>
                    <th>Hora</th>
                    <th>Acció</th>
                </tr>
            </thead>
            <tbody>
                { order.filter(order => order.user_id === user.id).map( (order) => (
                <tr className='text-success' key={order.id}>
                   
                    <td className='text-white'> {order.user_id} </td>
                    <td className='text-white'> {order.status} </td>
                    <td className='text-white'> {order.total_price} € </td>
                    <td className='text-white'> {order.created_at.substring(0, 10)} </td>
                    <td className='text-white'> {order.created_at.substring(11, 19)} </td>
                    <td>
                        <button onClick={()=>deleteOrder(order.id) } className='btn btn-danger mb-1'>Suprimir</button>
                    </td>
                </tr>
                )) }
            </tbody>
        </table>
    </div>
  )
}

export default ShowAffiliate
