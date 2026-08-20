import { useState } from "react";
import { TopbarData } from "../../Data/Home/topBar";
import { Logs, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

export const Topbar = ({ language, pathname }) => {
    const data = TopbarData.translations[language];
    const [activeTab, setActiveTab] = useState("first");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const getLangUrl = (targetLang) => {
        const current = pathname || (typeof window !== "undefined" ? window.location.pathname : `/${language}`);
        if (current.startsWith("/es")) {
            return current.replace(/^\/es/, `/${targetLang}`);
        }
        if (current.startsWith("/en")) {
            return current.replace(/^\/en/, `/${targetLang}`);
        }
        return `/${targetLang}`;
    };

    const esUrl = getLangUrl("es");
    const enUrl = getLangUrl("en");

    const navItems = [
        { label: data.firstElement, key: "first" },
        { label: data.secondElement, key: "second" },
        { label: data.thirdElement, key: "third" },
    ];

    const sectionMap = {
        first: "experience",
        second: "tools",
        third: "contact"
    };

    const handleNavClick = (key) => {
        setActiveTab(key);
        const targetId = sectionMap[key];
        if (targetId) {
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            } else {
                window.location.href = `/${language}#${targetId}`;
            }
        }
    };

    const handleHomeClick = () => {
        window.location.href = `/${language}`;
    };

    return (
        <>
            <nav className="sticky top-0 z-40 bg-secondary/80 backdrop-blur-md rounded-b-2xl w-full px-5 md:pr-10 py-5 md:py-2 h-header flex flex-row justify-center border-b border-primary/30">
                <div className="flex-2 md:flex-1">
                    <h2 onClick={handleHomeClick} className="text-neutral-light text-title font-extrabold cursor-pointer inline-block">{data.title}</h2>
                </div>

                <div className="flex-1 md:flex-1 flex flex-row justify-end items-center gap-6">
                    <motion.button initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: 0.2 }} onClick={() => setIsMobileMenuOpen(true)} className="md:hidden text-neutral-light mt-1.5 focus:outline-none cursor-pointer">
                        <Logs size={32} />
                    </motion.button>

                    {navItems.map((item, index) => {
                        const isActive = activeTab === item.key;
                        return (
                            <motion.button key={item.key} onClick={() => handleNavClick(item.key)} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.15 + index * 0.1 }} className={`relative hidden md:flex items-center pb-1 font-semibold transition-colors cursor-pointer ${isActive ? "text-neutral-light font-bold" : "text-neutral-light/70 hover:text-primary"}`} >
                                <span>{item.label}</span>
                                {isActive && (
                                    <motion.div layoutId="activeUnderline" className="absolute bottom-0 left-0 right-0 h-0.75 bg-primary rounded-full shadow-[0_0_8px_var(--color-primary)]" transition={{ type: "spring", stiffness: 400, damping: 30 }} />
                                )}
                            </motion.button>
                        );
                    })}

                    <div className="hidden md:flex items-center gap-3">
                        <ThemeToggle />

                        <div className="border border-neutral/40 rounded-2xl p-1 flex flex-row items-center text-neutral-light text-sm font-semibold">
                            <a href={esUrl} className={`relative px-3 py-1 rounded-xl transition-colors ${language === "es" ? "text-tertiary font-bold" : "text-neutral-light hover:text-primary"}`}>
                                {language === "es" && (
                                    <motion.div layoutId="activeLang" className="absolute inset-0 bg-primary rounded-xl -z-10" transition={{ type: "spring", stiffness: 400, damping: 30 }} />
                                )}
                                MX
                            </a>
                            <span className="text-neutral/40 mx-0.5">|</span>
                            <a href={enUrl} className={`relative px-3 py-1 rounded-xl transition-colors ${language === "en" ? "text-tertiary font-bold" : "text-neutral-light hover:text-primary"}`}>
                                {language === "en" && (
                                    <motion.div layoutId="activeLang" className="absolute inset-0 bg-primary rounded-xl -z-10" transition={{ type: "spring", stiffness: 400, damping: 30 }} />
                                )}
                                US
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 28, stiffness: 220 }} className="fixed inset-0 z-50 bg-tertiary/95 backdrop-blur-2xl flex flex-col justify-between p-8 md:hidden text-neutral-light">
                        <div className="flex flex-row justify-between items-center w-full border-b border-primary/20 pb-4">
                            <h2 onClick={handleHomeClick} className="text-xl font-extrabold cursor-pointer">{data.title}</h2>
                            <button onClick={() => setIsMobileMenuOpen(false)} className="text-neutral-light hover:text-primary transition-colors cursor-pointer p-1">
                                <X size={32} />
                            </button>
                        </div>

                        <div className="flex flex-col items-center justify-center gap-8 my-auto">
                            {navItems.map((item, index) => {
                                const isActive = activeTab === item.key;
                                return (
                                    <motion.button key={item.key} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + index * 0.1 }} onClick={() => {
                                        handleNavClick(item.key);
                                        setIsMobileMenuOpen(false);
                                    }}
                                        className={`text-2xl font-bold transition-colors relative pb-2 ${isActive ? "text-primary font-extrabold" : "text-neutral-light hover:text-primary"}`}>
                                        <span>{item.label}</span>
                                        {isActive && (
                                            <motion.div layoutId="activeUnderlineMobile" className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-full shadow-[0_0_10px_var(--color-primary)]" />
                                        )}
                                    </motion.button>
                                );
                            })}
                        </div>

                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="flex flex-col items-center gap-6 pt-6 border-t border-primary/20">
                            <div className="flex items-center gap-4">
                                <span className="text-sm font-semibold text-neutral">Tema:</span>
                                <ThemeToggle />
                            </div>

                            <div className="flex items-center gap-4">
                                <span className="text-sm font-semibold text-neutral">Idioma:</span>
                                <div className="border border-neutral/40 rounded-2xl p-1 flex flex-row items-center text-sm font-semibold">
                                    <a href={esUrl} className={`relative px-3 py-1 rounded-xl transition-colors ${language === "es" ? "text-tertiary font-bold" : "text-neutral-light hover:text-primary"}`}>
                                        {language === "es" && (
                                            <motion.div layoutId="activeLangMobile" className="absolute inset-0 bg-primary rounded-xl -z-10" />
                                        )}
                                        MX
                                    </a>
                                    <span className="text-neutral/40 mx-0.5">|</span>
                                    <a href={enUrl} className={`relative px-3 py-1 rounded-xl transition-colors ${language === "en" ? "text-tertiary font-bold" : "text-neutral-light hover:text-primary"}`}>
                                        {language === "en" && (
                                            <motion.div layoutId="activeLangMobile" className="absolute inset-0 bg-primary rounded-xl -z-10" />
                                        )}
                                        US
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
