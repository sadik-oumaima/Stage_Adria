import React from 'react'
import { Text,View,ImageBackground,TouchableOpacity } from 'react-native'
import JellySideMenu from 'react-native-jelly-side-menu';
import {Container, Content} from 'native-base';



class Paiements extends React.Component{
    constructor(props){
    super(props);
    this.itemStyle = { backgroundColor: 'transparent'};
    this.itemTextStyle = {color: '#000', fontWeight: 'normal', fontSize: 17,marginLeft:10,};
    this.renderMenu = this.renderMenu.bind(this);
    }
    renderItem(text, onPress) {
        return (
          <TouchableOpacity onPress={onPress}>
            <View style={this.itemStyle}>
              <Text style={this.itemTextStyle}>{text}</Text>
            </View>
          </TouchableOpacity>
        )
      }
      renderMenu() {
        return (
          <View>
              <Text style={{textAlign:"center" , fontWeight: 'bold',color:"#ff6b00",fontSize:20,marginTop:10}}
              >Virements et transferts</Text>
            {this.renderItem("Virements", () => {this.jsm.toggleSideMenu();})}
            {this.renderItem("Virement multiple", () => {this.jsm.toggleSideMenu();})}
            {this.renderItem("Recharge de carte", () => {this.jsm.toggleSideMenu();})}
            {this.renderItem("Déclaration des bénéficiaires", () => {this.jsm.toggleSideMenu();})}
            <Text style={{textAlign:"center" ,fontWeight: 'bold',color:"#ff6b00",fontSize:20,marginTop:10}}
              >LCN</Text>
            {this.renderItem("Vos LCN à payer", () => {this.jsm.toggleSideMenu();})}
            {this.renderItem("Vos LCN à encaisser", () => {this.jsm.toggleSideMenu();})}
            {this.renderItem("Recherche LCN à payer", () => {this.jsm.toggleSideMenu();})}
            {this.renderItem("Recherche LCN à encaisser", () => {this.jsm.toggleSideMenu();})}
            {this.renderItem("impayés LCN", () => {this.jsm.toggleSideMenu();})}
            {this.renderItem("Demandes LCN", () => {this.jsm.toggleSideMenu();})}
            <Text style={{textAlign:"center" ,fontWeight: 'bold',color:"#ff6b00",fontSize:20,marginTop:10}}
              >Chèques</Text>
            {this.renderItem("Vos chèques à payer", () => {this.jsm.toggleSideMenu();})}
            {this.renderItem("Vos chèques à encaisser", () => {this.jsm.toggleSideMenu();})}
            {this.renderItem("impayés chèques", () => {this.jsm.toggleSideMenu();})}
            {this.renderItem("Demandes chéquier", () => {this.jsm.toggleSideMenu();})}
            {this.renderItem("Opposition sur chèque", () => {this.jsm.toggleSideMenu();})}
          
            

          </View>
        )
      }
      
    render(){
        const gradientHeight=500;
        const gradientBackground  = '#ffa96b';
          const data = Array.from({ length: gradientHeight });
        return(
          
            
<View style={{flex: 1, alignItems: 'center',justifyContent: 'center',fontWeight:'bold'}}> 
{data.map((_, i) => (
    <View
        key={i}
        style={{
            position: 'absolute',
            backgroundColor: gradientBackground,
            height: 1,
            bottom: (gradientHeight - i),
            right: 0,
            left: 0,
            zIndex: 2,
            opacity: (1 / gradientHeight) * (i + 1)
        }}
    />
))} 



<Text>
Page Paiement</Text>

<JellySideMenu 
        ref={(view) => {this.jsm = view}}
        fill={"#fff"} fillOpacity={1.0}
        renderMenu={this.renderMenu}>

        </JellySideMenu>

  </View> 
        )
    }
}

export default Paiements