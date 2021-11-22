import MasterLayoutMovie from '../../components/master-layout';
import React from 'react';

const UpcommingMoviePage = () => {
    return(
        <>
            <MasterLayoutMovie>
                <h1>UpComming</h1>
            </MasterLayoutMovie>
        </>
    )
}

export default React.memo(UpcommingMoviePage);