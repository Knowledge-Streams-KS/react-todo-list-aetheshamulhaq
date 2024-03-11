import counter from "./Components/counter.jsx";
import Task from "./Components/task.jsx";
import check from "./Components/check.jsx";

const App = () => {
  const itemsArr = ["Jeans", "Shirts", "Caps", "Jackets"];

  return (
    <div>
      {itemsArr.map((clothingItem, index) => {
        return <Counter key={index} itemName={clothingItem} />;
      })}
      {/* <check />
      <Task /> */}
    </div>
  );
};

export default App;
