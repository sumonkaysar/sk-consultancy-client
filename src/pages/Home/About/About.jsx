import sk from '../../../assets/about/sk.png';
import './About.css';

const About = () => {

  return (
    <div className="container mx-auto">
      <h3 className="text-center text-xl md:text-3xl font-semibold underline mt-16 mb-6">About</h3>
      <div className="sm:flex items-center gap-5 mx-5">
        <div className='about-img flex-1 lg:flex-auto'>
          <div className='bg-slate-400 rounded-xl mx-8 sm:mx-0'>
            <img className='w-full' src={sk} alt="SK" />
          </div>
        </div>
        <div className='about-details flex-1 lg:flex-auto text-center sm:text-left'>
          <h4 className='text-xl sm:text-2xl font-semibold'>Sumon Kaysar</h4>
          <p>Hi!</p>
          <p>I am Sumon Kaysar. I, your consultant, am here to consulting You. With years of experience, I have the capabilities and expertise to take your business to the next level.</p>
          <p>I don't march in on day one with preordained solutions, assumptions or expectations. No one knows your business better than you do, and I start all of my client partnerships the same way: by listening, asking smart questions and arriving at the answers—together.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
