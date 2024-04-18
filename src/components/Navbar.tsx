import { TbBrandCypress } from "react-icons/tb";

const Navbar = () => {
  return (
    <nav className="bg-black fixed w-full px-8 py-4 border-b-2 border-green-700">
      <div
        className="flex items-center gap-1 w-fit cursor-pointer"
        onClick={() => (window.location.href = "/")}
        data-cy="nav-home"
      >
        <TbBrandCypress className="text-3xl text-green-700" />
        <h1 className="text-md font-bold text-white">Workshop</h1>
      </div>
    </nav>
  );
};

export default Navbar;
