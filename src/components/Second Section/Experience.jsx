import { experienceData } from "../../Data/Second Section/experienceData";
import { motion } from "framer-motion";

export const Experience = ({ language }) => {
    const data = experienceData.translations[language] || experienceData.translations.es;
    const projects = data?.projects || [];

    return (
        <div className="flex flex-col gap-y-1">
            <div className="flex w-full justify-between">
                <h2 className="text-4xl font-bold text-neutral-light">{data?.title}</h2>
                <p className="font-light flex items-end pr-2">2024-2026</p>
            </div>
            <div className="border-b border-neutral w-full" />
            <div className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-6 md:gap-8 mt-10">
                {
                    projects.map((project, index) => {
                        return (
                            <motion.a href={project.url || "#"} key={project.id ?? project.projectName} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.15 }} whileHover={{ y: -8, scale: 1.015 }} className="bg-secondary rounded-2xl p-5 flex flex-col gap-y-4 border border-neutral/20 hover:border-primary/40 transition-colors duration-300 cursor-pointer shadow-lg hover:shadow-2xl group w-full">
                                <div className="relative w-full min-h-48 max-h-48 rounded-2xl bg-neutral/50 overflow-hidden">
                                    {project.image ? (
                                        <img src={project.image} alt={project.projectName} className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105" />
                                    ) : (
                                        <div className="w-full h-full bg-neutral/40 rounded-2xl" />
                                    )}

                                    {project.company && (
                                        <span className="absolute top-3 right-3 bg-tertiary/80 backdrop-blur-md text-xs font-semibold px-3 py-1 rounded-full text-neutral-light border border-neutral/30 shadow-md">
                                            {project.company}
                                        </span>
                                    )}
                                </div>

                                <h3 className="text-xl font-bold text-neutral-light pl-1 group-hover:text-primary transition-colors">
                                    {project.projectName}
                                </h3>

                                <p className="text-sm text-neutral-light/80 line-clamp-3 leading-relaxed pl-1">
                                    {project.description}
                                </p>

                                {project.tags && project.tags.length > 0 && (
                                    <div className="flex flex-wrap gap-2 mt-auto pt-2">
                                        {project.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="text-[11px] font-semibold tracking-wider uppercase px-3.5 py-1 rounded-full border border-neutral/40 text-neutral-light/80 bg-tertiary/40 group-hover:border-primary/50 group-hover:text-primary transition-colors"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </motion.a>
                        )
                    })
                }
            </div>
        </div>
    )
}
