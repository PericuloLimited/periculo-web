import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ButtonAppBar from '../components/ButtonAppBar.js'
import Button from '@material-ui/core/Button';
import Mail from '@material-ui/icons/Mail';
import Box from '@material-ui/core/Box';
import { spacing } from '@material-ui/system';
import MuiAccordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { getSiteContents } from '@/lib/api'
import contentPiece from '../components/contentPiece.js'
import withWidth from '@material-ui/core/withWidth';
import PropTypes from 'prop-types';





const Accordion = withStyles({
  root: {
    border: '1px solid #1747ac',
		borderLeft: "none",
		borderRight: "none",
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: "none",
    },
    
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },

  expanded: {},
})(MuiAccordion);




const AccordionFirst = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
		borderLeft: "none",
		borderRight: "none",
		borderTop: "none",
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: "none",
    },
    
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },

  expanded: {},
})(MuiAccordion);






const useStyles = makeStyles((theme) => ({
[theme.breakpoints.up('md')]: {

  root: {
    width: '100%',
  },
  heading: {
	color: '#002b80',
    fontSize: "20px",
    fontWeight: theme.typography.fontWeightRegular,
    textAlign: "left",
  },
  body: {
	color: '#002b80',
    fontSize: "20px",
    textAlign: "left",
  },
	summary: {
	},
	accordion: {
		borderLeft: "none",
		borderRight: "none",

	}
},
[theme.breakpoints.down('sm')]: {
  root: {
    width: '100%',
  },
  heading: {
	color: '#002b80',
    fontSize: "18px",
    fontWeight: theme.typography.fontWeightRegular,
    textAlign: "left",
  },
  body: {
	color: '#002b80',
    fontSize: "18px",
    textAlign: "left",
  },
	summary: {
	},
	accordion: {
		borderLeft: "none",
		borderRight: "none",

	}
 }
}));




const ColorButton = withStyles((theme) => ({
  root: {
    color: 'white',
    backgroundColor: '#002b80',
    '&:hover': {
      backgroundColor: '#002b80',
    },
  },
}))(Button);





function MyComponent(props) {

	const mdAndUp = (props.width == 'md' || props.width == 'lg')


	const siteContents_ = [...props.siteContents]

	const faq = props.faq

	const [expanded, setExpanded] = React.useState('panel1');

	const handleChange = (panel) => (event, newExpanded) => {
		setExpanded(newExpanded ? panel : false);
	};


	const classes = useStyles();



  return (
		
		mdAndUp ? (

		<>

		<Box py={4} style={{color: "white", backgroundColor: "#2c72b5"}}>

			<Container maxWidth="md" align="center">

				<img src="/assets/images/Help.png" />

				<h1 style={{fontFamily: "Merriweather", fontSize: "50px"}}>
					{contentPiece(siteContents_.shift())}
				</h1>
     
			</Container>

		</Box>



		<Box py={4} style={{color: "#002b80", backgroundColor: "#fff"}}>

			<Container maxWidth="md" align="center">

				{faq.map(function(value, index) {

					return <>
						<h3 key={ index } p={2} style={{fontSize: "28px", padding: "16px", textAlign: "left",backgroundColor: "#feb683"}}>{value.title} </h3>

						{value["q-a"].map(function(value_, index_) {

							if(index_%2 != 0) {
								return;
							}

							return (
								index_ > 0 ? 
									
									<Accordion style={{borderBottom: (index == faq.length -1 && index_ == value["q-a"].length -2 ? "1px solid #1747ac" : "none")}}>							
										<AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
											<Typography className={classes.heading}>
												{value_}
											</Typography>
										</AccordionSummary>

										<AccordionDetails>
											<Typography className={classes.body}>
												{value["q-a"][index_ +1]}
											</Typography>
										</AccordionDetails>
									</Accordion>

								:

									<AccordionFirst>							
										<AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
											<Typography className={classes.heading}>
												{value_}
											</Typography>
										</AccordionSummary>

										<AccordionDetails>
											<Typography className={classes.body}>
												{value["q-a"][index_ +1]}
											</Typography>
										</AccordionDetails>
									</AccordionFirst>

							)
				
						})}

					</>

				})}


				<Box py={4} >

					<Box py={4} style={{color: "#000"}}>
						{contentPiece(siteContents_.shift())}

					</Box>

					<ColorButton disableElevation
						variant="contained"
						color="primary"
						size="large"
						className={classes.button}
						startIcon={<Mail />}
					>{contentPiece(siteContents_.shift())}</ColorButton>
      
				</Box>

			</Container>

		</Box>


		</>

		) : (

		<>

		<Box py={4} style={{color: "white", backgroundColor: "#2c72b5"}}>

			<Container maxWidth="md" align="center">

				<img style={{width: "80px"}} src="/assets/images/Help.png" />

				<h1 style={{fontFamily: "Merriweather", fontSize: "31px"}}>
					{contentPiece(siteContents_.shift())}
				</h1>
     
			</Container>

		</Box>



		<Box py={4} style={{color: "#002b80", backgroundColor: "#fff"}}>

			<Container maxWidth="md" align="center">

				{faq.map(function(value, index) {

					return <>
						<h3 key={ index } p={2} style={{fontSize: "20px", padding: "10px", textAlign: "left",backgroundColor: "#feb683"}}>{value.title} </h3>

						{value["q-a"].map(function(value_, index_) {

							if(index_%2 != 0) {
								return;
							}

							return (
								index_ > 0 ? 
									
									<Accordion style={{borderBottom: (index == faq.length -1 && index_ == value["q-a"].length -2 ? "1px solid #1747ac" : "none")}}>							
										<AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
											<Typography className={classes.heading}>
												{value_}
											</Typography>
										</AccordionSummary>

										<AccordionDetails>
											<Typography className={classes.body}>
												{value["q-a"][index_ +1]}
											</Typography>
										</AccordionDetails>
									</Accordion>

								:

									<AccordionFirst>							
										<AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
											<Typography className={classes.heading}>
												{value_}
											</Typography>
										</AccordionSummary>

										<AccordionDetails>
											<Typography className={classes.body}>
												{value["q-a"][index_ +1]}
											</Typography>
										</AccordionDetails>
									</AccordionFirst>

							)
				
						})}

					</>

				})}


				<Box py={4} >

					<Box py={4} style={{fontFamily: "muli", fontSize: '22px', color: "#002b80", fontWeight: 600}}>
						{contentPiece(siteContents_.shift())}

					</Box>

					<ColorButton disableElevation
						variant="contained"
						color="primary"
						size="large"
						className={classes.button}
						startIcon={<Mail />}
					>{contentPiece(siteContents_.shift())}</ColorButton>
      
				</Box>

			</Container>

		</Box>


		</>

		)
	
  );

}


MyComponent.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};


const WithWidth = withWidth()(MyComponent)



export default function About({siteContents, faq}) {

	//const siteContents_ = [...siteContents]


  return (
	<Container maxWidth={false} disableGutters>

		<ButtonAppBar />


		<WithWidth
		siteContents={siteContents}
		faq={faq}
		 />
		


    </Container>
  );
}




export async function getStaticProps({ preview = null }) {

  const siteContents = (await getSiteContents(preview,'support')) || []

  const faq = (await getSiteContents(preview,'faq')) || []

  return {
    props: { siteContents, faq},
  }
}


