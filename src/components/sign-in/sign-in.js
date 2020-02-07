import React from 'react';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();

        this.setState({email: '', password: ''});
    }

    handleChange = e => {
        const {value, name} = e.target;
        this.setState({[name]: value});
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign In with your Email and Password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type='email' 
                        name='email' 
                        value={this.state.email} 
                        handleChange={this.handleChange} 
                        required
                        label='Email'
                    />
                    <FormInput 
                        type='password' 
                        name='password' 
                        value={this.state.password} 
                        handleChange={this.handleChange} 
                        label='Password'
                        required
                    />
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
                            {' '}
                            Sign In With Google{' '}
                        </CustomButton>
                    </div>
                    

                </form>
            </div>
        )
    }
}

export default SignIn;