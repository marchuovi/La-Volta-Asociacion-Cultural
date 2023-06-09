import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Dashboard from '../pages/admin/Dashboard';
import Profile from '../pages/affiliate/Profile';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import AdminPrivateRoute from '../AdminPrivateRoute';
import AffiliateUserRoute from '../AffiliateUserRoute';
import EditUser from '../pages/admin/EditUser';
import Affiliates from '../pages/admin/Affiliates';
import Payments from '../pages/admin/Payments';
import CreateUser from '../pages/admin/CreateUser';
import Success from '../pages/affiliate/Success';
import EditAffiliate from '../pages/affiliate/EditAffiliate';
import AffiliateData from '../pages/admin/AffiliateData';


const Router = () => {


  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
       

          <Route path="/admin/*" element={<AdminPrivateRoute />}> 
            <Route path="dashboard" element={<Dashboard/>} />
            <Route path='affiliates' element={<Affiliates/>} />
            <Route path='payments' element={<Payments/>} />
            <Route path='create' element={<CreateUser/>} />
            <Route path="edit/:id" element={<EditUser/>} />
            <Route path="affiliate/:id" element={<AffiliateData/>}/>
          </Route>
          <Route path="/affiliate/*" element={<AffiliateUserRoute />} >
            <Route path="profile" element={<Profile/>} />
            <Route path="payment/success" element={<Success/>} />
            <Route path="edit/:id" element={<EditAffiliate/>} />
          </Route>

        </Routes> 
        </BrowserRouter>
  )
}

export default Router
