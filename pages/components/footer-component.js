import React from 'react';
import Link from 'next/link'
import Box from '@material-ui/core/Box';
import { spacing } from '@material-ui/system';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useRouter } from 'next/router';


export default function Footer({ isLoaded, items }) {


	const numberWithCommas = function(x) {
		var parts = x.toString().split(".");
		parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		return parts.join(".");
	}


		const router = useRouter();



		const theme = useTheme();
		const mdAndUp = useMediaQuery(theme.breakpoints.up('md'));


		if(router.pathname == '/menu') {
			return <></>

		}

			
		return (

			

			<Box p={4} style={{background: "#002b80"}}>

				<Container style={{fontFamily: "Muli",fontSize: "14px"}} maxWidth="lg">

					{mdAndUp ? (

					<Grid container style={{color: "white"}} spacing={0}>


						<Grid container direction="column" item md={6} spacing={0}>

						
							<Box p={2} >
			
						<div style={{display: "table"}}>
							<div style={{display: "table-cell"}}>
								<img src="/assets/images/warden_welcome.png" style={{width: "60px"}} />
							</div>
							<div style={{paddingLeft: "12px",fontFamily: "nunito", fontSize: "32px", color: "", display: "table-cell", "verticalAlign": "middle"}}>
								Warden
							</div>
						</div>

					
					</Box>


					<Box p={2} pt={0}>
						<Box  pb={1} pt={3}>
<a target="_blank" href="https://bethnalgreenventures.com/"> 
									<img style={{width: "160px"}}  src="/assets/images/bethnal_logo.png" />
								</a>
						</Box>

						<div>
						A tech for good startup funded by Bethnal Green Ventures
						</div>



					</Box>


					<Box p={2} pb={2}>
				
						<div style={{display: "table"}}>
							<span style={{display: "table-cell",paddingRight: "20px", verticalAlign: "middle"}}>
								<a target="_blank" href="https://twitter.com/usewarden"> 
									<img style={{width: "22px"}}  src="/assets/images/twitter.png" />
								</a>
							</span>
							<span style={{display: "table-cell",paddingRight: "20px",verticalAlign: "middle"}}>
								<a target="_blank" href="https://www.linkedin.com/company/getmappd-ltd/"> 
									<img style={{width: "22px"}}  src="/assets/images/linked_in.png" />
								</a>
							</span>
							<span style={{display: "table-cell",paddingRight: "20px", verticalAlign: "middle"}}>
								<a target="_blank" href="https://www.facebook.com/usewarden"> 
									<img style={{width: "22px"}}  src="/assets/images/f_icon.png" />
								</a>
							</span>
							<span style={{display: "table-cell", verticalAlign: "middle"}}>
								<a target="_blank" href="https://www.instagram.com/usewarden/"> 
									<img style={{width: "22px"}}  src="/assets/images/instagram.png" />
								</a>
							</span>
						</div>

					</Box>


					<Box p={2} pl={0} pb={0}>

						<div style={{display: "table"}}>
							<span style={{display: "table-cell",paddingRight: "34px", verticalAlign: "middle"}}>

								<Link as={'/Pages/terms-and-conditions'} href={"/Pages/terms-and-conditions"}>
									<a style={{textDecoration: "none", color: "white"}} className="hover:underline">Terms and conditions</a>
								</Link>
								
							</span>
							<span style={{display: "table-cell", verticalAlign: "middle"}}>

								<Link as={'/Pages/privacy-policy'} href={"/Pages/privacy-policy"}>
									<a style={{textDecoration: "none", color: "white"}} className="hover:underline">Privacy policy</a>
								</Link>

								
							</span>
						</div>

					</Box>

					<Box p={2} pl={0} >
						<div>
						Warden 2017 - {(new Date).getFullYear()}. All rights reserved
						</div>
					</Box>



				</Grid>


						<Grid container direction="column" item md={6} align="" spacing={0}>


	
							<Box p={2} pt={6}>

					<Grid container style={{color: "white"}} align="left" spacing={0}>


						<Grid container direction="column" item md={6} spacing={0}>
						
							<Box p={2} pt={0} pr={4}>
						
						<div style={{whiteSpace: "nowrap", fontFamily: "Muli",fontSize: "18px", fontWeight: "700"}}>
							Largest breaches
						</div>



						{isLoaded && 
							
							<div style={{fontFamily: "Muli",fontSize: "16px"}}>
							<ul style={{margin: "0",padding: "0",listStyleType: "none"}}>

 							{items.breaches.largest.slice(0,3).map((item, key) => (
                                <li key={key}  style={{padding: "8px", paddingLeft: "0"}}>
                                    {item.Name}
									<br/>
									<span style={{whiteSpace: "nowrap"}}> {numberWithCommas(item.PwnCount)} pwned accounts</span>
									
                                </li>
                            ))}

                        	</ul> 
							</div>

						}


					</Box>
				</Grid>


					<Grid container direction="column" item md={6} spacing={0}>
						
							<Box p={2} pt={0} pl={4}>
						<div style={{whiteSpace: "nowrap", fontFamily: "Muli",fontSize: "18px", fontWeight: "700"}}>
							Recently added breaches
						</div>



						{isLoaded && 
							<div style={{fontFamily: "Muli",fontSize: "16px"}}>
							<ul style={{margin: "0",padding: "0",listStyleType: "none"}}>

 							{items.breaches.latest.slice(0,3).map((item, key) => (
                                <li key={key}  style={{padding: "8px", paddingLeft: "0"}}>
                                    {item.Name}
									<br/>
									<span style={{whiteSpace: "nowrap"}}> {numberWithCommas(item.PwnCount)} pwned accounts</span>
									
                                </li>
                            ))}

                        	</ul> 
							</div>

						}
					</Box>


				</Grid>

				</Grid>


					</Box>

				</Grid>



			</Grid>


		) : (

					<div style={{color: "white"}}>

						<Box py={2}>
			
						<div style={{display: "table"}}>
							<div style={{display: "table-cell"}}>
								<img src="/assets/images/warden_welcome.png" style={{width: "60px"}} />
							</div>
							<div style={{paddingLeft: "12px",fontFamily: "nunito", fontSize: "32px", color: "", display: "table-cell", "verticalAlign": "middle"}}>
								Warden
							</div>
						</div>

					
					</Box>


				<Box py={2}>
						<Box  pb={1} pt={3}>
<a target="_blank" href="https://bethnalgreenventures.com/"> 
									<img style={{width: "160px"}}  src="/assets/images/bethnal_logo.png" />
								</a>
						</Box>

						<div>
						A tech for good startup funded by Bethnal Green Ventures
						</div>



					</Box>


					<Box py={2} >
				
						<div style={{display: "table"}}>
							<span style={{display: "table-cell",paddingRight: "20px", verticalAlign: "middle"}}>
								<a target="_blank" href="https://twitter.com/usewarden"> 
									<img style={{width: "22px"}}  src="/assets/images/twitter.png" />
								</a>
							</span>
							<span style={{display: "table-cell",paddingRight: "20px",verticalAlign: "middle"}}>
								<a target="_blank" href="https://www.linkedin.com/company/getmappd-ltd/"> 
									<img style={{width: "22px"}}  src="/assets/images/linked_in.png" />
								</a>
							</span>
							<span style={{display: "table-cell",paddingRight: "20px", verticalAlign: "middle"}}>
								<a target="_blank" href="https://www.facebook.com/usewarden"> 
									<img style={{width: "22px"}}  src="/assets/images/f_icon.png" />
								</a>
							</span>
							<span style={{display: "table-cell", verticalAlign: "middle"}}>
								<a target="_blank" href="https://www.instagram.com/usewarden/"> 
									<img style={{width: "22px"}}  src="/assets/images/instagram.png" />
								</a>
							</span>
						</div>

					</Box>




						<Box py={2} >


						<div style={{whiteSpace: "nowrap", fontFamily: "Muli",fontSize: "18px", fontWeight: "700"}}>
							Largest breaches
						</div>



						{isLoaded && 
							
							<div style={{fontFamily: "Muli",fontSize: "16px"}}>
							<ul style={{margin: "0",padding: "0",listStyleType: "none"}}>

 							{items.breaches.largest.slice(0,3).map((item, key) => (
                                <li key={key}  style={{padding: "8px", paddingLeft: "0"}}>
                                    {item.Name}
									<br/>
									<span style={{whiteSpace: "nowrap"}}> {numberWithCommas(item.PwnCount)} pwned accounts</span>
									
                                </li>
                            ))}

                        	</ul> 
							</div>

						}


						</Box>

						<Box py={2} >

						<div style={{whiteSpace: "nowrap", fontFamily: "Muli",fontSize: "18px", fontWeight: "700"}}>
							Recently added breaches
						</div>



						{isLoaded && 
							<div style={{fontFamily: "Muli",fontSize: "16px"}}>
							<ul style={{margin: "0",padding: "0",listStyleType: "none"}}>

 							{items.breaches.latest.slice(0,3).map((item, key) => (
                                <li key={key}  style={{padding: "8px", paddingLeft: "0"}}>
                                    {item.Name}
									<br/>
									<span style={{whiteSpace: "nowrap"}}> {numberWithCommas(item.PwnCount)} pwned accounts</span>
									
                                </li>
                            ))}

                        	</ul> 
							</div>

						}



					</Box>
	

<Box py={2}>

						<div style={{display: "table"}}>
							<span style={{display: "table-cell",paddingRight: "34px", verticalAlign: "middle"}}>

								<Link as={'/Pages/terms-and-conditions'} href={"/Pages/terms-and-conditions"}>
									<a style={{textDecoration: "none", color: "white"}} className="hover:underline">Terms and conditions</a>
								</Link>
								
							</span>
							<span style={{display: "table-cell", verticalAlign: "middle"}}>

								<Link as={'/Pages/privacy-policy'} href={"/Pages/privacy-policy"}>
									<a style={{textDecoration: "none", color: "white"}} className="hover:underline">Privacy policy</a>
								</Link>

								
							</span>
						</div>
</Box>


					<Box py={2} >
						<div>
						Warden 2017 - {(new Date).getFullYear()}. All rights reserved
						</div>
					</Box>



			</div>


		)}


		</Container>


    </Box>

  )
}
