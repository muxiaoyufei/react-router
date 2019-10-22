import React, {Component} from 'react';
import Tabbar from '../components/tabbar'

class Home extends Component {
	constructor(props){
		super(props)
		this.state={
		
		}
	}
	
	render(){
		return(
			<div className="home">
				<img className="bg" src={require('../static/images/home.jpg')} alt=""/>
				{/*<Tabbar />*/}
			</div>
		)
	}
}
export default Tabbar(Home);