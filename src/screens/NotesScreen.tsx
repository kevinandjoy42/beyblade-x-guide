import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
  Modal,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { LearningNote } from '../types';
import { getNotes, saveNote, deleteNote } from '../utils/storage';
import { colors } from '../utils/theme';

export default function NotesScreen() {
  const [notes, setNotes] = useState<LearningNote[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [editingNote, setEditingNote] = useState<LearningNote | null>(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useFocusEffect(
    useCallback(() => {
      loadNotes();
    }, [])
  );

  const loadNotes = async () => {
    const loaded = await getNotes();
    setNotes(loaded.sort((a, b) => b.updatedAt - a.updatedAt));
  };

  const handleSave = async () => {
    if (!title.trim()) {
      Alert.alert('請輸入標題');
      return;
    }

    const note: LearningNote = editingNote
      ? { ...editingNote, title: title.trim(), content: content.trim(), updatedAt: Date.now() }
      : { id: Date.now().toString(), title: title.trim(), content: content.trim(), createdAt: Date.now(), updatedAt: Date.now() };

    await saveNote(note);
    setModalVisible(false);
    setTitle('');
    setContent('');
    setEditingNote(null);
    await loadNotes();
  };

  const handleEdit = (note: LearningNote) => {
    setEditingNote(note);
    setTitle(note.title);
    setContent(note.content);
    setModalVisible(true);
  };

  const handleDelete = (note: LearningNote) => {
    Alert.alert(
      '刪除筆記',
      `確定要刪除「${note.title}」嗎？`,
      [
        { text: '取消', style: 'cancel' },
        {
          text: '刪除',
          style: 'destructive',
          onPress: async () => {
            await deleteNote(note.id);
            await loadNotes();
          },
        },
      ]
    );
  };

  const handleNew = () => {
    setEditingNote(null);
    setTitle('');
    setContent('');
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>學習筆記</Text>
          <Text style={styles.subtitle}>記錄你的對戰心得和改裝靈感</Text>
        </View>
        <TouchableOpacity style={styles.addButton} onPress={handleNew}>
          <Text style={styles.addButtonText}>＋ 新增</Text>
        </TouchableOpacity>
      </View>

      {notes.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyIcon}>📝</Text>
          <Text style={styles.emptyText}>還沒有筆記</Text>
          <Text style={styles.emptySubtext}>
            記錄對戰心得、零件搭配發現、{'\n'}或是比賽學到的技巧
          </Text>
        </View>
      ) : (
        <FlatList
          data={notes}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.noteCard} onPress={() => handleEdit(item)} onLongPress={() => handleDelete(item)}>
              <Text style={styles.noteTitle}>{item.title}</Text>
              {item.content ? (
                <Text style={styles.noteContent} numberOfLines={3}>
                  {item.content}
                </Text>
              ) : null}
              <Text style={styles.noteDate}>
                {new Date(item.updatedAt).toLocaleDateString('zh-TW', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </Text>
            </TouchableOpacity>
          )}
        />
      )}

      {/* Note Editor Modal */}
      <Modal visible={modalVisible} animationType="slide" transparent>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.modalOverlay}
        >
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={styles.modalCancel}>取消</Text>
              </TouchableOpacity>
              <Text style={styles.modalTitle}>
                {editingNote ? '編輯筆記' : '新增筆記'}
              </Text>
              <TouchableOpacity onPress={handleSave}>
                <Text style={styles.modalSave}>儲存</Text>
              </TouchableOpacity>
            </View>

            <TextInput
              style={styles.inputTitle}
              placeholder="標題"
              placeholderTextColor={colors.textMuted}
              value={title}
              onChangeText={setTitle}
            />

            <TextInput
              style={styles.inputContent}
              placeholder="寫下你的對戰心得、改裝筆記..."
              placeholderTextColor={colors.textMuted}
              value={content}
              onChangeText={setContent}
              multiline
              textAlignVertical="top"
            />
          </View>
        </KeyboardAvoidingView>
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
  subtitle: {
    fontSize: 12,
    color: colors.textMuted,
    marginTop: 2,
  },
  addButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 10,
  },
  addButtonText: {
    color: colors.background,
    fontSize: 14,
    fontWeight: '700',
  },
  list: {
    padding: 20,
    paddingTop: 8,
    gap: 10,
  },
  noteCard: {
    backgroundColor: colors.card,
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.cardBorder,
    gap: 6,
  },
  noteTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
  },
  noteContent: {
    fontSize: 13,
    color: colors.textSecondary,
    lineHeight: 19,
  },
  noteDate: {
    fontSize: 11,
    color: colors.textMuted,
    marginTop: 2,
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
    minHeight: '60%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  modalCancel: {
    fontSize: 15,
    color: colors.textSecondary,
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
  },
  modalSave: {
    fontSize: 15,
    color: colors.primary,
    fontWeight: '700',
  },
  inputTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    borderBottomWidth: 1,
    borderBottomColor: colors.cardBorder,
    paddingBottom: 10,
    marginBottom: 12,
  },
  inputContent: {
    fontSize: 15,
    color: colors.text,
    lineHeight: 22,
    flex: 1,
  },
});
