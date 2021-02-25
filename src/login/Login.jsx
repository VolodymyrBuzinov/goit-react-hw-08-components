import { Component } from 'react';
import styles from './Login.module.css';

export default class Login extends Component {
    state = {        
        mail: '',
        password: ''
}
formSubmit = evt => {
    evt.preventDefault();    
    }
    onChangeInput = evt => {             
        if (evt.target.name === 'mail') {
            this.setState({mail: evt.target.value});
        }
        if (evt.target.name === 'password') {
            this.setState({password: evt.target.value});
        }
    }
    render() {
        return (
            <>
                <div className={styles.container}>
                <h2>Login</h2>
                <form className={styles.form} onSubmit={this.formSubmit}>                    
                        <label>
                            <span>Your e-mail</span>                        
                            <input type="text" name='mail' onChange={this.onChangeInput} required/>
                    </label>
                        <label>
                            <span>Your password</span>                        
                        <input type="text" name='password' onChange={this.onChangeInput} required/>
                        </label>
                        <button type='submit'>Login</button>
                </form>
            </div>
            </>
    )
}
}