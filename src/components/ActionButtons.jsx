import { View, Text, StyleSheet} from "react-native";
import { COLORS } from "../constants/colors";

export default function ActionButtons({onAddWate, onReset}) {
    return (
        <View style={styles.container}>
            <Text styles={styles.label}>Adicionar consumo:</Text>
        </View>
    )
}