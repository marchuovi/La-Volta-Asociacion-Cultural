import React from 'react'
import { useState, useEffect } from 'react';
import serviceAxios from '../../services/serviceAxios';
import '../../styles.css';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

function ShowPayments() {

    const [payment, setPayments] = useState([]);
    const [order, setOrders] = useState([]);

    async function payments(){
      await serviceAxios().payments()
      .then(res => {
        setPayments(res.data)
      })
      }
      useEffect(() => {payments()},[])

      async function orders(){
        await serviceAxios().allOrders()
        .then(res => {
          setOrders(res.data)
        })
        }
        useEffect(() => {orders()},[])
    
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
    <div className='d-grid gap-2 row d-flex justify-content-center mx-auto mt-3'>
        <div className=''>
        <h4 className='text-success text-css fs-4 text-center'> Pagaments reeixits </h4>
        <table className='table table-striped'>           
            <thead className='bg-black text-success'>               
                <tr>
                    <th>Id del pagament</th>
                    <th>Id del soci</th>
                    <th>Import pagat</th>
                    <th>Data</th>
                    <th>Hora</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                { payment.map( (order) => (
                <tr className='text-success' key={order.id}>
                    <td className='text-white'> {order.payment_id} </td>
                    <td className='text-white'> {order.user_id} </td>
                    <td className='text-white'> {order.total_price} € </td>
                    <td className='text-white'> {order.created_at.substring(0, 10)} </td>
                    <td className='text-white'> {order.created_at.substring(11, 19)} </td>
                    <td>
                      <Link to={`/admin/affiliate/${order.user_id}`} className='text-css fs-6 btn btn-danger mx-2 mb-1'>Veure Soci</Link>
                    </td>
                </tr>
                )) }
            </tbody>
        </table>

        <h4 className='text-success text-center text-css fs-4'>Pagaments fallits</h4>

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
                { order.filter(order => order.status === 'unpaid').map( (order) => (
                <tr className='text-success' key={order.id}>
                   
                    <td className='text-white'> {order.user_id} </td>
                    <td className='text-white'> {order.status} </td>
                    <td className='text-white'> {order.total_price} € </td>
                    <td className='text-white'> {order.created_at.substring(0, 10)} </td>
                    <td className='text-white'> {order.created_at.substring(11, 19)} </td>
                    <td>
                        <button onClick={()=>deleteOrder(order.id) } className='btn btn-danger mb-1'>Suprimir</button>
                        <Link to={`/admin/affiliate/${order.user_id}`} className='text-css fs-6 btn btn-danger mx-2 mb-1'>Veure Soci</Link>
                    </td>
                </tr>
                )) }
            </tbody>
        </table>
        
    </div>
    </div>
  )
}

export default ShowPayments