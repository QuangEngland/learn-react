import MasterLayoutMovie from '../../components/master-layout';
import React from 'react';

const PopularMoviePage = () => {
    return(
        <>
            <MasterLayoutMovie>
                <h1>Popular</h1>
            </MasterLayoutMovie>
        </>
    )
}

export default React.memo(PopularMoviePage);