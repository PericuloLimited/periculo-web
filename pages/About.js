import Container from '@material-ui/core/Container';
import ButtonAppBar from '../components/ButtonAppBar.js'
import Box from '@material-ui/core/Box';
import { getSiteContents, getPage } from '@/lib/api'
import contentPiece from '../components/contentPiece.js'
import markdownToHtml from '@/lib/markdownToHtml'
import markdownStyles from '@/components/markdown-styles.module.css'



export default function About({siteContents, page, preview }) {


  const siteContents_ = [...siteContents]



  return (
    <Container maxWidth={false} disableGutters>
		<ButtonAppBar />

		<div style={{position: "relative"}}>
		<div style={{position: "absolute", left: "50%"}}>
			<h1 style={{position: "relative", left: "-50%", top: "80px", fontFamily: "Merriweather", fontSize: "60px", color: "white", margin: "auto"}}>
				{contentPiece(siteContents_.shift())}
			</h1>
		</div>

		<img style={{width: "100%"}} src="assets/images/warden_hero_png.png" /> 


		</div>

	
		<Container maxWidth="md">
		
			<Box py={8}>

				<div className={markdownStyles['markdown']} dangerouslySetInnerHTML={{ __html: page && page.content }}
						/>

			</Box>

		</Container>

	</Container>
  );
}




export async function getStaticProps({ preview = null }) {
  const siteContents = (await getSiteContents(preview,'about')) || []


	const data = await getPage('about', preview)

	var page = (data && data.pages && data.pages.length ? data.pages[0] : null)

	if(page) {
		page.content = await markdownToHtml(page.content)
	}



  return {
	props: {
		siteContents,
		page: page,
		preview,
	}
  }


}

