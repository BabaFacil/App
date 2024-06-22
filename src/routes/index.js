import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DefaultTheme } from "@react-navigation/native";

import * as ROUTES from "../pages";

const Stack = createNativeStackNavigator();

export default function Routes({ viewedOnBoard }) {
    return (
        <Stack.Navigator screenOptions={{ detachPreviousScreen: true, presentation: "transparentModal" }} theme={DefaultTheme.colors.background}  >
            {viewedOnBoard ? <Stack.Screen
                name="SignIn?via=onboarding"
                component={ROUTES.SignIn}
                options={{ headerShown: false }}
            /> :
                <Stack.Screen
                    name="Welcome"
                    component={ROUTES.Welcome}
                    options={{ headerShown: false }}
                />}

            <Stack.Screen
                name="SignIn"
                component={ROUTES.SignIn}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name = "SignUp"
                component={ROUTES.SignUp}
                options ={{headerShown: false}}
            />

            <Stack.Screen
                name='Home'
                component={ROUTES.Home}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='PreChat'
                component={ROUTES.PreChat}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="AccountCreation"
                component={ROUTES.AccountCreation}
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
                options={{ headerShown: false, }}

            />
            <Stack.Screen
                name="Chat"
                component={ROUTES.Chat}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="RegisterChild"
                component={ROUTES.RegisterChild}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Account"
                component={ROUTES.Account}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="AccountInfo"
                component={ROUTES.AccountInfo}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="AccountEdit"
                component={ROUTES.AccountEdit}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    )
}