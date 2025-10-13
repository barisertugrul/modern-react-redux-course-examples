import Link from "./Link";

function Sidebar() {

    const links = [
        { path: "/", label: "Dropdown" },
        { path: "/accordion", label: "Accordion" },
        { path: "/buttons", label: "Buttons" },
        { path: "/modal", label: "Modal" },
        { path: "/table", label: "Table" },
        { path: "/counter", label: "Counter" }
    ];

    const renderedLinks = links.map(link => (
        <Link
            className="block p-2 rounded hover:bg-gray-300"
            activeClassName="bg-gray-300 font-bold border-l-4 border-blue-500 pl-2"
            key={link.path}
            to={link.path}>
            {link.label}
        </Link>
    ));

  return (
    <div className="sticky top-0 overflow-y-scroll flex flex-col bg-gray-200 h-screen items-start">
      {renderedLinks}
    </div>
  );
}

export default Sidebar;
