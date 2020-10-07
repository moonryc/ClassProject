import React, { Component } from 'react';
import { render } from "react-dom";
import { Resizable } from 're-resizable';

export default class ChatBot extends Component {
    render() {
        const style = {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "solid 1px #ddd",
            background: "#f0f0f0"
        };
        return (

            <Resizable
                style={style}
                defaultSize={{
                    width: 200,
                    height: 200
                }}
            >
                001
            </Resizable>
        )
    }
}

