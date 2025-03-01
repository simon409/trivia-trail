import { View, type ViewProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';
import { Colors } from '@/constants/Colors';

export function ThemedView({ style, ...otherProps }: ViewProps) {
  const backgroundColor = useThemeColor({ light: Colors.light.background, dark: Colors.dark.background }, 'background');

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
