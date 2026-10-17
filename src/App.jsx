import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Renderer from './components/Renderer.jsx'
import { generateDataset } from './logic/dataset-generator.js'

export default function App() {
  const dataset = generateDataset(16, 2)

  return <Renderer dataset={ dataset } />
}


//export default App
