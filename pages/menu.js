import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ButtonLink from '../components/material-ui-next-js-button.js'
import Link from '../src/Link';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CloseIcon from '@material-ui/icons/Close';
import { useSelector, useDispatch } from 'react-redux'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
	'&:hover': {
		textDecoration: 'none'
	},
	'&:active': {
		textDecoration: 'none'
	},
	'&:focus': {
		textDecoration: 'none'
	},
  },

  menuButton: {
	color: "white",
	fontSize: "2.5em",
  },
  title: {
    flexGrow: 1,
  },
}));


const ColorButton = withStyles((theme) => ({
  root: {
	margin: "10px 0",
    color: 'white',
	fontSize: "26px",
	fontWeight: "700",
    backgroundColor: '#001f73',
    '&:hover': {
      backgroundColor: '#001f73',
    },
  },
}))(Button);

const ColorButton_b = withStyles((theme) => ({
  root: {
	margin: "6px 0",
    color: 'white',
	fontSize: "18px",
	fontFamily: "Muli",
	border: "1px solid white",
	padding: "6px 32px",
    backgroundColor: '#001f73',
    '&:hover': {
      backgroundColor: '#001f73',
    },
  },
}))(Button);


export default function Index({siteContents}) {


	const classes = useStyles();


	const path = useSelector((state) => state.path)



//console.log((router.query.path != 'home' ? router.query.path : '/'))

	return (

		<Container style={{color: "white", backgroundColor: '#001f73'}}  maxWidth={false} disableGutters>

 <AppBar elevation={0} position="static" color="transparent">



        <Toolbar style={{fontFamily: "Nunito", padding: "12px"}}>

			<Box flexGrow={1}>

				<Link className={classes.root} href="/" prefetch>
					<a>
							<div style={{paddingLeft: "12px",fontFamily: "nunito", fontSize: "28px", color: "white", display: "table-cell", "verticalAlign": "middle"}}>
								Warden
							</div>
					</a>
				</Link>
			</Box>

       
       
<Link href={path} as={path} prefetch>
    <a>

				<CloseIcon className={classes.menuButton} />

    </a>
  </Link>

        </Toolbar>

      </AppBar>




			<Box mt={8} style={{color: "white"}}>
		<Container align="center" maxWidth={false} >

<ColorButton disableElevation component={ButtonLink} href={'/'}>Home</ColorButton>
<br/>
<ColorButton disableElevation component={ButtonLink} href={'/How-it-works'}>How it works</ColorButton>
<br/>
					<ColorButton disableElevation component={ButtonLink} href={'/Staying-secure'}>Staying secure</ColorButton>
<br/>
					<ColorButton disableElevation color="white" component={ButtonLink} href={'/Blog'}>Blog</ColorButton>
<br/>
					<ColorButton disableElevation color="white" component={ButtonLink} href={'/Support'}>Support</ColorButton>
<br/>
					<ColorButton disableElevation color="white" component={ButtonLink} href={'/About'}>About</ColorButton>

<br/>

<Box mt={8}>

					<ColorButton_b disableElevation color="white">Download the app</ColorButton_b>
</Box>

    </Container>

</Box>

    </Container>
  );
}




