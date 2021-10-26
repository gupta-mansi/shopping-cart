import React from 'react';
import useAxios from 'axios-hooks'
import { useDispatch} from 'react-redux';
import '../App.css';
import Count from './counterComponent';

//Actions

// const increment = () => {
//   return {
//       type : "INCREMENT"
//   }
// }

// const decrement = () => {
//   return {
//       type : "DECREMENT"
//   }
// }


//Reducer

// const counter = (state = 5, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;
//       break;
//     case "DECREMENT":
//       return state - 1;
//       break;
//     default:
//       return state;
//       break;
//   }
// }

//Create Store
// let store = createStore(counter)

// store.subscribe(() => console.log(store.getState()))
// store.dispatch(increment())

function App(count) {
  const Dispatch = useDispatch();
  // console.log(state);
  const users = useAxios(
    'https://reqres.in/api/users'
  )
    // console.log(users[0]?.data)
    
    const handleAdd = (e) => {
      Dispatch({
        type: 'INCREMENT',
        payload: {
          id: e.id,
          first_name: e.first_name,
          last_name: e.last_name,
          email: e.email,
          count:  e.count || 0
        }
      })
      console.log(e);
    }

  return (
    <div className="App">
      <h2>Users</h2>

        {users[0]?.data?.data.map(user => (
          <li key={user.id}>

            

            {user.first_name}

            <button className="add_btn" onClick={() => handleAdd(user) } >Add</button> 
         
            { /* Dispatch({ type: 'INCREMENT'
            ,payload:{
              id: user.id,
              first_name: user.first_name,
              last_name: user.last_name,
              email: user.email,
              count: user.count || 0
            }
            }) */}

            <button className="remove_btn" onClick={() => Dispatch({ type: 'DECREMENT' })}>Remove</button>
          </li>
        ))}
        <Count />
    </div>
  );
}

export default App;
