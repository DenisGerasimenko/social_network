import React from "react";
import styles from './FormsControls.module.css';
import {Simulate} from "react-dom/test-utils";


// @ts-ignore
const FormControl = ({input, meta, child, ...props}) => {
    const hasError = meta.touched && meta.error;

    return (
        <div className={styles.formControl + '' + (hasError ? styles.error : '')}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}


export const Textarea = (props: any) => {
    const {input, meta, child, ...restProps} = props;
    // @ts-ignore
    return (<FormControl{...props}><textarea{...input}{...restProps}/></FormControl>)
}


export const Input = (props: any) => {
    // @ts-ignore
    const {input, meta, child, ...restProps} = props;
    return (<FormControl{...props}><input{...input}{...restProps}/></FormControl>)
}