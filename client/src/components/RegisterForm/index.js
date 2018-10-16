import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import API from '../../utils/API';
import { withRouter } from 'react-router-dom';
import "./registerForm.css";
import Grid from '@material-ui/core/Grid';

class RegisterForm extends React.Component {

    state = {
        user: {
            username: "",
            password: "",
            name: "",
            phone: "",
            street: "",
            city: "",
            state: "",
            zipcode: "",
            email: "",
            age: ""
        },
        redirect: false
    }

    handleRedirect = () => {
        if (this.state.redirect) {
            console.log("working")
            this.props.history.push('/')
        }
    }

    handleInputChange = event => {
        var user = this.state.user;
        const { name, value } = event.target;
        user[name] = value;
        this.setState({
            user,
            redirect: false
        })
    };

    componentDidMount() {
        console.log(this.props);
    }

    handleFormSubmit = event => {
        event.preventDefault();
        var currentState = this.state;
        currentState.redirect = true;
        this.setState({currentState})
        let object = {username:this.state.user.username}
        API.saveUser({
            username: this.state.user.username,
            password: this.state.user.password,
            name: this.state.user.name,
            phone: this.state.user.phone,
            street: this.state.user.street,
            city: this.state.user.city,
            state: this.state.user.state,
            zip: this.state.user.zip,
            email: this.state.user.email,
            age: this.state.user.age
        })
        .getUser(object)
        .then(
            data => 
            this.props.history.push("/users/" + data.username)
        );
    }

    render () {
        return (
            <Grid item xs={12}>
                <form className="registerForm">
                    <h3>Login Information</h3>
                    <TextField
                        style={{margin: 15}}
                        id="username"
                        label="Username"
                        margin="normal"
                        name="username"
                        value={this.state.user.username}
                        onChange={this.handleInputChange}
                        required={true}
                    />
                    <TextField
                        style={{margin: 15}}
                        id="password"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                        name="password"
                        value={this.state.user.password}
                        onChange={this.handleInputChange}
                        required={true}
                    />
                    <h3>Personal Information</h3>
                    <TextField
                        style={{margin: 15}}
                        id="name"
                        label="Name"
                        margin="normal"
                        name="name"
                        value={this.state.user.name}
                        onChange={this.handleInputChange}
                        required={true}
                    />
                    <TextField
                        style={{margin: 15}}
                        id="email"
                        label="Email"
                        placeholder="johndoe@example.com"
                        margin="normal"
                        name="email"
                        value={this.state.user.email}
                        onChange={this.handleInputChange}
                        required={true}
                    />
                    
                    <TextField
                        style={{margin: 15}}
                        id="age"
                        label="Age"
                        type="number"
                        margin="normal"
                        name="age"
                        value={this.state.user.age}
                        onChange={this.handleInputChange}
                        required={true}
                    />
                    <TextField
                        style={{margin: 15}}
                        id="phone"
                        label="Phone Number"
                        type="number"
                        margin="normal"
                        placeholder="XXX-XXX-XXXX"
                        name="phone"
                        value={this.state.user.phone}
                        onChange={this.handleInputChange}
                    />
                    <div>
                        <TextField
                            style={{margin: 15}}
                            id="street"
                            label="Street"
                            margin="normal"
                            name="street"
                            value={this.state.user.street}
                            onChange={this.handleInputChange}
                        />
                        <TextField
                            style={{margin: 15}}
                            id="city"
                            label="City"
                            margin="normal"
                            name="city"
                            value={this.state.user.city}
                            onChange={this.handleInputChange}
                        />
                        <TextField
                            style={{margin: 15}}
                            id="state"
                            label="State"
                            margin="normal"
                            name="state"
                            value={this.state.user.state}
                            onChange={this.handleInputChange}
                        />
                        <TextField
                            style={{margin: 15}}
                            id="zipcode"
                            label="Zipcode"
                            type="number"
                            margin="normal"
                            name="zipcode"
                            value={this.state.user.zipcode}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    
                    <div>
                        <Button style={{margin: 5}} onClick={this.handleFormSubmit} type="submit" variant="contained" color="primary">
                            Create Account
                        </Button>
                        
                        <Button style={{margin: 5}} variant="contained" color="primary" href="/">
                            Go Back
                        </Button>
                    </div>
                </form>
            </Grid>
            
        );
    }
}

export default withRouter(RegisterForm);