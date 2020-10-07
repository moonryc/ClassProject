import { Container, Paper, TextField, Typography, withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import randomWords from "random-words";

const styles = theme => ({
    title:{
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1)
    },
    badTitle:{
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        color: "#b71c1c",
        textShadow: "4px 4px 4px #ffffff, -4px -4px 4px #ffffff, 4px -4px 4px #ffffff, -4px 4px 4px #ffffff"
    },
    text:{
        padding: theme.spacing(2),
        textAlign: "left"
    },
    typing:{
        marginTop: theme.spacing(1)
    },
    good:{
        backgroundColor: "#c8e6c9"
    },
    bad:{
        backgroundColor: "#ffcdd2",
    },
    back:{
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    blackBack:{
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundImage: "url('/blood.jpg')"
    }
});

class Game extends Component {
    constructor(props){
        super();
        this.state = {
            input: "",
            text: "",
            numWords: 30,
            wpm: 0
        };
    }

    componentDidMount(){
        let text = randomWords(this.state.numWords).join(" ");
        text = text.charAt(0).toUpperCase() + text.slice(1)
        this.setState({
            text: text,
            input: "",
            numGood: 0,
            numBad: 0
        })
    }

    calcCorrect(target, input){
        let targetLetters = target.split("");
        let inputLetters = input.split("");
        
        let numGood = 0;
        let madeMistake = false;
        for(let letterIndex in inputLetters){
            if(!madeMistake){
                if(inputLetters[letterIndex] === targetLetters[letterIndex]){
                    numGood = parseFloat(letterIndex) + 1;
                }
                else{
                    break;
                }
            }
        }

        let numBad = inputLetters.length - numGood;

        return {numGood, numBad};
    }

    handleInputChanged = (e) => {
        const {numGood, numBad} = this.calcCorrect(this.state.text, e.target.value);

        if(this.state.input.length === 0){
            if(e.target.value.length > 0){
                this.setState({
                    startTime: new Date()
                })
            }
        }
        else{
            const percDone = e.target.value.length/this.state.text.length
            const mins = (new Date() - this.state.startTime) / (1000*60);
            const wpm = (this.state.numWords * percDone)/mins;
            this.setState({
                wpm: wpm
            })
        }

        if(numBad <= 4){
            this.setState({
                input: e.target.value,
                numBad: numBad,
                numGood: numGood
            })
        }
    }

    render() {
        const {classes} = this.props;

        let goodText = this.state.text.substring(0, this.state.numGood);
        let badText = this.state.text.substring(this.state.numGood, this.state.numGood + this.state.numBad);
        let neutralText = this.state.text.substring(this.state.numGood + this.state.numBad, this.state.text.length)

        return (
            <div className={this.state.numBad > 3 ? classes.blackBack : classes.back}>
                <Container maxWidth="md">
                    <Typography className={this.state.numBad > 3 ? classes.badTitle : classes.title} variant="h1">{this.state.numBad > 3 ? "Go Back and Fix Your Mistake Fucker" : "WPM Calculator"}</Typography>

                    <Paper className={classes.text}>
                        <Typography variant="h5">
                            <span className = {classes.good}>{goodText}</span>
                            <span className = {classes.bad}>{badText}</span>
                            <span>{neutralText}</span>
                        </Typography>
                        <TextField label="Type Here" fullWidth multiline rows={7} className={classes.typing} onChange={this.handleInputChanged} value={this.state.input}/>
                        <Typography variant="h5">
                            WPM: {this.state.wpm}
                        </Typography>
                    </Paper>
                </Container>
            </div>
        )
    }
}

export default withStyles(styles)(Game);