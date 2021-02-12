import React from 'react'
import { Paper, Typography, makeStyles } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.primary.main,
    },
    pageHeader:{
        padding:theme.spacing(3),
        marginBottom:theme.spacing(4),
        align: 'center'
    },
    pageTitle:{
        padding:theme.spacing(4),
        color: theme.palette.primary.textColor,
        '& .MuiTypography-subtitle2':{
            marginTop: theme.spacing(3),
            opacity:'0.6',
        }
    }
}))


export default function PageHeader(props) {
    const classes = useStyles();
    const { title, subTitle } = props;

    return (
        <Paper elevation={0} square className={classes.root}>
            <div className={classes.pageHeader}>
                <div className={classes.pageTitle}>
                    <Typography
                        variant="h3"
                        component="div"
                        align="center"
                    >
                        {title}</Typography>
                    <Typography
                        variant="subtitle2"
                        component="div"
                        align="center">
                        {subTitle}</Typography>
                </div>
            </div>
        </Paper>
    )
}