

import { useStore } from '../store'

export function UIOverlay() {
    const { score, reset } = useStore()

    return (
        <div style={{
            position: 'absolute',
            top: 20,
            left: 20,
            color: 'white',
            fontFamily: 'monospace',
            pointerEvents: 'none'
        }}>
            <h1>Training Module: Safety Simulation</h1>
            <p>Score: {score}</p>
            <div style={{ pointerEvents: 'auto' }}>
                <button onClick={reset} style={{ padding: '10px', marginTop: '10px' }}>
                    Reset Simulation
                </button>
            </div>
        </div>
    )
}
