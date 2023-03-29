import { useState, useEffect } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import "daisyui";

function ThemeSwitcher() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      setIsDarkMode(theme === "night");
      document.documentElement.setAttribute("data-theme", theme);
    }
  }, []);

  const handleChange = () => {
    const newTheme = isDarkMode ? "garden" : "night";
    setIsDarkMode(!isDarkMode);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="flex items-center">
      <div className="text-amber-400 font-medium text-2xl">
        <BsFillSunFill className="Sun" />
      </div>
      <label className="flex items-center cursor-pointer mx-3">
        <div className="relative">
          <input
            type="checkbox"
            className="sr-only"
            checked={isDarkMode}
            onChange={handleChange}
          />
          <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
          <div
            className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${
              isDarkMode ? "transform translate-x-full" : ""
            }`}
          ></div>
        </div>
      </label>
      <div className=" text-zinc-500 font-medium text-2xl">
        <BsFillMoonStarsFill className="moon" />
      </div>
    </div>
  );
}

export default ThemeSwitcher;
