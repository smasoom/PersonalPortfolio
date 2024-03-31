import Image from 'next/image';

const About = () => {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
  <div className="container  flex  md:flex-row flex-col flex-wrap items-center">
   
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-justify ">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Let me 
        introduce myself...
      </h1>
      <p className="mb-8 leading-relaxed text-justify mx-5 ">I am Masoom Sahu, 3rd year undergrad in Civil Engineering from NIT Silchar. I am from Sivasagar Assam, a small town with roots of Ahom Dynasty. My roots are from Bihar, and I have completed my schooling from Kendriya Vidyalaya Nazira. Currently I am Core Member of Google Developers Student Club, NIT Silchar. I am a full stack Web developer. My skills include React JS, Next JS, SQL, Node JS, Prisma with MongoDB for backend development. I have par cipated in several hackathons like DPBH 2023, Flipkart Grid, GDSC Explore and proven track record in so ware development. I have good leadership quality and management skills as I with my team successfully organised two major North Easts technical offline hackathons NITS Hacks and GDSC Explore in our campus.In addition, I have worked on entrepreneurial competition and won college events, which gave me some experience in Case Study, Market Research and Analysis.</p>
     
    </div>
    <div className=" lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10 flex justify-center bg-gray-700">
    <Image
            src="/m2.jpg"
            alt="about"
            width={300}
            height={300}
            className="object-cover object-center rounded w-2/3"
          />
      
    </div>
  </div>
</section>
  );
};

export default About;
