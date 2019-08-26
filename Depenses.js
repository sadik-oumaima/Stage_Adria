import React from 'react'
import { Text,View,StyleSheet } from 'react-native'
import { Table, Row, Rows } from 'react-native-table-component'



class Depenses extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          
          tableData: [
            ['023', '13-01-2019', 'Mouvement\n51181 \nbank:00000', '5.528,0'],
            ['023', '13-01-2019', 'Mouvement\n95594 \nbank:00000', '197,00'],
            ['023', '13-01-2019', 'Mouvement\n12958 \nbank:00000', '3.408,0'],
            ['023', '13-01-2019', 'Mouvement\n64589 \nbank:00000', '631,00'],
            ['023', '13-01-2019', 'Mouvement\n86582 \nbank:00000', '858,00']
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
              >Vos dernières dépenses</Text>
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

export default Depenses