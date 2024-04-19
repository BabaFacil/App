import { createNativeStackNavigator } from "@react-navigation/native-stack";

import * as ROUTES from "../pages";

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator  >
            {/* <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{headerShown: false}}
            /> */}
            <Stack.Screen
                name="Splash"
                component={ROUTES.Splash}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SignIn"
                component={ROUTES.SignIn}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="AccountCreation"
                component={ROUTES.AccountCreation}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Home'
                component={ROUTES.Home}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Settings"
                component={ROUTES.Settings}
                options={{ headerShown: false }}
                
            />

            <Stack.Screen
                name="DarkModeSwitch"
                component={ROUTES.DarkModeSwitch}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Activitys"
                component={ROUTES.Activitys}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    )
}