import { Text, View } from "react-native";

export function WaterProgress( {consumido=666, objetivo=2000} ){

const porcentagem = (consumido/objetivo)*100
    return(
        <View>
            <Text>Voce bebeu 250ml de agua hoje</Text>
            <Text>Voce atingiu {porcentagem}% da Meta</Text>
            {/* {barra azul} */}
            <View>
                <View />
            </View>
        </View>
    )
}