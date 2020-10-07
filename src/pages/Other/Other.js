import { AppBar, Button, IconButton, Toolbar, Typography, withStyles } from '@material-ui/core';
import {Menu} from "@material-ui/icons";
import React, { Component } from 'react'

const styles = theme => ({
    root: {
        flexGrow: 2,
    },
    menuButton: {
        marginRight: theme.spacing(3),
    },
    title: {
        flexGrow: 2,
    },
});

class Home extends Component {
    render() {
        const { classes } = this.props;

        return (
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <Menu />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Other Page
                </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        )
    }
}

export default withStyles(styles)(Home);