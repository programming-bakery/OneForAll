import React, { useState } from 'react';
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';
import {makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    fab_btn: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    para: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
    },
}));

function MyApp() {
    const [count, setCount] = useState(0);
    const classes = useStyles();
    const incrementCounter = () => setCount(count + 1);

    return (
        <React.Fragment>
            <AppBar>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton}
                                color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <p className={classes.para}>
                You have pushed the button this many times: {count}
            </p>
            <Fab className={classes.fab_btn} color="primary" aria-label="add"
                 onClick= {incrementCounter}>
                <AddIcon/>
            </Fab>
        </React.Fragment>
    );
}

export default MyApp;
