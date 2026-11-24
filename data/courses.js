// data/courses.js
// Haftalık Öğrenci Ders Programı Verileri

export const courses = [
  {
    id: 'd1',
    name: 'Mobil Programlama',
    code: 'BLM-308',
    day: 'Salı',
    time: '09:00 - 12:00',
    room: 'Lab 2 (Bilgisayar Laboratuvarı)',
    instructor: 'Dr. Öğr. Üyesi Ali Demir',
    credits: 4,
    description: 'React Native, Expo Router ve modern mobil arayüz mimarileri ile çapraz platform mobil uygulama geliştirme.'
  },
  {
    id: 'd2',
    name: 'JavaScript ile Web Geliştirme',
    code: 'BLM-204',
    day: 'Çarşamba',
    time: '13:00 - 15:00',
    room: 'Lab 1',
    instructor: 'Doç. Dr. Fatma Kaya',
    credits: 3,
    description: 'Modern JavaScript ES6+, asenkron programlama, DOM manipülasyonu ve Web API entegrasyonu.'
  },
  {
    id: 'd3',
    name: 'Web Tasarımı ve Kullanılabilirlik',
    code: 'BLM-312',
    day: 'Perşembe',
    time: '10:00 - 12:00',
    room: 'Derslik 3',
    instructor: 'Öğr. Gör. Mehmet Yıldız',
    credits: 3,
    description: 'Kullanıcı deneyimi (UX), responsive web tasarımı, HTML5, CSS3 Grid/Flexbox ve modern arayüz prensipleri.'
  },
  {
    id: 'd4',
    name: 'Veritabanı Yönetim Sistemleri',
    code: 'BLM-210',
    day: 'Cuma',
    time: '11:00 - 13:00',
    room: 'Lab 4',
    instructor: 'Prof. Dr. Zeynep Aksoy',
    credits: 4,
    description: 'İlişkisel veritabanı tasarımı, normalizasyon, karmaşık SQL sorguları ve veri güvenliği.'
  },
  {
    id: 'd5',
    name: 'Yazılım Mimarisi ve Tasarım Desenleri',
    code: 'BLM-402',
    day: 'Pazartesi',
    time: '14:00 - 16:00',
    room: 'Derslik 1',
    instructor: 'Dr. Öğr. Üyesi Can Öztürk',
    credits: 3,
    description: 'SOLID prensipleri, MVC, Observer, Singleton ve modern yazılım mimarisi desenlerinin pratik uygulamaları.'
  }
];

export const getCourseById = (id) => {
  return courses.find((c) => String(c.id) === String(id));
};
