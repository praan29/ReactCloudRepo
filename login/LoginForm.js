import React,{Component} from 'react';
/*import { Tabs } from '../config/router'*/
import { StackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons' ; 
import FontAwesome from 'react-native-vector-icons/FontAwesome' ;

import SignUpForm from '../login/SignUpForm';

import { StyleSheet, Text,
		View,Image,Icon,
		TextInput,Button,TouchableOpacity,
		KeyboardAvoidingView,Navigator } from 'react-native';

export default class LoginForm extends React.Component {
	
	_onPressLoginButton(){
		alert('Clicked Login Button !');
	}
	
	_onPressNewUserButton(){
		alert('Clicked New User Button !');
	}
 
/*constructor() { 07/17/2017
    super();

    // need to bind `this` to access props in handler
    this.onPressButton = this.onPressButton.bind(this);
  }
*/

  render() {
	 
	return (
			
		<KeyboardAvoidingView behavior='padding'>
			<View style = {styles.container} >
				<View style = {styles.input}> 
					<FontAwesome name='user' style ={styles.iconContainer} size={30}  />
						<TextInput 
							returnKeyType = "next"
							placeholder = "Email or phone" 
							placeholderTextColor ='#95a5a6'
							underlineColorAndroid = "transparent"
						/>
				</View>
				
				<View style = {styles.input}> 
					<FontAwesome name='lock' style ={styles.iconContainer} size={30}  />
						<TextInput 
							secureTextEntry
							returnKeyType = "go"
							placeholder = "Password" 
							placeholderTextColor ='#95a5a6'
							underlineColorAndroid = "transparent"
						/>
				</View>

				<View style = {styles.buttonWraper}>
					
					<TouchableOpacity style = {styles.signInButton}>
						<FontAwesome name = 'arrow-right' style = {styles.iconContainer} size = {20} />
							<Text style = {styles.buttonCaption}  title = "login"> 
								LOGIN
							</Text>
					</TouchableOpacity>

					<Button style = {styles.signUpButton}
						title="SIGN UP"
						onPress={() => navigate('signUp')}
         			/>
					
				</View>
				
				<TouchableOpacity>
					<Text style = {styles.forgetPasswordButton}> Forget Password ? </Text>
				</TouchableOpacity>

			</View>
		</KeyboardAvoidingView>
	);
  }
}

const SimpleApp = StackNavigator({
  signUp: { screen: SignUpForm },
});



/*
07/17/2017
const ModalStack = StackNavigator({
  
  Profile: {
    //path: '../login/SignUpForm',
    screen: SignUpForm,
  },
});
*/

/*
<TouchableOpacity style = {styles.signUpButton} title="Chat with Lucy">
	<Text style = {styles.buttonCaption}> SIGN UP </Text>
</TouchableOpacity>
*/


const styles = StyleSheet.create({
  	container: {
	 	padding : 20,
  	},
	input: {
		height : 40,
		marginBottom : 10,
		paddingVertical : 5,
		paddingHorizontal : 10,
		backgroundColor : '#ecf0f1',
	},
	iconContainer :{
		padding : 0,
		right : 7,
		color : '#7f8c8d',
		paddingVertical : 5,
		position: 'absolute',
	},
	buttonWraper :{
		marginTop : 20,
	},
	signInButton : {
		marginBottom : 20,
		paddingVertical : 10,
		backgroundColor : '#303F9F',
	},
	signUpButton :{
		backgroundColor : '#27ae60',
		paddingVertical : 10,
		/*paddingVertical : 15,
		paddingHorizontal : 20,
		*/
	},
	forgetPasswordButton : {
		color : '#02357c',
		textAlign : 'right',
		paddingVertical : 15,
		marginBottom : 10,
		paddingHorizontal : 20,
	},
	buttonCaption : {
		color : '#ecf0f1',
		fontWeight : '700',
		textAlign : 'center',
	},
});
