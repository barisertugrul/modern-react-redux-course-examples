// import { useContext } from "react";
// import NavigationContext from "../context/navigation.js";
import useNavigation from "../hooks/use-navigation.js";

function Route({ path, children }) {
    // Using custom hook instead of direct context access
    // const { currentPath } = useContext(NavigationContext);
    const { currentPath } = useNavigation();

    return currentPath === path ? children : null;
}

export default Route;