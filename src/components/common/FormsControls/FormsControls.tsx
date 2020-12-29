import React, {FC} from "react";
import styles from './FormsControls.module.css';
import {WrappedFieldProps} from 'redux-form'
import { WrappedFieldMetaProps} from 'redux-form/lib/Field'

type FromControlPropsType = {
    meta: WrappedFieldMetaProps
}

const FormControl: FC<FromControlPropsType> = ({meta: {touched, error}, children}) => {
    const hasError = touched && error;
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}


export const Textarea = (props: WrappedFieldProps) => {
    const {input, meta,  ...restProps} = props;
    return (<FormControl{...props}><textarea{...input}{...restProps}/></FormControl>)
}


export const Input = (props: WrappedFieldProps) => {
    const {input, meta, ...restProps} = props;
    return (<FormControl{...props}><input{...input}{...restProps}/></FormControl>)
}