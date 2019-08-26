import React from 'react'
import { Text,View,StyleSheet } from 'react-native'
import { Table, Row, Rows } from 'react-native-table-component'



class Recettes extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          
          tableData: [
            ['023', '13-01-2019', 'Mouvement\n91181 \nbank:00000', '7.528,0'],
            ['023', '13-01-2019', 'Mouvement\n64594 \nbank:00000', '6.123,0'],
            ['023', '13-01-2019', 'Mouvement\n12548 \nbank:00000', '3.408,0'],
            ['023', '13-01-2019', 'Mouvement\n65489 \nbank:00000', '1.968,0'],
            ['023', '13-01-2019', 'Mouvement\n46582 \nbank:00000', '5.8585,0']
          ]
        }
      }
    render(){
        const state = this.state;
        const gradientHeight=500;
        const gradientBackground  = '#ffa96b';
          const data = Array.from({ length: gradientHeight });
        return(
            <View style={styles.container}>
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
                <Text style={{textAlign:"center" , fontWeight: 'bold',color:"#ff6b00",fontSize:20}}
              >Vos dernières recettes</Text>
            <Table style={{marginTop:20}} borderStyle={{borderWidth: 2, borderColor: '#6D6E71'}}>
              <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
              <Rows data={state.tableData} textStyle={styles.text}/>
            </Table>
          </View>
        )
    }
}
const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff', },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 ,fontWeight: 'bold'}
  });

export default Recettes