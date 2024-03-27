import Image from 'next/image';

const About = () => {
  return (
    <section className="text-gray-400  body-font ">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="relative lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10 object-cover overflow-hidden">
      <Image
        className="object-center rounded grayscale hover:grayscale-0 object-cover overflow-hidden ml-9 mr-0"
        alt="hero"
        src="/m3.jpg"
        width={400}
        height={400}
      />
      <div className="absolute top-0 right-0 w-0 h-0 border-l-16 border-b-16 border-transparent border-purple-500"></div>
    </div>
      <div className=" ml-0 lg:flex-grow md:w-1/2 pr- flex flex-col md:items-start md:text-left items-center text-center ">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Let me introduce myself
         
        </h1>
        <p className="mb-8 leading-relaxed ml-0 pr-52">I am Masoom Sahu, 3rd year undergrad in Civil Engineering from NIT Silchar. I am from 
Sivasagar Assam, a small town with roots of Ahom Dynasty. My roots are from Bihar, and I 
have 
completed my schooling from Kendriya Vidyalaya Nazira. Currently I am Core Member of 
Google Developers Student Club, 
NIT Silchar. I am a full stack Web developer. My skills include React JS, Next JS, SQL, Node 
JS, Prisma with MongoDB for backend development. I have par cipated in several 
hackathons like DPBH 2023, Flipkart Grid, GDSC Explore and proven track record in so ware 
development.  
I have good leadership quality and management skills as I with my team successfully 
organised two major North Easts technical offline hackathons NITS Hacks and GDSC 
Explore in our campus.In addition, I have worked on entrepreneurial competition and won college events, which gave me some experience in Case Study, Market Research and Analysis.</p>
        
      </div>
    </div>
  </section>
  );
};

export default About;
