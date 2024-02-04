import React from "react";

const ThemeButton = ({ theme, setTheme }) => {
    return (
        <button
        onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
        }}
        >
        {theme === "dark" ? "Light" : "Dark"} Mode
        </button>
    );
    }
