import { Input } from 'antd';

const { Search } = Input;

const InputSearch = (props) => {

    return (
        <>
            <Search default="Tokyo" placeholder="Name Of City..." enterButton="Search" size="large" loading={props.loading} onSearch={city =>props.search(city)} />
        </>
    ) 
}

export default InputSearch;