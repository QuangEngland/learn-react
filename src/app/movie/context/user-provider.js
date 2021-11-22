import MovieContext from './index';

const UserProvider = (props) => {
    const inforUser = {
        id: 1,
        name: 'Admin',
        email: 'admin@gmail.com',
        avatar: "https://image.tmdb.org/t/p/w300//8mO2ZTTOnLnaEQd1sNZAE2XBoOg.jpg"
    }

    return (
        <>
            <MovieContext.Provider value={inforUser}>
                {props.children}
            </MovieContext.Provider>
        </>
    )
}

export default UserProvider;