import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import SearchMoviePage from '../page/search/index';
import UpcommingMoviePage from '../page/upcomming/index';
import PopularMoviePage from '../page/popularmovie/index';

const RouterMovie = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<PopularMoviePage/>}/>
                <Route path="/popularmovie" element={<PopularMoviePage/>}/>
                <Route path="/search" element={<SearchMoviePage/>}/>
                <Route path="/upcomming" element={<UpcommingMoviePage/>}/>
            </Routes>
        </Router>
    )
}

export default React.memo(RouterMovie);