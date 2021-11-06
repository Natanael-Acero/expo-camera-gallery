import React, { useEffect, useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colores } from './styles/colores.styles';
import CameraPage from './pages/Camera/CameraPage';
import Gallery from './pages/Gallery/Gallery';
import Profile from './pages/Profile/Profile';

const Tab = createBottomTabNavigator();

export default function App() {

  const [photos, setPhotos] = useState([]);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {

            let iconName;

            switch (route.name) {
              case "Camera":
                iconName = focused
                  ? "camera"
                  : "camera-outline";
                break;

              case "Gallery":
                iconName = focused
                  ? "images"
                  : "images-outline";
                break;

              case "Profile":
                iconName = focused
                  ? "person"
                  : "person-outline";
                break;

              default:
                break;
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarStyle: {
            backgroundColor: 'black',
          },

          tabBarInactiveTintColor: "grey",
          tabBarLabelStyle: { fontWeight: 'bold', textShadowColor: 'white' },
          tabBarShowLabel: false,
        })}
      >

        <Tab.Screen
          name="Camera"
          options={{
            title: 'Camera',
            headerStyle: {
              backgroundColor: colores.primary,
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'white',
            },
            tabBarActiveTintColor: colores.light,
            tabBarStyle: { backgroundColor: 'black' },
          }}
        >
          {() => <CameraPage
            setPhotos={setPhotos}
          />}
        </Tab.Screen>

        <Tab.Screen
          name="Gallery"
          options={{
            title: 'Gallery',
            headerStyle: {
              backgroundColor: colores.primary
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'white'
            },
            tabBarActiveTintColor: colores.light,
            tabBarStyle: { backgroundColor: 'black' },

          }}
        >
          {() => <Gallery photos={photos} />}
        </Tab.Screen>


        <Tab.Screen name="Profile" options={{
          title: 'Profile',
          headerStyle: {
            backgroundColor: colores.primary
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white'
          },
          tabBarActiveTintColor: colores.light,
          tabBarStyle: { backgroundColor: 'black' },
        }}>
          {() => <Profile setPhotos={setPhotos} />}
        </Tab.Screen>

      </Tab.Navigator>

    </NavigationContainer >
  );
}
