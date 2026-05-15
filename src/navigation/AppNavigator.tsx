import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native';
import { colors } from '../utils/theme';

import HomeScreen from '../screens/HomeScreen';
import BladeDetailScreen from '../screens/BladeDetailScreen';
import PartsGuideScreen from '../screens/PartsGuideScreen';
import CollectionScreen from '../screens/CollectionScreen';
import NotesScreen from '../screens/NotesScreen';
import ComboBuilderScreen from '../screens/ComboBuilderScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const stackScreenOptions = {
  headerStyle: { backgroundColor: colors.background },
  headerTintColor: colors.text,
  headerTitleStyle: { fontWeight: '700' as const },
  headerShadowVisible: false,
  contentStyle: { backgroundColor: colors.background },
};

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={stackScreenOptions}>
      <Stack.Screen name="HomeMain" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen
        name="BladeDetail"
        component={BladeDetailScreen}
        options={{ title: '陀螺詳情' }}
      />
    </Stack.Navigator>
  );
}

function PartsStack() {
  return (
    <Stack.Navigator screenOptions={stackScreenOptions}>
      <Stack.Screen
        name="PartsGuideMain"
        component={PartsGuideScreen}
        options={{ title: '零件圖鑑' }}
      />
    </Stack.Navigator>
  );
}

function CollectionStack() {
  return (
    <Stack.Navigator screenOptions={stackScreenOptions}>
      <Stack.Screen
        name="CollectionMain"
        component={CollectionScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BladeDetail"
        component={BladeDetailScreen}
        options={{ title: '陀螺詳情' }}
      />
    </Stack.Navigator>
  );
}

function ComboStack() {
  return (
    <Stack.Navigator screenOptions={stackScreenOptions}>
      <Stack.Screen
        name="ComboBuilderMain"
        component={ComboBuilderScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function NotesStack() {
  return (
    <Stack.Navigator screenOptions={stackScreenOptions}>
      <Stack.Screen
        name="NotesMain"
        component={NotesScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function TabIcon({ icon, focused }: { icon: string; focused: boolean }) {
  return (
    <Text style={{ fontSize: 22, opacity: focused ? 1 : 0.5 }}>{icon}</Text>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: colors.surface,
            borderTopColor: colors.cardBorder,
            borderTopWidth: 1,
            height: 60,
            paddingBottom: 6,
            paddingTop: 6,
          },
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.textMuted,
          tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: '600',
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarLabel: '陀螺圖鑑',
            tabBarIcon: ({ focused }) => <TabIcon icon="🌀" focused={focused} />,
          }}
        />
        <Tab.Screen
          name="PartsGuide"
          component={PartsStack}
          options={{
            tabBarLabel: '零件指南',
            tabBarIcon: ({ focused }) => <TabIcon icon="🔧" focused={focused} />,
          }}
        />
        <Tab.Screen
          name="ComboBuilder"
          component={ComboStack}
          options={{
            tabBarLabel: '組合模擬',
            tabBarIcon: ({ focused }) => <TabIcon icon="⚡" focused={focused} />,
          }}
        />
        <Tab.Screen
          name="Collection"
          component={CollectionStack}
          options={{
            tabBarLabel: '我的收藏',
            tabBarIcon: ({ focused }) => <TabIcon icon="📦" focused={focused} />,
          }}
        />
        <Tab.Screen
          name="Notes"
          component={NotesStack}
          options={{
            tabBarLabel: '學習筆記',
            tabBarIcon: ({ focused }) => <TabIcon icon="📝" focused={focused} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
