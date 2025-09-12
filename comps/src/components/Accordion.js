import { useState } from "react"
import { GoChevronDown, GoChevronLeft } from "react-icons/go"

function Accordion({ items }) {

    const [expandedIndex, setExpandedIndex] = useState(-1)

    // Pass the event to the click handler
    /* const handleClick = (event) => {
        console.log(event)
        setExpandedIndex(Number(event.currentTarget.dataset.index))
    } */

    // Pass the index to the click handler
    const handleClick = (nextIndex) => {

        // Standard toggle behavior
        /* if (nextIndex === expandedIndex) {
            setExpandedIndex(-1)
        } else {
            setExpandedIndex(nextIndex)
        } */

        // Condensed toggle behavior
        setExpandedIndex(currentExpandedIndex => currentExpandedIndex === nextIndex ? -1 : nextIndex)
    }

    const renderedItems = items.map((item, index) => {

        const isExpanded = index === expandedIndex

        const icon = <span className="text-2xl">
            {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
        </span>

        return (
            <div key={item.id}>

                {
                    // Pass the event and data-index to the click handler
                    // <div data-index={index} onClick={handleClick} >{item.label}</div>
                }
                { /* Pass the index to the click handler */ }
                <div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer" onClick={() => handleClick(index)} >
                    {item.label}{icon}
                </div>
                {isExpanded && <div className="border-b p-5">{item.content}</div>}
            </div>
        )
    })

  return (
    <div className="border-x border-t rounded m-5">
        {renderedItems}
    </div>
  )
}

export default Accordion