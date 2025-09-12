import { useState } from "react";
import Dropdown from "./components/Dropdown";

function App() {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { label: "Option 1", value: 1 },
    { label: "Option 2", value: 2 },
    { label: "Option 3", value: 3 },
  ];

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Dropdown
        options={options}
        onChange={handleSelect}
        value={selectedOption}
      />
      <Dropdown
        options={options}
        onChange={handleSelect}
        value={selectedOption}
      />
    </div>
  );
}

export default App;
