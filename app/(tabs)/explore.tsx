import React from 'react';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { EmptyState } from '@/components/empty-state';
import { PageHeader } from '@/components/page-header';
import { ThemedView } from '@/components/themed-view';
import { SharedStyles } from '@/constants/styles';

export default function ExploreScreen() {
  const insets = useSafeAreaInsets();

  return (
    <ThemedView style={[SharedStyles.container, { paddingTop: insets.top }]}>
      <PageHeader title="Explore" />
      <ThemedView style={styles.content}>
        <EmptyState
          icon="compass-outline"
          title="Nothing here yet"
          subtitle="Add your explore content here"
        />
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

