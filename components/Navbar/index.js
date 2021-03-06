import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from '../Navbar/styles';
import { useRouter } from 'next/router'

export default function ButtonAppBar() {
  const classes = useStyles();
  const router = useRouter();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Home
                    </Typography>
                    <Button 
                        color="inherit"
                        onClick={() => {router.push('/components')}}
                    >
                        Component
                    </Button>
                    <Button 
                        color="inherit"
                        onClick={() => {router.push('/meals')}}
                    >
                        Meals
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
