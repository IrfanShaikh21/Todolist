
import { useContext } from "react";
import Item from "./item";
import Contextapi from "./Contextapi";
function Tododlt() {

  let { Todolist } = useContext(Contextapi);

  return (
    <>
      <div className="container text-center">
        {Todolist.map((item) => (
          <Item
            key={item}
            item={item}
          ></Item>
        ))}
      </div>
    </>
  );
}
export default Tododlt;