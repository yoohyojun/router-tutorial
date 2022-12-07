import React from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import Profile from './Profile';
import Home from "./Home";
import About from "./About";
import HistorySample from "./HistorySample";

const Profiles = () => {
    return (
        <div>
            <h3>유저 목록:</h3>
            <ul>
                <li>
                    <Link to="/profiles/velopert">velopert</Link>
                </li>
                <li>
                    <Link to="/profiles/gildong">gildong</Link>
                </li>
            </ul>
            <Routes>
                <Route path=':username' element={<Profile/>} />
            </Routes>
        </div>

    );
}

export default Profiles;
