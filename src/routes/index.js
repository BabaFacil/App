import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AccountCreation from "../pages/AccountCreation";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import { Splash } from "../pages/Splash/Splash";
import Settings from '../pages/Settings'
import Activitys from "../pages/Activitys";

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            {/* <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{headerShown: false}}
            /> */}
            <Stack.Screen
                name="Splash"
                component={Splash}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="AccountCreation"
                component={AccountCreation}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Home'
                component={Home}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Settings"
                component={Settings}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Activitys"
                component={Activitys}
                options={{headerShown: false}}
            />

        </Stack.Navigator>
    )
}