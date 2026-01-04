import React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ThemedText } from '@/components/themed-text';
import { Colors } from '@/constants/theme';
import { SharedStyles } from '@/constants/styles';

interface EmptyStateProps {
  icon: keyof typeof Ionicons.glyphMap;
  iconSize?: number;
  title: string;
  subtitle: string;
}

export function EmptyState({ 
  icon, 
  iconSize = 64, 
  title, 
  subtitle 
}: EmptyStateProps) {
  return (
    <View style={SharedStyles.emptyContainer}>
      <Ionicons name={icon} size={iconSize} color={Colors.light.icon} />
      <ThemedText style={SharedStyles.emptyTitle}>{title}</ThemedText>
      <ThemedText style={SharedStyles.emptySubtitle}>{subtitle}</ThemedText>
    </View>
  );
}

