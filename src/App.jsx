import { useState } from "react";

const TabIndex = () => {
  const [contName, setContName] = useState("Positive");

  const handleTabClick = (tabName) => {
    setContName(tabName);
  };

  const handleInput = (e) => {
    e.preventDefault();
    const tabIndex = parseInt(e.target.children[0].value);
    switch (tabIndex) {
      case 1:
        setContName("Positive");
        break;
      case 2:
        setContName("Negative");
        break;
      case 3:
        setContName("Neutral");
        break;
      default:
        alert("Not Found");
        setShowModal(false);
        break;
    }
  };

  return (
    <div className="big__div">
      <div className="card">
        <form onSubmit={handleInput} className="top">
          <input name="tabIndex" type="text" placeholder="Enter tab index" />
          <button type="submit" className="btn">
            Change tab
          </button>
        </form>
        <div className="middle">
          {/* Use handleTabClick to set the 'contName' state */}
          <span
            onClick={() => handleTabClick("Positive")}
            className={`spn ${contName === "Positive" ? "font-semibold" : ""}`}
          >
            POSITIVE
          </span>
          <span
            onClick={() => handleTabClick("Negative")}
            className={`spn ${contName === "Negative" ? "font-semibold" : ""}`}
          >
            NEGATIVE
          </span>
          <span
            onClick={() => handleTabClick("Neutral")}
            className={`spn ${contName === "Neutral" ? "font-semibold" : ""}`}
          >
            NEUTRAL
          </span>
        </div>
        <p>{contName} content</p>
      </div>
    </div>
  );
};

export default TabIndex;
