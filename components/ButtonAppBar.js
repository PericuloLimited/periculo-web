import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';
import Box from '@material-ui/core/Box';
import ButtonLink from './material-ui-next-js-button.js'
import Link from '../src/Link';
import Container from '@material-ui/core/Container';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux'
import NextLink from 'next/link';


const ColorButton = withStyles((theme) => ({
  root: {
    color: 'white',
	textTransform: 'none',
    backgroundColor: '#002b80',
    '&:hover': {
      backgroundColor: '#002b80',
    },
  },
}))(Button);



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
	color: "#002b80",
	fontSize: "2em",
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

	const router = useRouter();


	const dispatch = useDispatch()


//  href={'/menu' + (router.pathname != '/' ? router.pathname : '/home')} as={'/menu' + (router.pathname != '/' ? router.pathname : '/home')}

	const handleMenuClick = () => {
		dispatch({type: 'set_path', path: router.pathname })

	};



  return (
    <div className={classes.root}>

	<Container maxWidth="lg">
      <AppBar elevation={0} position="static" color="transparent">
        <Toolbar style={{fontFamily: "merriweather", paddingRight: "0"}}>

			<Box flexGrow={1}>

<NextLink href="/" as="/">
					<a style={{textDecoration: "none"}}>
						<div style={{display: "table"}}>
							<div style={{display: "table-cell"}}>
								<img src="/assets/images/warden_welcome.png" style={{width: "60px"}} />
							</div>
							<div style={{paddingLeft: "12px",fontFamily: "merriweather", fontSize: "32px", color: "#002b80", display: "table-cell", "verticalAlign": "middle"}}>
								Warden
							</div>
						</div>
					</a>
				</NextLink>
			</Box>

       
       
			<Hidden smDown>
				<Box>
					
					<Button disableElevation color="primary" component={ButtonLink} href={'/How-it-works'}>How it works</Button>

					<Button disableElevation color="primary" component={ButtonLink} href={'/Staying-secure'}>Staying secure</Button>

					<Button disableElevation color="primary" component={ButtonLink} href={'/Blog'}>Blog</Button>

					<Button disableElevation color="primary" component={ButtonLink} href={'/Support'}>Support</Button>

					

				</Box>
			</Hidden>


			<Hidden mdUp>
<Link onClick={handleMenuClick} href={'/menu'} as={'/menu'} prefetch>
    <a >

				<MenuIcon  className={classes.menuButton} />

    </a>
  </Link>


					</Hidden>
        </Toolbar>
      </AppBar>
</Container>
    </div>
  );
}

