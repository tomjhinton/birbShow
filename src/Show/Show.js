import { OrbitControls , shaderMaterial, Center, Text, Float} from '@react-three/drei'
import React, { useRef, useState } from 'react'
import {  useFrame, extend } from '@react-three/fiber'
import vertexShader from './shaders/vertex.js'
import fragmentShader from './shaders/fragment.js'
import * as THREE from 'three'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'


export default function Experience(){
  const picture = useLoader(TextureLoader,  `update1.png`)
  const picture2 = useLoader(TextureLoader,  `update2.png`)

    const PlaneMaterial = shaderMaterial(

        {
            uTime: 0,
            pic: picture,
            pic2: picture2,
        },
        vertexShader,
        fragmentShader
    )
    extend({PlaneMaterial})
    

const ref = useRef()
// Hold state for hovered and clicked events
const [hovered, hover] = useState(false)
const [clicked, click] = useState(false)
const planeMaterial = useRef()
useFrame((state, delta) => {
    planeMaterial.current.uTime += delta
})


// Subscribe this component to the render-loop, rotate the mesh every frame
// useFrame((state, delta) => (ref.current.rotation.x += delta))
    return(

<>
<OrbitControls makeDefault enableZoom={true} maxPolarAngle={Math.PI * .5}/>



<mesh
     
      ref={ref}
      scale={clicked ? 1. : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <planeGeometry args={[7, 7,200,200]} />
      <planeMaterial ref={planeMaterial} side={THREE.DoubleSide} pic={picture}/>
      
    </mesh>
      </>
    )
}