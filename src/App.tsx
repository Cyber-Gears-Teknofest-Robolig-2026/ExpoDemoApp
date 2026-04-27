
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
  Platform,
  StyleSheet, 
  Text, 
  View, 
  Pressable 
} from 'react-native';
import WebApp from './web/App';
import AndroidApp from './android/App';

export default function App() {
  switch (Platform.OS) {
    case 'web':
      return <WebApp />;
    case 'android':
      return <AndroidApp />;
  }
}
