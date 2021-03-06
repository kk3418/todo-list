import React, {useState} from 'react'
import {useForm} from 'react-hook-form'
import Button from 'react-bootstrap/Button'
import { LoginUI } from './LoginUI'
import {Auth} from '../firebase'

const WRONG_PASSWORD = "auth/wrong-password"

export default function Login() {
    const [signUp, setSignUp] = useState(false)
    const { handleSubmit, register, errors } = useForm()
    
    const onSubmit = (data, e) => {
        e.preventDefault()
        const { account, password } = data
        signUp ? Auth.createUserWithEmailAndPassword(account, password)
        .then(() => window.alert(`Your accont is created`))
        .catch(error => window.alert(error.message)) 
        :
        Auth.signInWithEmailAndPassword(account, password)
        .catch(error => {
            (error.code === WRONG_PASSWORD) ? 
                window.alert(`Your passwrod is wrong`)
                :
                setSignUp(window.confirm(
                    `Your account doesn't exist, wanna create one ?`
                ))
        })
    }

    const loginUIProps = {
        handleSubmit: handleSubmit(onSubmit),
        register: register,
        errors: errors,
    }


    return (
        <LoginUI {...loginUIProps}
            signUp={signUp}
        >
            <Button type="button"
                variant="secondary"
                onClick={() => setSignUp(!signUp)}
            >
                {signUp ? 'Back to login' : 'Go to sigup' }
            </Button>
        </LoginUI>
    )
}