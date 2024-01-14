import styles from './../styles/About.module.css'
const AboutPage = () => {
  return (
    <>  <div className={styles['about']}>
      <h3>A Little Bit About Me</h3>
      <br />
      <h4>
        Hey there! 👋 I'm Mayank, a student at the Army Institute of Technology in Pune, on a mission to make the web more awesome! 💻✨

        As a budding web developer, I find joy in unraveling the intricacies of code and transforming ideas into vibrant digital experiences. Currently immersed in the dynamic world of web technologies, I'm always ready for the next coding adventure. <br />
        <br />
        **What I Do**  <br />
        <br />

        - **Frontend Sorcerer:** Crafting delightful user interfaces is my specialty. Armed with HTML, CSS, and React.js spells, I bring designs to life with a touch of magic.
      <br /> <br />
        - **Backend Alchemist:** In the backend realms, I wield the power of Node.js to build robust systems that breathe life into applications.
        <br /> <br />
        - **Database Wizard:** MongoDB and Firebase are my enchanted tools for weaving data into seamless and reliable structures. <br />
        <br /> <br />
        **Projects That Spark My Magic**
        <br /> <br />
        - **Shoppers 🛍️:** An enchanting e-commerce platform for the latest fashion trends. [Source Code](https://github.com/Mayank13579/ecommerce_react) | [Live Demo](https://ecommerce-react-ivory-seven.vercel.app/)
      <br />
        - **AIT-leave portal 🏰:** Simplifying leave authorization for AIT students. [Source Code](https://github.com/Mayank13579/College-Leave-System) | [Live Demo](https://college-leave-system.vercel.app/)
<br />
        - **College Complaint System 📣:** A wizardly website for managing complaints at AIT Pune. [Source Code](https://github.com/Mayank13579/AIT-Complain) | [Live Demo](https://healthyways.herokuapp.com/)
br
        - **TODO List ✅:** A React-based magical task manager. [Source Code](https://github.com/Mayank13579/react-todo-list) | [Live Demo](https://react-todo-list-teal.vercel.app/) <br />
        <br />
        <br />
        **The Adventure Continues...**
        <br /> <br />

        As I navigate the world of web development, I'm fueled by a curious spirit and a commitment to creating memorable online experiences. I'm not just coding; I'm conjuring digital realms where users can explore and connect.

        Let's embark on this coding journey together! Feel free to reach out for collaborations, questions, or just to share your favorite coding spells. 🚀
      </h4>
      </div>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
