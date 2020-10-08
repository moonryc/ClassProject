import React, { Component } from 'react'
import { AppBar, Button, IconButton, TextField, Toolbar, Typography, withStyles } from '@material-ui/core';
import { Menu } from "@material-ui/icons";
import AutosizeInput from 'react-input-autosize';


export default class SqrtCalc extends Component {
    constructor(props) {
        super()
        this.state = {
            text: "Fucker",
            x: 1,
            input1: 0,
            input2: 0,
            input3: 0,
            outputOne: 0,
            outputTwo: 0,
            test: 0
        }
    }

    handelInputOneChange = (e) => {
        this.setState({
            input1: e.target.value
        })
    }

    handelInputTwoChange = (e) => {
        this.setState({
            input2: e.target.value
        })
    }

    handelInputThreeChange = (e) => {
        this.setState({
            input3: e.target.value
        })
    }

    handelInputTest = (e) => {
        this.setState({
            test: e.target.value
        })
    }

    myFunction = () => {
        this.setState({
            text: "fuck this is alot" + this.state.x
        })
    }

    sqrtCalc = () => {
        let MyAnswerOne = 0;
        let MyAnswerTwo = 0;
        let input1 = parseFloat(this.state.input1);
        let input2 = parseFloat(this.state.input2);
        let input3 = parseFloat(this.state.input3);
        let partTwo = input2 * input2 - 4 * input1 * input3;
        MyAnswerOne = -input2 / (2 * input1)
        MyAnswerOne = MyAnswerOne.toFixed(2);
        MyAnswerTwo = MyAnswerOne;
        if (partTwo < 0) {
            let imaginary = Math.sqrt(-partTwo) / (2 * input1);
            imaginary = imaginary.toFixed(2);
            MyAnswerOne += "+" + imaginary + "i";
            MyAnswerTwo += "-" + imaginary + "i";
        } else if (partTwo > 0) {
            MyAnswerOne += Math.sqrt(partTwo) / (2 * input1);
            MyAnswerTwo += Math.sqrt(partTwo) / (2 * input1);
        }

        this.setState({
            outputOne: MyAnswerOne,
            outputTwo: MyAnswerTwo
        })
    }
    render() {
        return (
            <div>
                <AutosizeInput name="form-field-name" value={this.state.test ? this.state.test : "\u00a0\u00a0\u00a0\u00a0"} onChange={this.handelInputTest} />
                <button onClick={this.myFunction}> {this.state.text}</button> <br /><br />
                <TextField id="filled-basic" label="Filled" variant="filled" value={this.state.input1} onChange={this.handelInputOneChange} /> <br /><br />
                <TextField id="filled-basic" label="Filled" variant="filled" value={this.state.input2} onChange={this.handelInputTwoChange} /> <br /><br />
                <TextField id="filled-basic" label="Filled" variant="filled" value={this.state.input3} onChange={this.handelInputThreeChange} /> <br /><br />
                <button onClick={this.sqrtCalc}>Click here to Calculate your Polynomial Roots!</button>
                <h3> Your equation is <i>f(x)</i> = {this.state.input1 ? this.state.input1 : ""} X<sup>2</sup> + {this.state.input2 ? this.state.input2 : ""} X {this.state.input3 ? " + " + this.state.input3 : " + 0"}</h3>
                <h1>Polynomial Root X<sub>1</sub> = {this.state.outputOne}</h1>
                <h1>Polynomial Root X<sub>2</sub> = {this.state.outputTwo}</h1> <br />
            </div >
        )
    }
}
