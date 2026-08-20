import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Image as ImageIcon, Sparkles } from "lucide-react";

export const ProjectGalleryModal = ({ isOpen, onClose, items = [], initialIndex = 0, galleryTitle = "Galería del Proyecto" }) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    useEffect(() => {
        setCurrentIndex(initialIndex);
    }, [initialIndex, isOpen]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    const handlePrev = useCallback(() => {
        if (!items || items.length === 0) return;
        setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
    }, [items]);

    const handleNext = useCallback(() => {
        if (!items || items.length === 0) return;
        setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    }, [items]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!isOpen) return;
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowLeft") handlePrev();
            if (e.key === "ArrowRight") handleNext();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, onClose, handlePrev, handleNext]);

    if (!isOpen || !items || items.length === 0) return null;

    const currentItem = items[currentIndex] || {};

    return (
        <AnimatePresence>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="fixed inset-0 z-50 flex flex-col items-center justify-between p-4 md:p-8 bg-tertiary/95 backdrop-blur-2xl select-none cursor-pointer" onClick={onClose}>
                <div className="w-full max-w-6xl flex justify-between items-center z-20 pb-2 cursor-default" onClick={(e) => e.stopPropagation()}>
                    <div className="flex items-center gap-3">
                        <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-neutral-light/90 flex items-center gap-2 bg-secondary/80 border border-neutral-light/20 px-3.5 py-1.5 rounded-full shadow-md">
                            <span className="w-2 h-2 rounded-full bg-primary" />
                            {galleryTitle}
                        </span>
                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-secondary/60 border border-neutral-light/10 text-neutral-light/70">
                            {currentIndex + 1} / {items.length}
                        </span>
                    </div>

                    <button onClick={onClose} aria-label="Cerrar galería" className="w-10 h-10 rounded-full bg-secondary/80 border border-neutral-light/20 text-neutral-light hover:text-primary hover:border-primary/50 flex items-center justify-center transition-all shadow-md cursor-pointer group">
                        <X size={20} className="transition-transform group-hover:rotate-90" />
                    </button>
                </div>
                <div className="relative w-full max-w-6xl flex-1 flex items-center justify-center my-auto py-4">
                    {items.length > 1 && (
                        <button onClick={(e) => {
                            e.stopPropagation();
                            handlePrev();
                        }}
                            aria-label="Imagen anterior"
                            className="absolute left-0 md:-left-4 z-20 w-12 h-12 rounded-full bg-secondary/80 border border-neutral-light/20 text-neutral-light hover:text-primary hover:border-primary/50 flex items-center justify-center transition-all shadow-2xl hover:scale-110 cursor-pointer backdrop-blur-md"
                        >
                            <ChevronLeft size={24} />
                        </button>
                    )}
                    <div className="w-full h-full max-h-[75vh] flex items-center justify-center relative cursor-default" onClick={(e) => e.stopPropagation()}>
                        {currentItem.src ? (
                            <motion.img key={currentIndex} initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} src={currentItem.src} alt={currentItem.title || "Captura del proyecto"} className="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl border border-neutral-light/15" />
                        ) : (
                            <motion.div key={currentIndex} initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.2 }} className="w-full max-w-3xl h-[55vh] flex flex-col items-center justify-center text-center p-8 rounded-3xl border border-dashed border-neutral-light/20 bg-secondary/40 gap-4 shadow-2xl backdrop-blur-md">
                                <div className="w-20 h-20 rounded-3xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary shadow-lg">
                                    <ImageIcon size={40} />
                                </div>
                                <div className="flex flex-col gap-1.5 max-w-md">
                                    <span className="text-xs font-extrabold uppercase tracking-widest text-primary">Vista Previa</span>
                                    <h3 className="text-lg md:text-xl font-bold text-neutral-light">{currentItem.title}</h3>
                                </div>
                            </motion.div>
                        )}
                    </div>
                    {items.length > 1 && (
                        <button onClick={(e) => { e.stopPropagation(); handleNext(); }} aria-label="Imagen siguiente" className="absolute right-0 md:-right-4 z-20 w-12 h-12 rounded-full bg-secondary/80 border border-neutral-light/20 text-neutral-light hover:text-primary hover:border-primary/50 flex items-center justify-center transition-all shadow-2xl hover:scale-110 cursor-pointer backdrop-blur-md">
                            <ChevronRight size={24} />
                        </button>
                    )}
                </div>

                <div className="w-full max-w-4xl flex items-center justify-between gap-3 px-6 py-3 rounded-2xl bg-secondary/80 border border-neutral-light/20 backdrop-blur-md shadow-xl z-20 cursor-default" onClick={(e) => e.stopPropagation()}>
                    <div className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <h4 className="font-bold text-sm md:text-base text-neutral-light tracking-wide">
                            {currentItem.title}
                        </h4>
                    </div>

                    {items.length > 1 && (
                        <div className="flex gap-1.5 items-center">
                            {items.map((_, idx) => (
                                <button key={idx} onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }} aria-label={`Ir a la imagen ${idx + 1}`} className={`h-1.5 rounded-full transition-all cursor-pointer ${idx === currentIndex ? "w-6 bg-primary" : "w-1.5 bg-neutral-light/30 hover:bg-neutral-light/60"}`} />
                            ))}
                        </div>
                    )}
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ProjectGalleryModal;
