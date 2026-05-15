import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CollectionItem } from '../types';
import { getCollection, removeFromCollection } from '../utils/storage';
import { getBladeById } from '../data/blades';
import { getRatchetById } from '../data/ratchets';
import { getBitById } from '../data/bits';
import { colors, typeColors } from '../utils/theme';
import TypeBadge from '../components/TypeBadge';

type Props = {
  navigation: NativeStackNavigationProp<any>;
};

export default function CollectionScreen({ navigation }: Props) {
  const [collection, setCollection] = useState<CollectionItem[]>([]);

  useFocusEffect(
    useCallback(() => {
      loadCollection();
    }, [])
  );

  const loadCollection = async () => {
    const items = await getCollection();
    setCollection(items.sort((a, b) => b.addedAt - a.addedAt));
  };

  const handleRemove = (index: number, name: string) => {
    Alert.alert(
      '移除收藏',
      `確定要移除「${name}」嗎？`,
      [
        { text: '取消', style: 'cancel' },
        {
          text: '移除',
          style: 'destructive',
          onPress: async () => {
            await removeFromCollection(index);
            await loadCollection();
          },
        },
      ]
    );
  };

  const renderItem = ({ item, index }: { item: CollectionItem; index: number }) => {
    const blade = item.bladeId ? getBladeById(item.bladeId) : null;
    const ratchet = item.ratchetId ? getRatchetById(item.ratchetId) : null;
    const bit = item.bitId ? getBitById(item.bitId) : null;

    const name = blade?.nameZh || ratchet?.name || bit?.name || '未知零件';
    const subtitle = blade
      ? `${blade.modelNumber} ${blade.nameEn}`
      : ratchet
        ? `棘齒 Ratchet`
        : `軸心 Bit`;

    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => {
          if (blade) navigation.navigate('BladeDetail', { bladeId: blade.id });
        }}
        onLongPress={() => handleRemove(index, name)}
      >
        <View style={styles.cardContent}>
          <View style={styles.cardLeft}>
            <Text style={styles.itemName}>{name}</Text>
            <Text style={styles.itemSubtitle}>{subtitle}</Text>
            {blade && <TypeBadge type={blade.type} size="small" />}
          </View>
          <View style={styles.cardRight}>
            <Text style={styles.dateText}>
              {new Date(item.addedAt).toLocaleDateString('zh-TW')}
            </Text>
            <TouchableOpacity
              onPress={() => handleRemove(index, name)}
              style={styles.removeButton}
            >
              <Text style={styles.removeText}>移除</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>我的收藏</Text>
        <Text style={styles.count}>{collection.length} 件</Text>
      </View>

      {collection.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyIcon}>📦</Text>
          <Text style={styles.emptyText}>還沒有收藏</Text>
          <Text style={styles.emptySubtext}>
            在陀螺詳情頁面點擊「加入收藏」{'\n'}來追蹤你擁有的零件
          </Text>
        </View>
      ) : (
        <FlatList
          data={collection}
          renderItem={renderItem}
          keyExtractor={(_, i) => i.toString()}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: colors.text,
  },
  count: {
    fontSize: 14,
    color: colors.textSecondary,
    fontWeight: '600',
  },
  list: {
    padding: 20,
    paddingTop: 8,
    gap: 10,
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderColor: colors.cardBorder,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardLeft: {
    flex: 1,
    gap: 4,
  },
  cardRight: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  itemName: {
    fontSize: 17,
    fontWeight: '700',
    color: colors.text,
  },
  itemSubtitle: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  dateText: {
    fontSize: 11,
    color: colors.textMuted,
  },
  removeButton: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    backgroundColor: colors.danger + '20',
    borderWidth: 1,
    borderColor: colors.danger + '40',
  },
  removeText: {
    fontSize: 11,
    color: colors.danger,
    fontWeight: '600',
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 80,
  },
  emptyIcon: {
    fontSize: 48,
    marginBottom: 12,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.textSecondary,
    marginBottom: 4,
  },
  emptySubtext: {
    fontSize: 13,
    color: colors.textMuted,
    textAlign: 'center',
    lineHeight: 20,
  },
});
