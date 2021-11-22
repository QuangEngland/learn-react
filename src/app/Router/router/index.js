import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import SearchPage from '../page/search';
import PupularPage from '../page/popular';
import UpcommingPage from '../page/upcomming';
import LoginPage from '../page/login';

const RouterApp = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<SearchPage/>} exact/>
                    <Route path="/search" element={<SearchPage/>} exact/>
                    <Route path="/popular" element={<PupularPage/>} exact/>
                    <Route path="/upcomming" element={<UpcommingPage/>} exact/>
                    <Route path="/login" element={<LoginPage/>} exact/>
                </Routes>
            </Router>
        </>
    )
}

export default React.memo(RouterApp);