"use client";

import * as React from "react";

interface ThemeContextType {
  resolvedTheme: "dark" | "light";
}

const ThemeContext = React.createContext<ThemeContextType>({
  resolvedTheme: "dark",
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [resolvedTheme, setResolvedTheme] = React.useState<"dark" | "light">("dark");

  React.useEffect(() => {
    // Clear any past manual overrides so device/browser preference takes 100% control
    try {
      localStorage.removeItem("takjug-theme");
    } catch {}

    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const updateTheme = () => {
      const isDark = media.matches;
      const theme = isDark ? "dark" : "light";
      setResolvedTheme(theme);

      const root = document.documentElement;
      if (isDark) {
        root.classList.add("dark");
        root.classList.remove("light");
        root.style.colorScheme = "dark";
      } else {
        root.classList.remove("dark");
        root.classList.add("light");
        root.style.colorScheme = "light";
      }
    };

    updateTheme();

    media.addEventListener("change", updateTheme);
    return () => media.removeEventListener("change", updateTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return React.useContext(ThemeContext);
}
