const AboutPage = () => {
  return (
    <>
      <h3>A Little Bit About Me</h3>
      <br />
      <h4>As a seasoned web developer with a passion for crafting innovative and efficient digital solutions, I bring expertise in a variety of technologies, including Node.js and React.js. With a solid foundation in full-stack development, I thrive on turning creative concepts into functional, user-friendly applications. My journey in web development is marked by a commitment to staying abreast of the latest industry trends and continuously expanding my skill set. <br />
      <br />
       Whether architecting scalable backend systems or designing intuitive user interfaces, I approach every project with a dedication to excellence and a keen eye for detail. My goal is to create seamless and impactful digital experiences that not only meet but exceed client expectations. With a proven track record of successful projects and a genuine enthusiasm for tackling new challenges, I am poised to contribute to the ever-evolving landscape of web development.</h4>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
