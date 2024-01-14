import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.chatbar}> 
  <View style={styles.profile}/>
        <View>
          <Text style={styles.text}>Kira</Text>
      <Text style={styles.text}>kira@emai</Text>
        </View>
        
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:10,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text:{
    fontSize: 20,
    paddingLeft:5
  },
  chatbar:{
    justifyContent:'flex-start',
    alignItems:'center',
    backgroundColor:'dogerblue',
    margin:20,
    borderRadius:20,
    borderWidth: 4,
    padding:10,
    width:'99%',
    flexDirection:'row',
    gap: 2
  },
  profile:{
    width:50,
    height:50,
    backgroundColor:'red',
    borderRadius:25,
  }
});
