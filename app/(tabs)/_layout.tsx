import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Icon, Label, NativeTabs } from 'expo-router/unstable-native-tabs';
import React from 'react';
import { Platform } from 'react-native';

// Check if running iOS 26 or higher
const isIOS26OrHigher = Platform.OS === 'ios' && Number(Platform.Version) >= 26;

export default function TabLayout() {
  const colorScheme = useColorScheme();

  // iOS 26+: completely clear tab bar
  // iOS < 26: solid background with blur effect
  const tabBarBackground = isIOS26OrHigher
    ? 'transparent'
    : colorScheme === 'dark'
      ? Colors.dark.background
      : Colors.light.background;

  const tabBarBlur = isIOS26OrHigher
    ? 'none'
    : colorScheme === 'dark'
      ? 'systemChromeMaterialDark'
      : 'systemChromeMaterialLight';

  return (
    <NativeTabs
      iconColor={Colors[colorScheme ?? 'light'].tabIconSelected}
      tintColor={Colors[colorScheme ?? 'light'].tint}
      badgeTextColor={Colors[colorScheme ?? 'light'].text}
      backgroundColor={tabBarBackground}
      blurEffect={tabBarBlur}
      minimizeBehavior="automatic"
      disableTransparentOnScrollEdge={!isIOS26OrHigher}
    >
      <NativeTabs.Trigger name="index">
        <Icon sf={{ default: 'house', selected: 'house.fill' }} />
        <Label>Home</Label>
        <NativeTabs.Trigger.TabBar
          backgroundColor={tabBarBackground}
          blurEffect={tabBarBlur}
          disableTransparentOnScrollEdge={!isIOS26OrHigher}
        />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="explore">
        <Icon sf={{ default: 'safari', selected: 'safari.fill' }} />
        <Label>Explore</Label>
        <NativeTabs.Trigger.TabBar
          backgroundColor={tabBarBackground}
          blurEffect={tabBarBlur}
          disableTransparentOnScrollEdge={!isIOS26OrHigher}
        />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="settings">
        <Icon sf={{ default: 'gearshape', selected: 'gearshape.fill' }} />
        <Label>Settings</Label>
        <NativeTabs.Trigger.TabBar
          backgroundColor={tabBarBackground}
          blurEffect={tabBarBlur}
          disableTransparentOnScrollEdge={!isIOS26OrHigher}
        />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}

