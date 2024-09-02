import { useSelector, useDispatch } from "react-redux";
import { getAllData } from "./feature/gitUserSlice";

const App = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    console.log("state..", state.app);
    return state.app;
  });

  // if (data.app.loading) {
  //   return <h1>Loading...</h1>;
  // }

  return (
    <>
      <h1>Hello</h1>
      <button onClick={() => dispatch(getAllData())}>Fetch data</button>

      {data.users.map((ele) => {
        <li key={ele.id}>{ele.login}</li>;
      })}
    </>
  );
};

export default App;
