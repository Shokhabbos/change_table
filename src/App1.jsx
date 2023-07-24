import classNames from "classnames";
import { useState } from "react";

const TabTable = ({ children, onClick, isActive }) => {
  return (
    <button
      onClick={onClick}
      className={classNames("uppercase font-semibold mr-3 text-gray-300", {
        "text-black": isActive,
      })}
    >
      {children}
    </button>
  );
};
const TAB_INDEX = ["Positive", "Negative", "Neutral"];
const TabContent = ({ change, setChange }) => {
  return (
    <>
      <div className="my-3">
        {TAB_INDEX.map((text, index) => (
          <TabTable
            key={index}
            onClick={() => setChange(index)}
            isActive={change === index}
          >
            {text}
          </TabTable>
        ))}
      </div>
      <div>
        <h5>{TAB_INDEX[change]} content</h5>
      </div>
    </>
  );
};

function App() {
  const [change, setChange] = useState(0);
  const hanleSubmit = (e) => {
    e.preventDefault();
    const val = +e.target[0].value - 1;
    if (val < 0 || val >= 3) {
      alert("Invalid");
      return;
    } else {
      setChange(val);
    }
    console.log(val);
  };
  return (
    <div className="h-screen bg-blue-600 flex justify-center items-center w-screen">
      <div className="card  bg-white px-4 py-6 w-[800px]">
        <form onSubmit={hanleSubmit}>
          <input
            className="border-0 border-b w-5/6 font-normal focus:ring-0 "
            type="number"
            name=""
            id=""
            placeholder="Enter tab index"
          />
          <button
            className="  py-3 bg-gray-200  inline-block ml-5 px-2"
            type="submit"
          >
            Change Tab
          </button>
        </form>
        <TabContent change={change} setChange={setChange} />
      </div>
    </div>
  );
}

export default App;
