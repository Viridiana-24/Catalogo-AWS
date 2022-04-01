import React from "react";
import { Text, View, Linking } from 'react-native';
import {styles} from "./Home.styles";
import ButtonComponent from "../../components/Button";

import {Amplify} from "aws-amplify"

export default function HomeScreen(){

  async function signOut(){
    try{
      await Amplify.Auth.signOut({gloobal:true});

    } catch(error)
    {
      console.log(error)
    }

  }

    return (
      <View style={styles.container}>
      <Text style={{color: 'pink'}}
        onPress={() => Linking.openURL("https://github.com/Viridiana-24/Catalogo-AWS.git")}>
          GitHub
        </Text>

      
        <Text>Todos</Text>
        <ButtonComponent title="Logout" onPress={signOut} />
      </View>
    )
  }