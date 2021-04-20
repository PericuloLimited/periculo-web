import React from 'react';
import Container from '@material-ui/core/Container';
import ButtonAppBar from '../components/ButtonAppBar.js'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import InputBase from '@material-ui/core/InputBase';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import { spacing } from '@material-ui/system';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { blue } from '@material-ui/core/colors';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { getSiteContents } from '@/lib/api'
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
    borderColor: '#002b80',

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
    border: '1px solid #002b80',
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
    border: '1px solid #002b80',
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
    border: '1px solid #002b80',	//#ced4da
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
    border: '1px solid #002b80',	//#334e85
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
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    }
  },

[theme.breakpoints.down('sm')]: {
	warden_full_length: {
		width: "200px"
	},
	app_icon: {
		width: "140px",
		margin: "8px"
	},
	video: {
		width: "100%"
	},
	warden_salute: {
		width: "220px",
		height: "220px"
	},
	h1: {
		fontSize: "31px"
	},
	h3: {
		fontSize: "18px"
	},
	h1_50: {
		fontSize: "28px"
	},
	h3_20: {
		fontSize: "18px"
	},
    container: {
      textAlign: 'center',
    },
    gridItem: {
    },
  },

[theme.breakpoints.up('md')]: {
	app_icon: {
		width: "160px",
		margin: "16px"
	},
	video: {
		width: "800px"
	},
	warden_salute: {
		width: "400px",
		height: "400px"
	},
	h1: {
		fontSize: "60px"
	},
	h3: {
		fontSize: "22px"
	},
	h1_50: {
		fontSize: "50px"
	},
	h3_20: {
		fontSize: "20px"
	}
},
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));


