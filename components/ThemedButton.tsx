import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ViewStyle, TextStyle, Dimensions, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme.web';


const { width } = Dimensions.get('window');

interface ThemedButtonProps {
    title: string;
    icon?: typeof FontAwesome.defaultProps.name;
    onPress: () => void;
    style?: ViewStyle;
    textStyle?: TextStyle;
    iconSize?: number;
    iconColor?: string;
}

const ThemedButton: React.FC<ThemedButtonProps> = ({
    title,
    onPress,
    style,
    textStyle,
    icon,
    iconSize = 24,
    iconColor,
}) => {
    const backgroundColor = useColorScheme() === 'dark' ? Colors.dark.background : Colors.light.background;
    const borderColor = useColorScheme() === 'dark' ? Colors.dark.text : Colors.light.text;
    const textColor = useColorScheme() === 'dark' ? Colors.dark.text : Colors.light.text;
    const defaultIconColor = useColorScheme() === 'dark' ? Colors.dark.text : Colors.light.text;

    return (
        <TouchableOpacity
            style={[styles.button, style, { backgroundColor, borderColor }]}
            onPress={onPress}
            activeOpacity={0.7}
        >
            <View style={[styles.contentContainer, { backgroundColor }]}>
                {icon && <FontAwesome name={icon} size={iconSize} color={iconColor || defaultIconColor} style={styles.icon} />}
                <Text style={[styles.buttonText, { color: textColor }, textStyle]}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: width - 46,
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
        borderWidth: 0.8,
    },
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    icon: {
        marginRight: 8,
    },
});

export default ThemedButton;