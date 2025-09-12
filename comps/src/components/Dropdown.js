import { useEffect, useRef, useState } from "react";
import { GoChevronDown, GoChevronUp, GoCheck } from "react-icons/go";
import Panel from "./Panel";

function Dropdown( { options, onChange, value } ) {

    const [isOpen, setIsOpen] = useState(false);
    const divEl = useRef();

    useEffect( () => {
        const handler = (event) => {
            if(!divEl.current) return;
            if (!divEl.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("click", handler, true);
        return () => {
            document.removeEventListener("click", handler);
        };
    }, []);

    const handleToggle = () => {
        setIsOpen(
            (currentIsOpen) => !currentIsOpen
        );
    };

    const handleOptionClick = (option) => {
        setIsOpen(false);
        onChange(option);
    };

    const renderedOptions = options.map(option => {
        return (
            <div
                className="flex justify-between items-center hover:bg-sky-100 rounded cursor-pointer p-1"
                key={option.value}
                onClick={() => handleOptionClick(option)}
            >
                {option.label}
                {value?.value === option.value ? <GoCheck className="text-lg text-green-500" /> : ""}
            </div>
        );
    });

  return (
    <div ref={divEl} className="w-48 relative">
        <Panel className="flex justify-between items-center cursor-pointer" onClick={handleToggle}>
            {value?.label || "Select..."}
            <span className="text-lg">
                {isOpen ? <GoChevronUp /> : <GoChevronDown />}
            </span>
        </Panel>
        {isOpen && <Panel className="absolute top-full z-10 ">{renderedOptions}</Panel>}
    </div>
  );
}

export default Dropdown;
