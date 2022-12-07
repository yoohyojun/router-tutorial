import React from 'react';
import { Link,Routes, Route } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profile from './Profile';
import Profiles from './Profiles';
import HistorySample from "./HistorySample";

const App = () => {
    return (
        <div>
            <ul>
                <li>
                   <Link to="/">홈</Link>
                </li>
                <li>
                    <Link to="/about">소개</Link>
                </li>
                <li>
                    <Link to="/profiles">프로필</Link>
                </li>
                <li>
                    <Link to="/history">예제</Link>
                </li>
            </ul>
            <Routes>
                {/* exact : 정확하게 일치할때만 해당 엘리먼트의 컴포넌트로 렌더링 해줌*/}
                <Route path="/" exact={true} element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/profiles/*" element={<Profiles />} />
                <Route path="/history" element={<HistorySample />} />
            </Routes>
        </div>
    );
};

export default App;
