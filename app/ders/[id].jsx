// app/ders/[id].jsx
import React from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { getCourseById } from '../../data/courses';

export default function CourseDetailScreen() {
  const { id } = useLocalSearchParams();
  const course = getCourseById(id);

  // GEREKSİNİM: Hatalı ID denemesinde kontrollü bilgi mesajı
  if (!course) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorIcon}>⚠️</Text>
        <Text style={styles.errorTitle}>Ders Bulunamadı</Text>
        <Text style={styles.errorText}>
          "{id}" koduna sahip bir ders programınızda bulunamadı. Lütfen ders listesinden geçerli bir seçim yapınız.
        </Text>
        <Pressable style={styles.backBtnPrimary} onPress={() => router.back()}>
          <Text style={styles.backBtnPrimaryText}>← Ders Programına Dön</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* DERS ANA BİLGİ KARTI */}
      <View style={styles.card}>
        <View style={styles.headerRow}>
          <View style={styles.codeBadge}>
            <Text style={styles.codeText}>{course.code}</Text>
          </View>
          <View style={styles.dayBadge}>
            <Text style={styles.dayText}>📅 {course.day}</Text>
          </View>
        </View>

        <Text style={styles.courseTitle}>{course.name}</Text>
        <Text style={styles.creditsText}>{course.credits} Kredi / AKTS • Zorunlu Ders</Text>

        <View style={styles.divider} />

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>🕒 Ders Saati:</Text>
          <Text style={styles.infoValue}>{course.time}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>📍 Sınıf / Laboratuvar:</Text>
          <Text style={styles.infoValue}>{course.room}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>👨‍🏫 Öğretim Elemanı:</Text>
          <Text style={styles.infoValue}>{course.instructor}</Text>
        </View>
      </View>

      {/* DERS İÇERİK VE DETAY KARTI */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Ders İçeriği ve Amacı</Text>
        <Text style={styles.description}>{course.description}</Text>

        <View style={styles.syllabusBox}>
          <Text style={styles.syllabusTitle}>Dönem İçi Konu Başlıkları</Text>
          <Text style={styles.syllabusItem}>1. Hafta: Temel Bileşenler ve JSX Yapısı</Text>
          <Text style={styles.syllabusItem}>2. Hafta: Flexbox ve Mobil Arayüz Yerleşimi</Text>
          <Text style={styles.syllabusItem}>3. Hafta: State (useState) ve Olay Yönetimi</Text>
          <Text style={styles.syllabusItem}>4. Hafta: Expo Router ile Dinamik Navigasyon</Text>
          <Text style={styles.syllabusItem}>5. Hafta: Context API ile Global Durum Yönetimi</Text>
        </View>
      </View>

      {/* GERİ DÖNÜŞ SEÇENEĞİ */}
      <Pressable style={styles.backBtn} onPress={() => router.back()}>
        <Text style={styles.backBtnText}>← Ders Programına Geri Dön</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc'
  },
  content: {
    padding: 16,
    paddingBottom: 36
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    shadowColor: '#0f172a',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
    marginBottom: 14
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
  },
  codeBadge: {
    backgroundColor: '#eff6ff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6
  },
  codeText: {
    fontSize: 12,
    fontWeight: '800',
    color: '#2563eb'
  },
  dayBadge: {
    backgroundColor: '#f1f5f9',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6
  },
  dayText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#475569'
  },
  courseTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#0f172a',
    marginBottom: 4,
    lineHeight: 28
  },
  creditsText: {
    fontSize: 12,
    color: '#64748b',
    fontWeight: '500'
  },
  divider: {
    height: 1,
    backgroundColor: '#f1f5f9',
    marginVertical: 14
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  infoLabel: {
    fontSize: 13,
    color: '#64748b',
    fontWeight: '500'
  },
  infoValue: {
    fontSize: 13,
    color: '#0f172a',
    fontWeight: '700',
    flexShrink: 1,
    textAlign: 'right'
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 8
  },
  description: {
    fontSize: 14,
    color: '#334155',
    lineHeight: 22,
    marginBottom: 16
  },
  syllabusBox: {
    backgroundColor: '#f8fafc',
    borderRadius: 10,
    padding: 14,
    borderWidth: 1,
    borderColor: '#e2e8f0'
  },
  syllabusTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#334155',
    marginBottom: 6
  },
  syllabusItem: {
    fontSize: 12,
    color: '#64748b',
    lineHeight: 20
  },
  backBtn: {
    backgroundColor: '#ffffff',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#cbd5e1'
  },
  backBtnText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#475569'
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#f8fafc'
  },
  errorIcon: {
    fontSize: 50,
    marginBottom: 14
  },
  errorTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#0f172a',
    marginBottom: 8
  },
  errorText: {
    fontSize: 14,
    color: '#64748b',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 24
  },
  backBtnPrimary: {
    backgroundColor: '#2563eb',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10
  },
  backBtnPrimaryText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '700'
  }
});
