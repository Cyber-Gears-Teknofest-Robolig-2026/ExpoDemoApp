// WEB VERSION (src/web/App.tsx)

import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, Platform } from 'react-native';
import { styles } from './styles';

export default function App() {
  
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Count changed:', count);
  }, [count]);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.platform}>
          Your Platform: <Text style={styles.platformValue}>{Platform.OS}</Text>
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