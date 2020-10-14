import React, { Component } from 'react'


class Animal{
    constructor(name){
        this.name = name;
    }
}





export default class ClassesTest extends Component {
    constructor(props) {
        super()
        this.state = {
            click: "Not Clicked Yet"
        }
    }

    myFunction = () => {
        this.setState({
            click: "Clicked"
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.myFunction} >{this.state.click}</button>

            </div>
        )
    }
}
