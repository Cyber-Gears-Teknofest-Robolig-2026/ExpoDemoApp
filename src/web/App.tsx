// WEB VERSION (src/web/App.tsx)

import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function App() {
  
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Count changed:', count);
  }, [count]);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.platform}>
          Your Platform: <Text style={styles.platformValue}>web</Text>
        </Text>

        <Text style={styles.title}>Count Application</Text>

        <View style={styles.row}>
          <Pressable
            style={[styles.btn, styles.plus]}
            onPress={() => setCount(count + 1)}
          >
            <Text selectable={false} style={styles.btnText}>+</Text>
          </Pressable>

          <Pressable
            style={[styles.btn, styles.minus]}
            onPress={() => setCount(count - 1)}
          >
            <Text selectable={false} style={styles.btnText}>-</Text>
          </Pressable>
        </View>

        <Text style={styles.count}>{count}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F2FE',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },

  card: {
    backgroundColor: '#FFFFFF',
    padding: 30,
    borderRadius: 24,
    minWidth: 330,
    alignItems: 'center',
    shadowColor: '#0284C7',
    shadowOpacity: 0.12,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 8 },
  },

  platform: {
    fontSize: 24,
    fontWeight: '800',
    color: 'blue',
    marginBottom: 8,
  },

  platformValue: {
    color: 'green',
  },

  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#0F172A',
    marginBottom: 22,
  },

  row: {
    flexDirection: 'row',
    gap: 14,
    marginBottom: 18,
  },

  btn: {
    width: 80,
    height: 80,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },

  plus: {
    backgroundColor: '#06B6D4',
  },

  minus: {
    backgroundColor: '#FB7185',
  },

  btnText: {
    fontSize: 38,
    fontWeight: '900',
    color: '#FFFFFF',
    userSelect: 'none',
  },

  count: {
    fontSize: 38,
    fontWeight: '800',
    color: '#111827',
  },
});