import heroImage from '../../assets/hero.png';
import ContactButton from '../contactButton/ContactButton';

export const Home = () => {
  return (
    <section className="bg-slate-gradient py-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left px-4">
          <div className="inline-block bg-white text-sm uppercase tracking-wide font-normal px-4 py-3 rounded-full mb-4 shadow-md">
            IT Solutions for the Future
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-10">
            We Bring Ideas To Life.
          </h1>
           <ContactButton contactText={ 'Contact Us +' }/>
        </div>
        <div className="px-4 md:px-0">
          <img src={heroImage} alt="Hero" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default Home;
