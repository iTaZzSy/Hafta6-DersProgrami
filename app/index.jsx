// app/index.jsx
import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Pressable,
  StyleSheet
} from 'react-native';
import { router } from 'expo-router';
import { courses } from '../data/courses';
import CourseCard from '../components/CourseCard';

export default function CourseListScreen() {
  const [selectedDay, setSelectedDay] = useState('Tümü');

  const days = ['Tümü', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma'];

  const filteredCourses = courses.filter((c) => {
    if (selectedDay === 'Tümü') return true;
    return c.day === selectedDay;
  });

  return (
    <View style={styles.container}>
      {/* BAŞLIK VE ÖĞRENCİ BİLGİSİ */}
      <View style={styles.header}>
        <Text style={styles.subTitle}>ÖĞRENCİ BİLGİ SİSTEMİ</Text>
        <Text style={styles.title}>2026-2027 Güz Dönemi</Text>
        <Text style={styles.studentInfo}>Öğrenci: Hussam Al Sleem • No: 2210238518</Text>
      </View>

      {/* GÜN FİLTRELEME ÇİPLERİ (GEREKSİNİM) */}
      <View style={styles.dayFilterContainer}>
        {days.map((day) => {
          const isActive = selectedDay === day;
          return (
            <Pressable
              key={day}
              style={[
                styles.dayChip,
                isActive && styles.dayChipActive
              ]}
              onPress={() => setSelectedDay(day)}
            >
              <Text
                style={[
                  styles.dayChipText,
                  isActive && styles.dayChipTextActive
                ]}
              >
                {day}
              </Text>
            </Pressable>
          );
        })}
      </View>

      {/* DERS SAYISI VE TEST BUTONU */}
      <View style={styles.actionBar}>
        <Text style={styles.countText}>
          {filteredCourses.length} ders listeleniyor
        </Text>
        {/* Föy Gereksinimi: Hatalı ID denemesi butonu */}
        <Pressable
          style={styles.testBtn}
          onPress={() => router.push('/ders/hatali-ders-999')}
        >
          <Text style={styles.testBtnText}>⚠️ Hatalı ID Test Et</Text>
        </Pressable>
      </View>

      {/* DERS LİSTESİ (FLATLIST) */}
      <FlatList
        data={filteredCourses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CourseCard course={item} />}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyIcon}>📅</Text>
            <Text style={styles.emptyTitle}>Ders Bulunmuyor</Text>
            <Text style={styles.emptyText}>
              Seçilen '{selectedDay}' gününde kayıtlı dersiniz bulunmamaktadır.
            </Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    padding: 16
  },
  header: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    marginBottom: 12
  },
  subTitle: {
    fontSize: 11,
    fontWeight: '800',
    color: '#2563eb',
    letterSpacing: 0.5,
    marginBottom: 2
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    color: '#0f172a'
  },
  studentInfo: {
    fontSize: 12,
    color: '#64748b',
    marginTop: 4,
    fontWeight: '500'
  },
  dayFilterContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 12
  },
  dayChip: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 18,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#cbd5e1'
  },
  dayChipActive: {
    backgroundColor: '#2563eb',
    borderColor: '#2563eb'
  },
  dayChipText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#475569'
  },
  dayChipTextActive: {
    color: '#ffffff'
  },
  actionBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
  },
  countText: {
    fontSize: 12,
    color: '#64748b',
    fontWeight: '600'
  },
  testBtn: {
    backgroundColor: '#fef2f2',
    borderWidth: 1,
    borderColor: '#fca5a5',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 6
  },
  testBtnText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#dc2626'
  },
  listContent: {
    paddingBottom: 24
  },
  emptyContainer: {
    alignItems: 'center',
    padding: 40,
    marginTop: 20,
    backgroundColor: '#ffffff',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#e2e8f0'
  },
  emptyIcon: {
    fontSize: 36,
    marginBottom: 10
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#334155'
  },
  emptyText: {
    fontSize: 13,
    color: '#64748b',
    marginTop: 4,
    textAlign: 'center'
  }
});
