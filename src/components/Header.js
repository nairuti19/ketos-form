import React from 'react';
import { AppBar, Toolbar, Grid, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.textColor,
        boxShadow: 'none',
    },
}))

export default function Header() {
    const classes = useStyles();
    return ( 
        <AppBar position="sticky" className={classes.root}>
        <Toolbar>
            <Grid container
                alignItems="center">
                <Grid item>
                    <Typography
                        variant="h4"
                        component="div"
                    >
                        KETOS
                    </Typography>
                </Grid>  
            </Grid>
        </Toolbar>
    </AppBar>
    )
}