const WhiteCheckbox = withStyles({
  root: {
    color: 'white',
    '&$checked': {
      color: blue[400],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);


const BlueCheckbox = withStyles({
  root: {
    color: '#002b80',
    '&$checked': {
      color: blue[400],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);





export default function Index({siteContents}) {

	const router = useRouter()

	const [backdrop_open, setBackdropOpen] = React.useState(false);
	const [SnackbarOpen, setSnackbarOpen] = React.useState(false);


	//const [SnackbarMessageOpen, setSnackbarMessageOpen] = React.useState(false);
	

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




	const dispatch = useDispatch()

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



if(false) {
	const socket = socketIOClient(SOCKET_IO_ENDPOINT);



	socket.on("message", message => {
//console.log(data)

		handleBackdropClose();

		setSnackbarMessageOpen(false);

		SnackbarMessage = message

    });


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


	const siteContents_ = [...siteContents]


	const theme = useTheme();
	const mdAndUp = useMediaQuery(theme.breakpoints.up('md'));




	return (
		<Container maxWidth={false} disableGutters>
			<ButtonAppBar />


			<Box style={{color: "white", backgroundColor: "#2c72b5"}}>

		<Container maxWidth="lg" className={classes.container}>


			{mdAndUp ? (


			<Grid container style={{color: "white"}} spacing={0}>

				<Grid container item sm={7} spacing={0}>

					<Box p={8} pr={0} pl={12}>

						<h1 style={{fontFamily: "Merriweather"}} className={classes.h1}>
							{contentPiece(siteContents_.shift())}
						</h1>

						<h3 style={{fontFamily: "Muli"}} className={classes.h3}>
							{contentPiece(siteContents_.shift())}
						</h3>


						<Box mt={7} >
							<form onSubmit={handleSubmit}>	
								<ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
      								<BootstrapInput name="email" value={state.email} onChange={onChange} className="email_input" placeholder={siteContents_.shift()}  id="bootstrap-input" />

									<BootstrapButton  disabled={state.inputDisabled} type="submit" variant="contained"  style={{backgroundColor: "#002b80",color: "white"}}  className={classes.margin}>
										{contentPiece(siteContents_.shift())}
									</BootstrapButton>

								</ButtonGroup>

								<br/>

								<FormControlLabel 
									checked={state.notify_me}
        							control={<WhiteCheckbox checked={state.notify_me} onChange={onChangeChecked} name="notify_me" />}
									label={siteContents_.shift()}
								/>

							</form>
					
						</Box>

					</Box>
    
				</Grid>


				<Grid container alignItems="flex-end" item sm={4} spacing={0} >
    
					<Box p={8} pl={0} mb={12} >
						<img className={classes.warden_salute} src="/assets/images/warden_salute.png" />
					</Box>

				</Grid>

			</Grid>



) :
				
(
				<Box py={2} pb={0}>

<Container  maxWidth="md" align="center">

						<h1 style={{fontFamily: "Merriweather"}} className={classes.h1}>
							{contentPiece(siteContents_.shift())}
						</h1>

						<h3 style={{fontFamily: "Muli"}} className={classes.h3}>
							{contentPiece(siteContents_.shift())}
						</h3>


						<Box py={2} pb={4} >
							<form   style={{margin: "auto"}} onSubmit={handleSubmit}>	

<div style={{width: "300px", textAlign: "left"}}>
<BootstrapInput name="email" value={state.email} onChange={onChange} placeholder={siteContents_.shift()}  />

								<br/>

								<FormControlLabel 
									checked={state.notify_me}
        							control={<WhiteCheckbox checked={state.notify_me} onChange={onChangeChecked} name="notify_me" />}
									label={siteContents_[1]}
								/>


						</div>

<Box py={4}  pb={2}>
									<BootstrapButton  disabled={state.inputDisabled} type="submit" variant="contained"  style={{backgroundColor: "#002b80",color: "white"}} >
										{contentPiece(siteContents_[0])}
									</BootstrapButton>
</Box>

							{siteContents_.shift() && siteContents_.shift() ? '' : ''}

							</form>
					
						</Box>

<Box  >
						<img className={classes.warden_salute} src="/assets/images/warden_salute.png" />
					</Box>


</Container>
					</Box>
)
								}


</Container>
					</Box>





			<Box py={4} style={{color: "white", backgroundColor: "#2c72b5"}}>
{contentPiece(siteContents_.shift())}
				<Container  maxWidth="md" align="center">

					<h1 style={{fontFamily: "Merriweather"}} className={classes.h1_50}>{contentPiece(siteContents_.shift())}</h1>

					<h3 style={{fontFamily: "Muli"}} className={classes.h3_20}>
						{contentPiece(siteContents_.shift())}
					</h3>


					<Box py={4} >
						<video className={classes.video} controls type="video/mp4" src="/assets/images/HD_1-2.mp4" />
					</Box>


				</Container>

			</Box>



			<Box py={4} style={{color: "white", backgroundColor: "#ffde99"}}>

				<Container  maxWidth="md" align="center">

					<h1 style={{color: '#002b80',fontFamily: "Merriweather"}} className={classes.h1_50}>{contentPiece(siteContents_.shift())}</h1>


					<Container  maxWidth="sm" align="center">

						<h3 style={{color: '#002b80',fontFamily: "Muli"}} className={classes.h3_20}>
							{contentPiece(siteContents_.shift())}
						</h3>

					</Container>

{mdAndUp ? (


					<Box mt={10} >


						<Grid container justify="center" style={{color: "#002b80"}} spacing={0}>

							<Grid container alignItems="top" item sm={6} align="right">

								<div style={{marginLeft: "auto"}}>
									{contentPiece(siteContents_.shift())}

								<List >
        
									<ListItem>
										<ListItemIcon>
											<img style={{width: "28px", height: "33px"}} src="/assets/images/Path 25.png" />
										</ListItemIcon>

										<ListItemText primary={siteContents_.shift()} />
									</ListItem>


									<ListItem>
										<ListItemIcon>
											<img style={{width: "28px", height: "33px"}} src="/assets/images/Path 25.png" />
										</ListItemIcon>		
					
										<ListItemText primary={siteContents_.shift()} />
									</ListItem>


									<ListItem>
										<ListItemIcon>
											<img style={{width: "28px", height: "33px"}} src="/assets/images/Path 25.png" />
										</ListItemIcon>
				
										<ListItemText primary={siteContents_.shift()} />
									</ListItem>

									<ListItem>
										<ListItemIcon>
											<img style={{width: "28px", height: "33px"}} src="/assets/images/Path 25.png" />
										</ListItemIcon>
							
										<ListItemText primary={siteContents_.shift()} />
									</ListItem>

								</List>

							</div>

    
						</Grid>

						<Grid  order={1} container item sm={4} >

							<Box ml={8} >
								<img src="/assets/images/warden.png" />
							</Box>

						</Grid>

					</Grid>

				</Box>

) : (

<>

	<Box py={2} >
								<img className={classes.warden_full_length} src="/assets/images/warden.png" />
							</Box>


<Box py={2} >
					<div style={{marginLeft: "auto", color: "#002b80"}} >
									{contentPiece(siteContents_.shift())}

								<List >
        
									<ListItem>
										<ListItemIcon>
											<img style={{width: "28px"}} src="/assets/images/Path 25.png" />
										</ListItemIcon>

										<ListItemText primary={siteContents_.shift()} />
									</ListItem>


									<ListItem>
										<ListItemIcon>
											<img style={{width: "28px"}} src="/assets/images/Path 25.png" />
										</ListItemIcon>		
					
										<ListItemText primary={siteContents_.shift()} />
									</ListItem>


									<ListItem>
										<ListItemIcon>
											<img style={{width: "28px"}} src="/assets/images/Path 25.png" />
										</ListItemIcon>
				
										<ListItemText primary={siteContents_.shift()} />
									</ListItem>

									<ListItem>
										<ListItemIcon>
											<img style={{width: "28px"}} src="/assets/images/Path 25.png" />
										</ListItemIcon>
							
										<ListItemText primary={siteContents_.shift()} />
									</ListItem>

								</List>

							</div>
</Box>

</>

)}





			</Container>

		</Box>




		<Box py={4} style={{color: "white", backgroundColor: "#2c72b5"}}>

			<Container  maxWidth="md" align="center">

				<h1 style={{fontFamily: "Merriweather"}} className={classes.h1_50}>{contentPiece(siteContents_.shift())}</h1>

				<h3 style={{fontFamily: "Muli"}} className={classes.h3_20}>
					{contentPiece(siteContents_.shift())}
				</h3>


				<Box py={4} >
					<img className={classes.app_icon} src="/assets/images/android-app-logo.png" />
					<img className={classes.app_icon} src="/assets/images/app-store-logo.png" />
				</Box>

			</Container>

		</Box>




		<Box py={6} style={{color: "white", backgroundColor: "#ffde99"}}>

			<Container  maxWidth="md" align="center">

				<h1 style={{color: '#002b80',fontFamily: "Merriweather"}}  className={classes.h1_50}>
					{contentPiece(siteContents_.shift())}
				</h1>


			<Container  maxWidth="sm" align="center">

				<h3 style={{color: '#002b80',fontFamily: "Muli"}} className={classes.h3_20}>
					{contentPiece(siteContents_.shift())}
				</h3>	

			</Container>	


		<Box py={4}  >

				<form  style={{margin: "auto"}} onSubmit={handleSubmit_b}>

				{mdAndUp ? (

<div style={{textAlign: "left", display: "inline-block"}}>	
					<ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
      					<BootstrapInput_b name="email_b" value={state.email_b} onChange={onChange} className="email_input_b" placeholder={siteContents_.shift()}  id="bootstrap-input_b" />

						<BootstrapButton disabled={state.inputDisabled}  type="submit" variant="contained"  style={{backgroundColor: "#002b80",color: "white"}}  className={classes.margin}>
							{contentPiece(siteContents_.shift())}
						</BootstrapButton>

					</ButtonGroup>

					<br/>
					<FormControlLabel style={{color: "#002b80"}}
        				control={<BlueCheckbox checked={state.notify_me_b} onChange={onChangeChecked} name="notify_me_b" />}
						label={siteContents_.shift()}
					/>

					
</div>

) :
								<>

<div style={{width: "300px", textAlign: "left"}}>
<BootstrapInput_b name="email_b" value={state.email_b} onChange={onChange} placeholder={siteContents_.shift()}  id="bootstrap-input_b" />

			<br/>
					<FormControlLabel style={{color: "#002b80", fontWeight: "normal"}}
        				control={<BlueCheckbox checked={state.notify_me_b} onChange={onChangeChecked} name="notify_me_b" />}
						label={siteContents_[1]}
					/>



</div>
<Box py={4}  pb={0}>
									<BootstrapButton  disabled={state.inputDisabled} type="submit" variant="contained"  style={{backgroundColor: "#002b80",color: "white"}} >
										{contentPiece(siteContents_[0])}
									</BootstrapButton>
</Box>
					{siteContents_.shift() && siteContents_.shift() ? '' : ''}

</>							

								}



				</form>
		</Box>

			</Container>

		</Box>


<Backdrop className={classes.backdrop} open={backdrop_open} onClick={handleBackdropClose}>
  <CircularProgress color="inherit" />
</Backdrop>

<Snackbar open={SnackbarOpen} autoHideDuration={3000} onClose={handleSnackbarClose}>
  <Alert severity="error">
    {SnackbarMessage}
  </Alert>
</Snackbar>



    </Container>
  );
}



export async function getStaticProps({ preview = null }) {
  const siteContents = (await getSiteContents(preview,'home')) || []

  return {
    props: { siteContents },
  }
}



