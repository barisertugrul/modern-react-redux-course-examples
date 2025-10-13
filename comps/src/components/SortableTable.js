// import { useState } from "react";
import Table from "./Table";
import { GoArrowSmallDown, GoArrowSmallUp } from "react-icons/go";
import useSort from "../hooks/use-sort";

function SortableTable(props) {
    /* const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null); */

    const { config, data } = props;

    const { sortOrder, sortBy, sortedData, setSortColumn } = useSort({ data, config });


   /*  const handleSort = (column) => {
        if (sortBy && column.label !== sortBy) {
            setSortOrder('asc');
            setSortBy(column.label);
            return;
        }

        if (sortOrder === null) {
            setSortOrder('asc');
            setSortBy(column.label);
        } else if (sortOrder === 'asc') {
            setSortOrder('desc');
            setSortBy(column.label);
        } else {
            setSortOrder(null);
            setSortBy(null);
        }
    } */

    const newConfig = config.map((column) => {
        if (column.sortValue) {
            return {
                ...column,
                header: () => (
                    <th className="px-4 py-2 text-left cursor-pointer hover:bg-gray-100" onClick={() => setSortColumn(column)}>
                        <div className="flex items-center">
                            {getIcons(column.label, sortBy, sortOrder)}
                            {column.label}
                        </div>
                    </th>
                )
            };
        }
        return column;
    });

    /* let sortedData = data;
    if (sortOrder && sortBy) {
        const { sortValue } = config.find(column => column.label === sortBy);
        sortedData = [...data].sort((a, b) => {
            const aValue = sortValue(a);
            const bValue = sortValue(b);
            const order = sortOrder === 'asc' ? 1 : -1;
            if (typeof aValue === 'string') {
                return aValue.localeCompare(bValue) * order;
            }
            return (aValue - bValue) * order;
        });
    } */

    return (
        <Table {...props} config={newConfig} data={sortedData} />
    );
}

function getIcons(label, sortBy, sortOrder) {
    if (label !== sortBy) {
        return <div>
            <GoArrowSmallUp />
            <GoArrowSmallDown />
        </div>;
    }

    if (sortOrder === null) {
        return <div>
            <GoArrowSmallUp />
            <GoArrowSmallDown />
        </div>;
    }

    return <div>{sortOrder === 'asc' ? <GoArrowSmallUp /> : <GoArrowSmallDown />}</div>;
}

export default SortableTable;