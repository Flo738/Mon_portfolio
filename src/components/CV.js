'use client'

export default function CV() {
    return (
        <section className="relative min-h-screen py-20 px-4 sm:px-6 bg-[#0a0e27] overflow-hidden" id="cv">
            <div className="absolute inset-0 bg-gradient-to-b from-violet-950/20 via-transparent to-violet-950/20" />

            <div className="relative z-10 max-w-5xl mx-auto">
                <div className="mb-12 text-center">
                    <span className="inline-block px-4 py-1.5 mb-4 bg-violet-500/20 border border-violet-400/30 text-violet-300 text-sm font-medium">
                        Curriculum Vitae
                    </span>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-violet-200 to-purple-300 bg-clip-text text-transparent">
                        Mon Parcours
                    </h2>
                    <p className="text-slate-400 text-lg">
                        Découvrez mon expérience et mes qualifications
                    </p>
                </div>

                <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 overflow-hidden group hover:border-violet-500/50 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 via-transparent to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative aspect-[3/4] max-h-[70vh]">
                        <img
                            src="/cv-preview.jpg"
                            alt="CV Florian Pacard"
                            className="w-full h-full object-contain opacity-30 group-hover:opacity-40 transition-opacity duration-300"
                        />

                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-8 p-6">
                            <div className="text-center">
                                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">Florian Pacard</h3>
                                <p className="text-slate-300 text-lg sm:text-xl">Développeur Full-Stack</p>
                            </div>

                            <a
                                href="/CV_Florian_Pacard.pdf"
                                download
                                className="px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white font-medium transition-all duration-300 flex items-center gap-3 shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 hover:scale-105"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                <span>Télécharger mon CV</span>
                            </a>

                            <div className="flex gap-8 mt-4">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-violet-400">5+</div>
                                    <div className="text-slate-400 text-sm">Années</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-violet-400">50+</div>
                                    <div className="text-slate-400 text-sm">Projets</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-violet-400">15+</div>
                                    <div className="text-slate-400 text-sm">Technologies</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}