import { useState, useEffect } from "react";
import { HomeData } from "../../Data/Home/home";
import { Topbar } from "./Topbar";
import { AboutMe } from "../First Section/AboutMe";
import { Experience } from "../Second Section/Experience";
import { Tools } from "../Third Section/Tools";
import { ContactMe } from "../Fourth Section/ContactMe";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export const Home = ({ language }) => {
    const data = HomeData.translations[language];
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="bg-tertiary min-h-screen relative">
            <main className="flex flex-col mt-20 gap-y-30 px-section 2xl:px-50">
                <section id="about" className="scroll-mt-28">
                    <AboutMe language={language} />
                </section>

                <section id="experience" className="scroll-mt-28">
                    <Experience language={language} />
                </section>

                <section id="tools" className="scroll-mt-28">
                    <Tools language={language} />
                </section>

                <section id="contact" className="scroll-mt-28">
                    <ContactMe language={language} />
                </section>
            </main>


            <AnimatePresence>
                {showScrollTop && (
                    <motion.button initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} transition={{ duration: 0.2 }} onClick={scrollToTop} aria-label="Scroll to top" className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-secondary border border-neutral/40 text-primary flex items-center justify-center rounded-xl shadow-2xl cursor-pointer hover:bg-primary hover:text-tertiary transition-all duration-300 group">
                        <ArrowUp size={22} className="transition-transform group-hover:-translate-y-1" />
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
};
