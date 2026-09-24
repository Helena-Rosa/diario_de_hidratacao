import { Text, View } from "react-native";

export function WaterProgress( {consumed, goal} ){

const percentage = Math.min(Math.round((consumed/goal)*100),100)
    return(
        <View>
            <Text>Voce bebeu {consumed}ml de agua hoje</Text>
            <Text>Voce atingiu {percentage}% da Meta</Text>
            {/* {barra azul} */}
            <View style={{width:'100%', height:'30', backgroundColor: 'red'}}>
                <View style={{height: '100%', backgroundColor:'green', width: `${percentage}`}}/>
            </View>
        </View>
    )
}