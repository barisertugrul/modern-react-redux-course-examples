import Button from "../components/Button";
import useCounter from "../hooks/use-counter";

function CounterPage({ initialCount }) {
    /* const [count, setCount] = useState(initialCount);
    useEffect(() => {
      console.log(count)
    }, [count])

    const handleClick = () => {
        setCount(count + 1);
    } */

    const {count, increment} = useCounter(initialCount);

    return (
        <div>
            <h1>Counter: {count}</h1>
            <Button onClick={increment}>Increment</Button>
        </div>
    );
}

export default CounterPage;