import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { getBladeById } from '../data/blades';
import { getRatchetById } from '../data/ratchets';
import { getBitById } from '../data/bits';
import { colors, typeColors, typeLabels, typeIcons, seriesColors, seriesLabels, tierColors, tierLabels } from '../utils/theme';
import TypeBadge from '../components/TypeBadge';
import StarRating from '../components/StarRating';
import BurstMeter from '../components/BurstMeter';
import AdBanner from '../components/AdBanner';
import { addToCollection } from '../utils/storage';

type Props = NativeStackScreenProps<any, 'BladeDetail'>;

export default function BladeDetailScreen({ route, navigation }: Props) {
  const blade = getBladeById(route.params.bladeId);
  if (!blade) return <View style={s.container}><Text style={s.err}>找不到此陀螺</Text></View>;

  const tc = typeColors[blade.type];
  const sc = seriesColors[blade.series];

  const handleAdd = async () => {
    await addToCollection({ bladeId: blade.id, addedAt: Date.now(), notes: '' });
    Alert.alert('已加入！', `${blade.nameZh} 已加入收藏庫`);
  };

  return (
    <ScrollView style={s.container} showsVerticalScrollIndicator={false}>
      {/* ====== Hero ====== */}
      <View style={s.hero}>
        {/* 背景裝飾 — 模擬 X-Rail 光芒 */}
        <View style={[s.heroBg1, { backgroundColor: tc + '08' }]} />
        <View style={[s.heroBg2, { backgroundColor: sc + '06' }]} />

        <View style={s.heroHead}>
          <View style={[s.seriesTag, { backgroundColor: sc + '20', borderColor: sc + '40' }]}>
            <Text style={[s.seriesTagText, { color: sc }]}>{blade.series} — {seriesLabels[blade.series]}</Text>
          </View>
          <Text style={[s.modelNum, { color: sc }]}>{blade.modelNumber}</Text>
        </View>

        <Text style={s.nameZh}>{blade.nameZh}</Text>
        <Text style={s.nameEn}>{blade.nameEn}</Text>

        <View style={s.heroMeta}>
          <TypeBadge type={blade.type} />
          {blade.tier != null && (
            <View style={[s.tierTag, { backgroundColor: (tierColors[blade.tier] || colors.textMuted) + '20', borderColor: (tierColors[blade.tier] || colors.textMuted) + '50' }]}>
              <Text style={[s.tierTagText, { color: tierColors[blade.tier] || colors.textMuted }]}>{tierLabels[blade.tier] || `T${blade.tier}`} 天梯</Text>
            </View>
          )}
          <StarRating rating={blade.popularity} size={16} />
        </View>

        <Text style={s.desc}>{blade.description}</Text>

        {blade.tips && (
          <View style={s.tipBox}>
            <Text style={s.tipIcon}>💡</Text>
            <Text style={s.tipText}>{blade.tips}</Text>
          </View>
        )}

        <TouchableOpacity style={[s.addBtn, { backgroundColor: tc }]} onPress={handleAdd} activeOpacity={0.8}>
          <Text style={s.addBtnText}>＋ 加入收藏</Text>
        </TouchableOpacity>
      </View>

      {/* ====== Ad ====== */}
      <AdBanner size="inline" />

      {/* ====== Divider ====== */}
      <View style={s.divider}>
        <View style={[s.divLine, { backgroundColor: tc + '30' }]} />
        <Text style={[s.divText, { color: tc }]}>推薦配置</Text>
        <View style={[s.divLine, { backgroundColor: tc + '30' }]} />
      </View>

      {/* ====== Combos ====== */}
      {blade.recommendedCombos.length === 0 ? (
        <View style={s.noRec}>
          <Text style={s.noRecIcon}>🔍</Text>
          <Text style={s.noRecText}>此型號目前暫無社群推薦配置</Text>
          <Text style={s.noRecSub}>可以到「組合模擬」自行搭配試試看</Text>
        </View>
      ) : (
        <View style={s.combos}>
          {blade.recommendedCombos.map((combo, idx) => {
            const ratchet = getRatchetById(combo.ratchetId);
            const bit = getBitById(combo.bitId);
            if (!ratchet || !bit) return null;

            const maxRating = Math.max(...blade.recommendedCombos.map(c => c.rating));
            const isBest = combo.rating === maxRating && blade.recommendedCombos.findIndex(c => c.rating === maxRating) === idx;
            return (
              <View key={idx} style={[s.comboCard, isBest && { borderColor: colors.accent + '60' }]}>
                {isBest && (
                  <View style={s.bestTag}>
                    <Text style={s.bestTagText}>BEST</Text>
                  </View>
                )}

                <View style={s.comboHead}>
                  <Text style={s.comboName}>{blade.nameZh} {ratchet.name} {bit.name}</Text>
                  <StarRating rating={combo.rating} size={13} />
                </View>
                <Text style={s.comboNote}>{combo.note}</Text>
                {combo.source && (
                  <View style={s.sourceTag}>
                    <Text style={s.sourceTagText}>📋 {combo.source}</Text>
                  </View>
                )}

                {/* 零件卡 */}
                <View style={s.partsRow}>
                  <TouchableOpacity style={s.partCard} onPress={() => navigation.navigate('PartsGuide', { tab: 'ratchets' })} activeOpacity={0.7}>
                    <Text style={s.partLabel}>RATCHET</Text>
                    <Text style={s.partVal}>{ratchet.name}</Text>
                    <BurstMeter level={ratchet.burstResistance} label="防爆裂" />
                    <Text style={s.partHint}>{ratchet.edges}邊 / {ratchet.heightMm}mm</Text>
                  </TouchableOpacity>

                  <View style={s.partPlus}><Text style={s.partPlusText}>＋</Text></View>

                  <TouchableOpacity style={s.partCard} onPress={() => navigation.navigate('PartsGuide', { tab: 'bits' })} activeOpacity={0.7}>
                    <Text style={s.partLabel}>BIT</Text>
                    <Text style={s.partVal}>{bit.name}</Text>
                    <BurstMeter level={bit.xDashRating} label="X衝刺" />
                    <Text style={s.partHint}>{typeIcons[bit.type]} {typeLabels[bit.type]}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
        </View>
      )}

      {/* ====== Bottom Ad ====== */}
      <AdBanner size="banner" />

      <View style={{ height: 36 }} />
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  err: { color: colors.textSecondary, fontSize: 16, textAlign: 'center', marginTop: 60 },

  // Hero
  hero: { padding: 18, overflow: 'hidden' },
  heroBg1: { position: 'absolute', top: -30, right: -60, width: 220, height: 220, borderRadius: 110 },
  heroBg2: { position: 'absolute', bottom: -20, left: -40, width: 160, height: 160, borderRadius: 80 },
  heroHead: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 },
  seriesTag: { paddingHorizontal: 7, paddingVertical: 2, borderRadius: 6, borderWidth: 1 },
  seriesTagText: { fontSize: 10, fontWeight: '700' },
  modelNum: { fontSize: 13, fontWeight: '900', letterSpacing: 1 },
  nameZh: { fontSize: 30, fontWeight: '900', color: colors.text, lineHeight: 36 },
  nameEn: { fontSize: 15, color: colors.textSecondary, marginBottom: 10, fontWeight: '500' },
  heroMeta: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10, gap: 8 },
  tierTag: { paddingHorizontal: 8, paddingVertical: 3, borderRadius: 6, borderWidth: 1 },
  tierTagText: { fontSize: 11, fontWeight: '900', letterSpacing: 0.5 },
  desc: { fontSize: 13, color: colors.textSecondary, lineHeight: 21 },
  tipBox: { flexDirection: 'row', backgroundColor: colors.surface, borderRadius: 10, padding: 11, marginTop: 10, borderWidth: 1, borderColor: colors.cardBorder, gap: 7 },
  tipIcon: { fontSize: 14 },
  tipText: { flex: 1, fontSize: 12, color: colors.text, lineHeight: 18 },
  addBtn: { marginTop: 14, paddingVertical: 11, borderRadius: 10, alignItems: 'center' },
  addBtnText: { color: '#fff', fontSize: 14, fontWeight: '800' },

  // Divider
  divider: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 18, marginBottom: 4, gap: 8 },
  divLine: { flex: 1, height: 1 },
  divText: { fontSize: 12, fontWeight: '800', letterSpacing: 1 },

  // No Rec
  noRec: { alignItems: 'center', paddingVertical: 30, gap: 4 },
  noRecIcon: { fontSize: 28 },
  noRecText: { fontSize: 14, color: colors.textSecondary, fontWeight: '600' },
  noRecSub: { fontSize: 12, color: colors.textMuted },

  // Combos
  combos: { paddingHorizontal: 18, gap: 10 },
  comboCard: { backgroundColor: colors.card, borderRadius: 14, padding: 14, borderWidth: 1, borderColor: colors.cardBorder },
  bestTag: { backgroundColor: colors.accent, paddingHorizontal: 8, paddingVertical: 2, borderRadius: 6, alignSelf: 'flex-start', marginBottom: 6 },
  bestTagText: { color: '#000', fontSize: 9, fontWeight: '900', letterSpacing: 1 },
  comboHead: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 },
  comboName: { fontSize: 14, fontWeight: '700', color: colors.text, flex: 1, marginRight: 8 },
  comboNote: { fontSize: 12, color: colors.textSecondary, marginBottom: 6 },
  sourceTag: { backgroundColor: colors.primary + '15', borderRadius: 6, paddingHorizontal: 8, paddingVertical: 3, alignSelf: 'flex-start', marginBottom: 8 },
  sourceTagText: { fontSize: 10, color: colors.primary, fontWeight: '700' },

  // Parts
  partsRow: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  partCard: { flex: 1, backgroundColor: colors.surfaceLight, borderRadius: 10, padding: 10, gap: 4 },
  partLabel: { fontSize: 8, fontWeight: '800', color: colors.textMuted, letterSpacing: 1.5 },
  partVal: { fontSize: 15, fontWeight: '900', color: colors.primary },
  partHint: { fontSize: 10, color: colors.textMuted },
  partPlus: { width: 18, alignItems: 'center' },
  partPlusText: { fontSize: 14, color: colors.textMuted, fontWeight: '700' },
});
