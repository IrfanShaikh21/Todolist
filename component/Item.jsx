import { useContext } from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import Contextapi from "./Contextapi";

function Item({ item }) {

let { handleDeleteonclick } = useContext(Contextapi);


  return (
    <>
      <div className="row irow">
        <div className="col-4">{item.Name}</div>
        <div className="col-4">{item.dueDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => handleDeleteonclick(item.Name)}
          >
            <FaDeleteLeft />
          </button>
        </div>
      </div>
    </>
  );
}

export default Item;
