import AsyncStorage from '@react-native-async-storage/async-storage';
import { CollectionItem, LearningNote } from '../types';

const COLLECTION_KEY = '@beyblade_collection';
const NOTES_KEY = '@beyblade_notes';

export async function getCollection(): Promise<CollectionItem[]> {
  const json = await AsyncStorage.getItem(COLLECTION_KEY);
  return json ? JSON.parse(json) : [];
}

export async function addToCollection(item: CollectionItem): Promise<void> {
  const collection = await getCollection();
  collection.push(item);
  await AsyncStorage.setItem(COLLECTION_KEY, JSON.stringify(collection));
}

export async function removeFromCollection(index: number): Promise<void> {
  const collection = await getCollection();
  collection.splice(index, 1);
  await AsyncStorage.setItem(COLLECTION_KEY, JSON.stringify(collection));
}

export async function getNotes(): Promise<LearningNote[]> {
  const json = await AsyncStorage.getItem(NOTES_KEY);
  return json ? JSON.parse(json) : [];
}

export async function saveNote(note: LearningNote): Promise<void> {
  const notes = await getNotes();
  const idx = notes.findIndex(n => n.id === note.id);
  if (idx >= 0) {
    notes[idx] = note;
  } else {
    notes.push(note);
  }
  await AsyncStorage.setItem(NOTES_KEY, JSON.stringify(notes));
}

export async function deleteNote(id: string): Promise<void> {
  const notes = await getNotes();
  const filtered = notes.filter(n => n.id !== id);
  await AsyncStorage.setItem(NOTES_KEY, JSON.stringify(filtered));
}
