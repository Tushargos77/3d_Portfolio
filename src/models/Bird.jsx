import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import birdScene from '../assets/3d/bird.glb'

const Bird = () => {
  const birdRef = useRef()
  const { scene, animations } = useGLTF(birdScene)
  const { actions } = useAnimations(animations, birdRef)

  useEffect(() => {
    actions[Object.keys(actions)[0]]?.play()
  }, [actions])

  useFrame(({ clock }) => {
    if (!birdRef.current) return

    const t = clock.getElapsedTime()
    const flyInDuration = 20
    const radius = 12

    if (t < flyInDuration) {
      const progress = t / flyInDuration
      const eased = 1 - Math.pow(1 - progress, 1.5)

      birdRef.current.position.x = -40 + eased * 40
      birdRef.current.position.y = 20 - eased * 16
      birdRef.current.position.z = 15 - eased * 3

      birdRef.current.rotation.y = Math.PI * 0.6
      birdRef.current.rotation.z = Math.sin(t * 0.8) * 0.08

    } else {
      const orbitT = t - flyInDuration
      const progress = (orbitT % 10) / 10

      birdRef.current.position.x = Math.sin(progress * Math.PI * 2) * radius
      birdRef.current.position.y = 4 + Math.sin(progress * Math.PI * 4) * 0.5
      birdRef.current.position.z = Math.cos(progress * Math.PI * 2) * radius

      birdRef.current.rotation.y = -progress * Math.PI * 2
      birdRef.current.rotation.z = 0
    }
  })

  return (
    <mesh
      ref={birdRef}
      position={[-40, 20, 15]}
      scale={[0.005, 0.005, 0.005]}
    >
      <primitive object={scene} />
    </mesh>
  )
}

export default Bird