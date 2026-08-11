import { motion } from "framer-motion";
import { toolsData } from "../../Data/Third Section/toolsData";
import { Layout, Server, Database, Wrench } from "lucide-react";

const iconMap = {
    Layout: Layout,
    Server: Server,
    Database: Database,
    Wrench: Wrench,
};

export const Tools = ({ language }) => {
    const data = toolsData.translations[language] || toolsData.translations.es;
    const categories = data?.categories || [];

    return (
        <div className="flex flex-col gap-y-1">
            <div className="flex w-full justify-between items-center">
                <h2 className="text-4xl font-bold text-neutral-light">{data?.title}</h2>
            </div>
            <div className="border-b border-neutral w-full mb-8" />

            <div className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-6">
                {categories.map((category, index) => {
                    const IconComponent = iconMap[category.icon] || Layout;
                    return (
                        <motion.div key={category.key} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} whileHover={{ y: -6, scale: 1.01 }} className="bg-secondary rounded-2xl p-6 border border-neutral/20 hover:border-primary/40 transition-colors duration-300 shadow-lg hover:shadow-2xl flex flex-col">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2.5 rounded-xl bg-tertiary border border-neutral/30 text-primary">
                                    <IconComponent size={22} className="text-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-neutral-light">
                                    {category.name}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-2.5">
                                {category.skills.map((skill, skillIdx) => (
                                    <span
                                        key={skillIdx}
                                        className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-tertiary/70 border border-neutral/30 text-neutral-light/90 hover:border-primary/50 hover:text-primary transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};
