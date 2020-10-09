import React, { Component } from 'react'
import { AppBar, Button, IconButton, TextField, Toolbar, Typography, withStyles } from '@material-ui/core';
import { Menu } from "@material-ui/icons";

export default class Graph extends Component {
    render() {
        return (
            <div>
                Data from parent X: {this.props.dataToGraphX} <br />
                Data from parent Y: {this.props.dataToGraphY} <br />
                Data from parent Z: {this.props.dataToGraphZ} <br />
            </div>
        )
    }
}
