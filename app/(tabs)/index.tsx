import React from 'react';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { PageHeader } from '@/components/page-header';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { SharedStyles } from '@/constants/styles';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  return (
    <ThemedView style={[SharedStyles.container, { paddingTop: insets.top }]}>
      <PageHeader title="Home" />
      <ThemedView style={styles.content}>
        <ThemedText type="subtitle">Welcome to your app!</ThemedText>
        <ThemedText style={styles.description}>
          This is a blank template. Start building your app here.
        </ThemedText>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  description: {
    marginTop: 8,
    textAlign: 'center',
    opacity: 0.6,
  },
});

