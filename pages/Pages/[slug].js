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
import { getAllPagesWithSlug, getPage } from '@/lib/api'
import Date from '@/components/date'
import markdownStyles from '@/components/markdown-styles.module.css'
import ErrorPage from 'next/error'
import ArrowBack from '@material-ui/icons/ArrowBack';
import ButtonLink from '@/components/material-ui-next-js-button.js'
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import contentPiece from '@/components/contentPiece.js'


export default function Post({ page, preview }) {

//console.log('post')
//console.log(post)

  const router = useRouter()

//?.slug
  if (!router.isFallback && !page) {
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




  return (

	<Container maxWidth={false} disableGutters>
		<ButtonAppBar />

		<Box py={4} style={{color: "white", backgroundColor: "#2c72b5"}}>

			<Container  maxWidth="md" align="center">

				<h1 style={{fontFamily: "Merriweather", fontSize: "50px"}}>
					{page && page.title}
				</h1>

			</Container>

		</Box>


		<Container maxWidth="md">
		
			<Box py={8}>

				<div className={markdownStyles['markdown']} dangerouslySetInnerHTML={{ __html: page && page.content }}
						/>

			</Box>

		</Container>

{/*
      <Backdrop className={classes.backdrop} open={Backdrop_open}>
        <CircularProgress color="inherit" />
      </Backdrop>
*/}

	</Container>

  )
}



export async function getStaticProps({ params, preview = null }) {

	const data = await getPage(params.slug, preview)

	var page = (data && data.pages && data.pages.length ? data.pages[0] : null)

	if(page) {
		page.content = await markdownToHtml(page.content)
	}

//console.log(morePosts)

	return {
		props: {
			preview,
			page: page
		},
	}
}


export async function getStaticPaths() {
  const allPages = await getAllPagesWithSlug()
  return {
    paths: allPages?.map((page) => '/Pages/' + page.slug) || [],
    fallback: true,
  }
}



