import React, {useState} from 'react';
import {Grid,TextField, makeStyles} from '@material-ui/core/';

const useStyles = makeStyles(theme=>({
    root:{
        '& .MuiFormControl-root': {
            width: '90%',
            margin: theme.spacing(1)
        }
    }
}))

const initialValues = {
    id: 0, 
    firstName: '',
    lastName: '',
    email: '', 
    requestMessage: '',
}

export default function SupportForm() {

    const classes = useStyles();

    const[values, setValues] = useState(initialValues);

    const handleInputChange = e => {
        const{name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    return ( 
        <form className={classes.root}>
            <Grid container>
                <Grid item xs={6}>
                  <TextField
                    variant="outlined"
                    name="firstName"
                    label="First Name"
                    value={values.firstName}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={6}>
                <TextField
                    variant="outlined"
                    label="Last Name"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    variant="outlined"
                    name="email"
                    label="Email Address"
                    value={values.email}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    variant="outlined"
                    name="requestMessage"
                    label="Please describe the problem"
                    value={values.requestMessage}
                    onChange={handleInputChange}
                  />
                </Grid>
            </Grid>
        </form>
    )
}