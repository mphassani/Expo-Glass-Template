import React from 'react';
import { Linking, ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { PageHeader } from '@/components/page-header';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { SharedStyles } from '@/constants/styles';
import { useThemeColor } from '@/hooks/use-theme-color';

// External links - replace with your actual URLs
const PRIVACY_POLICY_URL = 'https://example.com/privacy';
const TERMS_OF_SERVICE_URL = 'https://example.com/terms';

export default function SettingsScreen() {
  const insets = useSafeAreaInsets();
  const iconColor = useThemeColor({}, 'icon');
  const textMuted = useThemeColor({}, 'textMuted');

  return (
    <ThemedView style={[SharedStyles.container, { paddingTop: insets.top }]}>
      <PageHeader title="Settings" />
      <ScrollView
        contentContainerStyle={[
          styles.scrollContent,
          { paddingBottom: insets.bottom + 100 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        {/* App Section */}
        <View style={styles.section}>
          <ThemedText style={[styles.sectionTitle, { color: iconColor }]}>
            APP
          </ThemedText>
          <ThemedText style={[styles.placeholder, { color: textMuted }]}>
            Add your settings options here
          </ThemedText>
        </View>

        {/* About Section */}
        <View style={styles.section}>
          <ThemedText style={[styles.sectionTitle, { color: iconColor }]}>
            ABOUT
          </ThemedText>
          <ThemedText style={[styles.placeholder, { color: textMuted }]}>
            App version, legal links, etc.
          </ThemedText>
        </View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingHorizontal: 20,
  },
  section: {
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '600',
    letterSpacing: 0.5,
    marginBottom: 12,
    marginTop: 24,
    marginLeft: 4,
  },
  placeholder: {
    fontSize: 14,
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.03)',
    overflow: 'hidden',
  },
});

