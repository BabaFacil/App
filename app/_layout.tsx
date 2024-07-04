import { ThemeProvider } from '@/theme/Theme';

import StackScreen from './StackScreen';

export default function Layout() {
    
    return (
        <ThemeProvider>
            <StackScreen/>
        </ThemeProvider>
    )
}