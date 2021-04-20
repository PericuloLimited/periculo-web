import React from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import InputBase from '@material-ui/core/InputBase';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import { spacing } from '@material-ui/system';
import { blue } from '@material-ui/core/colors';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import socketIOClient from "socket.io-client";
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import uid from 'uid';
import { SOCKET_IO_ENDPOINT } from '@/lib/constants'
import contentPiece from '../components/contentPiece.js'
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { useState } from 'react';


import {
  fade,
  ThemeProvider,
  withStyles,
  makeStyles,
  createMuiTheme,
} from '@material-ui/core/styles';


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}


const BootstrapButton = withStyles((theme) => ({

  root: {

    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },

 },

[theme.breakpoints.up('md')]: {

  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',

// ***edited
whiteSpace: 'nowrap',

  },

 },


[theme.breakpoints.down('sm')]: {

  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '12px 32px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',

// ***edited
whiteSpace: 'nowrap',
    borderRadius: 8,

  },

 },

}))(Button);


const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },

    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
   },
[theme.breakpoints.up('md')]: {
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,

// ***edited
width: '300px',

    padding: '10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.

// ***edited
borderTopRightRadius: 0,
borderBottomRightRadius: 0,


  },
  },
[theme.breakpoints.down('sm')]: {
root: {
	width: "100%",
},
input: {
    borderRadius: 8,
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    border: '1px solid #334e85',
    fontSize: 16,
    textAlign: "center",

	width: "100%",

    padding: '14px 16px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.



  },

  }
}))(InputBase);





const BootstrapInput_b = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },

    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
   },
[theme.breakpoints.up('md')]: {
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    border: '1px solid #002b80',
    fontSize: 16,

// ***edited
    width: '480px',

    padding: '14px 16px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.

// ***edited
borderTopRightRadius: 0,
borderBottomRightRadius: 0,


  },
  },
[theme.breakpoints.down('sm')]: {
root: {
	width: "100%",
},
input: {
    borderRadius: 8,
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    border: '1px solid #334e85',
    fontSize: 16,
    textAlign: "center",

	width: "100%",

    padding: '14px 16px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.



  },

  }
}))(InputBase);


const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));


const WhiteCheckbox = withStyles({
  root: {
    color: '#002b80',
    '&$checked': {
      color: blue[400],
    },
  },
	icon: {
    borderWidth: '1px',
borderRadius: 0,
    width: 32,
    height: 32,

	},
  checked: {},
})((props) => <Checkbox  color="default" {...props} />);



export default function Index(props) {


	const router = useRouter()

	const [backdrop_open, setBackdropOpen] = React.useState(false);
	const [SnackbarOpen, setSnackbarOpen] = React.useState(false);


	
	const [SnackbarMessage, setSnackbarMessage] = React.useState('');
    
	var timer = null;


	const handleBackdropClose = () => {
		setBackdropOpen(false);
		setState(prevState => ({ ...prevState, ['inputDisabled']: false }));
		//clearTimeout(timer)
	};



	const handleBackdropOpen = () => {
		setBackdropOpen(true);

		//timer = setTimeout(() => { handleBackdropClose(); setSnackbarOpen(true); }, 8000);
	};

	const handleSnackbarClose = () => {
		setSnackbarOpen(false);
	};




	const handleEmailSubmit = (email) => {

		handleBackdropOpen();

		setState(prevState => ({ ...prevState, ['inputDisabled']: true }));


var requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email })
    };


		fetch('https://api.usewarden.com/api/threats',requestOptions)
			.then(results => results.json())
			.then(data => {

//console.log(data)


			dispatch({type: 'set_results',results: {email: data.email,data: data.threats} })

			
			router.push('Report').then(() => window.scrollTo(0, 0));

			handleBackdropClose();

//props.scroll(props.myRef)
//console.log(json)

			}).catch(function(error) {

			handleBackdropClose();

			setSnackbarMessage(error.message)
			setSnackbarOpen(true);
})


		//socket.emit('checkEmail',{uid: uid_,'email': email})	
	};




	const [state, setState] = React.useState({ email: "", notify_me: false, email_b: "", notify_me_b: false, inputDisabled: false });
  
	function onChange(event) {
		const { name, value } = event.target;
		setState(prevState => ({ ...prevState, [name]: value }));
	}

	function onChangeChecked(event) {
		const { name, checked } = event.target;
		setState(prevState => ({ ...prevState, [name]: checked }));
	}


	const dispatch = useDispatch()


if(false) {
	const socket = socketIOClient(SOCKET_IO_ENDPOINT);


	socket.on("displayBreaches", data => {
//console.log(data)


		dispatch({type: 'set_results',results: {email: state.email,data: data} })


		//if(data.length) {
			//router.push({pathname: 'Report', query: {}})
			router.push('Report')
		//}


		handleBackdropClose();
    });


}

	const uid_ = uid()

	const handleSubmit = function(event) {
		if(state.email) {
			handleEmailSubmit(state.email)
		}
		event.preventDefault();
	}

	const handleSubmit_b = function(event) {
		if(state.email_b) {
			handleEmailSubmit(state.email_b)
		}
		event.preventDefault();
	}

	const classes = useStyles();




	const theme = useTheme();
	const mdAndUp = useMediaQuery(theme.breakpoints.up('md'));




	return (
				<>


			<Container  maxWidth="md" align="center">

				<form  style={{margin: "auto"}} onSubmit={handleSubmit_b}>

				{mdAndUp ? (

<div style={{textAlign: "left", display: "inline-block"}}>	
					<ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
      					<BootstrapInput_b name="email_b" value={state.email_b} onChange={onChange} className="email_input_b" placeholder="Enter your email here" defaultValue="" id="bootstrap-input_b" />

						<BootstrapButton disabled={state.inputDisabled}  type="submit" variant="contained"  style={{backgroundColor: "#002b80",color: "white"}}  className={classes.margin}>
							Check Now
						</BootstrapButton>

					</ButtonGroup>

					<br/>
					<FormControlLabel  style={{color: "#002b80", fontWeight: "normal"}}
        				control={<WhiteCheckbox checked={state.notify_me_b} onChange={onChangeChecked} name="notify_me_b" />}
						label="Notify me about future breaches"
					/>

					
</div>

) :
								<>

<div style={{width: "300px", textAlign: "left"}}>
<BootstrapInput_b name="email_b" value={state.email_b} onChange={onChange} placeholder="Enter your email here" defaultValue="" id="bootstrap-input_b" />

			<br/>
					<FormControlLabel style={{fontSize: "16px", color: "#002b80", fontWeight: "normal"}}
        				control={<WhiteCheckbox checked={state.notify_me_b} onChange={onChangeChecked} name="notify_me_b" />}
						label="Notify me about future breaches"
					/>



</div>
<Box py={4}  pb={0}>
									<BootstrapButton  disabled={state.inputDisabled} type="submit" variant="contained"  style={{backgroundColor: "#002b80",color: "white"}} >
										Check Now
									</BootstrapButton>
</Box>
					

</>							

								}



				</form>

</Container>

<Backdrop className={classes.backdrop} open={backdrop_open} onClick={handleBackdropClose}>
  <CircularProgress color="inherit" />
</Backdrop>

<Snackbar open={SnackbarOpen} autoHideDuration={3000} onClose={handleSnackbarClose}>
  <Alert severity="error">
    {SnackbarMessage}
  </Alert>
</Snackbar>

</>
  );
}





