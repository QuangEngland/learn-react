import SwitchLanguage from './components/switch-language';
import PaginationMovie from './components/pagination';
import {getDataVideo} from './services/api';
import ListMovie from './components/list';
import { Row, Col, Card } from 'antd';
import {useState, useEffect} from 'react';
import HeaderMovie from './components/header';
import UserProvider from './context/user-provider';


function MovieApp () {

    const [loading,setLoading] = useState(false);
    const [movies,setMovies] = useState([]);
    const [language,setLanguage] = useState('en-US');
    const [page,setPage] = useState(1);
    const [totalItems,setTotalItems] = useState(0);

    useEffect(() => {
        const getDataFromApi = async () => {
            setLoading(true);
            const dataMovie = await getDataVideo(language,page);
            if(dataMovie){
                 setMovies(dataMovie.results);
                 setTotalItems(dataMovie.total_results); 
            }
             setLoading(false);
        }

        getDataFromApi();
    },[language,page]);

    const changeLanguage = (lang = 'en-US') => {
        setLanguage(lang);  
    }

    const changePaging = (e = 1) => {
        setPage(e);
    }



    
    return (
        <>
            <Row>
                <Col span={20} offset={2}>
                    <UserProvider>
                        <HeaderMovie />
                    </UserProvider>
                    <SwitchLanguage change={changeLanguage} />
                    <ListMovie 
                        listMovie={movies}
                    />
                    {movies.length > 0 && !loading && <PaginationMovie totalItem={totalItems} curentPage={page} change={changePaging} />}
                </Col>
            </Row>

        </>
    )

}

export default MovieApp;