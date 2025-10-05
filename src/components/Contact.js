'use client'
import { useState } from 'react'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [status, setStatus] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('Envoi en cours...')

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            if (response.ok) {
                setStatus('Message envoyé avec succès !')
                setFormData({name: '', email: '', message: ''})
            } else {
                setStatus('Erreur lors de l\'envoi du message.')
            }
        } catch (error) {
            setStatus('Erreur lors de l\'envoi du message.')
        }
    }

    const handleChange = (e) => {
        setFormData({...formData,
            [e.target.name]: e.target.value})
    }

    return (
        <section className="relative py-20 px-4 sm:px-6 bg-[#0a0e27] overflow-hidden" id="contact">
            <div className="absolute inset-0 bg-gradient-to-b from-violet-950/20 via-transparent to-violet-950/20"/>

            <div className="relative z-10 max-w-3xl mx-auto">
                <div className="mb-16 text-center">
                    <span className="inline-block px-4 py-1.5 mb-4 bg-violet-500/20 border border-violet-400/30 text-violet-300 text-sm font-medium">
                        Me contacter
                    </span>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-violet-200 to-purple-300 bg-clip-text text-transparent">
                        Travaillons ensemble
                    </h2>
                    <p className="text-slate-400 text-lg">
                        N'hésitez pas à me contacter
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto">
                    <div className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                                Nom
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 text-slate-200 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 text-slate-200 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="5"
                                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 text-slate-200 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent resize-none"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={status === 'Envoi en cours...'}
                            className="w-full px-6 py-4 bg-violet-600 hover:bg-violet-700 disabled:bg-slate-700 text-white font-medium transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            {status === 'Envoi en cours...' ? (
                                <>
                                    <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                    </svg>
                                    <span>Envoi en cours...</span>
                                </>
                            ) : (
                                <>
                                    <span>Envoyer le message</span>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </>
                            )}
                        </button>
                        {status === 'success' && (
                            <div className="p-4 bg-green-500/10 border border-green-500/50 text-green-400 text-center">
                                Message envoyé avec succès ! Je vous répondrai rapidement.
                            </div>
                        )}

                        {status === 'error' && (
                            <div className="p-4 bg-red-500/10 border border-red-500/50 text-red-400 text-center">
                                Une erreur est survenue. Veuillez réessayer.
                            </div>
                        )}
                    </div>
                </form>
            </div>
        </section>
    )
}