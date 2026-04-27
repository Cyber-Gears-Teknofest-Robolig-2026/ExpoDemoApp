// ANDROID VERSION (src/android/App.tsx)

import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, Pressable, StyleSheet, Image, ActivityIndicator } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import splashIcon from "@/assets/images/splash-icon.png";

// Splash kilitlenmesini en dışta başlatmak en sağlıklısıdır
SplashScreen.preventAutoHideAsync();

export default function App() {

  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        console.log("Hazırlık başladı...");
        // 3 saniye bekleme
        await new Promise(resolve => setTimeout(resolve, 3000)); 
      } catch (e) {
        console.warn(e);
      } finally {
        console.log("Hazırlık bitti!");
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  useEffect(() => {
    if (appIsReady) {
      SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  const [count, setCount] = useState(0); // Bu hook artık güvenli yerde

  // Count değişimini izleyen effect
  useEffect(() => {
    console.log('Count changed:', count);
  }, [count]);

  // --- 2. ERKEN RETURN (SPLASH GÖSTERİMİ) ---
  // Tüm hook tanımlamaları bittiği için artık güvenle return edebiliriz
  if (!appIsReady) {
    return (
      <View style={styles.splashContainer}>
        <Image
          source={splashIcon}
          style={{ width: 200, height: 200 }} 
        />
        <Text style={styles.text}>Yükleniyor...</Text>
        <ActivityIndicator size="large" color="#ff0000" />
        <Text style={styles.footerText}>Burak Cantürk Yazılım © 2026</Text>
      </View>
    );
  }

  // --- 3. ANA UYGULAMA İÇERİĞİ ---
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.platform}>
          Your Platform: <Text style={styles.platformValue}>android</Text>
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
  splashContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2e7d32',
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  footerText: {
    position: 'absolute',
    bottom: 50,
    color: 'rgba(255,255,255,0.7)',
  },
  container: {
    flex: 1,
    backgroundColor: '#ECFDF5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 28,
    borderRadius: 22,
    minWidth: 320,
    alignItems: 'center',
    elevation: 6,
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
    width: 78,
    height: 78,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  plus: {
    backgroundColor: '#22C55E',
  },
  minus: {
    backgroundColor: '#F97316',
  },
  btnText: {
    fontSize: 38,
    fontWeight: '900',
    color: '#FFFFFF',
  },
  count: {
    fontSize: 38,
    fontWeight: '800',
    color: '#111827',
  },
});