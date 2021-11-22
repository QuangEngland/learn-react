import React from "react";
import styled from "styled-components";
import ButtonAdd from "./components/Button/Button.js";
import Input from "./components/Input/Input.js";
import List from "./components/List/List.js";
import '../../App.css'

const Container = styled.div `
    width: 100%;
    max-width: 1000px;
    margin: 10vh auto;
    border: 1px solid #000;
    border-radius: 10px;
    padding: 20px 0;
    
`

class ToDoApp extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            todos : [],
            id: 1,
            status: false,
            work: ""
        }
    
    }

    changeWork = (event) => {
        let nameWork = event.target.value;
        if(nameWork !== "") {
            this.setState({
                work : nameWork
            })
        }
    }

    addWork = () => {
        this.setState({
            id: this.state.id + 1,
            todos: [...this.state.todos, {
                name_work: this.state.work,
                id_work: this.state.id,
                status_work: this.state.status
            }],
            work: ""
        })
        
    }

    delWork = (id) => {
        let newWork = this.state.todos.filter(item => item.id_work !== id);
        this.setState({
            ...this.state,
            todos: newWork
        })
    }

    doneWork = (id) => {
        let newTodos = this.state.todos.map(item => item.id_work === id ? {...item, status_work: !item.status_work} : item);
        this.setState({
            ...this.state,
            todos: newTodos
        })
    }

    render() {
        console.log(this.state.todos)
        return (
            <>
                <Container>
                    <Input val={this.state.work} change={this.changeWork} />
                    <ButtonAdd click={this.addWork} />
                    <List 
                        del={this.delWork}
                        listWork={this.state.todos}
                        listDone= {this.doneWork}
                    />
                </Container>
            </>
        )
    }
}
export default ToDoApp;