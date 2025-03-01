import { useColorScheme } from '@/hooks/useColorScheme';
import { View, ImageBackground, type ViewProps } from 'react-native';
import { LOGO, LOGO_DARK } from '@/assets/customImages';

export type ThemedLOGOProps = ViewProps & {
    lightColor?: string;
    darkColor?: string;
};

export function ThemedLOGO({ style, lightColor, darkColor, ...otherProps }: ThemedLOGOProps) {
    const LOGOimg = useColorScheme() === 'dark' ? LOGO_DARK : LOGO;

    return (
        <ImageBackground source={LOGOimg} style={[{ flex: 1 }, style]} {...otherProps} />
    );
}
