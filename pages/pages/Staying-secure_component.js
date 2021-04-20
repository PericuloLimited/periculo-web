import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { spacing } from '@material-ui/system';
import contentPiece from '../components/contentPiece.js'
import withWidth from '@material-ui/core/withWidth';
import PropTypes from 'prop-types';



function MyComponent(props) {


	const mdAndUp = (props.width == 'md' || props.width == 'lg')

	const siteContents_ = [...props.siteContents]



 return (

	<>

		{mdAndUp ? (

<>

		<Box py={4} style={{color: "white", backgroundColor: "#2c72b5"}}>
<Container maxWidth="lg">
			<Grid container justify="center" style={{}} spacing={0}>

				<Grid container alignItems="center" item xs={6} align="left">

					<Box ml={10}>
					
						<h1 style={{fontFamily: "Merriweather", fontSize: "60px"}}>
							{contentPiece(siteContents_.shift())}
						</h1>


						<h3 style={{fontFamily: "Muli", fontSize: "22px"}}>
							{contentPiece(siteContents_.shift())}
						</h3>

					</Box>

				</Grid>

				<Grid container alignItems="flex-end" item xs={6} >

					<Box ml={8} mr={10}>
						<img style={{width: "500px"}} src="/assets/images/warden_fire.png" />
					</Box>
				
				</Grid>

			</Grid>
</Container>
		</Box>


		<Box style={{color: "#002b80", backgroundColor: ""}}>
<Container maxWidth="lg">
			<Container  maxWidth="lg" align="center">

				<h1 style={{fontSize: "40px"}}>{contentPiece(siteContents_.shift())}</h1>

				<Box py={4} style={{color: "#002b80", backgroundColor: "#fff"}}>

					<Grid container justify="center" style={{}} spacing={0}>

						<Grid container alignItems="center" item xs={6} align="left">

							<Box ml={12} >
								<img src="/assets/images/Passwords.png" />

								<div style={{position: "relative", top: "-110px"}}>
									<h3 style={{fontSize: "40px", marginBottom: "32px"}}>
										{contentPiece(siteContents_.shift())}
									</h3>
									{contentPiece(siteContents_.shift())}
								</div>

							</Box>

						</Grid>

						<Grid container item xs={6} align="left">

							<Box ml={12} >
								<img src="/assets/images/Phishing.png" />

								<div style={{position: "relative", top: "-110px"}}>

									<h3 style={{fontSize: "40px", marginBottom: "32px"}}>
										{contentPiece(siteContents_.shift())}
									</h3>

									{contentPiece(siteContents_.shift())}
							
								</div>

							</Box>

						</Grid>

					</Grid>


					<Grid container alignItems="flex-start" justify="center" style={{}} spacing={0}>
	
						<Grid container alignItems="center" item xs={6} align="left">

							<Box ml={12} >
								<img src="/assets/images/Devices.png" />
				
								<div style={{position: "relative", top: "-110px"}}>
		
									<h3 style={{fontSize: "40px", marginBottom: "32px"}}>
										{contentPiece(siteContents_.shift())}
									</h3>

									{contentPiece(siteContents_.shift())}
								</div>

							</Box>
				
						</Grid>

  
						<Grid container item xs={6} align="left">

							<Box ml={12} >
								<img src="/assets/images/Cloud.png" />
		
								<div style={{position: "relative", top: "-110px"}}>

									<h3 style={{fontSize: "40px", marginBottom: "32px"}}>
										{contentPiece(siteContents_.shift())}
									</h3>

									{contentPiece(siteContents_.shift())}

								</div>

							</Box>

						</Grid>

					</Grid>

				</Box>

			</Container>
	</Container>
		</Box>

</>

	) : (

<>
		<Box p={4} style={{color: "white", backgroundColor: "#2c72b5"}}>
<Container maxWidth="lg">
			
	<h1 style={{fontFamily: "Merriweather", fontSize: "31px"}}>
							{contentPiece(siteContents_.shift())}
						</h1>


						<h3 style={{fontFamily: "Muli", fontSize: "18px", fontWeight: "normal"}}>
							{contentPiece(siteContents_.shift())}
						</h3>


					<Box pt={4} pb={2}  >
<Container align="center">
						<img style={{width: "260px"}} src="/assets/images/warden_fire.png" />
</Container>
					</Box>
				
</Container>
		</Box>


		<Box style={{color: "#002b80", backgroundColor: ""}}>
<Container maxWidth="lg">



			<Container  maxWidth="lg" align="center">
<Box pb={6} >
				<h1 style={{fontSize: "28px"}}>{contentPiece(siteContents_.shift())}</h1>
</Box>
</Container>



<Container  maxWidth="lg" align="center">

					
	<Box px={2} >
								<img style={{width: "200px"}} src="/assets/images/Passwords.png" />
</Box>
			</Container>

<Box p={2} >
								
									<h3 style={{fontSize: "28px"}}>
										{contentPiece(siteContents_.shift())}
									</h3>

								<div style={{fontSize: "16px"}}>
									{contentPiece(siteContents_.shift())}
							</div>
</Box>




<Container  maxWidth="lg" align="center">

					
	<Box px={2} pt={6} >
								<img style={{width: "200px"}} src="/assets/images/Phishing.png" />
</Box>
			</Container>

<Box p={2} >
								
									<h3 style={{fontSize: "28px"}}>
										{contentPiece(siteContents_.shift())}
									</h3>

								<div style={{fontSize: "16px"}}>
									{contentPiece(siteContents_.shift())}
							</div>
</Box>





<Container  maxWidth="lg" align="center">

					
	<Box px={2} pt={6} >
								<img style={{width: "200px"}} src="/assets/images/Devices.png" />
</Box>
			</Container>

<Box p={2} >
								
									<h3 style={{fontSize: "28px"}}>
										{contentPiece(siteContents_.shift())}
									</h3>

								<div style={{fontSize: "16px"}}>
									{contentPiece(siteContents_.shift())}
							</div>
</Box>





<Container  maxWidth="lg" align="center">

					
	<Box px={2} pt={6} >
								<img style={{width: "200px"}} src="/assets/images/Cloud.png" />
</Box>
			</Container>

<Box p={2}  mb={6}>
								
									<h3 style={{fontSize: "28px"}}>
										{contentPiece(siteContents_.shift())}
									</h3>

								<div style={{fontSize: "16px"}}>
									{contentPiece(siteContents_.shift())}
							</div>
</Box>





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






