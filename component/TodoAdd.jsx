import { useContext } from "react";
import { useRef } from "react";
import { IoMdAdd } from "react-icons/io";
import Contextapi from "./Contextapi";

function TodoAdd() {
  let { handleaddonclick } = useContext(Contextapi);

  const currenttodoname = useRef();
  const currenttododata = useRef();

  function addonclick() {
    let Todoname = currenttodoname.current.value;
    let Tododate = currenttododata.current.value;
    currenttodoname.current.value = "";
    currenttododata.current.value = "";
    handleaddonclick(Todoname, Tododate);
  }

  return (
    <>
      <div className="container text-center">
        <div className="row irow">
          <div className="col-4">
            <input
              type="text"
              placeholder="Enter Todo here"
              ref={currenttodoname}
              //onChange={handlenamechange}
            />
          </div>
          <div className="col-4">
            <input type="date" ref={currenttododata} />
          </div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-success"
              onClick={addonclick}
            >
              <IoMdAdd />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoAdd;
