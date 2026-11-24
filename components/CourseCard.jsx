// components/CourseCard.jsx
import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function CourseCard({ course }) {
  const handlePress = () => {
    router.push(`/ders/${course.id}`);
  };

  // Güne göre sol şerit rengi
  const getDayColor = (day) => {
    switch (day) {
      case 'Pazartesi':
        return '#8b5cf6';
      case 'Salı':
        return '#2563eb';
      case 'Çarşamba':
        return '#0284c7';
      case 'Perşembe':
        return '#d97706';
      case 'Cuma':
        return '#16a34a';
      default:
        return '#64748b';
    }
  };

  const stripColor = getDayColor(course.day);

  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        { borderLeftColor: stripColor },
        pressed && styles.cardPressed
      ]}
      onPress={handlePress}
    >
      <View style={styles.topRow}>
        <View style={[styles.dayBadge, { backgroundColor: stripColor + '18' }]}>
          <Text style={[styles.dayText, { color: stripColor }]}>{course.day}</Text>
        </View>
        <Text style={styles.timeText}>🕒 {course.time}</Text>
      </View>

      <Text style={styles.courseName}>{course.name}</Text>
      <Text style={styles.courseCode}>{course.code} • {course.credits} Kredi (AKTS)</Text>

      <View style={styles.footerRow}>
        <Text style={styles.roomText}>📍 {course.room}</Text>
        <Text style={styles.arrowText}>Detay →</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderLeftWidth: 5,
    shadowColor: '#0f172a',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2
  },
  cardPressed: {
    backgroundColor: '#f8fafc',
    transform: [{ scale: 0.99 }]
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8
  },
  dayBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6
  },
  dayText: {
    fontSize: 12,
    fontWeight: '700'
  },
  timeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#64748b'
  },
  courseName: {
    fontSize: 16,
    fontWeight: '800',
    color: '#0f172a',
    marginBottom: 4
  },
  courseCode: {
    fontSize: 12,
    color: '#64748b',
    fontWeight: '500',
    marginBottom: 12
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#f1f5f9'
  },
  roomText: {
    fontSize: 13,
    color: '#475569',
    fontWeight: '500'
  },
  arrowText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#2563eb'
  }
});
