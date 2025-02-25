import ThemeButton from "./ThemeButton";

const Header = () => {
  return (
    <div className="flex px-4 pt-4 bg-white dark:bg-gray-900 text-black dark:text-white justify-between">
      <span className="font-bold text-2xl">Ham's Project</span>
      <ThemeButton />
    </div>
  );
};

export default Header;
