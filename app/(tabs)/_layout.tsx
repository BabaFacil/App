import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {

  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: '#E96181', tabBarInactiveTintColor: '#C8C8C8', headerShown: false, tabBarStyle: {
        borderRadius: 15,
      }, tabBarLabelStyle: {
        fontSize: 12
      }
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="activitys"
        options={{
          title: 'Activitys',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="list-ul" color={color} />,
        }}
      />
      <Tabs.Screen
        name="preChat"
        options={{
          title: 'Chat',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="wechat" color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />
    </Tabs>
  );
}