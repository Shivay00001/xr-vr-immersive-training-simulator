

import { Canvas } from '@react-three/fiber'
import { XR, VRButton, Controllers, Hands } from '@react-three/xr'
import { VRScene } from './components/VRScene'
import { UIOverlay } from './components/UIOverlay'

function App() {
    return (
        <>
            <VRButton />
            <Canvas>
                <XR>
                    <Controllers />
                    <Hands />
                    <VRScene />
                </XR>
            </Canvas>
            <UIOverlay />
        </>
    )
}

export default App
