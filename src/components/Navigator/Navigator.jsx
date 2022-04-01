import React,{useState, useContext} from 'react';


import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import LoginScreen from "../../pages/Login";
import HomeScreen from "../../pages/Home";
import Post_librosScreen from "../../pages/Post_libros"

import { GlobalContext } from '../../context/global/global.context';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function MainNavigator({ signOut }){
    const {state, login, logout} = useContext(GlobalContext);

    console.log({state});
  return (
   <NavigationContainer>
     {!state.user ? (
       <Stack.Navigator>
         <Stack.Screen
         options={{ headerShown: false }}
         children={(props) => (
           <LoginScreen {... props} onPress={() => login()} />
         )}
          name="Login"
        />
        </Stack.Navigator>

     ) : (
     <Tab.Navigator 
     screenOptions={({route})=>({
       tabBarIcon:({focused, color, size})=>{
         let iconName;

         if(route.name === "Home"){
           iconName = focused
           ? "ios-contact"
           : "ios-contact-outline";
          } else if(route.name === "Post_libros") {
            iconName = "ios-list";
         }

         return <Ionicons name={iconName} size={size} color={color}></Ionicons>

       },

       tabBarActiveTintColor: "#EE74FB",
       tabBarInactiveTintColor: "gray",
     })}
     >
       <Tab.Screen name="Home"
       children={(props) => (
         <HomeScreen {...props} onPress={() => signOut()} />
       )}
       />
       <Tab.Screen name="Post_libros" component={Post_librosScreen} />
     </Tab.Navigator>
     )}
   </NavigationContainer>
  );
}