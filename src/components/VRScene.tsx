
import { OrbitControls, Sky, Stars } from '@react-three/drei'
import { Physics, useBox } from '@react-three/cannon'
import { useState } from 'react'
import type { Mesh } from 'three'

function Box(props: any) {
    const [ref, api] = useBox<Mesh>(() => ({ mass: 1, position: [0, 5, 0], ...props }))
    const [hover, set] = useState(false)

    return (
        <mesh
            ref={ref}
            onPointerOver={() => set(true)}
            onPointerOut={() => set(false)}
            onClick={() => api.velocity.set(0, 5, 0)}
        >
            <boxGeometry />
            <meshStandardMaterial color={hover ? 'hotpink' : 'orange'} />
        </mesh>
    )
}

function Ground() {
    const [ref] = useBox<Mesh>(() => ({ rotation: [-Math.PI / 2, 0, 0], mass: 0 }))
    return (
        <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[100, 100]} />
            <meshStandardMaterial color="#333" />
        </mesh>
    )
}

export function VRScene() {
    return (
        <>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Sky />
            <Stars />
            <Physics>
                <Box position={[0, 2, -3]} />
                <Box position={[1, 4, -3]} />
                <Box position={[-1, 3, -3]} />
                <Ground />
            </Physics>
            <OrbitControls />
        </>
    )
}
