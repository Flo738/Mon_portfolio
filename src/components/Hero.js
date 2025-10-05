'use client'
import { useEffect, useState } from 'react'
import * as THREE from 'three'
import Image from 'next/image'
import { useThreeback } from '@/hooks/Threeback'

export default function Hero() {
    const [isLoaded, setIsLoaded] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const { canvasRef, mouseRef, scene, camera, renderer } = useThreeback('hero', true)

    useEffect(() => {
        setIsMobile(window.innerWidth < 768)
        setTimeout(() => setIsLoaded(true), 300)

        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        if (!scene || !camera || !renderer) return

        const geometry = new THREE.IcosahedronGeometry(1.8, 0)
        const edges = new THREE.EdgesGeometry(geometry)
        const material = new THREE.LineBasicMaterial({ color: 0x8b5cf6, linewidth: 3 })
        const mainShape = new THREE.LineSegments(edges, material)
        scene.add(mainShape)

        const innerGeometry = new THREE.IcosahedronGeometry(1.2, 0)
        const innerEdges = new THREE.EdgesGeometry(innerGeometry)
        const innerMaterial = new THREE.LineBasicMaterial({
            color: 0xa78bfa,
            linewidth: 2,
            transparent: true,
            opacity: 0.6
        })
        const innerShape = new THREE.LineSegments(innerEdges, innerMaterial)
        scene.add(innerShape)

        const particlesCount = window.innerWidth < 768 ? 50 : 80
        const particlesGeometry = new THREE.BufferGeometry()
        const positions = new Float32Array(particlesCount * 3)
        for (let i = 0; i < particlesCount * 3; i++) {
            positions[i] = (Math.random() - 0.5) * 10
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
        const particlesMaterial = new THREE.PointsMaterial({
            color: 0xa78bfa,
            size: 0.08,
            sizeAttenuation: true,
            opacity: 0.6,
            transparent: true
        })
        const particles = new THREE.Points(particlesGeometry, particlesMaterial)
        scene.add(particles)

        let animationId

        const animate = () => {
            animationId = requestAnimationFrame(animate)
            mainShape.rotation.x += 0.003
            mainShape.rotation.y += 0.005
            innerShape.rotation.x += 0.004
            innerShape.rotation.y += 0.006

            if (window.innerWidth >= 768) {
                mainShape.rotation.y += mouseRef.current.x * 0.01
                mainShape.rotation.x += mouseRef.current.y * 0.01
                innerShape.rotation.y += mouseRef.current.x * 0.008
                innerShape.rotation.x += mouseRef.current.y * 0.008
            }

            particles.rotation.y += 0.003
            renderer.render(scene, camera)
        }
        animate()

        return () => {
            cancelAnimationFrame(animationId)
            geometry.dispose()
            edges.dispose()
            material.dispose()
            innerGeometry.dispose()
            innerEdges.dispose()
            innerMaterial.dispose()
            particlesGeometry.dispose()
            particlesMaterial.dispose()
        }
    }, [scene, camera, renderer, mouseRef])

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0e27]" id="hero">
            <div className={`absolute inset-0 bg-violet-600 transition-opacity duration-1000 ${isLoaded ? 'opacity-0' : 'opacity-20'}`} />
            <canvas ref={canvasRef} className={`absolute inset-0 ${isMobile ? 'opacity-30' : 'opacity-50'}`} />

            <div className="relative z-10 w-full px-4 sm:px-6 max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 md:gap-12">
                    <div className={`flex-shrink-0 transition-all duration-1000 ${isLoaded ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-90 -translate-x-10'}`}>
                        <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-2xl shadow-violet-500/50 border-4 border-violet-400/30 hover:border-violet-400/60 transition-all duration-500 hover:scale-105 hover:shadow-violet-500/70">
                            <Image src="/portfolio.jpg" alt="Photo de Florian Pacard" fill className="object-cover" />
                        </div>
                    </div>

                    <div className="flex-1 text-center md:text-left max-w-2xl">
                        <div className={`mb-3 sm:mb-4 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <span className="inline-block px-4 py-1.5 bg-violet-500/20 border border-violet-400/30 text-violet-300 text-sm font-medium">Développeur Full-Stack</span>
                        </div>

                        <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-10 blur-sm'}`}>
                            <span className="block bg-gradient-to-r from-white via-violet-200 to-purple-300 bg-clip-text text-transparent">Florian Pacard</span>
                        </h1>

                        <p className={`text-lg sm:text-xl mb-6 sm:mb-8 text-slate-300 leading-relaxed transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
                            Je suis passionné par le développement web et toujours prêt à relever de nouveaux défis.<br />
                            Création de solutions <span className="text-violet-300 font-semibold">web modernes</span> et <span className="text-violet-300 font-semibold">performantes.</span>
                        </p>

                        <div className={`flex gap-3 justify-center md:justify-start mb-6 sm:mb-8 transition-all duration-1000 delay-600 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
                            <a href="https://github.com/Flo738" target="_blank" rel="noopener noreferrer">
                                <Image src="/github.svg" alt="GitHub" width={31} height={31} className="opacity-70 hover:opacity-100 transition-opacity duration-300" />
                            </a>
                            <a href="https://www.linkedin.com/in/florian-pacard/" target="_blank" rel="noopener noreferrer">
                                <Image src="/linkedin.svg" alt="LinkedIn" width={36} height={36} className="opacity-70 hover:opacity-100 transition-opacity duration-300" />
                            </a>
                        </div>

                        <div className={`flex flex-col sm:flex-row gap-4 items-center md:items-start transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            <a href="#contact">
                                <button className="px-6 py-3 text-base bg-violet-600 hover:bg-violet-700 border border-slate-700 hover:border-violet-400/50 text-white transition-all duration-300 inline-flex items-center justify-center gap-2 w-auto">
                                    <span>Me contacter</span>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}