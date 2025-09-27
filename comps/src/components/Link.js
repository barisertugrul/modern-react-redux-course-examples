// import { useContext } from "react";
// import NavigationContext from "../context/navigation.js";
import classNames from "classnames";
import useNavigation from "../hooks/use-navigation";

function Link({ to, children, className, activeClassName }) {
    // Using custom hook instead of direct context access
    // const { navigate } = useContext(NavigationContext);
    const { navigate, currentPath } = useNavigation();

  const classes = classNames("text-blue-500", "hover:text-blue-700", "w-full", className,
    currentPath === to && activeClassName
  );

  const handleClick = (event) => {
    if (event.ctrlKey || event.metaKey) return;
    event.preventDefault();
    navigate(to);
  };

  return (
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link;