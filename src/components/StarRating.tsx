import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/theme';

interface Props {
  rating: number;
  maxRating?: number;
  size?: number;
}

export default function StarRating({ rating, maxRating = 5, size = 14 }: Props) {
  return (
    <View style={styles.container}>
      {Array.from({ length: maxRating }, (_, i) => (
        <Text key={i} style={[styles.star, { fontSize: size, color: i < rating ? colors.star : colors.textMuted }]}>
          {i < rating ? '★' : '☆'}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 1,
  },
  star: {},
});
