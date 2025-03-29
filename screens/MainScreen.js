import React from 'react';
import { View, Text } from 'react-native';

export default function MainScreen({ route }) {
  const { username } = route.params;

  const events = [
    { title: 'Gemeindeversammlung', date: '2025-04-01 14:00', description: 'Besprechung und Planung der nächsten Veranstaltungen.' },
    { title: 'Informationsabend', date: '2025-04-05 18:00', description: 'Vorstellung neuer Projekte und Diskussion.' },
    { title: 'Festakt', date: '2025-04-10 10:00', description: 'Feierliche Zusammenkunft und Grußworte.' },
  ];

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Welcome, {username}!</Text>
      <Text style={{ fontSize: 16, marginBottom: 5 }}>Upcoming Events:</Text>
      {events.map((event, index) => (
        <View key={index} style={{ marginBottom: 10, padding: 10, backgroundColor: '#f0f0f0', borderRadius: 5 }}>
          <Text style={{ fontWeight: 'bold' }}>{event.title}</Text>
          <Text>{event.date}</Text>
          <Text>{event.description}</Text>
        </View>
      ))}
    </View>
  );
}
