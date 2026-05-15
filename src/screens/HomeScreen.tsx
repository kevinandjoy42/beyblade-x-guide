import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Animated,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { blades } from '../data/blades';
import { colors, typeColors, typeLabels, typeIcons, seriesColors, tierColors, tierLabels } from '../utils/theme';
import TypeBadge from '../components/TypeBadge';
import StarRating from '../components/StarRating';
import { Blade, BladeType, BladeSeries } from '../types';
import AdBanner from '../components/AdBanner';

type SortMode = 'default' | 'popular' | 'tier' | 'name';
const SORTS: { key: SortMode; label: string; icon: string }[] = [
  { key: 'default', label: '預設', icon: '📋' },
  { key: 'popular', label: '熱門', icon: '🔥' },
  { key: 'tier', label: '天梯', icon: '🏆' },
  { key: 'name', label: '名稱', icon: '🔤' },
];

type Props = { navigation: NativeStackNavigationProp<any> };

const TYPES: (BladeType | 'all')[] = ['all', 'attack', 'defense', 'stamina', 'balance'];
const SERIES: (BladeSeries | 'all')[] = ['all', 'BX', 'UX', 'CX'];

export default function HomeScreen({ navigation }: Props) {
  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState<BladeType | 'all'>('all');
  const [filterSeries, setFilterSeries] = useState<BladeSeries | 'all'>('all');
  const [sortMode, setSortMode] = useState<SortMode>('default');

  const filtered = blades
    .filter(b => {
      const q = search.toLowerCase();
      const matchSearch = !q || b.nameZh.includes(search) || b.nameEn.toLowerCase().includes(q) || b.modelNumber.toLowerCase().includes(q);
      const matchType = filterType === 'all' || b.type === filterType;
      const matchSeries = filterSeries === 'all' || b.series === filterSeries;
      return matchSearch && matchType && matchSeries;
    })
    .sort((a, b) => {
      switch (sortMode) {
        case 'popular': return b.popularity - a.popularity;
        case 'tier': {
          const t = (a.tier ?? 99) - (b.tier ?? 99);
          if (t !== 0) return t;
          return (b.bbxScore ?? 0) - (a.bbxScore ?? 0);
        }
        case 'name': return a.nameZh.localeCompare(b.nameZh, 'zh-Hant');
        default: return 0;
      }
    });

  const renderBlade = ({ item }: { item: Blade }) => {
    const tc = typeColors[item.type];
    const sc = seriesColors[item.series];
    const hasRec = item.recommendedCombos.length > 0;
    return (
      <TouchableOpacity
        style={[styles.card, { borderLeftColor: tc, borderLeftWidth: 3 }]}
        onPress={() => navigation.navigate('BladeDetail', { bladeId: item.id })}
        activeOpacity={0.7}
      >
        {/* 左側裝飾條紋 — 模擬 X-Rail 光紋 */}
        <View style={[styles.railStripe, { backgroundColor: tc + '10' }]} />

        <View style={styles.cardBody}>
          <View style={styles.cardTopRow}>
            <View style={[styles.seriesChip, { backgroundColor: sc + '22', borderColor: sc + '55' }]}>
              <Text style={[styles.seriesChipText, { color: sc }]}>{item.series}</Text>
            </View>
            <Text style={[styles.modelNum, { color: sc }]}>{item.modelNumber}</Text>
            {item.popularity >= 5 && <Text style={styles.hotBadge}>🔥</Text>}
            {item.tier != null && (
              <View style={[styles.tierBadge, { backgroundColor: (tierColors[item.tier] || colors.textMuted) + '20', borderColor: (tierColors[item.tier] || colors.textMuted) + '50' }]}>
                <Text style={[styles.tierBadgeText, { color: tierColors[item.tier] || colors.textMuted }]}>{tierLabels[item.tier] || `T${item.tier}`}</Text>
              </View>
            )}
          </View>

          <Text style={styles.nameZh}>{item.nameZh}</Text>
          <Text style={styles.nameEn}>{item.nameEn}</Text>

          <View style={styles.cardBottom}>
            <View style={[styles.typePill, { backgroundColor: tc + '18', borderColor: tc + '40' }]}>
              <Text style={[styles.typePillText, { color: tc }]}>{typeIcons[item.type]} {typeLabels[item.type]}</Text>
            </View>

            <View style={styles.cardMeta}>
              {hasRec ? (
                <Text style={styles.comboHint}>{item.recommendedCombos.length} 組推薦</Text>
              ) : (
                <Text style={styles.noRecHint}>暫無推薦</Text>
              )}
              <StarRating rating={item.popularity} size={10} />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />

      {/* ===== Hero Header ===== */}
      <View style={styles.header}>
        <View style={styles.headerDeco}>
          <View style={styles.xLine1} />
          <View style={styles.xLine2} />
        </View>
        <Text style={styles.brandX}>X</Text>
        <View>
          <Text style={styles.title}>戰鬥陀螺X</Text>
          <Text style={styles.subtitle}>BEYBLADE X 零件配置指南</Text>
        </View>
        <Text style={styles.countBadge}>{blades.length} 款</Text>
      </View>

      {/* ===== Search ===== */}
      <View style={styles.searchWrap}>
        <View style={styles.searchBox}>
          <Text style={styles.searchIcon}>⌕</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="搜尋型號、名稱 ..."
            placeholderTextColor={colors.textMuted}
            value={search}
            onChangeText={setSearch}
          />
          {search !== '' && (
            <TouchableOpacity onPress={() => setSearch('')}>
              <Text style={styles.clearBtn}>✕</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* ===== Series Filter ===== */}
      <View style={styles.filterRow}>
        {SERIES.map(s => {
          const active = filterSeries === s;
          const c = s === 'all' ? colors.primary : seriesColors[s];
          return (
            <TouchableOpacity
              key={s}
              style={[styles.filterChip, active && { backgroundColor: c, borderColor: c }]}
              onPress={() => setFilterSeries(s)}
            >
              <Text style={[styles.filterText, active && { color: '#fff' }]}>
                {s === 'all' ? '全部' : s}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* ===== Type Filter ===== */}
      <View style={styles.filterRow}>
        {TYPES.map(t => {
          const active = filterType === t;
          const c = t === 'all' ? colors.primary : typeColors[t];
          return (
            <TouchableOpacity
              key={t}
              style={[styles.filterChip, active && { backgroundColor: c, borderColor: c }]}
              onPress={() => setFilterType(t)}
            >
              <Text style={[styles.filterText, active && { color: '#fff' }]}>
                {t === 'all' ? '全部' : `${typeIcons[t]} ${typeLabels[t]}`}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* ===== Sort ===== */}
      <View style={styles.sortRow}>
        <Text style={styles.sortLabel}>排序</Text>
        {SORTS.map(s => {
          const active = sortMode === s.key;
          return (
            <TouchableOpacity
              key={s.key}
              style={[styles.sortChip, active && styles.sortChipActive]}
              onPress={() => setSortMode(s.key)}
            >
              <Text style={[styles.sortChipText, active && styles.sortChipTextActive]}>
                {s.icon} {s.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* ===== List ===== */}
      <FlatList
        data={filtered}
        renderItem={({ item, index }) => (
          <>
            {index === 0 && <AdBanner size="banner" />}
            {renderBlade({ item } as { item: Blade })}
            {index > 0 && (index + 1) % 6 === 0 && <AdBanner size="inline" />}
          </>
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text style={styles.emptyIcon}>🌀</Text>
            <Text style={styles.emptyText}>找不到符合的陀螺</Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },

  // ---------- Header ----------
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingTop: 14,
    paddingBottom: 6,
    gap: 10,
    overflow: 'hidden',
  },
  headerDeco: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 },
  xLine1: { position: 'absolute', top: 10, left: -20, width: 160, height: 2, backgroundColor: colors.railGlow, transform: [{ rotate: '-12deg' }] },
  xLine2: { position: 'absolute', top: 22, left: -10, width: 120, height: 1, backgroundColor: colors.xDash, transform: [{ rotate: '8deg' }] },
  brandX: { fontSize: 42, fontWeight: '900', color: colors.primary, opacity: 0.15, marginRight: -4 },
  title: { fontSize: 22, fontWeight: '900', color: colors.text, letterSpacing: 1 },
  subtitle: { fontSize: 10, fontWeight: '700', color: colors.textMuted, letterSpacing: 2, marginTop: 1 },
  countBadge: { marginLeft: 'auto', fontSize: 11, fontWeight: '700', color: colors.textMuted, backgroundColor: colors.surface, paddingHorizontal: 8, paddingVertical: 3, borderRadius: 8, overflow: 'hidden' },

  // ---------- Search ----------
  searchWrap: { paddingHorizontal: 18, marginTop: 6, marginBottom: 4 },
  searchBox: { flexDirection: 'row', alignItems: 'center', backgroundColor: colors.surface, borderRadius: 10, paddingHorizontal: 12, borderWidth: 1, borderColor: colors.cardBorder },
  searchIcon: { fontSize: 18, color: colors.textMuted, marginRight: 6 },
  searchInput: { flex: 1, height: 40, color: colors.text, fontSize: 14 },
  clearBtn: { fontSize: 14, color: colors.textMuted, padding: 4 },

  // ---------- Filters ----------
  filterRow: { flexDirection: 'row', paddingHorizontal: 18, marginBottom: 4, gap: 6, flexWrap: 'wrap' },
  filterChip: { paddingHorizontal: 11, paddingVertical: 5, borderRadius: 14, borderWidth: 1, borderColor: colors.cardBorder, backgroundColor: 'transparent' },
  filterText: { color: colors.textSecondary, fontSize: 11, fontWeight: '700' },

  // ---------- Sort ----------
  sortRow: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 18, marginBottom: 6, gap: 6 },
  sortLabel: { fontSize: 10, fontWeight: '800', color: colors.textMuted, letterSpacing: 1, marginRight: 2 },
  sortChip: { paddingHorizontal: 9, paddingVertical: 4, borderRadius: 10, backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.cardBorder },
  sortChipActive: { backgroundColor: colors.primary + '22', borderColor: colors.primary + '60' },
  sortChipText: { fontSize: 10, fontWeight: '700', color: colors.textMuted },
  sortChipTextActive: { color: colors.primary },

  // ---------- List ----------
  list: { paddingHorizontal: 18, paddingTop: 6, paddingBottom: 20, gap: 8 },

  // ---------- Card ----------
  card: {
    backgroundColor: colors.card,
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.cardBorder,
  },
  railStripe: { position: 'absolute', top: 0, bottom: 0, left: 0, width: 48 },
  cardBody: { paddingVertical: 12, paddingHorizontal: 14, paddingLeft: 16 },
  cardTopRow: { flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 4 },
  seriesChip: { paddingHorizontal: 5, paddingVertical: 1, borderRadius: 4, borderWidth: 1 },
  seriesChipText: { fontSize: 9, fontWeight: '800', letterSpacing: 0.5 },
  modelNum: { fontSize: 11, fontWeight: '800', letterSpacing: 0.5 },
  hotBadge: { fontSize: 12 },
  tierBadge: { paddingHorizontal: 5, paddingVertical: 1, borderRadius: 4, borderWidth: 1, marginLeft: 'auto' },
  tierBadgeText: { fontSize: 9, fontWeight: '900', letterSpacing: 0.5 },
  nameZh: { fontSize: 18, fontWeight: '800', color: colors.text, marginBottom: 1 },
  nameEn: { fontSize: 12, color: colors.textSecondary, marginBottom: 8, fontWeight: '500' },
  cardBottom: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  typePill: { paddingHorizontal: 8, paddingVertical: 3, borderRadius: 10, borderWidth: 1 },
  typePillText: { fontSize: 10, fontWeight: '800' },
  cardMeta: { alignItems: 'flex-end', gap: 2 },
  comboHint: { fontSize: 10, color: colors.textMuted, fontWeight: '600' },
  noRecHint: { fontSize: 10, color: colors.textMuted + '80', fontStyle: 'italic' },

  // ---------- Empty ----------
  empty: { alignItems: 'center', paddingTop: 60 },
  emptyIcon: { fontSize: 36, marginBottom: 8 },
  emptyText: { fontSize: 15, color: colors.textSecondary, fontWeight: '600' },
});
