import React from 'react';
import {Link, Route, Routes, NavLink} from 'react-router-dom';
import Profile from './Profile';
import Home from "./Home";
import About from "./About";
import HistorySample from "./HistorySample";
import WithRouterSample from "./withRouterSample";

const Profiles = () => {
    return (
        <div>
            <h3>유저 목록:</h3>
            <ul>
                <li>
                    <NavLink
                        to="/profiles/velopert"
                        style={({ isActive }) => ({ color: isActive ? 'red' : undefined })}
                    >velopert</NavLink>
                </li>
                <li>
                    <NavLink
                        to="/profiles/gildong"
                        style={({ isActive }) => ({ color: isActive ? 'red' : undefined })}
                    >gildong</NavLink>
                </li>
            </ul>
            <Routes>
                <Route path=':username' element={<Profile/>} />
            </Routes>
            <WithRouterSample></WithRouterSample>
        </div>


    );
}

export default Profiles;
