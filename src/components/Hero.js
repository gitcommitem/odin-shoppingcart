import '../styles/Hero.css';

const Hero = ({ heading, subheading }) => {
  return (
    <section className='center' id='hero'>
      <div id='hero-lockup'>
        <h1>{heading}</h1>
        <h2>
          <span>{subheading}</span>
        </h2>
      </div>
    </section>
  );
};

export default Hero;
