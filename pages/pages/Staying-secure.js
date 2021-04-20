import React from 'react';
import Container from '@material-ui/core/Container';
import ButtonAppBar from '../components/ButtonAppBar.js'
import { getSiteContents } from '@/lib/api'
import StayingSecureComponent from './Staying-secure_component.js'



export default function About({siteContents}) {


	const siteContents_ = [...siteContents]



  return (
	<Container maxWidth={false} disableGutters>
		<ButtonAppBar />

		<StayingSecureComponent
		siteContents={siteContents}
		 />


    </Container>
  );
}




export async function getStaticProps({ preview = null }) {
  const siteContents = (await getSiteContents(preview,'staying-secure')) || []


  return {
    props: { siteContents },
  }
}


