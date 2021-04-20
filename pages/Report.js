import React from 'react';
import ReportComponent from './Report_component';
import { getSiteContents } from '@/lib/api'
import { useEffect } from 'react';
//import ScrollToTop from "react-scroll-to-top";


class Report extends React.Component {


	constructor({siteContents}) {
		super();


		this.siteContents = siteContents

/*
		this.myRef = null

		this.scroll = function(ref) {
			this.myRef = ref
		}
*/
	


	}


	componentDidMount() {
	
/*
		if(this.myRef) {
			this.myRef.current.scrollIntoView({behavior: 'smooth'})
		}
*/
//window.scroll({top: 0, left: 0, behavior: 'smooth' })


		
	}

// scroll={this.scroll}

	render() {


		return (
			<ReportComponent 
				siteContents={this.siteContents}
			/>
		)
	}
}






export async function getStaticProps({ preview = null }) {
  const siteContents = (await getSiteContents(preview,'report')) || []


  return {
    props: { siteContents },
  }
}





export default Report;


