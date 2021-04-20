import React from 'react';
import FooterComponent from './footer-component';



class Footer extends React.Component {


	constructor() {
		super();
		this.state = {
			items: [],
 			isLoaded: false
		}


	}


	componentDidMount() {

		fetch('https://api.usewarden.com/api/breaches')
			.then(results => results.json())
			.then(json => {

				this.setState({
					isLoaded: true,
					items: json                           
				})


//console.log(json)

			});
	}


	render() {

		let {isLoaded, items } = this.state;

		return (
			<FooterComponent 
				isLoaded={isLoaded}
				items={items}

			/>
		)
	}
}



export default Footer;


