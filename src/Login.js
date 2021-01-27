import React from 'react'
import {useForm} from 'react-hook-form'
import {useDispatch} from 'react-redux'
import {loginSlice} from './Redux/loginSlice'
import Form from 'react-bootstrap/Form'
import FormLabel from 'react-bootstrap/FormLabel'
import FormGroup from 'react-bootstrap/FormGroup'
import FormControl from 'react-bootstrap/FormControl'
import FormCheck from 'react-bootstrap/FormCheck'
import FormText from 'react-bootstrap/FormText'
 import Button from 'react-bootstrap/Button'

export default function Login() {
    const { register, handleSubmit, errors } = useForm()
    const { login } = loginSlice.actions
    const dispatch = useDispatch()
    const submit = data => {
        dispatch(login())
        console.log(data)
    }
    const errorsText = text => <FormText className="text-muted">
        {`Please insert your ${text}`}
    </FormText>

    return (
        <Form onSubmit={handleSubmit(submit)} 
            className="login-container"
        >
            <FormGroup controlId="email-input"
                bsPrefix="login-items"
            >
                <FormLabel>Email</FormLabel>
                <FormControl size="sm"
                    type="email" placeholder="email" 
                     ref={register({required: true})} name="account"
                />
                { errors.account && errorsText('email')}
            </FormGroup>

            <FormGroup controlId="password-input"
                bsPrefix="login-items"
            >
                <FormLabel>Password</FormLabel>
                <FormControl size="sm"
                    type="password" placeholder="Password" 
                    ref={register({required: true})} name="password"
                />
                { errors.password && errorsText('password')}
            </FormGroup>

            <FormGroup controlId="agree-checkbox"
                bsPrefix="login-items"
            >
                <FormCheck type="checkbox" 
                    label="I agree my email is seen by developer" 
                    ref={register({required: true})} name="agree_check"
                />
                { errors.agree_check && <FormText className="text-muted">
                    Please check it
                </FormText> }
            </FormGroup>
            <Button variant="primary" type="submit">
                Login / Register
            </Button>
        </Form>
    )
}