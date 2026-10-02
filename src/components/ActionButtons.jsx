import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';

export function ActionButtons({ onAdd, onReset }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Adicionar consumo:</Text>

      <View style={styles.buttonRow}>
        <Pressable style={styles.button} onPress={() => onAdd(100)}>
          <Text style={styles.buttonText}>+100 ml</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => onAdd(200)}>
          <Text style={styles.buttonText}>+200 ml</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => onAdd(350)}>
          <Text style={styles.buttonText}>+350 ml</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => onAdd(500)}>
          <Text style={styles.buttonText}>+500 ml</Text>
        </Pressable>
      </View>

      <Pressable style={styles.resetButton} onPress={onReset}>
        <Text style={styles.resetButtonText}>Reiniciar Dia</Text>
      </Pressable>

      <View style={styles.tipContainer}>
        <Text style={styles.tipIcon}>💡</Text>
        <View style={styles.tipTextGroup}>
          <Text style={styles.tipTitle}>Dica de Saúde</Text>
          <Text style={styles.tipDescription}>
            Beber água regularmente melhora a concentração, a digestão e mantém a sua energia alta ao longo do dia!
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.textMain,
    marginBottom: 12,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
    marginBottom: 16,
  },
  button: {
    flex: 1,
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 12,
  },
  resetButton: {
    backgroundColor: COLORS.danger,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 24,
  },
  resetButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  tipContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
  },
  tipIcon: {
    fontSize: 20,
  },
  tipTextGroup: {
    flex: 1,
  },
  tipTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: COLORS.textMain,
  },
  tipDescription: {
    fontSize: 12,
    color: COLORS.textMuted,
    marginTop: 2,
    lineHeight: 16,
  },
});