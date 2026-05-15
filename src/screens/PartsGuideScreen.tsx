import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ratchets } from '../data/ratchets';
import { bits } from '../data/bits';
import { colors, typeColors, typeLabels, typeIcons, tierColors, tierLabels } from '../utils/theme';
import BurstMeter from '../components/BurstMeter';
import TypeBadge from '../components/TypeBadge';
import AdBanner from '../components/AdBanner';

type Props = NativeStackScreenProps<any, 'PartsGuide'>;

export default function PartsGuideScreen({ route }: Props) {
  const initialTab = route.params?.tab || 'ratchets';
  const [activeTab, setActiveTab] = useState<'ratchets' | 'bits'>(initialTab);

  return (
    <View style={s.container}>
      {/* Tabs */}
      <View style={s.tabRow}>
        {(['ratchets', 'bits'] as const).map(tab => (
          <TouchableOpacity
            key={tab}
            style={[s.tab, activeTab === tab && s.tabActive]}
            onPress={() => setActiveTab(tab)}
          >
            <Text style={[s.tabText, activeTab === tab && s.tabTextActive]}>
              {tab === 'ratchets' ? `棘齒 Ratchet (${ratchets.length})` : `軸心 Bit (${bits.length})`}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Info */}
      <View style={s.info}>
        <Text style={s.infoText}>
          {activeTab === 'ratchets'
            ? '命名「邊數-高度」→ 邊數越多越不易爆裂，高度越低越穩定。已依阿土天梯 T0→T5 排序。'
            : '軸心決定移動方式 → 攻擊型爆裂抗性較高，持久/防禦型較容易被撞爆。已依阿土天梯 T0→T5 排序。'}
        </Text>
      </View>

      <AdBanner size="banner" />

      {activeTab === 'ratchets' ? <RatchetList /> : <BitList />}
    </View>
  );
}

function TierBadge({ tier }: { tier?: number }) {
  if (tier === undefined) return null;
  const color = tierColors[tier] || colors.textMuted;
  const label = tierLabels[tier] || '?';
  return (
    <View style={[s.tierBadge, { backgroundColor: color + '20', borderColor: color + '50' }]}>
      <Text style={[s.tierBadgeText, { color }]}>{label}</Text>
    </View>
  );
}

const sortedRatchets = [...ratchets].sort((a, b) => (a.tier ?? 99) - (b.tier ?? 99));
const sortedBits = [...bits].sort((a, b) => (a.tier ?? 99) - (b.tier ?? 99));

function RatchetList() {
  return (
    <FlatList
      data={sortedRatchets}
      keyExtractor={item => item.id}
      contentContainerStyle={s.list}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <View style={s.card}>
          <View style={s.cardHead}>
            <View style={s.nameRow}>
              <Text style={s.partName}>{item.name}</Text>
              <TierBadge tier={item.tier} />
            </View>
            <View style={s.statChips}>
              <View style={s.statChip}><Text style={s.statLabel}>{item.edges}</Text><Text style={s.statUnit}>邊</Text></View>
              <View style={s.statChip}><Text style={s.statLabel}>{item.heightMm}</Text><Text style={s.statUnit}>mm</Text></View>
              {item.weight && <Text style={s.weightText}>{item.weight}</Text>}
            </View>
          </View>
          <BurstMeter level={item.burstResistance} label="防爆裂" />
          <Text style={s.partDesc}>{item.description}</Text>
          <View style={s.bestForRow}>
            <Text style={s.bestForLabel}>適合</Text>
            {item.bestFor.map(t => <TypeBadge key={t} type={t} size="small" />)}
          </View>
          {item.sources && item.sources.length > 0 && (
            <View style={s.sourcesBox}>
              <Text style={s.sourcesLabel}>可從以下產品取得</Text>
              <Text style={s.sourcesText}>{item.sources.join('、')}</Text>
            </View>
          )}
        </View>
      )}
    />
  );
}

