const firstPData = {
    translations: {
        es: {
            firstElement: "REGRESAR",
            title: "UTR WEBSITE",
            description: "Plataforma web institucional moderna para la Universidad Tecnológica del Retoño, diseñada para centralizar la información académica y agilizar servicios digitales.",
            liveUrl: "https://utr.edu.mx",
            githubUrl: "https://lightgreen-pigeon-736563.hostingersite.com/es/",
            liveText: "Ver Sitio Oficial",
            githubText: "Sitio Auxiliar (Beta)",
            company: "Universidad Tecnológica del Retoño",
            role: "Full Stack Developer & Tech Team Leader",
            period: "2025 - 2026",
            status: "En Producción",
            summaryTitle: "Resumen del Proyecto",
            summary: "Diseño y desarrollo integral de la plataforma institucional moderna de la UTR. Diseñada para centralizar la información académica, agilizar trámites en línea y mejorar significativamente la experiencia digital de miles de estudiantes, docentes y visitantes.",
            challengeTitle: "01. Desafíos",
            challengeDesc: "La universidad contaba con un sitio web heredado monolítico con tiempos de respuesta lentos (>4.5 segundos), escasa adaptabilidad a dispositivos móviles y procesos de actualización de información descentralizados que generaban cuellos de botella en la consulta de procesos administrativos.",
            solutionTitle: "02. La Solución Arquitectónica",
            solutionDesc: "Implementamos una arquitectura híbrida utilizando Astro para renderizado estático de alto rendimiento en páginas informativas, combinado con islas de React para widgets interactivos y un backend escalable en Express con MongoDB para la gestión dinámica de contenidos y usuarios.",
            featuresTitle: "Características Destacadas",
            features: [
                {
                    title: "Manejo de procesos estudiantiles eficazes",
                    desc: "Solicitud de documentos, inscripciones, reinscripciones, pagos, horarios y calificaciones de todas las áreas académicas.",
                    icon: "UserCheck"
                },
                {
                    title: "Gestor de Contenidos Dinámico",
                    desc: "Panel administrativo customizado para que las facultades publiquen noticias, convocatorias y eventos en tiempo real.",
                    icon: "LayoutDashboard"
                },
                {
                    title: "Rendimiento & SEO Optimizado",
                    desc: "Puntuación de 100/100 en Google Lighthouse gracias al prerrenderizado de Astro y optimización de imágenes.",
                    icon: "Zap"
                },
                {
                    title: "Avisos importantes de la institución",
                    desc: "Mejor visibilidad de los eventos importantes de la institución, fechas de exámenes y otras actualizaciones relevantes.",
                    icon: "Bell"
                }
            ],
            archTitle: "Arquitectura Técnica",
            archItems: [
                { title: "Frontend SSR", tech: "Astro + Islands React", icon: "Globe" },
                { title: "REST API Layer", tech: "Express.js & JWT Auth", icon: "Server" },
                { title: "Data Store", tech: "MongoDB NoSQL Cluster", icon: "Database" }
            ],
            specsTitle: "Ficha Técnica",
            techTitle: "Tecnologías Utilizadas",
            techStack: [
                { name: "Astro", category: "FRONTEND FRAMEWORK", desc: "Generación estática ultra-rápida e integración de componentes reactivos." },
                { name: "React", category: "UI COMPONENTS", desc: "Componentes dinámicos e interactivos (islas de interactividad)." },
                { name: "Express.js", category: "BACKEND REST API", desc: "Servicios API para autenticación, gestión de contenidos y trámites." },
                { name: "MongoDB", category: "DATABASE", desc: "Base de datos NoSQL para almacenamiento flexible de noticias y usuarios." },
                { name: "TailwindCSS", category: "STYLING SYSTEM", desc: "Sistema de diseño responsivo y optimizado para una mayor escalabilidad." }
            ],
            deliverablesTitle: "Entregables Logrados",
            deliverables: [
                "Arquitectura SSR optimizada con Astro",
                "Experiencia gratificante para estudiantes, docentes y visitantes",
                "Panel de administración CMS a medida",
                "Diseño 100% responsivo y accesible"
            ],
            visualsTitle: "GALERÍA VISUAL",
            webSiteTitle: "Sitio Web",
            adminSiteTitle: "Sitio de Administración de la Página",
            webSiteGallery: [
                {
                    id: 1,
                    title: "Página Principal (Hero & Anuncios)",
                    description: "Sección principal del sitio institucional con banner dinámico, accesos rápidos a trámites universitarios e integración de avisos urgentes.",
                    category: "FRONTEND SSR",
                    tags: ["Astro SSR", "TailwindCSS", "SEO 100/100"],
                    src: ""
                },
                {
                    id: 2,
                    title: "Portal Estudiantil & Trámites en Línea",
                    description: "Módulo para la consulta de horarios, trámites administrativos, pagos e inscripciones académicas con interfaz intuitiva.",
                    category: "ISLAS REACTIVAS",
                    tags: ["React Islands", "REST API", "Auth JWT"],
                    src: ""
                },
                {
                    id: 3,
                    title: "Catálogo de Carreras y Oferta Educativa",
                    description: "Vista detallada de los programas educativos, planes de estudio, perfil de egreso y requisitos de admisión.",
                    category: "PÁGINAS DINÁMICAS",
                    tags: ["Fast Pre-rendering", "Mobile First"],
                    src: ""
                }
            ],
            adminSiteGallery: [
                {
                    id: 1,
                    title: "Panel General de Administración CMS",
                    description: "Dashboard centralizado para la gestión de contenido universitario, métricas de tráfico y control de estado de la plataforma.",
                    category: "PANEL ADMINISTRATIVO",
                    tags: ["Express.js", "MongoDB", "Dashboard"],
                    src: ""
                },
                {
                    id: 2,
                    title: "Gestor Dinámico de Noticias y Convocatorias",
                    description: "Módulo CRUD completo para crear, editar y programar comunicados oficiales con soporte para multimedia y etiquetas.",
                    category: "GESTIÓN DE CONTENIDOS",
                    tags: ["CRUD Operations", "NoSQL Store"],
                    src: ""
                },
                {
                    id: 3,
                    title: "Control de Usuarios, Roles y Permisos",
                    description: "Sistema de administración de cuentas para facultades, comunicadores y administradores generales del sistema.",
                    category: "SEGURIDAD & ROLES",
                    tags: ["Role-Based Access", "JWT Sessions"],
                    src: ""
                }
            ],
            ctaTitle: "¿Te interesa un proyecto similar?",
            ctaDesc: "Explora otros proyectos destacados o ponte en contacto directamente para charlar sobre arquitectura y desarrollo.",
            ctaPrimary: "Volver al Portafolio",
            ctaSecondary: "Contactarme"
        },
        en: {
            firstElement: "GO BACK",
            title: "UTR WEBSITE",
            description: "Modern institutional web platform for Universidad Tecnológica del Retoño, designed to centralize academic information and streamline digital services.",
            liveUrl: "https://utr.edu.mx",
            githubUrl: "https://lightgreen-pigeon-736563.hostingersite.com/es/",
            liveText: "Visit Official Site",
            githubText: "Auxiliary Beta Site",
            company: "Universidad Tecnológica del Retoño",
            role: "Full Stack Developer & Tech Team Leader",
            period: "2025 - 2026",
            status: "In Production",
            summaryTitle: "Project Overview",
            summary: "Comprehensive design and development of the modern institutional platform for UTR. Built to centralize academic information, streamline online procedures, and significantly improve the digital experience for thousands of students, faculty, and visitors.",
            challengeTitle: "01. Challenges",
            challengeDesc: "The university relied on a legacy monolithic website with slow response times (>4.5 seconds), poor mobile adaptability, and decentralized information updates that caused bottlenecks when consulting administrative procedures.",
            solutionTitle: "02. Architectural Solution",
            solutionDesc: "We implemented a hybrid architecture leveraging Astro for high-performance static page rendering, combined with React interactive islands and a scalable Express backend with MongoDB for dynamic content and user management.",
            featuresTitle: "Key Features",
            features: [
                {
                    title: "Efficient Student Process Management",
                    desc: "Document requests, enrollment, re-enrollment, payments, schedules, and grades across all academic departments.",
                    icon: "UserCheck"
                },
                {
                    title: "Dynamic Content Manager",
                    desc: "Custom admin panel enabling faculties to publish news, calls, and events in real time.",
                    icon: "LayoutDashboard"
                },
                {
                    title: "Optimized Performance & SEO",
                    desc: "100/100 Google Lighthouse score powered by Astro pre-rendering and image optimization.",
                    icon: "Zap"
                },
                {
                    title: "Important Institutional Announcements",
                    desc: "Enhanced visibility for key institutional events, exam schedules, and other relevant updates.",
                    icon: "Bell"
                }
            ],
            archTitle: "Technical Architecture",
            archItems: [
                { title: "Frontend SSR", tech: "Astro + Islands React", icon: "Globe" },
                { title: "REST API Layer", tech: "Express.js & JWT Auth", icon: "Server" },
                { title: "Data Store", tech: "MongoDB NoSQL Cluster", icon: "Database" }
            ],
            specsTitle: "Project Specs",
            techTitle: "Technologies Used",
            techStack: [
                { name: "Astro", category: "FRONTEND FRAMEWORK", desc: "Ultra-fast static site generation and interactive component integration." },
                { name: "React", category: "UI COMPONENTS", desc: "Dynamic interactive components (islands of interactivity)." },
                { name: "Express.js", category: "BACKEND REST API", desc: "API services for authentication, content management, and procedures." },
                { name: "MongoDB", category: "DATABASE", desc: "NoSQL database for flexible storage of news and user records." },
                { name: "TailwindCSS", category: "STYLING SYSTEM", desc: "Responsive and optimized design system for enhanced scalability." }
            ],
            deliverablesTitle: "Key Deliverables",
            deliverables: [
                "Optimized SSR architecture with Astro",
                "Rewarding experience for students, faculty, and visitors",
                "Custom CMS admin panel",
                "100% responsive and accessible design"
            ],
            visualsTitle: "VISUAL GALLERY",
            webSiteTitle: "Website",
            adminSiteTitle: "Admin Management Site",
            webSiteGallery: [
                {
                    id: 1,
                    title: "Main Landing Page (Hero & Announcements)",
                    description: "Main institutional landing page featuring a dynamic banner, quick access to academic procedures, and urgent notice integration.",
                    category: "FRONTEND SSR",
                    tags: ["Astro SSR", "TailwindCSS", "SEO 100/100"],
                    src: ""
                },
                {
                    id: 2,
                    title: "Student Portal & Online Procedures",
                    description: "Module for schedules, administrative forms, payments, and enrollment with an intuitive user interface.",
                    category: "REACTIVE ISLANDS",
                    tags: ["React Islands", "REST API", "Auth JWT"],
                    src: ""
                },
                {
                    id: 3,
                    title: "Academic Programs & Degree Catalog",
                    description: "Detailed view of university degree offerings, study plans, graduate profiles, and admission requirements.",
                    category: "DYNAMIC PAGES",
                    tags: ["Fast Pre-rendering", "Mobile First"],
                    src: ""
                }
            ],
            adminSiteGallery: [
                {
                    id: 1,
                    title: "CMS General Admin Dashboard",
                    description: "Centralized dashboard for managing university content, traffic metrics, and system health status.",
                    category: "ADMIN PANEL",
                    tags: ["Express.js", "MongoDB", "Dashboard"],
                    src: ""
                },
                {
                    id: 2,
                    title: "Dynamic News & Call-to-Action Manager",
                    description: "Full CRUD module to publish, edit, and schedule official announcements with multimedia upload support.",
                    category: "CONTENT MANAGEMENT",
                    tags: ["CRUD Operations", "NoSQL Store"],
                    src: ""
                },
                {
                    id: 3,
                    title: "User Control, Roles & Permissions",
                    description: "Account management system for faculty members, communication officers, and general system administrators.",
                    category: "SECURITY & ROLES",
                    tags: ["Role-Based Access", "JWT Sessions"],
                    src: ""
                }
            ],
            ctaTitle: "Interested in a similar project?",
            ctaDesc: "Explore other featured projects or get in touch directly to discuss architecture and development.",
            ctaPrimary: "Back to Portfolio",
            ctaSecondary: "Contact Me"
        }
    }
};

export default firstPData;
