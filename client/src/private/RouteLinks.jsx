import React from 'react'
import { useSelector } from 'react-redux'
import {Route, Navigate, Outlet} from "react-router-dom"

const RouteLinks = (props) => {

    const {user} = useSelector(state => state.AuthReducer);
    return user ? <Navigate to='/'/> :  <Outlet />
}

export default RouteLinks