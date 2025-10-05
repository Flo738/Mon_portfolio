'use client'
import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

export function useThreeback(variant = 'hero', disableMobileCheck = false) {
    const canvasRef = useRef(null)
    const mouseRef = useRef({ x: 0, y: 0 })
    const [threeObjects, setThreeObjects] = useState(null)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
        setIsMobile(checkMobile)

        if (checkMobile && !disableMobileCheck) return

        if (!canvasRef.current) return

        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true, antialias: true })

        renderer.setSize(window.innerWidth, window.innerHeight)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        camera.position.z = variant === 'hero' ? 5 : 20

        const ambientLight = new THREE.AmbientLight(0xffffff, variant === 'hero' ? 0.8 : 0.5)
        scene.add(ambientLight)

        const pointLight = new THREE.PointLight(0x8b5cf6, variant === 'hero' ? 2 : 1)
        pointLight.position.set(variant === 'hero' ? 5 : 10, variant === 'hero' ? 5 : 10, variant === 'hero' ? 5 : 10)
        scene.add(pointLight)

        const handleMouseMove = (e) => {
            mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1
            mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1
        }
        window.addEventListener('mousemove', handleMouseMove)

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight
            camera.updateProjectionMatrix()
            renderer.setSize(window.innerWidth, window.innerHeight)
        }
        window.addEventListener('resize', handleResize)

        setThreeObjects({ scene, camera, renderer })

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('resize', handleResize)
            renderer.dispose()
        }
    }, [variant, disableMobileCheck])

    return { canvasRef, mouseRef, isMobile, ...(threeObjects || {}) }
}