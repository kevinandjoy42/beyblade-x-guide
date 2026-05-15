import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
  FlatList,
} from 'react-native';
import { blades } from '../data/blades';
import { ratchets } from '../data/ratchets';
import { bits } from '../data/bits';
import { colors, typeColors, typeLabels, typeIcons } from '../utils/theme';
import TypeBadge from '../components/TypeBadge';
import BurstMeter from '../components/BurstMeter';
import StarRating from '../components/StarRating';
import { Blade, Ratchet, Bit, BladeType } from '../types';

type PickerTarget = 'blade' | 'ratchet' | 'bit' | null;

export default function ComboBuilderScreen() {
  const [selectedBlade, setSelectedBlade] = useState<Blade | null>(null);
  const [selectedRatchet, setSelectedRatchet] = useState<Ratchet | null>(null);
  const [selectedBit, setSelectedBit] = useState<Bit | null>(null);
  const [pickerTarget, setPickerTarget] = useState<PickerTarget>(null);

  const getComboRating = (): { score: number; tips: string[] } => {
    if (!selectedBlade || !selectedRatchet || !selectedBit) {
      return { score: 0, tips: ['請選擇所有三個零件來查看評價'] };
    }

    const tips: string[] = [];
    let score = 3;

    const match = selectedBlade.recommendedCombos.find(
      c => c.ratchetId === selectedRatchet.id && c.bitId === selectedBit.id
    );
    if (match) {
      return { score: match.rating, tips: [`${match.note}`] };
    }

    if (selectedBit.bestFor.includes(selectedBlade.type)) {
      score += 0.5;
      tips.push(`${selectedBit.name} 軸心適合${typeLabels[selectedBlade.type]}`);
    } else {
      score -= 0.5;
      tips.push(`${selectedBit.name} 軸心不太適合${typeLabels[selectedBlade.type]}，建議換其他軸心`);
    }

    if (selectedRatchet.bestFor.includes(selectedBlade.type)) {
      score += 0.5;
      tips.push(`${selectedRatchet.name} 棘齒適合${typeLabels[selectedBlade.type]}`);
    } else {
      score -= 0.5;
      tips.push(`${selectedRatchet.name} 棘齒不太適合${typeLabels[selectedBlade.type]}，建議調整`);
    }

    if (selectedBlade.type === 'attack' && selectedRatchet.height >= 80) {
      tips.push('攻擊型建議使用低位棘齒 (60) 提高穩定性');
    }
    if (selectedBlade.type === 'defense' && selectedRatchet.height <= 60) {
      tips.push('防禦型建議使用高位棘齒 (80) 減少地面摩擦');
    }
    if (selectedBlade.type === 'stamina' && selectedBit.type === 'attack') {
      tips.push('持久型搭配攻擊軸心會降低持久力，建議使用 Ball 或 Disc Ball');
    }

    if (selectedRatchet.burstResistance <= 2 && selectedBit.burstResistance <= 2) {
      tips.push('棘齒和軸心的防爆裂都偏低，容易被撞爆');
      score -= 0.5;
    }

    if (tips.length === 0) {
      tips.push('這個組合看起來還不錯！');
    }

    return { score: Math.max(1, Math.min(5, Math.round(score))), tips };
  };

  const comboResult = getComboRating();

  const renderSelector = (
    label: string,
    value: string | null,
    target: PickerTarget,
    color: string,
  ) => (
    <TouchableOpacity
      style={[styles.selectorBox, value && { borderColor: color }]}
      onPress={() => setPickerTarget(target)}
    >
      <Text style={styles.selectorLabel}>{label}</Text>
      <Text style={[styles.selectorValue, value ? { color } : {}]}>
        {value || '點擊選擇'}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>組合模擬器</Text>
          <Text style={styles.subtitle}>自由搭配零件，查看相性評價</Text>
        </View>

        <View style={styles.buildArea}>
          {renderSelector(
            '戰刃 Blade',
            selectedBlade ? `${selectedBlade.modelNumber} ${selectedBlade.nameZh}` : null,
            'blade',
            typeColors[selectedBlade?.type || 'attack'],
          )}

          <Text style={styles.plusSign}>+</Text>

          {renderSelector(
            '棘齒 Ratchet',
            selectedRatchet?.name || null,
            'ratchet',
            colors.primary,
          )}

          <Text style={styles.plusSign}>+</Text>

          {renderSelector(
            '軸心 Bit',
            selectedBit ? `${selectedBit.name} (${selectedBit.nameEn})` : null,
            'bit',
            colors.secondary,
          )}
        </View>

        {/* Combo Name */}
        {selectedBlade && selectedRatchet && selectedBit && (
          <View style={styles.comboNameBox}>
            <Text style={styles.comboNameLabel}>完整名稱</Text>
            <Text style={styles.comboName}>
              {selectedBlade.nameZh} {selectedRatchet.name} {selectedBit.name}
            </Text>
            <Text style={styles.comboNameEn}>
              {selectedBlade.nameEn} {selectedRatchet.name}{selectedBit.name}
            </Text>
          </View>
        )}

        {/* Result */}
        {selectedBlade && selectedRatchet && selectedBit && (
          <View style={styles.resultCard}>
            <View style={styles.resultHeader}>
              <Text style={styles.resultTitle}>搭配評價</Text>
              <StarRating rating={comboResult.score} size={18} />
            </View>

            <View style={styles.statsSection}>
              <BurstMeter level={selectedRatchet.burstResistance} label="棘齒防爆" />
              <BurstMeter level={selectedBit.burstResistance} label="軸心防爆" />
              <BurstMeter level={selectedBit.xDashRating} label="X衝刺" />
            </View>

            <View style={styles.tipsSection}>
              {comboResult.tips.map((tip, i) => (
                <View key={i} style={styles.tipRow}>
                  <Text style={styles.tipBullet}>
                    {comboResult.score >= 4 ? '✅' : comboResult.score >= 3 ? '💡' : '⚠️'}
                  </Text>
                  <Text style={styles.tipText}>{tip}</Text>
                </View>
              ))}
            </View>
          </View>
        )}

        {/* Quick Recommendation */}
        {selectedBlade && (!selectedRatchet || !selectedBit) && (
          <View style={styles.quickRecSection}>
            <Text style={styles.quickRecTitle}>快速推薦</Text>
            <Text style={styles.quickRecSubtitle}>
              根據 {selectedBlade.nameZh} 的推薦配置
            </Text>
            {selectedBlade.recommendedCombos.slice(0, 3).map((combo, idx) => {
              const r = ratchets.find(x => x.id === combo.ratchetId);
              const b = bits.find(x => x.id === combo.bitId);
              if (!r || !b) return null;
              return (
                <TouchableOpacity
                  key={idx}
                  style={styles.quickRecCard}
                  onPress={() => {
                    setSelectedRatchet(r);
                    setSelectedBit(b);
                  }}
                >
                  <View style={styles.quickRecRow}>
                    <Text style={styles.quickRecName}>
                      {r.name} {b.name}
                    </Text>
                    <StarRating rating={combo.rating} size={12} />
                  </View>
                  <Text style={styles.quickRecNote}>{combo.note}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        )}

        <View style={{ height: 40 }} />
      </ScrollView>

      {/* Picker Modal */}
      <Modal visible={pickerTarget !== null} animationType="slide" transparent>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>
                {pickerTarget === 'blade' ? '選擇戰刃' : pickerTarget === 'ratchet' ? '選擇棘齒' : '選擇軸心'}
              </Text>
              <TouchableOpacity onPress={() => setPickerTarget(null)}>
                <Text style={styles.modalClose}>關閉</Text>
              </TouchableOpacity>
            </View>

            <FlatList
              data={
                pickerTarget === 'blade' ? blades :
                pickerTarget === 'ratchet' ? ratchets :
                pickerTarget === 'bit' ? bits : []
              }
              keyExtractor={(item: any) => item.id}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }: { item: any }) => (
                <TouchableOpacity
                  style={styles.pickerItem}
                  onPress={() => {
                    if (pickerTarget === 'blade') setSelectedBlade(item);
                    else if (pickerTarget === 'ratchet') setSelectedRatchet(item);
                    else if (pickerTarget === 'bit') setSelectedBit(item);
                    setPickerTarget(null);
                  }}
                >
                  {pickerTarget === 'blade' ? (
                    <>
                      <Text style={styles.pickerMainText}>
                        {item.modelNumber} {item.nameZh}
                      </Text>
                      <Text style={styles.pickerSubText}>
                        {item.nameEn} | {typeIcons[item.type as BladeType]} {typeLabels[item.type as BladeType]}
                      </Text>
                    </>
                  ) : pickerTarget === 'ratchet' ? (
                    <>
                      <Text style={styles.pickerMainText}>{item.name}</Text>
                      <Text style={styles.pickerSubText}>
                        {item.edges}邊 {item.heightMm}mm | 防爆裂 {'★'.repeat(item.burstResistance)}
                      </Text>
                    </>
                  ) : (
                    <>
                      <Text style={styles.pickerMainText}>
                        {item.name} ({item.nameEn})
                      </Text>
                      <Text style={styles.pickerSubText}>
                        {typeIcons[item.type as BladeType]} {typeLabels[item.type as BladeType]} | X衝刺 {'★'.repeat(item.xDashRating)}
                      </Text>
                    </>
                  )}
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: colors.text,
  },
  subtitle: {
    fontSize: 12,
    color: colors.textMuted,
    marginTop: 2,
  },
  buildArea: {
    paddingHorizontal: 20,
    paddingTop: 8,
    gap: 4,
  },
  selectorBox: {
    backgroundColor: colors.card,
    borderRadius: 14,
    padding: 16,
    borderWidth: 1.5,
    borderColor: colors.cardBorder,
  },
  selectorLabel: {
    fontSize: 10,
    color: colors.textMuted,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 4,
  },
  selectorValue: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.textSecondary,
  },
  plusSign: {
    fontSize: 20,
    color: colors.textMuted,
    textAlign: 'center',
    paddingVertical: 2,
  },
  comboNameBox: {
    marginHorizontal: 20,
    marginTop: 16,
    backgroundColor: colors.surface,
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.primary + '40',
    alignItems: 'center',
  },
  comboNameLabel: {
    fontSize: 10,
    color: colors.textMuted,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 4,
  },
  comboName: {
    fontSize: 20,
    fontWeight: '800',
    color: colors.primary,
  },
  comboNameEn: {
    fontSize: 13,
    color: colors.textSecondary,
    marginTop: 2,
  },
  resultCard: {
    marginHorizontal: 20,
    marginTop: 16,
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.cardBorder,
    gap: 12,
  },
  resultHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  resultTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.text,
  },
  statsSection: {
    gap: 6,
  },
  tipsSection: {
    gap: 8,
  },
  tipRow: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'flex-start',
  },
  tipBullet: {
    fontSize: 14,
    marginTop: 1,
  },
  tipText: {
    flex: 1,
    fontSize: 13,
    color: colors.textSecondary,
    lineHeight: 19,
  },
  quickRecSection: {
    paddingHorizontal: 20,
    marginTop: 16,
  },
  quickRecTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 2,
  },
  quickRecSubtitle: {
    fontSize: 12,
    color: colors.textMuted,
    marginBottom: 10,
  },
  quickRecCard: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 12,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: colors.cardBorder,
  },
  quickRecRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quickRecName: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.primary,
  },
  quickRecNote: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 4,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: colors.surface,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    maxHeight: '70%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
  },
  modalClose: {
    fontSize: 15,
    color: colors.primary,
    fontWeight: '600',
  },
  pickerItem: {
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: colors.cardBorder,
  },
  pickerMainText: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.text,
  },
  pickerSubText: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 2,
  },
});
