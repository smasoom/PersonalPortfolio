
import Hero from './components/main/Hero'
import Skills from './components/main/Skills'
import Footer from './components/main/Footer'
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
      <Skills />
      <Projects/>
      <Por/>
      <Achve/>
      <Footer/>
     
      <Reach/>
     </div>

  </main>
  )
}
