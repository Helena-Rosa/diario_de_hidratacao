import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';

export function WaterProgress({ consumed, goal }) {
  const percentage = goal > 0 ? Math.min(Math.round((consumed / goal) * 100), 100) : 0;
  const remaining = Math.max(0, goal - consumed);

  return (
    <View style={styles.card}>
      <Text style={styles.consumedText}>{consumed} ml</Text>
      <Text style={styles.percentageText}>{percentage}% da meta atingida</Text>

      <View style={styles.progressBarBackground}>
        <View style={[styles.progressBarFill, { width: `${percentage}%` }]} />
      </View>

      <Text style={styles.infoText}>
        {remaining > 0
          ? `Continue bebendo água para atingir a sua meta, faltam ${remaining} ml.`
          : 'Parabéns! Você atingiu a sua meta diária! 🎉'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.cardBg,
    borderRadius: 16,
    padding: 20,
    width: '100%',
    alignItems: 'center',
    marginBottom: 24,
  },
  consumedText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  percentageText: {
    fontSize: 14,
    color: COLORS.textMuted,
    marginTop: 4,
    marginBottom: 12,
  },
  progressBarBackground: {
    width: '100%',
    height: 10,
    backgroundColor: '#E0F2FE',
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 16,
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: COLORS.primary,
    borderRadius: 5,
  },
  infoText: {
    fontSize: 12,
    color: COLORS.textMuted,
    textAlign: 'center',
  },
});