import Container from '@material-ui/core/Container';
import HeroPost from '@/components/hero-post'
import { getAllPostsForHome } from '@/lib/api'
import Button from '@material-ui/core/Button';
import { blue } from '@material-ui/core/colors';
import {withStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { spacing } from '@material-ui/system';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ButtonAppBar from '../components/ButtonAppBar.js'
import contentPiece from '../components/contentPiece.js'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MuiAccordion from '@material-ui/core/Accordion';
import withWidth from '@material-ui/core/withWidth';
import PropTypes from 'prop-types';
import React from 'react';


const WhiteCheckbox = withStyles({
  root: {
    color: 'white',
    '&$checked': {
      color: blue[400],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);



const Accordion = withStyles({

  root: {
    borderBottom: '2px solid #1747ac',
    borderTop: '2px solid #1747ac',
		borderLeft: "none",
		borderRight: "none",
		borderRadius: 0,
    boxShadow: 'none',
    color: "#002b80",
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
	
  },

  expanded: {},
})(MuiAccordion);



const AccordionSummaryStyle = withStyles({

  root: {
	"& .MuiIconButton-root": {
		padding: "0px",
	},

	
  },

})(AccordionSummary);


const ArrowDropDownIconStyle = withStyles({

  root: {
		padding: "0 ",
	color: '#1747ac',
	fontSize: '40px',
  },
})(ArrowDropDownIcon);




function MyComponent(props) {

	const preview = props.preview
	const categories = props.categories
	const posts = props.posts
	const siteContents_ = [...props.siteContents]

	const mdAndUp = (props.width == 'md' || props.width == 'lg')


	var obj = {}
	categories.map(function(value, index) {obj[value.name] = true })


	const [state, setState] = React.useState(obj);

	const handleChange = (event) => {
		const { name, checked } = event.target;
    	setState(prevState => ({ ...prevState, [name]: checked })); 
	};

	const increment = 4;

	const [offset, setOffset] = React.useState(increment);

	const morePosts = function() {
		var new_offset = (offset + increment)
		setOffset(new_offset);
	}


	var posts_= [...posts];

	posts_.map(function(value, index) {
// we always show posts without categories
		if(value.category && !state[value.category.name]) {
			delete posts_[index];
		}
	});

	

const ColorButton = withStyles((theme) => ({
  root: {

    color: '#002b80',
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: 'white',
    },
	border: '1px solid #002b80',
		borderRadius: '0'
  },
}))(Button);


  



  return (

		mdAndUp ? (

		<>

		<Box py={4} style={{color: "white", backgroundColor: "#2c72b5"}}>
<Container maxWidth="lg">
			<Container  maxWidth="md" align="center">
				<h1 style={{fontFamily: "Merriweather", fontSize: "50px"}}>{contentPiece(siteContents_.shift())}</h1>
			</Container>
</Container>
		</Box>


		<Box py={6} style={{color: "#002b80", backgroundColor: ""}}>

			<Container maxWidth="md" align="center">

				<h3 style={{fontFamily: "Muli",fontSize: "22px"}}>
					{contentPiece(siteContents_.shift())}
				</h3>

			</Container>

		</Box>

		<Container maxWidth="md" align="center">

			<Grid container maxWidth="md" justify="center" style={{color: "#002b80"}} spacing={0}>

				<Grid container  direction="column" alignItems="left" item xs={4} align="left">

					<div style={{fontSize: "18px", borderTop: "2px solid #002b80"}}>
						{contentPiece(siteContents_.shift())}
					</div>
	
					{categories.map(function(value, index) {

						return <div key={ index } >

							<FormControlLabel
								control={<WhiteCheckbox checked={state[value.name]} onChange={handleChange} name={value.name} />}
								label={value.name}
							/>
						</div>

					})}


				</Grid>

				<Grid container alignItems="center" item xs={8} align="left">


					{posts_.slice(0,offset).map(function(value, index){
						return <HeroPost
							key={index}
							title={value.title}
							coverImage={value.coverImage}
							date={value.date}
							author={value.author}
							slug={value.slug}
							excerpt={value.excerpt}
							mdAndUp={mdAndUp}
						/>;

					})}


				</Grid>


				<Box py={4} pb={10}>

					{offset < posts_.length  && 

						<ColorButton disableElevation  
							variant="contained"
							color="primary"
							size="large"
							onClick={morePosts}
						>{contentPiece(siteContents_.shift())}</ColorButton>

					}

				</Box>

			</Grid>

		</Container>

	</>

	) : (



		<>

		<Box py={4} style={{color: "white", backgroundColor: "#2c72b5"}}>
<Container maxWidth="lg">
			<Container  maxWidth="md" align="center">
				<h1 style={{fontFamily: "Merriweather", fontSize: "31px"}}>{contentPiece(siteContents_.shift())}</h1>

				<h3 style={{fontFamily: "Muli",fontSize: "18x", fontWeight: 600}}>
					{contentPiece(siteContents_.shift())}
				</h3>

			</Container>
</Container>
		</Box>


		<Box p={2} >

							<Accordion square >							
										<AccordionSummaryStyle style={{fontSize: "18px", color: "#002b80", fontWeight: 700}}
          expandIcon={<ArrowDropDownIconStyle />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          {contentPiece(siteContents_.shift())}
        </AccordionSummaryStyle>
        <AccordionDetails>
	{categories.map(function(value, index) {

						return <div key={ index } >

							<FormControlLabel
								control={<WhiteCheckbox checked={state[value.name]} onChange={handleChange} name={value.name} />}
								label={value.name}
							/>
						</div>

					})}
        </AccordionDetails>
									</Accordion>



		</Box>
	
				


					{posts_.slice(0,offset).map(function(value, index){
						return <HeroPost
							key={index}
							title={value.title}
							coverImage={value.coverImage}
							date={value.date}
							author={value.author}
							slug={value.slug}
							excerpt={value.excerpt}
							mdAndUp={mdAndUp}
						/>;

					})}



				<Box py={4} pb={10}>
<Container  align="center">
					{offset < posts_.length  && 

						<ColorButton disableElevation square
							variant="contained"
							color="primary"
							size="large"
							onClick={morePosts}
						>{contentPiece(siteContents_.shift())}</ColorButton>

					}
</Container>
				</Box>



	</>

		)

  )
}




MyComponent.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};


const WithWidth = withWidth()(MyComponent)




export default function Index({ siteContents, posts, categories, preview }) {

  return (

	<Container maxWidth={false} disableGutters>
		<ButtonAppBar />


		<WithWidth
			siteContents={siteContents}
			posts={posts}
			categories={categories}
			preview={preview}
		 />


	</Container>
  )
}



export async function getStaticProps({ preview = null }) {

	const {posts, categories, i18NS} = (await getAllPostsForHome(preview,'blog')) || []

	var siteContents = i18NS[0].content

	return {
		props: { siteContents, posts, categories, preview },
	}
}


