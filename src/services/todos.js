import {API, graphqlOperation} from "aws-amplify";
import {getTodo, listTodos} from "../graphql/queries";
import {createTodo, updateTodo, deleteTodo} from "../graphql/mutations";
import {OnCreateTodo} from "../graphql/subscriptions";

const list = async () => {
    try{
        const Todos = await API.graphql(graphqlOperation(listTodos));
        return Todos.data.listTodos.items;
    }catch(error){
        console.log({error});
    }
};

const create = async(Todo) => {
    try{
        const newTodo = await API.graphql(
            graphqlOperation(createTodo, {input:Todo})
    );
    return newTodo;
    }catch (error){
console.log({error});
    }
    
};

const onCreate = async(subscriptionFunction) => {
    const subscription = API.graphql(graphqlOperation(OnCreateTodo)).subscribe({
        next:(TodoData)=>{
            console.log({TodoData});
            subscriptionFunction();

        },
    });
    return subscription;
};

export {list, create, onCreate};