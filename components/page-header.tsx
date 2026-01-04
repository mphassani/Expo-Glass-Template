import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ThemedView } from '@/components/themed-view';
import { ThemedText } from '@/components/themed-text';
import { useThemeColor } from '@/hooks/use-theme-color';
import { Colors } from '@/constants/theme';
import { SharedStyles } from '@/constants/styles';

interface PageHeaderProps {
  title: string;
  actionIcon?: keyof typeof Ionicons.glyphMap;
  actionIconSize?: number;
  onActionPress?: () => void;
  showAction?: boolean;
}

export function PageHeader({ 
  title, 
  actionIcon, 
  actionIconSize = 24,
  onActionPress, 
  showAction = true,
}: PageHeaderProps) {
  const iconColor = useThemeColor(
    { light: Colors.light.tint, dark: Colors.dark.tint },
    'tint'
  );

  return (
    <ThemedView style={SharedStyles.pageHeader}>
      <View style={{ flex: 1 }}>
        <ThemedText type="title">{title}</ThemedText>
      </View>
      {showAction && actionIcon && onActionPress && (
        <TouchableOpacity
          style={SharedStyles.headerButton}
          onPress={onActionPress}
          activeOpacity={0.7}
        >
          <Ionicons name={actionIcon} size={actionIconSize} color={iconColor} />
        </TouchableOpacity>
      )}
    </ThemedView>
  );
}

