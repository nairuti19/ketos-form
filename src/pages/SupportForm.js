import React from 'react';
import {Grid} from '@material-ui/core/';
import { useForm, CustomForm } from '../components/useForm';
import TextInput from '../components/TextInput';

const initialValues = {
    id: 0, 
    firstName: '',
    lastName: '',
    email: '', 
    requestMessage: '',
}

export default function SupportForm() {

    const{
        values,
        setValues,
        handleInputChange
    } = useForm(initialValues);

    return ( 
        <CustomForm>
            <Grid container>
                <Grid item xs={6}>
                <TextInput
                  name="firstName"
                  label="First Name"
                  value={values.firstName}
                  onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={6}>
                <TextInput
                    variant="outlined"
                    label="Last Name"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12}>
                <TextInput
                   name="email"
                   label="Email Address"
                   value={values.email}
                   onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12}>
                <TextInput
                   name="requestMessage"
                   label="Please describe the problem"
                   value={values.requestMessage}
                   onChange={handleInputChange}
                  />
                </Grid>
            </Grid>
        </CustomForm>
    )
}