import React from 'react'
import {signIn} from '../firebase'
import {useForm} from 'react-hook-form'
import {useDispatch} from 'react-redux'
import {loginSlice} from '../Redux/loginSlice'
import Form from 'react-bootstrap/Form'
import Alert from 'react-bootstrap/Alert'
 import Button from 'react-bootstrap/Button'

export default function Login() {
    const { register, errors, handleSubmit } = useForm()
    const { login } = loginSlice.actions
    const dispatch = useDispatch()
    
    const onSubmit = (data, e) => {
        e.preventDefault()
        const { account, password } = data
        signIn(account, password)
            .then(userCredential => {
                console.log(userCredential)
                dispatch(login())
            })
            .catch(error => console.error(error.message))
    }
    const onError = (error, e) => console.log(error, e)
    const errorsText = text => <Alert variant="danger" 
        bsPrefix="alert-items"
    >
        {`Please insert your ${text}`}
    </Alert>

    return (
        <Form onSubmit={handleSubmit(onSubmit, onError)} 
            className="login-container"
        >
            <Form.Group controlId="email-input"
                bsPrefix="login-items"
            >
                <Form.Label>Email</Form.Label>
                <Form.Control size="sm"
                    type="email" placeholder="email" 
                     ref={register({required: true})} name="account"
                />
                { errors.account && errorsText('email')}
            </Form.Group>

            <Form.Group controlId="password-input"
                bsPrefix="login-items"
            >
                <Form.Label>Password</Form.Label>
                <Form.Control size="sm"
                    type="password" placeholder="Password" 
                    ref={register({required: true})} name="password"
                />
                { errors.password && errorsText('password')}
            </Form.Group>

            <Form.Group controlId="agree-checkbox"
                bsPrefix="login-items"
            >
                <Form.Check type="checkbox" 
                    label="I agree my email is seen by developer" 
                    ref={register({required: true})} name="agree_check"
                />
                { errors.agree_check && <Alert bsPrefix="alert-items">
                    Please check it
                </Alert> }
            </Form.Group>
            <Button variant="primary" type="submit">
                Login / Register
            </Button>
        </Form>
    )
}