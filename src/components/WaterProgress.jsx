import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";

export function WaterProgress({consumido, goal}) {
    //calculo dinamico da porcentagem atingida para a barra visual
  const percentage = Math.min(Math.round((consumido/goal)*100), 100) 


  return (
    <View styles={styles.card}>
      <Text styles={styles.consumedText}>Você bebeu {consumido}ml de água hoje.</Text>
      <Text style={styles.percentageText}>Você atingiu {percentage}% de Meta.</Text>
      {/* Barra azul */}
      
      <View style={styles.progressBarBackground}>
        <View style={[styles.progressBarFill, { width: `${percentage}%` }]} />
      </View>
    </View>
  );
}

{/* Barra de progresso customizada com Flexbox */}
      


const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.cardBg,
    borderRadius: 16,
    padding: 20,
    width: '100%',
    alignItems: 'center',
    marginBottom: 24,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  consumedText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  percentageText: {
    fontSize: 14,
    color: COLORS.textMuted,
    marginBottom: 16,
  },
  progressBarBackground: {
    width: '100%',
    height: 12,
    backgroundColor: '#E0F2FE',
    borderRadius: 6,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: COLORS.secondary,
    borderRadius: 6,
  },
});