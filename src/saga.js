export function* helloSaga(){
    console.log('hello');
}

export default function* fetchProduct() {

    yield fetch("https://fakestoreapi.com/products")
    .then(response => console.log('resp',response))
    .then((prod) => {
      return prod;
    })
    // .then(response => dispatch({type: "FETCH_PRODUCT", payload: response}))
    // .catch(error => {console.log(error);})
      // .then((resp) => console.log(resp.json()))
      // .then((users) => {
      //   console.log(users);
      //   return users;
      // });
  }

   
   
  // const usersIt = fetchProduct();
  // usersIt.next().value.then((resp) => {
  //     // document.write(JSON.stringify(resp, null, 2));
  //     console.log(JSON.stringify(resp));
  //   });
