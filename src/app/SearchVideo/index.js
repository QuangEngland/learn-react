import InputSearch from './components/input';
import ListMovie from './components/list';
import { Pagination } from 'antd';
import {useState} from 'react';
import {getDataVideo} from './services/api';
 
function SearchMovie () {

    const [loading,setLoading] = useState(false);
    const [movie, setMovie] = useState([]);
    const [keyword,setKeyword] = useState('');
    const [totalItem,setTotalItem] = useState(0);
    const [page,setPage] = useState(1);

    const searchMovieByKey = async (nameMovie , p = 1) => {
        if(nameMovie !== '') {          
            if(p > 1) {
                await setPage(p);
            }
            await setKeyword(nameMovie);
            await setLoading(true) ;
            const dataMovie = await getDataVideo(nameMovie, page);
            if(dataMovie) {
                await setMovie(dataMovie.results) ;
                await setTotalItem(dataMovie.total_results)
            }
            await setLoading(false);

        }
    }

    return (
        <>
            <InputSearch search={searchMovieByKey} loading={loading} />
            <ListMovie listMovieProp={movie} loading={loading} />
            {movie.length !== 0 && (
                <Pagination 
                    style={{textAlign: 'center',marginTop: '50px'}} 
                    pageSize={10} 
                    defaultCurrent={page} 
                    total={totalItem} 
                    showSizeChanger={false} 
                    onChange={page => searchMovieByKey(keyword, page)}
                />
            )}

        </>
    )
}

export default SearchMovie;