import React,{Component} from 'react';
import { StyleSheet, Text, View,Image,TextInput,Button } from 'react-native';
import LoginForm from './login/LoginForm'

const logo = require('./img/madiba-logo.png');
const loginScreenBackGroundImg = require('./img/BackBag-Android-Wallpaper-01.jpeg')

export default class App extends React.Component {
	
  render() {
	return (
			<Image 
				source = {loginScreenBackGroundImg}
				style = {[styles.background,styles.container]} 
			>
				<Text style ={styles.title}>{this.props.title}</Text>
						<View style = {styles.logoContainer}>
							<Image 
								style = {styles.logo}
								source = {logo} 
							/>
							<Text style = {styles.title}> We Deliver Solutions For Tomorrow.</Text>
						</View>
					<LoginForm/>
				
			</Image>
		);
  }
}

const styles = StyleSheet.create({
  container: {
  	flex: 1,
		/*backgroundColor: 'skyblue',*/
	},
	background : {
		height : null,
		width : null,
	},
	logoContainer :{
		flexGrow : 2,
		alignItems : 'center',
		justifyContent : 'center',
	},
	logo : {
			width : 100,
			height : 100,
	},
	title :{
		width : 150,
		marginTop : 10,
		opacity : 0.9,
		textAlign : 'center',
	},
});
