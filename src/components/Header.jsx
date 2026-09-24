import { View, Text, StyleSheet} from "react-native";
export function Header({objetivo}){
    return(
        <View style = {styles.container}>
            <Text style = {styles.title}>Diário de hidratação</Text>
            <Text style = {styles.subtitle}>Meta Diária: {objetivo}ml</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
  },
  title:{
    color:'green',
  },
  subtitle:{
    backgroundColor:'red',
  },
})

