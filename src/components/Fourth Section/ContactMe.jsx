import { motion } from "framer-motion";
import { contactData } from "../../Data/Fourth Section/contactData";

export const ContactMe = ({ language }) => {
    const data = contactData.translations[language] || contactData.translations.es;

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start py-6">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex flex-col gap-12 md:gap-16 justify-start">
                <div>
                    <h1 className="text-6xl md:text-7xl font-extrabold text-neutral-light leading-none">
                        {data.title.includes(" ") ? (
                            <>
                                {data.title.split(" ")[0]}
                                <br />
                                {data.title.split(" ").slice(1).join(" ")}
                            </>
                        ) : (
                            data.title
                        )}
                    </h1>
                </div>

                <div className="flex flex-col gap-8">
                    <div>
                        <span className="text-xs font-extrabold tracking-widest text-neutral uppercase block mb-1">
                            {data.emailLabel}
                        </span>
                        <a href={`mailto:${data.emailValue}`} className="text-lg md:text-xl font-bold text-neutral-light hover:text-primary transition-colors">
                            {data.emailValue}
                        </a>
                    </div>

                    <div>
                        <span className="text-xs font-extrabold tracking-widest text-neutral uppercase block mb-1">
                            {data.locationLabel}
                        </span>
                        <p className="text-lg md:text-xl font-bold text-neutral-light">
                            {data.locationValue}
                        </p>
                    </div>
                </div>
            </motion.div>

            <motion.form initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} onSubmit={handleSubmit} className="rounded-2xl p-6 md:p-8 border border-neutral/20 shadow-2xl flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold tracking-wider text-neutral-light uppercase">
                            {data.form.nameLabel}
                        </label>
                        <input type="text" placeholder={data.form.namePlaceholder} className="w-full bg-white text-gray-900 placeholder:text-gray-400 rounded-lg px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary shadow-sm" />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold tracking-wider text-neutral-light uppercase">
                            {data.form.emailLabel}
                        </label>
                        <input type="email" placeholder={data.form.emailPlaceholder} className="w-full bg-white text-gray-900 placeholder:text-gray-400 rounded-lg px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary shadow-sm" />
                    </div>
                </div>

                <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold tracking-wider text-neutral-light uppercase">
                        {data.form.subjectLabel}
                    </label>
                    <input type="text" placeholder={data.form.subjectPlaceholder} className="w-full bg-white text-gray-900 placeholder:text-gray-400 rounded-lg px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary shadow-sm" />
                </div>

                <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold tracking-wider text-neutral-light uppercase">
                        {data.form.messageLabel}
                    </label>
                    <textarea rows={4} placeholder={data.form.messagePlaceholder} className="w-full bg-white text-gray-900 placeholder:text-gray-400 rounded-lg px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary shadow-sm resize-none" />
                </div>

                <button type="button" className="w-full bg-primary text-tertiary font-bold py-3.5 px-6 rounded-full uppercase tracking-wider text-sm hover:brightness-105 active:scale-[0.99] transition-all duration-200 cursor-pointer shadow-md mt-3">
                    {data.form.submitButton}
                </button>
            </motion.form>
        </div>
    );
};
