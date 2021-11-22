import MasterLayoutMovie from '../../components/master-layout';
import React from 'react';

const SearchMoviePage = () => {
    return(
        <>
            <MasterLayoutMovie>
                <h1>Search</h1>
            </MasterLayoutMovie>
        </>
    )
}

export default React.memo(SearchMoviePage);