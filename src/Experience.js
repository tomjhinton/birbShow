import {  Text, Float } from "@react-three/drei"
import { OrbitControls , shaderMaterial, Center} from '@react-three/drei'
import { useRef , useEffect, useState, useMemo} from "react"
import * as THREE from 'three'
import { useThree } from "@react-three/fiber"
import { Suspense } from "react"


import Show from "./Show/Show.js"

//import Title from "./Title/Title.js"





export default function Experience(){



    return <>
      <OrbitControls makeDefault enableZoom={true}/>
      <Center>
      
        <Show />
        </Center>

    </>
}