import ButtonAdd from './components/button';
import InputList from './components/input';
import List from './components/list';
import {useState} from 'react';

function ToDoList(props) {

    const [todo,setToDo] = useState([]);
    const [work,setWork] = useState('');
    const [id,setId] = useState(0);
    const [status,setStatus] = useState(false);



    const changeWork = (event) => {
        let newWork = event.target.value;
        if(newWork !== '') {
            setWork(newWork);
        }

    }

    const addWork = () => {
        setId(id + 1);
        setToDo([...todo,{name_work : work ,name_id :id,name_status: status}]);
        setWork('');
    }

    const delWork = (id) => {
        let ListDelWork = todo.filter(item => item.name_id !== id );
        setToDo([...ListDelWork]);
    }

    const doneWork = (id) => {
        let ListDelWork = todo.map(item => item.name_id === id ? {...item, name_status: !item.name_status } : item );
        setToDo([...ListDelWork]);
    }

    console.log(todo)
    return (
        <>
            <InputList value={work} type="text" change={changeWork} />
            <ButtonAdd click={addWork} type="button" >ADD</ButtonAdd>
            <List done={doneWork} del={delWork} listWork={todo} />
        </>
    )

}

export default ToDoList;
