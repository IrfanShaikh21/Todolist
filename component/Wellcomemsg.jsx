import { useContext } from "react";
import Contextapi from "./Contextapi";

function Wellcomemsg(){

let {Todolist} = useContext(Contextapi)

  return (
    <>
      {Todolist.length === 0 && (
        <h1>You have completed all task today, so Enjoy your Day</h1>
      )}
    </>
  );
}

export default Wellcomemsg;