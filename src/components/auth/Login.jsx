import React from 'react';
// import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class Login extends React.Component {
  	state = {
  		checked: false,
  		isLoggedIn: false
  	}

  	componentDidMount = () => {
  		this.setState(previousState => ({checked: true}));
  	}

  	handleSubmit = (e) => {
  		e.preventDefault()
  		this.setState({ isLoggedIn: true });

  		// axios.post('', data).then((res) => {
  		// 	// do whatever
  		// }).catch(err){
  		// 	console.log(err);
  		// }
  	}
  	
  	handleClose = (event, reason) => {
	    if (reason === 'clickaway') {
	      return;
	    }

	    this.setState({isLoggedIn: false});
	};


	render() {
		const { checked, isLoggedIn } = this.state;
		return (
			<div className="container-fluid">
				<div className="row" style={{ height: '100vh' }}>
					<div className="col-sm-12 col-md-3 col-lg-4 col-xl-4"></div>
					<div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 my-auto text-center">
						<Card>
      					<CardContent>
								<Typography variant="h4" className="mb-2">Login</Typography>
								<Slide direction="up" in={checked} mountOnEnter unmountOnExit>
									<form noValidate autoComplete="off" onSubmit={ this.handleSubmit }>
										<div className="form-group">
									  		<TextField id="matricNo" label="Matric No" fullWidth variant="outlined" />
									  	</div>
									  	<div className="form-group">
									  		<TextField id="password" label="Password" fullWidth variant="outlined" />
									  	</div>
									  	{isLoggedIn && 
									  		<Snackbar open={checked} autoHideDuration={6000} onClose={this.handleClose}>
									  			<Alert variant="filled" severity="success">This is a success alert — check it out!</Alert>
									  		</Snackbar>
									  	}
									  	<Button type="submit" variant="contained" color="primary" size="large" fullWidth>Submit</Button>
									</form>
								</Slide>
							</CardContent>
						</Card>
					</div>
					<div className="col-sm-12 col-md-3 col-lg-4 col-xl-4"></div>
				</div>
			</div>
		);
	}
}

export default Login;