import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { spacing } from '@material-ui/system';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import contentPiece from '../components/contentPiece.js'
//import { useTheme } from '@material-ui/core/styles';
//import useMediaQuery from '@material-ui/core/useMediaQuery';
import withWidth from '@material-ui/core/withWidth';
import PropTypes from 'prop-types';


function MyComponent(props) {

	//const theme = useTheme();
	//const mdAndUp = useMediaQuery(theme.breakpoints.up('md'));


	const mdAndUp = (props.width == 'md' || props.width == 'lg')

	const siteContents_ = [...props.siteContents]



 return (

		<>

		{mdAndUp ? (

<>
		<Box py={4} style={{color: "white", backgroundColor: "#ffde99"}}>

<Container maxWidth="lg">

			<Grid container justify="center" style={{color: "#002b80"}} spacing={0}>

				<Grid container alignItems="center" item sm={6} align="left">

					<div>
						<h1 style={{color: '#002b80',fontFamily: "Merriweather", fontSize: "60px"}}>
							{contentPiece(siteContents_.shift())}
						</h1>

						<h3 style={{color: '#002b80',fontFamily: "Muli", fontSize: "22px"}}>
							{contentPiece(siteContents_.shift())}
						</h3>

					</div>

				</Grid>

				<Grid container item sm={4} >

					<Box ml={8} >
						<img src="/assets/images/iPhone-Mockup.png" />
					</Box>

				</Grid>

			</Grid>

</Container>
		</Box>



		<Box py={4} style={{color: "white", backgroundColor: "#fff",marginBottom: "-120px"}}>

<Container maxWidth="lg">
			<Grid container justify="center" style={{color: "#002b80"}} spacing={0}>

				<Grid container alignItems="center" item sm={4} align="left">

					<img style={{width: "400px"}} src="/assets/images/warden_welcome.png" />

				</Grid>

				<Grid container item sm={6} >

					<Box ml={8} >

						<div>
							<h1 style={{color: '#002b80',fontFamily: "Merriweather", fontSize: "40px"}}>
								{contentPiece(siteContents_.shift())}
							</h1>


							<h3 style={{color: '#002b80',fontFamily: "Muli", fontSize: "18px"}}>
								{contentPiece(siteContents_.shift())}
							</h3>

						</div>

					</Box>

				</Grid>

			</Grid>

</Container>
		</Box>


		<Box py={0} style={{color: "white", backgroundColor: "#2c72b5"}}>
<Container maxWidth="lg">
			<Grid container justify="center" style={{}} spacing={0}>

				<Grid container alignItems="center" item sm={6} align="left">

					<div>
						<h1 style={{fontFamily: "Merriweather", fontSize: "40px", marginTop: "0px"}}>
							{contentPiece(siteContents_.shift())}
						</h1>


						<h3 style={{fontFamily: "Muli", fontSize: "22px"}}>
							{contentPiece(siteContents_.shift())}
						</h3>

					</div>

				</Grid>

				<Grid container item sm={4} >

					<Box ml={8} style={{position: "relative", top: "160px"}}>
						<img src="/assets/images/iPhone-Mockup_2.png" />
					</Box>

				</Grid>

			</Grid>
</Container>
		</Box>



		<Box py={4} style={{color: "#233e3b", backgroundColor: "#fff", marginBottom: "-120px"}}>
<Container maxWidth="lg">
			<Grid container justify="center" style={{}} spacing={0}>

				<Grid container alignItems="center" item sm={4} align="right">
					<img src="/assets/images/iPhone-Mockup.png" />
				</Grid>

				<Grid container item sm={6} >

					<Box ml={8} mt={20}>
						<div>

							<h1 style={{fontFamily: "Merriweather", fontSize: "40px"}}>
								{contentPiece(siteContents_.shift())}
							</h1>

							<h3 style={{fontFamily: "Muli", fontSize: "22px"}}>
								{contentPiece(siteContents_.shift())}
							</h3>

						</div>

					</Box>

				</Grid>

			</Grid>
</Container>
		</Box>



		<Box py={4} pt={12} style={{color: "white", backgroundColor: "#2c72b5", marginBottom: "-120px"}}>
<Container maxWidth="lg">
			<Grid container justify="center" style={{}} spacing={0}>

				<Grid container alignItems="center" item sm={6} align="left">

					<div style={{position: "relative", top: "-40px"}}>

						<h1 style={{fontFamily: "Merriweather", fontSize: "40px", marginTop: 0}}>
							{contentPiece(siteContents_.shift())}
						</h1>


						<h3 style={{fontFamily: "Muli", fontSize: "22px"}}>
							{contentPiece(siteContents_.shift())}
						</h3>

					</div>

				</Grid>

				<Grid container item sm={4} >

					<Box ml={8} >
						<img src="/assets/images/iPhone-Mockup.png" />
					</Box>
		
				</Grid>

			</Grid>
</Container>
		</Box>


		<Box py={4} style={{color: "#233e3b", backgroundColor: "#fff", marginBottom: "-120px"}}>
<Container maxWidth="lg">
			<Grid container justify="center" style={{}} spacing={0}>

				<Grid container alignItems="center" item sm={4} align="left">
					<img src="/assets/images/iPhone-Mockup.png" />
				</Grid>

				<Grid container item sm={6} >

					<Box ml={8} >

						<Box mt={20} >

							<h1 style={{fontFamily: "Merriweather", fontSize: "40px"}}>
								{contentPiece(siteContents_.shift())}
							</h1>

							<h3 style={{fontFamily: "Muli", fontSize: "22px"}}>
								{contentPiece(siteContents_.shift())}
							</h3>

						</Box>

					</Box>

				</Grid>

			</Grid>
</Container>
		</Box>




		<Box py={4} pt={20} style={{color: "white", backgroundColor: "#2c72b5"}}>

			<Container  maxWidth="md" align="center">

				<h1 style={{color: '',fontFamily: "Merriweather", fontSize: "50px"}}>
					{contentPiece(siteContents_.shift())}
				</h1>


				<Container  maxWidth="sm" align="center">
					<h3 style={{color: '',fontFamily: "Muli", fontSize: "20px"}}>
						{contentPiece(siteContents_.shift())}
					</h3>

				</Container>

		
				<Box mt={10} >

					<Grid container justify="center" style={{color: ""}} spacing={0}>

						<Grid container alignItems="top" item sm={6} align="right">
	
							<div style={{marginLeft: "auto"}}>
								{contentPiece(siteContents_.shift())}

								<List >
        
									<ListItem>
										<ListItemIcon>
											<img style={{width: "28px", height: "33.8594px"}} src="/assets/images/Path 24_26.png" />
										</ListItemIcon>
								
										<ListItemText primary={siteContents_.shift()} />	
									</ListItem>


									<ListItem>
										<ListItemIcon>
											<img style={{width: "28px", height: "33.8594px"}} src="/assets/images/Path 24_26.png" />
										</ListItemIcon>

										<ListItemText primary={siteContents_.shift()} />
									</ListItem>


									<ListItem>
										<ListItemIcon>
											<img style={{width: "28px", height: "33.8594px"}} src="/assets/images/Path 24_26.png" />
										</ListItemIcon>

										<ListItemText primary={siteContents_.shift()} />
									</ListItem>


									<ListItem>
										<ListItemIcon>
											<img style={{width: "28px", height: "33.8594px"}} src="/assets/images/Path 24_26.png" />
										</ListItemIcon>

										<ListItemText primary={siteContents_.shift()} />
									</ListItem>


								</List>


								<Box py={4} align="left">

									<img style={{width: "160px", margin: "16px"}} src="/assets/images/android-app-logo.png" />
									<img style={{width: "160px", margin: "16px"}} src="/assets/images/app-store-logo.png" />

								</Box>

							</div>

    
						</Grid>

 						<Grid container item sm={4} >

							<Box ml={8} >
								<img src="/assets/images/warden.png" />
							</Box>

						</Grid>

					</Grid>

				</Box>

			</Container>

		</Box>

</>

	) : (

<>
<Box p={4} py={3}  style={{color: "white", backgroundColor: "#ffde99"}}>
						
						<h1 style={{color: '#233e3b',fontFamily: "Merriweather", fontSize: "31px"}}>
							{contentPiece(siteContents_.shift())}
						</h1>


<Container  align="center">
					<Box  >
						<img style={{width: "240px"}} src="/assets/images/iPhone-Mockup.png" />
					</Box>
</Container>
						<h3 style={{color: '#233e3b',fontFamily: "Muli", fontSize: "18px", fontWeight: "normal"}}>
							{contentPiece(siteContents_.shift())}
						</h3>


</Box>





		<Box py={3} p={4} style={{color: "white", backgroundColor: "#fff",marginBottom: "-90px"}}>


<h1 style={{color: '#002b80',fontFamily: "Merriweather", fontSize: "28px"}}>
								{contentPiece(siteContents_.shift())}
							</h1>



<Box pt={1} >
							<h3 style={{color: '#002b80',fontFamily: "Muli", fontWeight: "normal", fontSize: "16px"}}>
								{contentPiece(siteContents_.shift())}
							</h3>
</Box>

<Container  align="center">
<img style={{width: "240px"}} src="/assets/images/warden_welcome.png" />
</Container>

		</Box>


		<Box p={4} pt={12} style={{marginBottom: "-140px", color: "white", backgroundColor: "#2c72b5"}}>


	<h1 style={{fontFamily: "Merriweather", fontSize: "24px", marginTop: "0px"}}>
							{contentPiece(siteContents_.shift())}
						</h1>


						<h3 style={{fontFamily: "Muli", fontSize: "16px", fontWeight: "normal"}}>
							{contentPiece(siteContents_.shift())}
						</h3>


<Container  align="center">
<Box mt={4} >

<img style={{width: "240px"}} src="/assets/images/iPhone-Mockup_2.png" />
</Box>
</Container>


		</Box>



		<Box p={4} pt={10} style={{marginBottom: "-140px", color: "#233e3b", backgroundColor: "#fff"}}>


	<h1 style={{fontFamily: "Merriweather", fontSize: "24px"}}>
								{contentPiece(siteContents_.shift())}
							</h1>

							<h3 style={{fontFamily: "Muli", fontSize: "16px", fontWeight: "normal"}}>
								{contentPiece(siteContents_.shift())}
							</h3>

<Container  align="center">
<Box mt={4} >

<img style={{width: "240px"}} src="/assets/images/iPhone-Mockup_2.png" />
</Box>
</Container>

</Box>



	<Box p={4} pt={12} style={{marginBottom: "-140px", color: "white", backgroundColor: "#2c72b5"}}>


	<h1 style={{fontFamily: "Merriweather", fontSize: "24px"}}>
								{contentPiece(siteContents_.shift())}
							</h1>

							<h3 style={{fontFamily: "Muli", fontSize: "16px", fontWeight: "normal"}}>
								{contentPiece(siteContents_.shift())}
							</h3>

<Container  align="center">
<Box mt={4} >

<img style={{width: "240px"}} src="/assets/images/iPhone-Mockup_2.png" />
</Box>
</Container>

</Box>




	<Box p={4} pt={12} style={{marginBottom: "-140px", color: "#233e3b", backgroundColor: "#fff"}}>


	<h1 style={{fontFamily: "Merriweather", fontSize: "24px"}}>
								{contentPiece(siteContents_.shift())}
							</h1>

							<h3 style={{fontFamily: "Muli", fontSize: "16px", fontWeight: "normal"}}>
								{contentPiece(siteContents_.shift())}
							</h3>

<Container  align="center">
<Box mt={4} >

<img style={{width: "240px"}} src="/assets/images/iPhone-Mockup_2.png" />
</Box>
</Container>

</Box>




		<Box p={4} pt={12} style={{color: "white", backgroundColor: "#2c72b5"}}>
<Container  align="center">

<h1 style={{color: '',fontFamily: "Merriweather", fontSize: "28px"}}>
					{contentPiece(siteContents_.shift())}
				</h1>

<h3 style={{color: '',fontFamily: "Muli", fontSize: "16px", fontWeight: "700"}}>
						{contentPiece(siteContents_.shift())}
					</h3>


<Box mt={4} >

<img style={{width: "180px"}} src="/assets/images/warden.png" />
</Box>


							<div style={{marginLeft: "auto"}}>
								{contentPiece(siteContents_.shift())}

								<List >
        
									<ListItem>
										<ListItemIcon>
											<img style={{width: "28px", height: "33.8594px"}} src="/assets/images/Path 24_26.png" />
										</ListItemIcon>
								
										<ListItemText primary={siteContents_.shift()} />	
									</ListItem>


									<ListItem>
										<ListItemIcon>
											<img style={{width: "28px", height: "33.8594px"}} src="/assets/images/Path 24_26.png" />
										</ListItemIcon>

										<ListItemText primary={siteContents_.shift()} />
									</ListItem>


									<ListItem>
										<ListItemIcon>
											<img style={{width: "28px", height: "33.8594px"}} src="/assets/images/Path 24_26.png" />
										</ListItemIcon>

										<ListItemText primary={siteContents_.shift()} />
									</ListItem>


									<ListItem>
										<ListItemIcon>
											<img style={{width: "28px", height: "33.8594px"}} src="/assets/images/Path 24_26.png" />
										</ListItemIcon>

										<ListItemText primary={siteContents_.shift()} />
									</ListItem>


								</List>



							</div>

    

</Container>
				</Box>
		

</>
	)}

		</>

  );


}


MyComponent.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};



export default withWidth()(MyComponent)




