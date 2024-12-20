import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.js'
import Lights from './Lights'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
  
    <Canvas
        shadows
        camera={ {
            fov: 45,
            near: 0.1,
            far: 200,
            position: [ 0,0, 10 ]
        } }
    >
        <Lights />
        <Experience />
    </Canvas>
)