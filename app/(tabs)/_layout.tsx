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
        name="Home/index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="Activitys/index"
        options={{
          title: 'Activitys',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="list-ul" color={color} />,
        }}
      />
      <Tabs.Screen
        name="PreChat/index"
        options={{
          title: 'Chat',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="wechat" color={color} />,
        }}
      />
      <Tabs.Screen
        name="Settings/index"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />

      {/*
      Exclude routes.
      This seems not to be the smartest way
      */}
      <Tabs.Screen
        name="PreChat/Chat/[id]"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="Settings/Account/index"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="Settings/Account/AccountInfo/index"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="Settings/Account/AccountInfo/AccountEdit/[edit]"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="Settings/DarkModeSwitch/index"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}