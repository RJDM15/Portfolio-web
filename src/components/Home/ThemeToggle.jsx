import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            const isDarkSaved = savedTheme === "dark";
            setIsDark(isDarkSaved);
            document.documentElement.classList.toggle("dark", isDarkSaved);
        } else {
            document.documentElement.classList.add("dark");
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = !isDark;
        setIsDark(newTheme);
        localStorage.setItem("theme", newTheme ? "dark" : "light");
        document.documentElement.classList.toggle("dark", newTheme);
    };

    return (
        <button onClick={toggleTheme} aria-label="Toggle theme" className={`w-14 h-8 rounded-full p-1 flex items-center cursor-pointer transition-colors duration-300 relative border ${isDark ? "bg-secondary border-neutral/40 justify-end" : "bg-neutral-light/80 border-neutral/30 justify-start"}`}>
            <motion.div layout transition={{ type: "spring", stiffness: 500, damping: 30 }} className={`w-6 h-6 rounded-full flex items-center justify-center shadow-md ${isDark ? "bg-primary text-tertiary" : "bg-secondary text-primary"}`}>
                <motion.div key={isDark ? "dark" : "light"} initial={{ rotate: -90, scale: 0.5, opacity: 0 }} animate={{ rotate: 0, scale: 1, opacity: 1 }} exit={{ rotate: 90, scale: 0.5, opacity: 0 }} transition={{ duration: 0.2 }}>
                    {isDark ? <Moon size={14} className="fill-current" /> : <Sun size={14} className="fill-current" />}
                </motion.div>
            </motion.div>
        </button>
    );
};
