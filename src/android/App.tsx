// ANDROID VERSION (src/android/App.tsx)

import React, { useEffect, useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

export default function App() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

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
            <Text selectable={false} style={styles.btnText}>
              +
            </Text>
          </Pressable>

          <Pressable
            style={[styles.btn, styles.minus]}
            onPress={() => setCount(count - 1)}
          >
            <Text selectable={false} style={styles.btnText}>
              -
            </Text>
          </Pressable>
        </View>

        <Text style={styles.count}>{count}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  customSplashContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingVertical: 60,
  },
  customSplashLogo: {
    width: 160,
    height: 160,
  },
  customSplashFooter: {
    color: "#666666",
    fontSize: 14,
    fontWeight: "500",
  },

  container: {
    flex: 1,
    backgroundColor: "#ECFDF5",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  card: {
    backgroundColor: "#FFFFFF",
    padding: 28,
    borderRadius: 22,
    minWidth: 320,
    alignItems: "center",
    elevation: 6,
  },
  platform: {
    fontSize: 24,
    fontWeight: "800",
    color: "blue",
    marginBottom: 8,
  },
  platformValue: {
    color: "green",
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#0F172A",
    marginBottom: 22,
  },
  row: {
    flexDirection: "row",
    gap: 14,
    marginBottom: 18,
  },
  btn: {
    width: 78,
    height: 78,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
  },
  plus: {
    backgroundColor: "#22C55E",
  },
  minus: {
    backgroundColor: "#F97316",
  },
  btnText: {
    fontSize: 38,
    fontWeight: "900",
    color: "#FFFFFF",
  },
  count: {
    fontSize: 38,
    fontWeight: "800",
    color: "#111827",
  },
});