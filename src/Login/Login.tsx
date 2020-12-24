import React from 'react'
import {Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, TextField, Button, Grid} from '@material-ui/core'
import {useFormik} from "formik";
import {ErrorFormikType, LoginParamsType} from "../api/api";
import {useDispatch, useSelector} from "react-redux";
import {loginTC} from "../redux/auth-reducer";
import {StateType} from "../redux/redux-store";
import {Redirect} from 'react-router-dom';
import {Field, reduxForm} from "redux-form";


export const LoginForm = (props: any) => {
    console.log('RERENDER')
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={'login'} component={'input'}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={'input'}/>
            </div>
            <div>
                <Field component={'input'} name={'rememberMe'} type={'checkbox'}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

export const Login = (props: any) => {

    const onSubmit=(formData:any)=>{
        console.log(formData)
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
export default Login;
