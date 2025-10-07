'use client'
import { useState } from 'react'

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="fixed top-0 left-0 right-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-6">
                <div className="hidden md:flex justify-center items-center gap-8">
                    <a
                        href="/CV_alternance.pdf"
                        download
                        className="text-slate-300 hover:text-violet-400 transition-colors duration-300 text-lg font-medium py-2 px-4 flex items-center"
                    >
                        CV
                    </a>
                    <a
                        href="#projets"
                        className="text-slate-300 hover:text-violet-400 transition-colors duration-300 text-lg font-medium py-2 px-4 flex items-center"
                    >
                        Projets
                    </a>
                    <div className="w-2 h-2 bg-violet-400 rounded-full flex-shrink-0" />
                    <a
                        href="#competences"
                        className="text-slate-300 hover:text-violet-400 transition-colors duration-300 text-lg font-medium py-2 px-4 flex items-center"
                    >
                        Compétences
                    </a>
                    <a
                        href="#contact"
                        className="text-slate-300 hover:text-violet-400 transition-colors duration-300 text-lg font-medium py-2 px-4 flex items-center"
                    >
                        Contact
                    </a>
                </div>

                <div className="md:hidden flex justify-end">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white focus:outline-none p-2 relative z-50"
                        aria-label="Toggle menu"
                    >
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="fixed inset-0 bg-[#0a0e27] z-40 flex flex-col md:hidden">
                    <div className="flex justify-start p-6">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-white focus:outline-none p-2 relative z-50"
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="flex-1 flex flex-col items-center justify-center gap-8">
                        <a
                            href="/CV_alternance.pdf"
                            download
                            onClick={() => setIsOpen(false)}
                            className="text-slate-200 hover:text-violet-400 transition-all duration-300 text-xl font-medium"
                        >
                            CV
                        </a>
                        <a
                            href="#projets"
                            onClick={() => setIsOpen(false)}
                            className="text-slate-200 hover:text-violet-400 transition-all duration-300 text-xl font-medium"
                        >
                            Projets
                        </a>
                        <a
                            href="#competences"
                            onClick={() => setIsOpen(false)}
                            className="text-slate-200 hover:text-violet-400 transition-all duration-300 text-xl font-medium"
                        >
                            Compétences
                        </a>
                        <a
                            href="#contact"
                            onClick={() => setIsOpen(false)}
                            className="text-slate-200 hover:text-violet-400 transition-all duration-300 text-xl font-medium"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            )}
        </nav>
    )
}