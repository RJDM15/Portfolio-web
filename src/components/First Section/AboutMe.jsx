import { aboutData } from "../../Data/First_section/aboutData";
import { motion } from "framer-motion";

export const AboutMe = ({ language }) => {
    const data = aboutData.translations[language];

    return (
        <div className="grid grid-cols-2 gap-20">
            <div className="min-h-96 max-h-96 overflow-hidden flex flex-col gap-10">
                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-6xl font-bold pr-20">
                    {data.sectionTitle}
                </motion.h1>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="border-l-neutral border-l-2 pl-2">
                    {data.description}
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="flex gap-2">
                    <button className="bg-primary text-tertiary rounded-2xl py-1 px-10 cursor-pointer">{data.buttons.viewProjects}</button>
                    <button className="border-neutral-light border-2 text-neutral-light rounded-2xl py-1 px-2 cursor-pointer">{data.buttons.contactMe}</button>
                </motion.div>
            </div>

            <div className="flex justify-center items-start">
                <div className="bg-gray-600 rounded-2xl min-w-72 min-h-80"></div>
            </div>
        </div>
    );
};
