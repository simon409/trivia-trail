import { useColorScheme } from '@/hooks/useColorScheme';
import { View, ImageBackground, type ViewProps } from 'react-native';
import { BG, BG_DARK } from '@/assets/customImages';

export type ThemedHomeScreenViewProps = ViewProps & {
    lightColor?: string;
    darkColor?: string;
};

export function ThemedHomeScreenView({ style, lightColor, darkColor, ...otherProps }: ThemedHomeScreenViewProps) {
    const backgroundImage = useColorScheme() === 'dark' ? BG_DARK : BG;

    return (
        <ImageBackground source={backgroundImage} style={[{ flex: 1 }, style]} {...otherProps} />
    );
}
