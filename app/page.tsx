
import Hero from './components/main/Hero'
import Skills from './components/main/Skills'
import About from './components/main/About'

import Reach from './components/main/Reach'
import Por from './components/main/Por'
import Achve from './components/Achve'
import Image from 'next/image'

import Projects from './components/main/Projects'




export default function Home() {
  return (

  <main className='h-full w-full'>
     <div className="flex flex-col  gap-20">
      <Hero/>
      <About/>
      <Skills />
      <Projects/>
      <Por/>
      <Achve/>
      <Reach/>
     </div>

  </main>
  )
}
