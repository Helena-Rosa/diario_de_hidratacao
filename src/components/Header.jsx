import { View, Text, StyleSheet} from "react-native";
import { COLORS } from "../constants/colors";
export function Header({objetivo, porcentagem}){
    return(
        <View style = {styles.container}>
            <Text style = {styles.title}>Diário de hidratação</Text>
            <Text style = {styles.subtitle}>Meta Diária: {objetivo}ml</Text>
            <Text style = {styles.subtitle}>Voce atingiu {porcentagem}%</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    marginBottom: 24,
  },
  title:{
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.textMuted,
    
  },
  subtitle:{
    fontSize: 14,
    color: COLORS.textMuted,
    marginTop: 4,
  },
})

