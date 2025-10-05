'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const projects = [
    {
        id: 1,
        title: "Simultaur de transports",
        description: "Plateforme d'affichage de trains en django avec interface de recherche, ect",
        image: "/projet_trains.png",
        technologies: ["Django", "CSS"],
        lien: "https://github.com/Flo738/Djangotrain_app",
    },
    {
        id: 2,
        title: "Okev x Agence Growth",
        description: "Réalisation landings pages et automatisation pour le travail en collaboration avec l'agence de Ads",
        image: "/okevlogo.png",
        technologies: ["Webflow", "Zapier", "Google Ads", "Monday", "Facebook Ads"],
        lien: "#",
    },
    {
        id: 3,
        title: "Site Vitrine",
        description: "Plateforme e-commerce",
        image: "/Sitevitrine.png",
        technologies: ["HTML", "CSS", "Javascript"],
        lien: "https://github.com/Flo738/Site"
    },
    {
        id: 4,
        title: "Site de Voyage",
        description: "Site de voyage no-code",
        image: "/coda_projet.png",
        technologies: ["Coda"],
        lien: "https://coda.io/@florian-pacard/voyage",
    },
    {
        id: 5,
        title: "Hackathon x Publicis",
        description: "Système de quizz et sondage sur l'Europe",
        image: "/art11.png",
        technologies: ["React", "Tailwind", "Vercel"],
        lien: "#",
    },
    {
        id: 6,
        title: "Hackathon x Dékuple",
        description: "Prototype de récupération et de gestion de données IOT.",
        image: "/dekuple.png",
        technologies: ["Next.js", "Tailwind", "MongoDB"],
        lien: "#",
    }
]

export default function Projects() {
    const [hoveredId, setHoveredId] = useState(null)

    return (
        <section className="relative py-20 px-4 sm:px-6 bg-[#0a0e27] overflow-hidden" id="projets">
            <div className="absolute inset-0 bg-gradient-to-b from-violet-950/20 via-transparent to-violet-950/20" />

            <div className="relative z-10 max-w-6xl mx-auto">
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
                        <Link
                            key={project.id}
                            href={project.lien}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 overflow-hidden hover:border-violet-500/50 transition-all duration-500 cursor-pointer block"
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
                                            className="px-2 py-1 bg-slate-800/80 border border-slate-700 text-violet-300 text-xs font-medium group-hover:border-violet-500/50 transition-colors duration-300"
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
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}