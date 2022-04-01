import React, {useEffect, useState} from "react";
import { Text, View, TextInput, SafeAreaView, ScrollView, } from "react-native";
import {styles} from "./Post_libros.styles";

import { list, create, onCreate } from "../../services/todos";
import ButtonComponent from "../../components/Button";


export default function Post_librosScreen(){
  const [Todos, setTodos] = useState();

  const [Todo, setTodo] = useState({title:"", author:"", isbn:""})
async function listTodos(){
  const TodosFetched = await list();
  if(TodosFetched) setTodos(TodosFetched);
} 
async function createTodo(title, author, isbn){
  const TodoCreated = await create({title, author, isbn});
  return TodoCreated;
}
const addData = () => {
  createTodo(Todo.title, Todo.author, Todo.isbn);
};

useEffect(() =>{
  listTodos();
  let subscription;
  (async function subscribe(){
    subscription = await onCreate(listTodos);

    })();
    return () => {
      subscription?.unsubscribe();
    };
}, []);

useEffect(() =>{
  listTodos();
  let subscription;
  (async function subscribe(){
    subscription = await onCreate(listTodos);

    })();
    return () => {
      subscription?.unsubscribe();
    };
}, []);

return (

  <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text>Libros</Text>

        <Text>Title</Text>
        <TextInput
         onChangeText={(text)=>
          setTodo((current) =>({...current, title: text}))
      }
       style={{width:200, height:40, backgroundColor:"#EE74FB"}} 
       />
       <Text>Author</Text>
        <TextInput 
        onChangeText={(text)=>
          setTodo((current) =>({...current, author: text}))
      }
         style={{
           width:200, 
           height:40, 
           backgroundColor:"#EE74FB",
           paddingHorizontal:10, 
           marginVertical:10,
          }} 
           />
            <Text>ISBN</Text>
        <TextInput
         onChangeText={(text)=>
          setTodo((current) =>({...current, isbn: text}))
      }
       style={{width:200, height:40, backgroundColor:"#EE74FB"}} 
       />
        <ButtonComponent title="Create Todo" onPress={addData} />


        {Todos && 
          Todos.map((Todo)=> (
          <Text key={Todo.id}> {`${Todo.title} ${Todo.author} ${Todo.isbn}`}</Text>
          ))}



      </View>
      </ScrollView>
    </SafeAreaView>
    );
  }