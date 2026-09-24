import { StatusBar, View, Text, StyleSheet} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Header } from "./src/components/Header";
import { WaterProgress } from "./src/components/WaterProgress";




export default function App(){
 const GOAL = 2000
  
  return(
    <SafeAreaProvider>
      <SafeAreaView> 
      <StatusBar barStyle={'auto'}/>
      <View>
        <Header goal={GOAL}/>
        <WaterProgress />
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