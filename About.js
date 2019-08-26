import React from 'react'
import { View,Text,TouchableOpacity,Image,Button,ImageBackground } from 'react-native'
import { Actions } from 'react-native-router-flux';
import JellySideMenu from 'react-native-jelly-side-menu';
import { Table, Row, Rows } from 'react-native-table-component';
import {
  LineChart
} from 'react-native-chart-kit';






class About extends React.Component{

constructor(props) {
    super(props); 
    this.goToScreen = this.goToScreen.bind(this);
    this.itemStyle = {backgroundColor: 'transparent'};
    this.itemTextStyle = {color: '#000', fontWeight: 'bold', fontSize: 20};
    this.renderMenu = this.renderMenu.bind(this);   
    
      }
      goToScreen (){
        Actions.comptes()
     }
     goToHome (){
      Actions.about()
     }
     goToPaiements(){
      Actions.paiements()
     }
     goToRecette(){
      Actions.recettes()
     }
     goToDepense(){
      Actions.depenses()
     }
      renderItem(text, onPress) {
        return (
          <TouchableOpacity>
            <View style={this.itemStyle}>
              <Text style={this.itemTextStyle}>{text}</Text>
            </View>
            
          </TouchableOpacity>
        )
      }
      
      renderMenu() {
        
        return (
          <View style={{flex: 1,backgroundColor:"#FFE0BC"}}>
            
            <TouchableOpacity style = {{
                  width:240,
                  height:60,
                  //backgroundColor:"#D7FFFE",
                  
            }}onPress = {this.goToHome}>
             

              
                        <Text style={{
                      fontSize :20,
                      fontWeight:'300',
                      color:'#000',
                      marginTop:5,
                      marginLeft:10
                      }}>Accueil</Text>
              
             
                       
                        
                      

            </TouchableOpacity>
            
            <TouchableOpacity style = {{
                  width:240,
                  height:60,
                  //backgroundColor:"#D7FFFE",
                  
            }}onPress = {this.goToScreen}>
                  <Text style={{
                      fontSize :20,
                      fontWeight:'300',
                      color:'#000',
                      marginTop:5,
                      marginLeft:10
                      }}>Comptes</Text>
         
            </TouchableOpacity>

            <TouchableOpacity style = {{
                  width:240,
                  height:60,
                  //backgroundColor:"#D7FFFE",
            }}onPress = {this.goToPaiements}>
                  <Text style={{
                      fontSize :20,
                      fontWeight:'300',
                      color:'#000',
                      marginTop:5,
                      marginLeft:10
                      }}>Paiements</Text>
         
            </TouchableOpacity>

            <TouchableOpacity style = {{
                  width:240,
                  height:60,
                  //backgroundColor:"#D7FFFE",
                  
            }}>
                  <Text style={{
                      fontSize :20,
                      fontWeight:'300',
                      color:'#000',
                      marginTop:5,
                      marginLeft:10
                      }}>Services</Text>
         
            </TouchableOpacity>

            <TouchableOpacity style = {{
                  width:240,
                  height:60,
                  //backgroundColor:"#D7FFFE",
            }}>
                  <Text style={{
                      fontSize :20,
                      fontWeight:'300',
                      color:'#000',
                      marginTop:5,
                      marginLeft:10
                      }}>Administration</Text>
         
            </TouchableOpacity>
            
            <TouchableOpacity style = {{
                  width:240,
                  height:60,
                  //backgroundColor:"#D7FFFE",
            }}
            
            
            
            >
                  <Text style={{
                      fontSize :20,
                      fontWeight:'300',
                      color:'#000',
                      marginTop:5,
                      marginLeft:10,
                    
                      }}>
                        
                        
                        
                        Messagerie</Text>
         
            </TouchableOpacity>
            
          </View>
          
        )
      }
    render(){
      
        return(
          <View style={{flex: 1, backgroundColor: '#FFE0BC'}}>
            <ImageBackground
            source={require('./assets/en.jpg')}
            style={{width:500,height:720}}>
        <JellySideMenu 
        ref={(view) => {this.jsm = view}}
        fill={"#000"} fillOpacity={1.0}
        renderMenu={this.renderMenu}>
 
           <TouchableOpacity 
           onPress={() => {this.jsm.toggleSideMenu(true)}}>
            <View style={[this.itemStyle]}>
            <Image style={{height:60,width:50}}
            source={require('./assets/icon-menu.png')}
            />
         
  
            </View>
          </TouchableOpacity>
          <View>
         
   
      <Text style={{
       color:'#ff6600',
       fontSize:16,
       fontWeight: 'bold',
       marginLeft:15,
       marginTop:10
     }}
     >SOLDE RÉEL</Text>
     <Text style={{
        color:"gray",
        fontSize:16,
        fontWeight: 'bold',
        marginLeft:15,
        
      }}
      >* MAD </Text>
     <Text style={{
       color:'#ff6600',
       fontSize:16,
       fontWeight: 'bold',
       marginLeft:15
     }}
     >SOLDE COMPTABLE</Text>
     
      <Text style={{
        color:"gray",
        fontSize:16,
        fontWeight: 'bold',
        marginLeft:15
      }}
      >135.000,00 MAD</Text>
      <Text
        style={{
          flexDirection:'row',
          color:"#B0B0B0",
          marginLeft:15,
          marginTop:8,
          fontWeight: 'bold'
        }}>
        N° 5482697365445695
      </Text>
      </View>
     
          <LineChart
    data={{
      labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin'],
      datasets: [{
        data: [
          Math.random() * 10000,
          Math.random() * 10000,
          Math.random() * 10000,
          Math.random() * 10000,
          Math.random() * 10000,
          Math.random() * 10000
        ]
      }]
    }}
    width={390} // from react-native
    height={220}
    
    //yAxisLabel={'$'}
    chartConfig={{
      backgroundColor: '#FF6B00',
      backgroundGradientFrom: '#FC9A40',
      backgroundGradientTo: '#FFC46B',
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
        
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16,
      marginLeft:10,
      marginTop:20,
      
    }}
    
  />
       <TouchableOpacity style = {{ marginTop:10,
            width:300,
            height:100,
            marginLeft:50,
            backgroundColor:"#fff",
            borderRadius:25
             }} onPress = {this.goToRecette}>
         <Text style={{fontSize :20,fontWeight:'300',color:'gray',marginTop:30,textAlign: 'center'}}
         >Dernières recettes</Text>
         
      </TouchableOpacity>
      <TouchableOpacity style = {{marginTop:5,
            width:300,
            height:100,
            marginLeft:50,
            backgroundColor:"#fff",
            borderRadius:25
             }}  onPress = {this.goToDepense}>
         <Text style={{fontSize :20,fontWeight:'300',color:'gray',marginTop:30,textAlign: 'center'}}
         >Dernières dépenses</Text>
         
      </TouchableOpacity>
      
     
     
        </JellySideMenu>
        
        </ImageBackground>
        </View>
     
          
        )
    }
}

export default About
