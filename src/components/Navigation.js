'use client'
import { useState } from 'react'

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
            <div className="max-w-7xl mx-auto px-6 py-6">
                <div className="hidden md:flex justify-center items-center gap-12">
                    <a href="/CV_alternance.pdf" download className="text-slate-300 hover:text-white transition-colors text-sm p-1">
                        Cv
                    </a>
                    <a href="#projets" className="text-slate-300 hover:text-white transition-colors text-sm p-1">
                        Projets
                    </a>
                    <div className="w-2 h-2 bg-white rounded-full" />
                    <a href="#competences" className="text-slate-300 hover:text-white transition-colors text-sm p-1">
                        Compétences
                    </a>
                    <a href="#contact" className="text-slate-300 hover:text-white transition-colors text-sm p-1">
                        Contact
                    </a>
                </div>

                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="ml-auto block text-white focus:outline-none" aria-label="Toggle menu">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="fixed inset-0 top-0 bg-[#0a0e27] z-50 flex flex-col md:hidden">
                    <div className="flex justify-end p-6">
                        <button onClick={() => setIsOpen(false)} className="text-white focus:outline-none">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="flex-1 flex flex-col items-center justify-center gap-8">
                        <a href="/CV_alternance.pdf" download onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white transition-colors text-2xl">
                            Cv
                        </a>
                        <a href="#projets" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white transition-colors text-2xl">
                            Projets
                        </a>
                        <a href="#competences" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white transition-colors text-2xl">
                            Compétences
                        </a>
                        <a href="#contact" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white transition-colors text-2xl">
                            Contact
                        </a>
                    </div>
                </div>
            )}
        </nav>
    )
}