function BitList() {
  return (
    <FlatList
      data={sortedBits}
      keyExtractor={item => item.id}
      contentContainerStyle={s.list}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => {
        const tc = typeColors[item.type];
        return (
          <View style={[s.card, { borderLeftWidth: 3, borderLeftColor: tc }]}>
            <View style={s.cardHead}>
              <View>
                <View style={s.nameRow}>
                  <Text style={s.partName}>{item.name}</Text>
                  <TierBadge tier={item.tier} />
                </View>
                <Text style={s.partCode}>{item.nameEn}</Text>
              </View>
              <View style={[s.typeDot, { backgroundColor: tc + '20', borderColor: tc + '50' }]}>
                <Text style={[s.typeDotText, { color: tc }]}>{typeIcons[item.type]}</Text>
              </View>
            </View>
            <View style={s.meters}>
              <BurstMeter level={item.xDashRating} label="X衝刺" />
              <BurstMeter level={item.burstResistance} label="防爆裂" />
            </View>
            <Text style={s.partDesc}>{item.description}</Text>
            <View style={s.movBox}>
              <Text style={s.movLabel}>移動模式</Text>
              <Text style={s.movText}>{item.movement}</Text>
            </View>
            <View style={s.bestForRow}>
              <Text style={s.bestForLabel}>適合</Text>
              {item.bestFor.map(t => <TypeBadge key={t} type={t} size="small" />)}
            </View>
            {item.sources && item.sources.length > 0 && (
              <View style={s.sourcesBox}>
                <Text style={s.sourcesLabel}>可從以下產品取得</Text>
                <Text style={s.sourcesText}>{item.sources.join('、')}</Text>
              </View>
            )}
          </View>
        );
      }}
    />
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  tabRow: { flexDirection: 'row', paddingHorizontal: 18, paddingTop: 10, gap: 8 },
  tab: { flex: 1, paddingVertical: 9, borderRadius: 10, backgroundColor: colors.surface, alignItems: 'center', borderWidth: 1, borderColor: colors.cardBorder },
  tabActive: { backgroundColor: colors.primary, borderColor: colors.primary },
  tabText: { fontSize: 12, fontWeight: '700', color: colors.textSecondary },
  tabTextActive: { color: '#fff' },
  info: { marginHorizontal: 18, marginTop: 8, backgroundColor: colors.surface, borderRadius: 8, paddingHorizontal: 12, paddingVertical: 8, borderWidth: 1, borderColor: colors.cardBorder },
  infoText: { fontSize: 11, color: colors.textSecondary, lineHeight: 17 },
  list: { padding: 18, paddingTop: 8, gap: 8 },
  card: { backgroundColor: colors.card, borderRadius: 12, padding: 12, borderWidth: 1, borderColor: colors.cardBorder, gap: 6 },
  cardHead: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  partName: { fontSize: 18, fontWeight: '900', color: colors.primary },
  partCode: { fontSize: 11, color: colors.textMuted, fontWeight: '600' },
  statChips: { flexDirection: 'row', gap: 6, alignItems: 'center' },
  statChip: { flexDirection: 'row', alignItems: 'baseline', gap: 1 },
  statLabel: { fontSize: 14, fontWeight: '800', color: colors.text },
  statUnit: { fontSize: 10, color: colors.textMuted },
  weightText: { fontSize: 10, color: colors.textSecondary },
  typeDot: { width: 28, height: 28, borderRadius: 14, alignItems: 'center', justifyContent: 'center', borderWidth: 1 },
  typeDotText: { fontSize: 14 },
  meters: { gap: 3 },
  partDesc: { fontSize: 12, color: colors.textSecondary, lineHeight: 18 },
  movBox: { backgroundColor: colors.surfaceLight, borderRadius: 8, padding: 8 },
  movLabel: { fontSize: 8, fontWeight: '800', color: colors.textMuted, letterSpacing: 1.5, marginBottom: 2 },
  movText: { fontSize: 11, color: colors.text },
  bestForRow: { flexDirection: 'row', alignItems: 'center', gap: 5, flexWrap: 'wrap' },
  bestForLabel: { fontSize: 11, color: colors.textMuted, fontWeight: '600' },
  sourcesBox: { backgroundColor: colors.surfaceLight, borderRadius: 8, padding: 8, marginTop: 2 },
  sourcesLabel: { fontSize: 8, fontWeight: '800', color: colors.textMuted, letterSpacing: 1.5, marginBottom: 3 },
  sourcesText: { fontSize: 11, color: colors.textSecondary, lineHeight: 17 },
  nameRow: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  tierBadge: { paddingHorizontal: 6, paddingVertical: 1, borderRadius: 5, borderWidth: 1 },
  tierBadgeText: { fontSize: 10, fontWeight: '900', letterSpacing: 0.5 },
});
