import React from 'react'
import { TouchableOpacity, Text,TextInput,View,Image,ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Toast from 'react-native-easy-toast';

  


class Home extends React.Component{
   state = {
      username: '',
      password:''
   };
   
   constructor(props) {
   
      super(props);
     
      this.goToAbout = this.goToAbout.bind(this);
     
    }
   
    goToAbout () {
      if(this.state.username=="admin"&&this.state.password=="123"){
       Actions.about()
      }else{
         //alert("username or password is incorrect")
         this.refs.toast.show(text="username or password is incorrect");
      } 
     
 }
  

   render(){
   return (
       <View>
          <ImageBackground
          source={require('./assets/adria_1.jpg')}
          style={{width:500,height:720}}>
            <Image style={{height:200,width:400,marginTop:100}}
            source={require('./assets/adria.jpg')}
            />
            
         <TextInput
         style={{
            marginTop:20,
            backgroundColor:'#C0C0C0',
            borderRadius:100,
            paddingHorizontal:15,
            fontSize:20,
            color:'white',
            marginVertical:10,
            height:40,
            width:410,
            marginTop:60}}
         underlineColorAndroid='rgba(0,0,0,0)'
         placeholder='Username'
         placeholderTextColor='white'
         autoCapitalize="none"
         autoCorrect={false}
         onChangeText={(username) => this.setState({username})}
         value={this.state.username}
        
       
         
         />
         <TextInput
         style={{backgroundColor:'#C0C0C0',borderRadius:25,paddingHorizontal:15,fontSize:20,color:'white',marginVertical:20,height:40,width:410}}
         underlineColorAndroid='rgba(0,0,0,0)'
         placeholder='Password'
         secureTextEntry={true}
         placeholderTextColor='white'
         onChangeText={(password) => this.setState({password})}
         value={this.state.password}
       
                    
                />
           <TouchableOpacity style = {{ marginTop:5,
            width:410,
            height:40,
            backgroundColor:"#ff6600",
            borderRadius:25 }} onPress = {this.goToAbout}>
         <Text style={{fontSize :20,fontWeight:'300',color:'white',marginTop:5,textAlign: 'center'}}
         >Login</Text>
         
      </TouchableOpacity>
      </ImageBackground>
      <Toast style={{backgroundColor:"#FFAD32"}}
       ref="toast" />
       </View>
      
   )
}
}

export default Home