"use client"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Feather } from "@expo/vector-icons"
import HomeScreen from "../screens/HomeScreen"
import VendorDetailScreen from "../screens/VendorDetailScreen"
import SearchScreen from "../screens/SearchScreen"
import FavoritesScreen from "../screens/FavoritesScreen"
import ProfileScreen from "../screens/ProfileScreen"
import { useTheme } from "../context/ThemeContext"

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

function HomeStack() {
  const { colors } = useTheme()

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: colors.white,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: "Local Vendors" }} />
      <Stack.Screen
        name="VendorDetail"
        component={VendorDetailScreen}
        options={({ route }) => ({ title: route.params.vendor.name })}
      />
    </Stack.Navigator>
  )
}

export default function AppNavigator() {
  const { colors } = useTheme()

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName

          if (route.name === "Home") {
            iconName = "home"
          } else if (route.name === "Search") {
            iconName = "search"
          } else if (route.name === "Favorites") {
            iconName = "heart"
          } else if (route.name === "Profile") {
            iconName = "user"
          }

          return <Feather name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.gray,
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  )
}
