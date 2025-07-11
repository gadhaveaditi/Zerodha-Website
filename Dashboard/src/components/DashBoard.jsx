import Holdings from './holdings.jsx'
import Funds from './Funds.jsx'
import Orders from './Orders.jsx'
import Positions from './Positions.jsx'
import Summary from './Summary.jsx'
import Apps from './Apps.jsx'
import WatchList from "./WatchList.jsx";
import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { GeneralContextProvider } from './GeneralContext.jsx'

const DashBoard = () => {
    return ( 
        <div className='dashboard-container'>
            < GeneralContextProvider>
                <WatchList/>
            </GeneralContextProvider>
            <div className="content">
                <Routes>
                    <Route exact path="/holdings" element={<Holdings/>}/>
                    <Route path="/funds" element={<Funds/>}/>
                    <Route path="/orders" element={<Orders/>}/>
                    <Route path="/positions" element={<Positions/>}/>
                    <Route exact path="/" element={<Summary/>}/>
                    <Route path="/apps" element={<Apps/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default DashBoard;