import { StatusBar, View, Text, StyleSheet} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Header } from "./src/components/Header";




export default function App(){
 
  
  return(
    <SafeAreaProvider>
      <SafeAreaView> 
      <StatusBar barStyle={'auto'}/>
      <View>
        <Header objetivo={100}/>
      </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

// const styles = StyleSheet.create({
//   texto:{
//     color:'#020202',
//     fontSize:15,
    
//   },
//   container:{
//     backgroundColor: 'yellow',
//     height: '100%',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// })