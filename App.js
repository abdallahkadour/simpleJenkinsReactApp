import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Jenkins Build SUCCESS!</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#282c34', justifyContent: 'center', alignItems: 'center' },
  box: { padding: 40, backgroundColor: '#61dafb', borderRadius: 20 },
  text: { fontSize: 28, fontWeight: 'bold', color: '#282c34' }
});