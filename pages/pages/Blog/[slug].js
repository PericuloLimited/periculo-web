import React from 'react';
import { useRouter } from 'next/router'
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { blue } from '@material-ui/core/colors';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { spacing } from '@material-ui/system';
import Grid from '@material-ui/core/Grid';
import ButtonAppBar from '@/components/ButtonAppBar.js'
import markdownToHtml from '@/lib/markdownToHtml'
import Avatar from '@material-ui/core/Avatar';
import { getAllPostsWithSlug, getPost, getMorePosts, getAllSlugs } from '@/lib/api'
import { CMS_URL } from '@/lib/constants'
import Date from '@/components/date'
import markdownStyles from '@/components/markdown-styles.module.css'
import markdownStylesMobile from '@/components/markdown-styles-mobile.module.css'
import readingTime from 'reading-time';
import ErrorPage from 'next/error'
import HeroPost from '@/components/hero-post'
import ArrowBack from '@material-ui/icons/ArrowBack';
import ButtonLink from '@/components/material-ui-next-js-button.js'
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import contentPiece from '@/components/contentPiece.js'
import withWidth from '@material-ui/core/withWidth';
import PropTypes from 'prop-types';



function MyComponent(props) {

	const mdAndUp = (props.width == 'md' || props.width == 'lg')
	const post = props.post
	const morePosts = props.morePosts
	const preview = props.preview
	const previousSlug = props.previousSlug
	const nextSlug = props.nextSlug


//console.log('post')
//console.log(post)

  const router = useRouter()

//?.slug
  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />
  }


/*
// const results = useSelector((state) => state.results)
 const [open, setOpen] = React.useState(false);

	if (router.isFallback) {
			setOpen(true)

	} else {
		setOpen(false)
	}
*/

	var Backdrop_open = router.isFallback


	const authorInitials = function(name) {
		var list = []
		name.split(' ').map(x => list.push(x.charAt(0)))
		return list.join('')
	}


const ButtonStyle = withStyles((theme) => ({
  root: {
  },
}))(Button);


const ColorButton = withStyles((theme) => ({
  root: {
    color: '#002b80',
	whiteSpace: "nowrap",
    backgroundColor: '',
    '&:hover': {
      backgroundColor: 'white',
    },
  },
}))(Button);

