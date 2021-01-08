import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../components/common/FormsControls/FormsControls";
import {required} from "../utils/validators/validators";
import {Redirect} from "react-router-dom";
import style from './../components/common/FormsControls/FormsControls.module.css'
import {LoginParamsType} from "../api/api";
import {StateType} from "../redux/redux-store";
import {connect} from "react-redux";
import {login} from "../redux/auth-reducer";


type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}


const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    console.log('RERENDER')
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'} name={'email'}
                       validate={[required]}
                       component={Input}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} type={'password'}
                       validate={[required]}
                       component={Input}/>
            </div>
            <div>
                <Field component={Input} name={'rememberMe'} type={'checkbox'}/> remember me
            </div>
            {props.error && <div className={style.formSummaryError}>
                {props.error}
            </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

type MapStatePropsType = {
    isAuth: boolean
}
type MapDispatchPropsType = {
    login: (data: LoginParamsType) => void
}
type LoginPropsType = MapStatePropsType & MapDispatchPropsType

const Login = (props: LoginPropsType) => {

    const onSubmit = (formData: FormDataType) => {
        props.login({email: formData.email, password: formData.password, rememberMe: formData.rememberMe});
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
const mapStateToProps = (state: StateType) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login);
