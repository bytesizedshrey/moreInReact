import Cards from "./components/Card";

const App = () => {
  // const age = 10;
  // var user = 'shreyash'
  // const arr = ["emily","rose","sabrina","taylor"]
  return (
    <div className="text-xl text-red-900">
      <Cards user= "virat" />
      {/* {Cards('shreyash', 22)} */}
      {/* <h1>{user},{age}</h1>
    <h6>{arr.map(function(elem,id){
      return <h1>{elem},{id}</h1> //modified and returned
    })}</h6> */}
    </div>
  );
};

export default App;
