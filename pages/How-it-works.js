import Container from '@material-ui/core/Container';
import ButtonAppBar from '../components/ButtonAppBar.js'
import HowItWorksComponent from './how-it-works_component.js'
import { getSiteContents } from '@/lib/api'



function MyComponent({siteContents}) {

	//const theme = useTheme();
	//const mdAndUp = useMediaQuery(theme.breakpoints.up('md'));


	const siteContents_ = [...siteContents]


 return (
	<Container  maxWidth={false} disableGutters>

		<ButtonAppBar />

		<HowItWorksComponent
		siteContents={siteContents}
		 />



    </Container>
  );


}

export default MyComponent




export async function getStaticProps({ preview = null }) {
  const siteContents = (await getSiteContents(preview,'how-it-works')) || []

  return {
    props: { siteContents },
  }
}


