import { useEffect, useState } from "react";

function useSort({ data, config }) {
    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);

    const setSortColumn = (column) => {
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
    }

    let sortedData = data;
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
    }

    return { sortOrder, sortBy, sortedData, setSortColumn };
}

export default useSort;
