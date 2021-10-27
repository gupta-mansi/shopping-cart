const initState = []

const counter = (state = initState, action) => {
  switch (action.type) {
    case "INCREMENT":

      const length = state.length;
      console.log(length);
      if(length < 1){
        return [action.payload];
        // state.push({
        //   id: action.payload.id,
        //   first_name: action.payload.first_name,
        //   last_name: action.payload.last_name,
        //   email: action.payload.email,
        //   count: action.payload.count + 1
        // });
        console.log(state);
      }
      else{
        return {
          ...state,
          count: action.payload + 1,
        };
      }


      // const objIndex = state.findIndex((obj) => obj.id === action.payload.id)
      // console.log(objIndex);
      // console.log(state);
      // if (objIndex === -1) {
        
      //   state.push({
      //     id: action.payload.id,
      //     first_name: action.payload.first_name,
      //     last_name: action.payload.last_name,
      //     email: action.payload.email,
      //     count: action.payload.count + 1
      //   });
      //   console.log(action.payload.count);
      //   return state;
      // }
      // else {
      //   state.splice(objIndex, 1, {
      //     id: action.payload.id,
      //     first_name: action.payload.first_name,
      //     last_name: action.payload.last_name,
      //     email: action.payload.email,
      //     count: action.payload.count + 1
      //   });
      //   console.log(action.payload.count);
      //   return state;
      // }
    
      break;
    case "DECREMENT":
      // return state - 1;
      break;
    default:
      return state;
      break;
  }
}

export default counter;