const ColorButtonMobile = withStyles((theme) => ({
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


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));


	const classes = useStyles();


  return (

		<>

		{mdAndUp ? (

		<> 

		<Box py={4} style={{color: "white", backgroundColor: "#2c72b5"}}>

			<Container  maxWidth="md" align="center">

				<h1 style={{fontFamily: "Merriweather", fontSize: "50px"}}>
					Blog post
				</h1>

			</Container>

		</Box>


		<Container maxWidth="lg" align="center">

			<Grid container justify="center" style={{color: "#002b80"}} spacing={0}>

				<Grid container  direction="column" alignItems="left" item xs={3} align="left">

					
					<Box py={2}>

						<ColorButton
							size="large"
							className={classes.button}
							startIcon={<ArrowBack />}
							component={ButtonLink} href={'/Blog'}
						>Back to blog</ColorButton>

					</Box>

				</Grid>


				<Grid container direction="column" alignItems="left" item xs={7} align="left">

       			 	{!router.isFallback && <>

						<Box py={2} >
							<table style={{fontFamily: "Muli",fontSize: "16px", fontWeight: "600"}}>
								<tr><td>
									{post.author.picture ? 
										<Avatar alt={post.author.name} className={classes.large} src={CMS_URL + post.author.picture.url} />
										:
										<Avatar alt={post.author.name} className={classes.large}> {authorInitials(post.author.name)} </Avatar>
									}
								</td><td style={{width: "90%"}}>
									{post.author.name}
									<div style={{color: "gray",textTransform: "uppercase"}}>
										{post.date && <Date dateString={post.date} />} {readingTime(post.content).text}
									</div>
								</td></tr>
							</table>
						</Box>

						<h1 style={{fontFamily: "Merriweather", fontSize: "30px", color: "#002b80"}}>
							{post.title}
						</h1>


						<div className={markdownStyles['markdown']} dangerouslySetInnerHTML={{ __html: post.content }}
						/>

	
						<Box py={4} pb={10} align="right">


							{ previousSlug && 
								<Button disableElevation color="primary" component={ButtonLink} href={previousSlug}>Next post</Button>
							}

			
							{nextSlug && 					
								<Button disableElevation color="primary" component={ButtonLink} href={nextSlug}>Previous post</Button>
							}

						</Box>



						<Box py={4} pb={10} style={{background: "#f5f5f5"}}>

							<h3 style={{fontSize: "24px",fontFamily: "Merriweather", fontWeight: "700"}}>
								You might also like
							</h3>


							{morePosts && morePosts.map(function(value, index){
								return <HeroPost
									key={index}
									title={value.title}
									coverImage={value.coverImage}
									date={value.date}
									author={value.author}
									slug={value.slug}
									excerpt={value.excerpt}
								/>;

							})}

						</Box>
					
       				</> }

				</Grid>

			</Grid>

		</Container>

{/*
      <Backdrop className={classes.backdrop} open={Backdrop_open}>
        <CircularProgress color="inherit" />
      </Backdrop>
*/}

		</>

		) : (

		<>

		<Box py={4} style={{color: "white", backgroundColor: "#2c72b5"}}>

			<Container  maxWidth="md" align="center">

				<h1 style={{fontFamily: "Merriweather", fontSize: "31px"}}>
					Blog post
				</h1>

			</Container>

		</Box>





       			 	{!router.isFallback && <>


					<Box p={2}>

						<ColorButton
							size="large"
							className={classes.button}
							startIcon={<ArrowBack />}
							component={ButtonLink} href={'/Blog'}
						>Back to blog</ColorButton>

					</Box>


						<Box p={2} pt={0}>

						<Box py={2} >
							<table style={{fontFamily: "Muli",fontSize: "16px", fontWeight: "600"}}>
								<tr><td>
									{post.author.picture ? 
										<Avatar alt={post.author.name} className={classes.large} src={CMS_URL + post.author.picture.url} />
										:
										<Avatar alt={post.author.name} className={classes.large}> {authorInitials(post.author.name)} </Avatar>
									}
								</td><td style={{width: "90%"}}>
									{post.author.name}
									<div style={{color: "gray",textTransform: "uppercase"}}>
										{post.date && <Date dateString={post.date} />} {readingTime(post.content).text}
									</div>
								</td></tr>
							</table>
						</Box>

						<h1 style={{fontFamily: "Merriweather", fontSize: "28px", color: "#002b80"}}>
							{post.title}
						</h1>


						<div className={markdownStylesMobile['markdown']} dangerouslySetInnerHTML={{ __html: post.content }}
						/>



		<Box py={2}>
			<Grid container justify="center" style={{color: "#002b80"}} spacing={0}>

				<Grid container alignContent="flex-start" direction="column" alignItems="left" item xs={6} align="left">

					
							{ previousSlug && 
								<ButtonStyle  disableElevation color="primary" component={ButtonLink} href={previousSlug}>Next post</ButtonStyle>
							}
</Grid >
			<Grid container alignContent="flex-end"  direction="column" alignItems="right" item xs={6} align="right">

							{nextSlug && 					
								<ButtonStyle  disableElevation color="primary" component={ButtonLink} href={nextSlug}>Previous post</ButtonStyle>
							}
</Grid >
</Grid >
						</Box>



				<Box py={4} >
<Container  align="center">

							<ColorButtonMobile
							size="large"
							className={classes.button}
							component={ButtonLink} href={'/Blog'}
						>Back to blog</ColorButtonMobile>

</Container>
				</Box>


						</Box>


						<Box  pb={6} style={{background: "#f5f5f5"}}>

						<Box  p={2}>


							<h3 style={{color: "#002b80", fontSize: "24px",fontFamily: "Merriweather", fontWeight: "700"}}>
								You might also like
							</h3>


							{morePosts && morePosts.map(function(value, index){
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

						</Box>

						</Box>

					
       				</> }




{/*
      <Backdrop className={classes.backdrop} open={Backdrop_open}>
        <CircularProgress color="inherit" />
      </Backdrop>
*/}

		</>

		)

		}

		
		</>

  )
}



MyComponent.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};


const WithWidth = withWidth()(MyComponent)



export default function Post({ post, morePosts, preview, previousSlug, nextSlug }) {

  return (
	<Container maxWidth={false} disableGutters>

		<ButtonAppBar />


		<WithWidth
			post={post}
			morePosts={morePosts}
			preview={preview}
			previousSlug={previousSlug}
			nextSlug={nextSlug}
		 />

    </Container>
  );


}




export async function getStaticProps({ params, preview = null }) {

	const data = await getPost(params.slug, preview)

	var post = (data && data.posts && data.posts.length ? data.posts[0] : null)

	var morePosts = []

	var previousSlug = null;
	var nextSlug = null;

	if(post) {
		post.content = await markdownToHtml(post.content)
  		const data_ = await getMorePosts(params.slug, post.category, preview)


		if(data_ && data_.morePosts) {
			morePosts = data_.morePosts
		}

		const data__ = await getAllSlugs(preview)


		if(data__.posts && data__.posts.length) {
			var posts_ = data__.posts

			for(var i in posts_) {
				
				if(posts_[i].title == post.title) {
					if(posts_[i-1]) {
						previousSlug = posts_[i-1].slug
					}
					if(posts_[(i*1)+1]) {
						nextSlug = posts_[(i*1)+1].slug
					}
					break;
				}
			}

		}


	}

//console.log(morePosts)

	return {
		props: {
			preview,
			post: post,
			morePosts: morePosts,
			previousSlug: previousSlug,
			nextSlug: nextSlug,
		},
	}
}


export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()
  return {
    paths: allPosts?.map((post) => '/Blog/' + post.slug) || [],
    fallback: true,
  }
}



