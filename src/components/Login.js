import React from 'react'
import { TextField, Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        }
    }

    submitForm(e) {
        e.preventDefault()
        console.log(this.state.isLoggedIn)
        this.props.history.push('/');
        this.setState({
            isLoggedIn: !this.state.isLoggedIn
        })
      }
    render() {
        return (
            <div>
                <form autoComplete="off" onSubmit={this.submitForm.bind(this)}>
                    <TextField label="Username"/>
                    <TextField type='password' label="Password"/>
                    <Button id='login-button' type="submit" variant="contained" color="primary">Login</Button>
                </form>
            </div>
    
        );
    }
}
export default withRouter(Login);