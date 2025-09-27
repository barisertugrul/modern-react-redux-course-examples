function Table({ data, config, keyFn }) {
    const renderedHeaders = config.map((column) => {
        return <th key={column.label} className="px-4 py-2 text-left">
            {column.label}
        </th>
    });

    const renderedRows = data.map((rowData) => {
        const renderedCells = config.map((column) => {
            return <td key={column.label} className="px-4 py-2">
                {column.render(rowData)}
            </td>
        });

        return (
            <tr key={keyFn(rowData)} className="border-b">
                {renderedCells}
            </tr>
        );
    });

    return (
        <table className="table-auto border-spacing-2">
            <thead>
                <tr className="border-b-2">
                    {renderedHeaders}
                </tr>
            </thead>
            <tbody>
                {renderedRows}
            </tbody>
        </table>
    );
}

export default Table;
