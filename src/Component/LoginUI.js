import React from 'react'
import Form from 'react-bootstrap/Form'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'

export function LoginUI(props) {
    const { handleSubmit, register, errors, signUp } = props
    const registerRef = register({ required: true, minLength: 6 })
    const errorsText = text => <Alert bsPrefix="alert-items">
        {`Please insert your ${text}`}
    </Alert>

    return (
        <Form onSubmit={handleSubmit} 
            className="login-container"
        >
            <Form.Group controlId="email-input"
                bsPrefix="login-items"
            >
                <Form.Label>Email</Form.Label>
                <Form.Control size="sm"
                    type="email" placeholder="email"
                    ref={registerRef} name="account"
                />
                { errors.account && errorsText('email')}
            </Form.Group>

            <Form.Group controlId="password-input"
                bsPrefix="login-items"
            >
                <Form.Label>Password</Form.Label>
                <Form.Control size="sm"
                    type="password" placeholder="Password" 
                    ref={registerRef} name="password"
                />
                { (errors.password && errorsText(
                    'password and at least 6 characters'
                )) }
            </Form.Group>

            {signUp && <Form.Group controlId="agree-checkbox"
                bsPrefix="login-items"
            >
                <Form.Check type="checkbox" 
                    label="I agree my email is seen by developer" 
                    ref={registerRef} name="agree_check"
                />
                { errors.agree_check && <Alert bsPrefix="alert-items">
                    Please check it
                </Alert> }
            </Form.Group>}
            <Form.Group controlId="signin&signup-button" 
                bsPrefix="login-buttons"
            >
                <Button variant="primary" type="submit">
                    { signUp ? 'Register': 'Lgoin' }
                </Button>
                { props.children }
            </Form.Group>
        </Form>
    )
}