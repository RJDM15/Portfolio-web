import { useState, useEffect } from "react";
import firstProjectData from "../../Data/First_project/firstPData"
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ExternalLink, Globe, Layers, UserCheck, LayoutDashboard, Zap, Bell, Cpu, Database, Server, ShieldCheck, CheckCircle2, ArrowUp, Eye } from "lucide-react";
import { ProjectGalleryModal } from "./ProjectGalleryModal";

export const FirstProject = ({ language }) => {
    const data = firstProjectData.translations[language] || firstProjectData.translations.es;
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [galleryModal, setGalleryModal] = useState({
        isOpen: false,
        items: [],
        initialIndex: 0,
        title: ""
    });

    const openGallery = (items = [], index = 0, title = "") => {
        setGalleryModal({
            isOpen: true,
            items,
            initialIndex: index,
            title
        });
    };

    const closeGallery = () => {
        setGalleryModal((prev) => ({ ...prev, isOpen: false }));
    };

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

    const handleBack = () => {
        const home = document.getElementById("contact");
        if (home) {
            home.scrollIntoView({ behavior: "smooth" });
        } else {
            window.location.href = `/${language}#experience`;
        }
    };

    return (
        <div className="min-h-screen">
            <main className="flex flex-col mt-10 gap-y-10 px-section 2xl:px-50">
                <section>
                    <button onClick={handleBack} className="flex items-center gap-2 border-neutral-light border-2 text-neutral-light font-bold rounded-2xl py-2 px-4 2xl:py-3.5 2xl:px-8 2xl:text-lg cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:border-primary hover:text-primary group" >
                        <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                        <span>{data.firstElement}</span>
                    </button>
                </section>
                <section className="relative w-full">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex flex-col gap-y-6">
                        <div className="flex flex-col gap-y-3">
                            <h1 className="text-3xl md:text-5xl font-extrabold text-neutral-light tracking-tight">
                                {data.title}
                            </h1>
                            <p className="text-base md:text-xl text-neutral-light/80 max-w-3xl leading-relaxed">
                                {data.description}
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-4 pt-2">
                            <a href={data.liveUrl || "https://utr.edu.mx"} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-tertiary font-bold px-6 py-3 rounded-2xl shadow-lg hover:brightness-110 transition-all cursor-pointer transform hover:-translate-y-0.5">
                                <span>{data.liveText || "Ver Sitio Oficial"}</span>
                                <ExternalLink className="w-5 h-5" />
                            </a>
                            <a href={data.githubUrl || "https://lightgreen-pigeon-736563.hostingersite.com/es/"} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-secondary border border-neutral/40 text-neutral-light font-bold px-6 py-3 rounded-2xl hover:border-primary/50 hover:text-primary transition-all cursor-pointer transform hover:-translate-y-0.5">
                                <span>{data.githubText || "Sitio Auxiliar (Beta)"}</span>
                                <ExternalLink className="w-5 h-5" />
                            </a>
                        </div>
                    </motion.div>
                </section>
                <section className="flex flex-col gap-y-4 my-4">
                    <div className="flex flex-col gap-y-1">
                        <h2 className="text-xl md:text-2xl font-bold text-neutral-light tracking-wide uppercase">
                            {data.visualsTitle || "GALERÍA VISUAL"}
                        </h2>
                        <div className="border-b border-neutral w-full" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                        <div
                            onClick={() => openGallery(data.webSiteGallery || [], 0, data.webSiteTitle || "Sitio Web")}
                            className="bg-secondary border border-neutral-light/30 rounded-2xl p-5 flex flex-col gap-3 shadow-md hover:border-primary/50 hover:shadow-xl transition-all duration-300 group cursor-pointer"
                        >
                            <div className="flex items-center gap-2 pb-2 border-b border-neutral-light/10">
                                <Globe className="text-primary" size={20} />
                                <h3 className="font-bold text-base md:text-lg text-neutral-light">{data.webSiteTitle || "Sitio Web"}</h3>
                            </div>
                            <div className="relative w-full h-56 md:h-64 rounded-xl bg-tertiary/60 border border-neutral-light/10 overflow-hidden flex flex-col items-center justify-center p-4 group-hover:bg-tertiary/80 transition-colors">
                                <div className="flex flex-col items-center gap-3 text-neutral-light/60 group-hover:text-primary transition-colors text-center px-4">
                                    <div className="w-14 h-14 rounded-2xl bg-secondary/80 border border-neutral-light/20 flex items-center justify-center text-primary shadow-md group-hover:scale-110 transition-transform">
                                        <Globe size={30} />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <span className="text-xs md:text-sm font-bold text-neutral-light group-hover:text-primary transition-colors">Explorar Galería - Sitio Web</span>
                                        <span className="text-[11px] text-neutral-light/60">Haz clic para abrir el visor interactivo</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            onClick={() => openGallery(data.adminSiteGallery || [], 0, data.adminSiteTitle || "Sitio de Administración de la Página")}
                            className="bg-secondary border border-neutral-light/30 rounded-2xl p-5 flex flex-col gap-3 shadow-md hover:border-primary/50 hover:shadow-xl transition-all duration-300 group cursor-pointer"
                        >
                            <div className="flex items-center gap-2 pb-2 border-b border-neutral-light/10">
                                <LayoutDashboard className="text-primary" size={20} />
                                <h3 className="font-bold text-base md:text-lg text-neutral-light">{data.adminSiteTitle || "Sitio de Administración de la Página"}</h3>
                            </div>
                            <div className="relative w-full h-56 md:h-64 rounded-xl bg-tertiary/60 border border-neutral-light/10 overflow-hidden flex flex-col items-center justify-center p-4 group-hover:bg-tertiary/80 transition-colors">
                                <div className="flex flex-col items-center gap-3 text-neutral-light/60 group-hover:text-primary transition-colors text-center px-4">
                                    <div className="w-14 h-14 rounded-2xl bg-secondary/80 border border-neutral-light/20 flex items-center justify-center text-primary shadow-md group-hover:scale-110 transition-transform">
                                        <LayoutDashboard size={30} />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <span className="text-xs md:text-sm font-bold text-neutral-light group-hover:text-primary transition-colors">Explorar Galería - Panel de Administración</span>
                                        <span className="text-[11px] text-neutral-light/60">Haz clic para abrir el visor interactivo</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="grid grid-cols-5 gap-x-2 items-start">
                    <div className="p-2 col-span-3 grid grid-cols-2 gap-2 gap-y-5">
                        <div className="col-span-2 bg-secondary border border-neutral-light/30 rounded-2xl p-6 flex flex-col gap-3 shadow-md">
                            <div className="flex flex-row gap-2 items-center">
                                <Globe className="text-primary" size={24} />
                                <h2 className="font-bold text-lg md:text-xl text-neutral-light">{data.summaryTitle}</h2>
                            </div>
                            <div className="text-sm md:text-base text-neutral-light/80 leading-relaxed">
                                <p>{data.summary}</p>
                            </div>
                        </div>

                        <div className="bg-secondary rounded-2xl border border-red-600/30 border-l-[6px] border-l-red-500 p-5 flex flex-col gap-2.5 shadow-md">
                            <h3 className="text-base md:text-lg font-bold text-neutral-light">
                                <span className="text-red-500">01.</span> {data.challengeTitle?.replace("01. ", "")}
                            </h3>
                            <p className="text-xs md:text-sm text-neutral-light/80 leading-relaxed">
                                {data.challengeDesc}
                            </p>
                        </div>

                        <div className="bg-secondary rounded-2xl border border-primary/30 border-l-[6px] border-l-primary p-5 flex flex-col gap-2.5 shadow-md">
                            <h3 className="text-base md:text-lg font-bold text-neutral-light">
                                <span className="text-primary">02.</span> {data.solutionTitle?.replace("02. ", "")}
                            </h3>
                            <p className="text-xs md:text-sm text-neutral-light/80 leading-relaxed">
                                {data.solutionDesc}
                            </p>
                        </div>

                        <div className="col-span-2 bg-secondary border border-neutral-light/30 rounded-2xl p-5 md:p-6 flex flex-col gap-4 shadow-md">
                            <div className="flex flex-row gap-2.5 items-center">
                                <Layers className="text-primary" size={22} />
                                <h2 className="font-bold text-base md:text-lg text-neutral-light tracking-tight">{data.featuresTitle}</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div className="bg-tertiary/40 border border-neutral-light/10 rounded-xl p-3.5 flex flex-col gap-1.5 hover:border-primary/20 transition-all">
                                    <UserCheck className="text-primary" size={20} />
                                    <h3 className="font-bold text-xs md:text-sm text-neutral-light">{data.features?.[0]?.title}</h3>
                                    <p className="text-xs text-neutral-light/70 leading-relaxed">{data.features?.[0]?.desc}</p>
                                </div>
                                <div className="bg-tertiary/40 border border-neutral-light/10 rounded-xl p-3.5 flex flex-col gap-1.5 hover:border-primary/20 transition-all">
                                    <LayoutDashboard className="text-primary" size={20} />
                                    <h3 className="font-bold text-xs md:text-sm text-neutral-light">{data.features?.[1]?.title}</h3>
                                    <p className="text-xs text-neutral-light/70 leading-relaxed">{data.features?.[1]?.desc}</p>
                                </div>
                                <div className="bg-tertiary/40 border border-neutral-light/10 rounded-xl p-3.5 flex flex-col gap-1.5 hover:border-primary/20 transition-all">
                                    <Zap className="text-primary" size={20} />
                                    <h3 className="font-bold text-xs md:text-sm text-neutral-light">{data.features?.[2]?.title}</h3>
                                    <p className="text-xs text-neutral-light/70 leading-relaxed">{data.features?.[2]?.desc}</p>
                                </div>
                                <div className="bg-tertiary/40 border border-neutral-light/10 rounded-xl p-3.5 flex flex-col gap-1.5 hover:border-primary/20 transition-all">
                                    <Bell className="text-primary" size={20} />
                                    <h3 className="font-bold text-xs md:text-sm text-neutral-light">{data.features?.[3]?.title}</h3>
                                    <p className="text-xs text-neutral-light/70 leading-relaxed">{data.features?.[3]?.desc}</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-2 bg-secondary border border-neutral-light/30 rounded-2xl p-5 flex flex-col gap-3.5 shadow-md">
                            <div className="flex flex-row gap-2 items-center">
                                <Cpu className="text-primary" size={22} />
                                <h2 className="font-bold text-base md:text-lg text-neutral-light tracking-tight">{data.archTitle}</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                <div className="bg-tertiary/40 border border-neutral-light/10 rounded-xl p-3.5 flex flex-col items-center justify-center text-center gap-1.5 hover:border-primary/20 transition-all">
                                    <Globe className="text-primary" size={24} />
                                    <h3 className="font-bold text-xs md:text-sm text-neutral-light">{data.archItems?.[0]?.title}</h3>
                                    <p className="text-[11px] text-neutral-light/70">{data.archItems?.[0]?.tech}</p>
                                </div>
                                <div className="bg-tertiary/40 border border-neutral-light/10 rounded-xl p-3.5 flex flex-col items-center justify-center text-center gap-1.5 hover:border-primary/20 transition-all">
                                    <Server className="text-primary" size={24} />
                                    <h3 className="font-bold text-xs md:text-sm text-neutral-light">{data.archItems?.[1]?.title}</h3>
                                    <p className="text-[11px] text-neutral-light/70">{data.archItems?.[1]?.tech}</p>
                                </div>
                                <div className="bg-tertiary/40 border border-neutral-light/10 rounded-xl p-3.5 flex flex-col items-center justify-center text-center gap-1.5 hover:border-primary/20 transition-all">
                                    <Database className="text-primary" size={24} />
                                    <h3 className="font-bold text-xs md:text-sm text-neutral-light">{data.archItems?.[2]?.title}</h3>
                                    <p className="text-[11px] text-neutral-light/70">{data.archItems?.[2]?.tech}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 col-span-2 flex flex-col gap-4">
                        <div className="bg-secondary border border-neutral-light/30 rounded-2xl p-4 md:p-5 flex flex-col gap-3 shadow-md">
                            <div className="flex flex-row justify-between items-center pb-2.5 border-b border-neutral-light/10">
                                <h2 className="font-bold text-sm md:text-base text-neutral-light">{data.specsTitle}</h2>
                                <ShieldCheck className="text-primary" size={20} />
                            </div>
                            <div className="flex flex-col gap-2.5">
                                <div className="flex flex-col gap-0.5">
                                    <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral/70">CLIENTE / INSTITUCIÓN</span>
                                    <span className="font-bold text-xs md:text-sm text-neutral-light">{data.company}</span>
                                </div>
                                <div className="flex flex-col gap-0.5">
                                    <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral/70">MI ROL</span>
                                    <span className="font-bold text-xs md:text-sm text-primary">{data.role}</span>
                                </div>
                                <div className="flex flex-col gap-0.5">
                                    <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral/70">PERIODO DE DESARROLLO</span>
                                    <span className="font-bold text-xs md:text-sm text-neutral-light">{data.period}</span>
                                </div>
                                <div className="flex flex-col gap-0.5">
                                    <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral/70">ESTADO DE DESPLIEGUE</span>
                                    <span className="font-bold text-xs md:text-sm text-emerald-400">{data.status}</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-secondary border border-neutral-light/30 rounded-2xl p-5 md:p-6 flex flex-col gap-4 shadow-md">
                            <h2 className="font-bold text-base md:text-lg text-neutral-light pb-1">{data.techTitle}</h2>
                            <div className="flex flex-col gap-3">
                                {data.techStack?.[0] && (
                                    <div className="bg-tertiary/40 border border-neutral-light/10 rounded-xl p-3 flex flex-col gap-1 hover:border-primary/20 transition-all">
                                        <div className="flex justify-between items-center">
                                            <span className="font-bold text-xs md:text-sm text-neutral-light">{data.techStack[0].name}</span>
                                            <span className="text-[9px] font-bold tracking-wider px-2 py-0.5 rounded-md border border-primary/40 bg-primary/10 text-primary uppercase">{data.techStack[0].category}</span>
                                        </div>
                                        <p className="text-[11px] md:text-xs text-neutral-light/70 leading-relaxed">{data.techStack[0].desc}</p>
                                    </div>
                                )}
                                {data.techStack?.[1] && (
                                    <div className="bg-tertiary/40 border border-neutral-light/10 rounded-xl p-3 flex flex-col gap-1 hover:border-primary/20 transition-all">
                                        <div className="flex justify-between items-center">
                                            <span className="font-bold text-xs md:text-sm text-neutral-light">{data.techStack[1].name}</span>
                                            <span className="text-[9px] font-bold tracking-wider px-2 py-0.5 rounded-md border border-primary/40 bg-primary/10 text-primary uppercase">{data.techStack[1].category}</span>
                                        </div>
                                        <p className="text-[11px] md:text-xs text-neutral-light/70 leading-relaxed">{data.techStack[1].desc}</p>
                                    </div>
                                )}
                                {data.techStack?.[2] && (
                                    <div className="bg-tertiary/40 border border-neutral-light/10 rounded-xl p-3 flex flex-col gap-1 hover:border-primary/20 transition-all">
                                        <div className="flex justify-between items-center">
                                            <span className="font-bold text-xs md:text-sm text-neutral-light">{data.techStack[2].name}</span>
                                            <span className="text-[9px] font-bold tracking-wider px-2 py-0.5 rounded-md border border-primary/40 bg-primary/10 text-primary uppercase">{data.techStack[2].category}</span>
                                        </div>
                                        <p className="text-[11px] md:text-xs text-neutral-light/70 leading-relaxed">{data.techStack[2].desc}</p>
                                    </div>
                                )}
                                {data.techStack?.[3] && (
                                    <div className="bg-tertiary/40 border border-neutral-light/10 rounded-xl p-3 flex flex-col gap-1 hover:border-primary/20 transition-all">
                                        <div className="flex justify-between items-center">
                                            <span className="font-bold text-xs md:text-sm text-neutral-light">{data.techStack[3].name}</span>
                                            <span className="text-[9px] font-bold tracking-wider px-2 py-0.5 rounded-md border border-primary/40 bg-primary/10 text-primary uppercase">{data.techStack[3].category}</span>
                                        </div>
                                        <p className="text-[11px] md:text-xs text-neutral-light/70 leading-relaxed">{data.techStack[3].desc}</p>
                                    </div>
                                )}
                                {data.techStack?.[4] && (
                                    <div className="bg-tertiary/40 border border-neutral-light/10 rounded-xl p-3 flex flex-col gap-1 hover:border-primary/20 transition-all">
                                        <div className="flex justify-between items-center">
                                            <span className="font-bold text-xs md:text-sm text-neutral-light">{data.techStack[4].name}</span>
                                            <span className="text-[9px] font-bold tracking-wider px-2 py-0.5 rounded-md border border-primary/40 bg-primary/10 text-primary uppercase">{data.techStack[4].category}</span>
                                        </div>
                                        <p className="text-[11px] md:text-xs text-neutral-light/70 leading-relaxed">{data.techStack[4].desc}</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="bg-secondary border border-neutral-light/30 rounded-2xl p-4 md:p-5 flex flex-col gap-3 shadow-md">
                            <h2 className="font-bold text-sm md:text-base text-neutral-light">{data.deliverablesTitle}</h2>
                            <div className="flex flex-col gap-2.5">
                                {data.deliverables?.[0] && (
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="text-primary shrink-0" size={16} />
                                        <span className="text-xs md:text-sm font-medium text-neutral-light/90">{data.deliverables[0]}</span>
                                    </div>
                                )}
                                {data.deliverables?.[1] && (
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="text-primary shrink-0" size={16} />
                                        <span className="text-xs md:text-sm font-medium text-neutral-light/90">{data.deliverables[1]}</span>
                                    </div>
                                )}
                                {data.deliverables?.[2] && (
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="text-primary shrink-0" size={16} />
                                        <span className="text-xs md:text-sm font-medium text-neutral-light/90">{data.deliverables[2]}</span>
                                    </div>
                                )}
                                {data.deliverables?.[3] && (
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="text-primary shrink-0" size={16} />
                                        <span className="text-xs md:text-sm font-medium text-neutral-light/90">{data.deliverables[3]}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full my-6">
                    <div className="bg-secondary border border-neutral-light/20 rounded-3xl p-8 md:p-12 flex flex-col items-center justify-center text-center gap-5 shadow-xl">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-neutral-light tracking-tight">
                            {data.ctaTitle || "¿Te interesa un proyecto similar?"}
                        </h2>
                        <p className="text-xs md:text-sm text-neutral-light/70 max-w-xl leading-relaxed">
                            {data.ctaDesc || "Explora otros proyectos destacados o ponte en contacto directamente para charlar sobre arquitectura y desarrollo."}
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                            <button onClick={handleBack} className="bg-primary text-tertiary font-bold px-6 py-3 rounded-2xl shadow-lg hover:brightness-110 transition-all cursor-pointer transform hover:-translate-y-0.5">
                                {data.ctaPrimary || "Volver al Portafolio"}
                            </button>
                            <a href={`/${language}#contact`} className="bg-tertiary/90 border border-neutral-light/30 text-neutral-light font-bold px-6 py-3 rounded-2xl hover:border-primary/50 hover:text-primary transition-all cursor-pointer transform hover:-translate-y-0.5">
                                {data.ctaSecondary || "Contactarme"}
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <AnimatePresence>
                {showScrollTop && (
                    <motion.button initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} transition={{ duration: 0.2 }} onClick={scrollToTop} aria-label="Scroll to top" className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-secondary border border-neutral/40 text-primary flex items-center justify-center rounded-xl shadow-2xl cursor-pointer hover:bg-primary hover:text-tertiary transition-all duration-300 group">
                        <ArrowUp size={22} className="transition-transform group-hover:-translate-y-1" />
                    </motion.button>
                )}
            </AnimatePresence>

            <ProjectGalleryModal isOpen={galleryModal.isOpen} onClose={closeGallery} items={galleryModal.items} initialIndex={galleryModal.initialIndex} galleryTitle={galleryModal.title} />
        </div>
    )
}

