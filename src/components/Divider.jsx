// import { useTheme } from "./ThemeProvider";

function Divider() {
  const isDarkTheme = document.body.dataset.theme === "night";

  return (
    <hr
      className={`my-10 opacity-40 ${
        isDarkTheme
          ? "bg-gradient-to-t divider from-cyan-500 to-indigo-900"
          : "bg-gradient-to-t divider from-teal-700 to-stone-700"
      } h-1`}
    />
  );
}

export default Divider;
