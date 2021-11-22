import React from "react";
import ButtonCounter from "./components/Button/Button.js";
import Counter from "./components/Counter/Counter.js";
import styled from "styled-components";

const Container = styled.div `
    width: 100%;
    max-width: 1000px;
    margin: 10vh auto;
    border: 1px solid #000;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
`

const Changecolor = styled.button `
    width: 200px;
    margin: 20px;
    border: 1px solid #000;
    border-radius: 10px;
    padding: 20px 0;
    cursor: pointer;
    color: white;
    font-weight: 600;
    
`

class CounterApp extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            count : 0,
            color: 'black'
        }
    }

    increment = () => {
        this.setState ((state) => ({count : state.count + 1}))
    }

    decrement = () => {
        this.setState ({count : this.state.count - 1})
    }

    
    changeColor (event) {
        let nameColor = event.target.name;
        console.log(nameColor)
        
        if(nameColor !== '') {
            this.setState ({
                color: nameColor
            })
        }

    }

    render() {
        return (
            <>
                <Container>
                    <Counter style={{color: `${this.props.color}`}} count={this.state.count} />
                    <ButtonCounter click={this.increment} type="button">+</ ButtonCounter>
                    <ButtonCounter click={this.decrement} type="button">-</ ButtonCounter>
                    <Changecolor style={{backgroundColor: `${this.state.color}`}} name="blue" onClick={(e) => this.changeColor(e)}>xanh</Changecolor>
                    <Changecolor  style={{backgroundColor: `${this.state.color}`}} name="red" onClick={(e) => this.changeColor(e)}>do</Changecolor>
                </Container>
            </>
        )
    }
}

export default CounterApp;