'use client'
import { useState } from 'react'
import Image from 'next/image'

const projects = [
    {
        id: 1,
        title: "Simultaur de transports",
        description: "Plateforme d'affichage de trains en django avec interface de recherche, ect",
        image: "/projet_trains.png",
        technologies: ["Django", "CSS"],
        github: "https://github.com/Flo738/Djangotrain_app",
    },
    {
        id: 2,
        title: "Okev x Agence Growth",
        description: "Réalisation landings pages et automatisation pour le travail en collaboration avec l'agence de Ads",
        image: "/okevlogo.png",
        technologies: ["Webflow", "Zapier", "Google Ads", "Monday", "Facebook Ads"],
        github: "#",
    },
    {
        id: 3,
        title: "Site Vitrine",
        description: "Plateforme e-commerce",
        image: "/Sitevitrine.png",
        technologies: ["HTML", "CSS", "Javascript"],
        github: "https://github.com/Flo738/Site"
    },
    {
        id: 4,
        title: "Site de Voyage",
        description: "Site de voyage no-code",
        image: "/coda_projet.png",
        technologies: ["Coda"],
        github: "https://coda.io/@florian-pacard/voyage",
    },
    {
        id: 5,
        title: "Hackathon x Publicis",
        description: "Système de quizz et sondage sur l'Europe",
        image: "/art11.png",
        technologies: ["React", "Tailwind", "Vercel"],
        github: "#",
    },
    {
        id: 6,
        title: "Hackathon x Dékuple",
        description: "Prototype de récupération et de gestion de données IOT.",
        image: "/dekuple.png",
        technologies: ["Next.js", "Tailwind", "MongoDB"],
        github: "#",
    }
]

export default function Projects() {
    const [hoveredId, setHoveredId] = useState(null)

    return (
        <section className="relative py-20 px-4 sm:px-6 bg-[#0a0e27] overflow-hidden" id="projets">
            <div className="absolute inset-0 bg-gradient-to-b from-violet-950/20 via-transparent to-violet-950/20" />

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="mb-16 text-center">
                    <span className="inline-block px-4 py-1.5 mb-4 bg-violet-500/20 border border-violet-400/30 text-violet-300 text-sm font-medium">
                       Mes projets
                    </span>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-violet-200 to-purple-300 bg-clip-text text-transparent">
                        Projets Réalisés
                    </h2>
                    <p className="text-slate-400 text-lg">
                        Voici quelques projets
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 overflow-hidden hover:border-violet-500/50 transition-all duration-500"
                            onMouseEnter={() => setHoveredId(project.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 via-transparent to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative h-40 bg-slate-800/50 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent z-10" />
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-3.5 z-20 right-3 flex gap-2">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="GitHub Repository"
                                        className="p-2 bg-slate-900/80 backdrop-blur-sm border border-slate-700 hover:border-violet-400/50 hover:bg-slate-800/80 transition-all duration-300"
                                    >
                                        <svg className="w-4 h-4 text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            <div className="relative p-5 flex flex-col h-[calc(100%-10rem)]">
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-violet-300 transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-800">
                                    {project.technologies.slice(0, 3).map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-2 py-1 bg-slate-800/80 border border-slate-700 text-violet-300 text-xs font-medium hover:border-violet-500/50 transition-colors duration-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    {project.technologies.length > 3 && (
                                        <span className="px-2 py-1 bg-slate-800/80 border border-slate-700 text-slate-400 text-xs font-medium">
                                            +{project.technologies.length - 3}
                                        </span>
                                    )}
                                </div>
                            </div>

                            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-600 to-purple-600 transform origin-left transition-transform duration-500 ${hoveredId === project.id ? 'scale-x-100' : 'scale-x-0'}`} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}