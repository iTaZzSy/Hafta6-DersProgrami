// app/_layout.jsx
import React from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#ffffff'
          },
          headerTintColor: '#0f172a',
          headerTitleStyle: {
            fontWeight: '800',
            fontSize: 18
          },
          headerShadowVisible: false,
          contentStyle: {
            backgroundColor: '#f8fafc'
          }
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: 'Haftalık Ders Programı'
          }}
        />
        <Stack.Screen
          name="ders/[id]"
          options={{
            title: 'Ders Detayı',
            headerBackTitle: 'Dersler'
          }}
        />
      </Stack>
    </>
  );
}
