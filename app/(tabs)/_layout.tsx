import { Stack, usePathname } from 'expo-router';

import MenuBar from '@/components/MenuBar';

export default function TabLayout() {
  const currentTab = usePathname().substring(1).toLowerCase()
  
  return (
    <>
      <Stack screenOptions={{
        headerShown: false,
        animation: "none"
      }} />
      <MenuBar TelaAtiva={currentTab}/>
    </>
  );
}