import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/theme';

interface Props {
  level: number;
  maxLevel?: number;
  label?: string;
}

const segColor = (level: number) =>
  level <= 1 ? '#FF3D3D' : level <= 2 ? '#FF8C00' : level <= 3 ? '#FFAA00' : level <= 4 ? '#80CC00' : '#00CC66';

export default function BurstMeter({ level, maxLevel = 5, label }: Props) {
  const c = segColor(level);
  return (
    <View style={s.row}>
      {label && <Text style={s.label}>{label}</Text>}
      <View style={s.track}>
        {Array.from({ length: maxLevel }, (_, i) => (
          <View key={i} style={[s.seg, { backgroundColor: i < level ? c : colors.surfaceLight }]} />
        ))}
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  label: { color: colors.textMuted, fontSize: 10, width: 52, fontWeight: '600' },
  track: { flexDirection: 'row', gap: 2, flex: 1 },
  seg: { height: 5, flex: 1, borderRadius: 2.5 },
});
