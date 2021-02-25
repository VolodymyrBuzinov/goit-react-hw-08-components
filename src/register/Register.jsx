import { Component } from 'react';
import styles from './Register.module.css';

export default class Register extends Component {
    state = {
        name: '',
        mail: '',
        password: ''
}
    formSubmit = evt => {
        evt.preventDefault();       
    }
    onChangeInput = evt => {        
        if (evt.target.name === 'name') {
            this.setState({name: evt.target.value});
        }
        if (evt.target.name === 'mail') {
            this.setState({mail: evt.target.value});
        }
        if (evt.target.name === 'password') {
            this.setState({password: evt.target.value});
        }
    }
    render() {
        return (
            <div className={styles.container}>
                <h2>Registration</h2>
                <form className={styles.form} onSubmit={this.formSubmit}>
                    <label>
                        <span>Your name</span> 
                        <input type="text" name='name' onChange={this.onChangeInput} required/>
                    </label>
                    <label>
                        <span>Your e-mail</span>                        
                        <input type="text" name='mail' onChange={this.onChangeInput} required/>
                    </label>
                    <label>
                        <span>Your password</span>                        
                        <input type="text" name='password' onChange={this.onChangeInput} required/>
                    </label>
                    <button type='submit'>Register</button>
                </form>
            </div>
    )
}
}