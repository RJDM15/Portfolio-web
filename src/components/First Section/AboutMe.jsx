import { aboutData } from "../../Data/First_section/aboutData";
import { motion } from "framer-motion";

export const AboutMe = ({ language }) => {
    const data = aboutData.translations[language];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 2xl:gap-24 items-start">
            <div className="min-h-96 2xl:min-h-0 flex flex-col gap-10 2xl:gap-12">
                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-6xl 2xl:text-7xl font-bold pr-5 2xl:pr-10 leading-tight">
                    {data.sectionTitle}
                </motion.h1>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="border-l-neutral border-l-2 pl-3 2xl:pl-5 2xl:text-xl 2xl:leading-relaxed text-neutral-light/90">
                    {data.description}
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="flex gap-3 2xl:gap-5 2xl:pt-2">
                    <button className="bg-primary text-tertiary font-bold rounded-2xl py-2 px-10 2xl:py-3.5 2xl:px-12 2xl:text-lg cursor-pointer transition-transform hover:scale-[1.02]">{data.buttons.viewProjects}</button>
                    <button className="border-neutral-light border-2 text-neutral-light font-bold rounded-2xl py-2 px-4 2xl:py-3.5 2xl:px-8 2xl:text-lg cursor-pointer transition-transform hover:scale-[1.02]">{data.buttons.contactMe}</button>
                </motion.div>
            </div>

            <div className="flex justify-center 2xl:justify-end items-start w-full">
                <div className="bg-gray-600 rounded-3xl min-w-72 min-h-80 w-full max-w-md 2xl:max-w-lg h-80 2xl:h-120"></div>
            </div>
        </div>
    );
};
