import { Stack } from 'expo-router';
import { useTheme } from 'styled-components/native';

export default function StackScreen() {
    const theme = useTheme()

    return (
        <Stack screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: theme.COLORS.BACKGROUND },
            animation: "fade_from_bottom"
        }}>
            <Stack.Screen name="(tabs)" />
        </Stack>

    )
}