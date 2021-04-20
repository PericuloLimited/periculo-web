import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { blue } from '@material-ui/core/colors';
import {withStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { spacing } from '@material-ui/system';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ButtonAppBar from '../components/ButtonAppBar.js'
import { useSelector, useDispatch } from 'react-redux'
import withWidth from '@material-ui/core/withWidth';
import PropTypes from 'prop-types';
var ellipsis = require('html-ellipsis');
import contentPiece from '../components/contentPiece.js'
import HackCheckInput from '../components/hack-check-input';






function MyComponent(props) {


	const mdAndUp = (props.width == 'md' || props.width == 'lg')


	const siteContents_ = [...props.siteContents]


	const results = useSelector((state) => state.results)



	
/*


	var myRef = React.createRef();

scroll={props.scroll}
myRef={myRef}


console.log('props.siteContents')
console.log(props.siteContents)


console.log('props.ref')
console.log(props.ref)

*/


  return (
		
		mdAndUp ? (

		<>



		<Box py={4} style={{color: "white", backgroundColor: "#2c72b5"}}>

			<Container  maxWidth="md" align="center">

				<h1 style={{fontFamily: "Merriweather", fontSize: "50px"}}>{siteContents_.shift()}</h1>

			</Container>

		</Box>

		<Box  style={{color: "#002b80", backgroundColor: ""}}>

			<Container maxWidth="sm" align="center">

				<h1 style={{fontFamily: "Merriweather", fontSize: "40px",color: "#002b80"}}>
					Your breach report for 
					<br/>
					{results.email}
				</h1>

				<h3 style={{fontFamily: "Muli", fontSize: "22px",color: "#002b80"}}>
					A “breach” is an incident where data has been 
					 unintentionally exposed to the public 
				</h3>




				{results && results.data && results.data.map(function(value, index) {

					return <table style={{marginBottom: "24px", border: "2px solid #d2312c"}} key={ index } >
<tbody>
					<tr style={{background: "#d2312c" }}  >

					<td colSpan="2" style={{color: "white", fontSize: "30px", padding: "6px", paddingLeft: "12px"}}  >
				{value.Name}

					</td>
					</tr>
					<tr  >
					<td style={{verticalAlign: "middle"}}>						
						<img style={{background: (value.Name != 'Adobe' ? "#d2312c" : 'white'), padding: "12px", width: "120px" }} src={value.LogoPath} />
					</td>
					<td  style={{padding: "12px", color: "#000"}}>
						
						<div style={{padding: "8px 0 12px 0",fontWeight: "bold"}}>Leaked - {value.BreachDate}</div>
						
						<div dangerouslySetInnerHTML={{__html: ellipsis(value.Description, 300, true) }} />
					</td>
					</tr>
</tbody>
					</table>

				})}



			</Container>

		</Box>


		<Box py={4} style={{color: "white", backgroundColor: "#2c72b5"}}>

			<Container  maxWidth="md" align="center">

				<h1 style={{fontFamily: "Merriweather", fontSize: "40px"}} >

Rest easy knowing your digital life is being protected
</h1>

				<h3 style={{fontFamily: "Muli", fontSize: "22px"}}>
					Get the app and find more of your digital footprint
				</h3>


				<Box py={4} >
					<img style={{width: "160px", margin: "16px"}}  src="/assets/images/android-app-logo.png" />
					<img style={{width: "160px", margin: "16px"}}  src="/assets/images/app-store-logo.png" />
				</Box>

			</Container>

		</Box>


		<Box p={4} pb={6} style={{backgroundColor: "#f5f5f5"}}>
<Container  maxWidth="xs" align="center">
<Box pb={2} >
	<h3 style={{fontFamily: "Muli", fontSize: "18px",color: "#002b80", fontWeight: "normal"}}>
					Check  another email to see if your information has been involved in a hack
				</h3>
</Box>
</Container>
		<HackCheckInput 

		/>

		</Box>


		</>

		) : (

		<>



		<Box py={4} style={{color: "white", backgroundColor: "#2c72b5"}}>

			<Container maxWidth="md" align="center">

				<h1 style={{fontFamily: "Merriweather", fontSize: "31px"}}>{siteContents_.shift()}</h1>

			</Container>

		</Box>

		<Box  style={{color: "#002b80", backgroundColor: ""}}>

			<Container  maxWidth="sm" align="center">

				<h1 style={{fontFamily: "Merriweather", fontSize: "20px",color: "#002b80"}}>
					Your breach report for 
					<br/>
					{results.email}
				</h1>

		<Box  pb={2}>

				<h3 style={{fontFamily: "Muli", fontSize: "16px",color: "#002b80", fontWeight: "normal"}}>
					A “breach” is an incident where data has been 
					 unintentionally exposed to the public 
				</h3>


		</Box>


				{results && results.data && results.data.map(function(value, index) {

					return (
<Box boxShadow={4}>
<table style={{marginBottom: "24px", border: "2px solid #d2312c", borderRadius: "4px", borderSpacing: "0"}} key={ index } >
<tbody>
					<tr style={{background: "#d2312c" }}  >

					<td colSpan="2" style={{color: "white", fontSize: "18px", padding: "6px", paddingLeft: "12px"}}  >
				{value.Name}

					</td>
					</tr>
					<tr  >
					<td style={{verticalAlign: "top", padding: "12px"}}>						
						<img style={{background: (value.Name != 'Adobe' ? "#d2312c" : 'white'), padding: "4px", width: "80px" }} src={value.LogoPath} />
					</td>
					<td  style={{padding: "12px", color: "#000"}}>
						
						<div style={{padding: "8px 0 12px 0",fontWeight: "bold"}}>Leaked - {value.BreachDate}</div>
						
						<div dangerouslySetInnerHTML={{__html: ellipsis(value.Description, 120, true) }} />
					</td>
					</tr>
</tbody>
					</table>
</Box> )
				})}


			</Container>

		</Box>

		<Box py={4} style={{color: "white", backgroundColor: "#2c72b5"}}>

			<Container  maxWidth="md" align="center">

				<h1 style={{fontFamily: "Merriweather"}} style={{}}>{contentPiece(siteContents_.shift())}</h1>

				<h3 style={{fontFamily: "Muli"}} style={{}}>
					{contentPiece(siteContents_.shift())}
				</h3>


				<Box py={4} >
					<img style={{width: "140px", margin: "8px"}} src="/assets/images/android-app-logo.png" />
					<img style={{width: "140px", margin: "8px"}} src="/assets/images/app-store-logo.png" />
				</Box>

			</Container>

		</Box>


		<Box p={4} pb={6} style={{backgroundColor: "#f5f5f5"}}>
<Container  maxWidth="md" align="center">
<Box pb={2} >
	<h3 style={{fontFamily: "Muli", fontSize: "18px",color: "#002b80", fontWeight: "normal"}}>
					Check  another email to see if your information has been involved in a hack
				</h3>
</Box>
</Container>
		<HackCheckInput 
		/>

		</Box>



		</>

		)
	
  );

}




MyComponent.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};


const WithWidth = withWidth()(MyComponent)


export default function Index({siteContents}) {

	//const siteContents_ = [...siteContents]


  return (
	<Container maxWidth={false} disableGutters>

		<ButtonAppBar />


		<WithWidth
			siteContents={siteContents}
		 />
		


    </Container>
  );
}





