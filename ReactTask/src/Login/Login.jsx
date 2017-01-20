import React from 'react';

class Login extends React.Component {
	
	constructor() {
		super();
		this.state = {login: '', password: ''};
	}
	
	submitHandler(event) {
		let headers = new Headers();
			headers.append("Content-Type", "application/x-www-form-urlencoded");
		fetch('http://localhost:3000/login',  {
			method: "POST",
			headers,
			body: 'login=' + this.state.login + '&password=' + this.state.password
		}).then((res) => {
			alert('Sakses')
		});
		event.preventDefault();
	}
	
	handleLoginChange(event) {
		this.setState({login: event.target.value});
	}
	
	handlePasswordChange(event) {
		this.setState({password: event.target.value});
	}


	render() {
		return (<form onSubmit={this.submitHandler.bind(this)}>
			<label>
			  Login:
			  <input type="text" value={this.state.login} onChange={this.handleLoginChange.bind(this)}/>
			</label>
			<label>
			  Password:
			  <input type="text" value={this.state.password} onChange={this.handlePasswordChange.bind(this)}/>
			</label>
			<input type="submit" value="Submit" />
		  </form>);
		}
};

export default Login;
