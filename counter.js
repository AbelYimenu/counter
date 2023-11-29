import React, { useReducer} from 'react'; 
import Hello from '../Hello/Helloworld';
 
const initalstate={ 
 
    count:0, 
    message:'' 
} 

 
    const reducer=(state,action)=>{ 
 
        switch (action.type) { 
            case 'increment': 
              return{...state, count: state.count + 1} 
             
            case 'decrement' :  
 
            return {...state,count: state.count-1} 
            
            case 'reset' :  
 
            return {...state, count:0, message:''} 
            
            case 'message' :  
 
            return {...state,message:action.paylode} 
            
              default: 
               return state 
          } 
         
           
        } 
     
    const Count = () => { 
     
        const[state,dispatch]=useReducer(reducer,initalstate) 
       
 
        return (  <> 
        <Hello name="abel"/>
        <Hello name ="bele"/>
        <Hello name = "abebe"/>
        {/* <Welcome/> */}
        <h2>Count:{state.count}</h2> 
            <button onClick={()=>dispatch({type:'increment'})}>+</button> 
            <button onClick={()=>dispatch({type:'decrement'})}>-</button> 
            <button onClick={()=>dispatch({type:'reset'})}>reset</button> 
            <input onChange={(e)=>dispatch({type:'message' ,paylode :e.target.value})}></input> 
 
            <p>message:{state.message}</p>            </> 
        ); 
    } 
 
    export default Count ;