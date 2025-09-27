function Table({ data }) {
    const renderedRows = data.rows.map((row) => {
        const renderedCells = data.columns.map((column) => {
            return (
                column.type === "color" ? (
                    <td key={column.id} className="px-4 py-4 whitespace-nowrap">
                        <div className={`w-6 h-6 ${row.color} border`}></div>
                    </td>
                ) : (
                    <td key={column.id} className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                        {row[column.id]}
                    </td>
                )
            );
        });
        return (
            <tr key={row.id}>
                {renderedCells}
            </tr>
        );
    });

    return (
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
                <tr>
                    {data.columns.map((column) => (
                        <th key={column.id} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {column.label}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {renderedRows}
            </tbody>
        </table>
    );
}

export default Table;
