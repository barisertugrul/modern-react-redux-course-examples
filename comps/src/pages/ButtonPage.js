import Button from "../components/Button";
import { GoBell, GoAlert, GoCheck } from "react-icons/go";

function ButtonPage() {

  const handleClick = () => {

  }

  return (
      <div>
        App Component
        <div>
          <Button onClick={handleClick} success rounded outline className="mb-5">
            <GoCheck />
            Button 1
          </Button>
        </div>
        <div>
          <Button danger outline>
            <GoAlert />
            Button 2
          </Button>
        </div>
        <div>
          <Button warning>
            <GoBell />
            Button 3
          </Button>
        </div>
        <div>
          <Button secondary>Button 4</Button>
        </div>
        <div>
          <Button info rounded>Button 5</Button>
        </div>
        <div>
          <Button primary>Button 6</Button>
        </div>
      </div>
  );
}

export default ButtonPage;
