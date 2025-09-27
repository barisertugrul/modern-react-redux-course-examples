import Table from "../components/Table";
import TableV1 from "../components/TableV1";

function TablePage() {
    const dataV1 = {
        columns: [
            { id: "name", label: "Fruits" },
            { id: "color", label: "Color", type: "color" },
            { id: "score", label: "Score" },
        ],
        rows: [
            { id: 1, name: "Orange", color: 'bg-orange-500', score: 5 },
            { id: 2, name: "Banana", color: 'bg-yellow-500', score: 3 },
            { id: 3, name: "Apple", color: 'bg-red-500', score: 4 },
            { id: 4, name: "Lime", color: 'bg-green-500', score: 1 },
            { id: 5, name: "Grapes", color: 'bg-purple-500', score: 2 },
        ],
    };

    const data = [
        { name: "Orange", color: 'bg-orange-500', score: 5 },
        { name: "Banana", color: 'bg-yellow-500', score: 3 },
        { name: "Apple", color: 'bg-red-500', score: 4 },
        { name: "Lime", color: 'bg-green-500', score: 1 },
        { name: "Grapes", color: 'bg-purple-500', score: 2 },
    ];

    const config = [
        {
            label: "Fruits",
            render: (fruit) => <i>{fruit.name}</i>
        },
        {
            label: "Color",
            render: (fruit) => <div className={`w-6 h-6 ${fruit.color}`}></div>
        },
        {
            label: "Score",
            render: (fruit) => <span>{fruit.score}</span>
        },
    ];

    const keyFn = (fruit) => {
        return fruit.name;
    }

    return (
        <div>
            <h1>Table Page</h1>
            <div className="mb-10">
                <Table data={data} config={config} keyFn={keyFn} />
            </div>
            <div className="mb-8">
                <TableV1 data={dataV1} />
            </div>
        </div>
    );
}

export default TablePage;
