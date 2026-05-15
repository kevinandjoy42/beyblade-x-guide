import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BladeType } from '../types';
import { typeColors, typeLabels, typeIcons } from '../utils/theme';

interface Props {
  type: BladeType;
  size?: 'small' | 'medium';
}

export default function TypeBadge({ type, size = 'medium' }: Props) {
  const color = typeColors[type];
  const isSmall = size === 'small';

  return (
    <View style={[styles.badge, { borderColor: color + '50', backgroundColor: color + '14' }, isSmall && styles.sm]}>
      <Text style={[styles.text, { color }, isSmall && styles.smText]}>
        {typeIcons[type]} {typeLabels[type]}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: { paddingHorizontal: 8, paddingVertical: 3, borderRadius: 10, borderWidth: 1, alignSelf: 'flex-start' },
  sm: { paddingHorizontal: 5, paddingVertical: 1.5, borderRadius: 7 },
  text: { fontSize: 11, fontWeight: '800' },
  smText: { fontSize: 9 },
});
