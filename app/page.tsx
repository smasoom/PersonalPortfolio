import Encryption from './components/main/Encryption'
import Hero from './components/main/Hero'
import Skills from './components/main/Skills'
import Footer from './components/main/Footer'



import Image from 'next/image'

import Projects from './components/main/Projects'

export default function Home() {
  return (

  <main className='h-full w-full'>
     <div className="flex flex-col  gap-20">
      <Hero/>
      <Skills />
      <Projects/>
      <Footer/>
      <Encryption/>
     </div>

  </main>
  )
}
