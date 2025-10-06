'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import * as THREE from 'three'
import { useThreeback } from '@/hooks/Threeback'

const skills = [
    { name: 'React', category: 'Frontend', logo: '/react.svg' },
    { name: 'CSS', category: 'Frontend', logo: '/css.svg' },
    { name: 'Next.js', category: 'Frontend', logo: '/next.svg' },
    { name: 'JavaScript', category: 'Frontend', logo: '/javascript.svg' },
    { name: 'Tailwind CSS', category: 'Frontend', logo: '/tailwind.svg' },
    { name: 'Bootstrap', category: 'Frontend', logo: '/bootstrap.svg' },
    { name: 'HTML', category: 'Frontend', logo: '/html.svg' },
    { name: 'Coda', category: 'Frontend', logo: '/coda.svg' },
    { name: 'Node.js', category: 'Backend', logo: '/nodejs.svg' },
    { name: 'Python', category: 'Backend', logo: '/python.svg' },
    { name: 'Django', category: 'Backend', logo: '/django.svg' },
    { name: 'PostgreSQL', category: 'Backend', logo: '/postgresql.svg' },
    { name: 'SQL', category: 'Backend', logo: '/sql.svg' },
    { name: 'MongoDB', category: 'Backend', logo: '/mongodb.svg' },
    { name: 'Php', category: 'Backend', logo: '/php.svg' },
    { name: 'Github', category: 'Tools', logo: '/github.svg' },
    { name: 'Docker', category: 'Tools', logo: '/docker.svg' },
    { name: 'Google Ads', category: 'Tools', logo: '/googleads.svg' },
    { name: 'Webflow', category: 'Tools', logo: '/webflow.svg' },
    { name: 'Notion', category: 'Tools', logo: '/notion.svg' },
    { name: 'Zapier', category: 'Tools', logo: '/zapier.svg' },
    { name: 'Figma', category: 'Tools', logo: '/figma.svg' },
]

export default function Skills() {
    const [selectedCategory, setSelectedCategory] = useState('Frontend')
    const { canvasRef, scene, camera, renderer, isMobile } = useThreeback('skills')
    const filteredSkills = skills.filter(skill => skill.category === selectedCategory)

    useEffect(() => {
        if (isMobile || !scene || !camera || !renderer) return

        const particlesCount = 1500
        const particlesGeometry = new THREE.BufferGeometry()
        const positions = new Float32Array(particlesCount * 3)
        const colors = new Float32Array(particlesCount * 3)

        for (let i = 0; i < particlesCount; i++) {
            const radius = Math.random() * 20
            const spinAngle = radius * 0.5
            const branchAngle = ((i % 4) / 4) * Math.PI * 2

            const randomX = Math.pow(Math.random(), 2) * (Math.random() < 0.5 ? 1 : -1) * 2
            const randomY = Math.pow(Math.random(), 2) * (Math.random() < 0.5 ? 1 : -1) * 2
            const randomZ = Math.pow(Math.random(), 2) * (Math.random() < 0.5 ? 1 : -1) * 2

            positions[i * 3] = Math.cos(branchAngle + spinAngle) * radius + randomX
            positions[i * 3 + 1] = randomY * 0.3
            positions[i * 3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ

            const mixedColor = new THREE.Color()
            mixedColor.setHSL(0.75 + Math.random() * 0.05, 0.7, 0.4 + Math.random() * 0.4)

            colors[i * 3] = mixedColor.r
            colors[i * 3 + 1] = mixedColor.g
            colors[i * 3 + 2] = mixedColor.b
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
        particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.06,
            transparent: true,
            opacity: 0.7,
            vertexColors: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        })

        const particles = new THREE.Points(particlesGeometry, particlesMaterial)
        scene.add(particles)

        let animationId

        const animate = () => {
            animationId = requestAnimationFrame(animate)
            particles.rotation.y += 0.0002
            particles.rotation.x = 0.3
            renderer.render(scene, camera)
        }
        animate()

        return () => {
            cancelAnimationFrame(animationId)
            particlesGeometry.dispose()
            particlesMaterial.dispose()
        }
    }, [scene, camera, renderer, isMobile])

    return (
        <section className="relative min-h-screen py-20 px-4 sm:px-6 bg-[#0a0e27] overflow-hidden" id="competences">
            <div className="absolute inset-0 bg-gradient-to-b from-violet-950/20 via-transparent to-violet-950/20" />

            {!isMobile && <canvas ref={canvasRef} className="absolute inset-0 opacity-40" />}

            <div className="relative z-10 max-w-6xl mx-auto">
                <div className="mb-16 text-center">
                    <span className="inline-block px-4 py-1.5 mb-4 bg-violet-500/20 border border-violet-400/30 text-violet-300 text-sm font-medium">
                        Compétences
                    </span>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-violet-200 to-purple-300 bg-clip-text text-transparent">
                        Stack Technique
                    </h2>
                    <p className="text-slate-400 text-lg">
                        Technologies et outils utilisés
                    </p>
                </div>
                <div className="flex justify-center gap-4 mb-12">
                    {['Frontend', 'Backend', 'Tools'].map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-3 border transition-all duration-300 ${
                                selectedCategory === category
                                    ? 'bg-violet-600 border-violet-500 text-white'
                                    : 'bg-slate-900/50 border-slate-700 text-slate-300 hover:border-violet-400/50'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
                    {filteredSkills.map((skill) => (
                        <div
                            key={skill.name}
                            className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-5 hover:border-violet-500/50 hover:bg-slate-800/50 transition-all duration-300 group text-center flex flex-col items-center gap-3"
                        >
                            <div className="relative w-12 h-12 group-hover:scale-110 transition-transform duration-300">
                                <Image
                                    src={skill.logo}
                                    alt={skill.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="text-sm font-semibold text-white group-hover:text-violet-300 transition-colors duration-300">
                                {skill.name}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}