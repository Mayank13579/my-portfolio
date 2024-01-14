import styles from '../styles/ContactCode.module.css';

const contactItems = [
  // {
  //   social: 'website',
  //   link: 'mayankdeveloper.com',
  //   href: 'https://developermayank.com',
  // },
  {
    social: 'email',
    link: 'mayankupadhyay13579@gmail.com',
    href: 'mailto:mayank',
  },
  {
    social: 'github',
    link: 'Mayank12345',
    href: 'https://github.com/Mayank13579',
  },
  {
    social: 'linkedin',
    link: 'mayank2002',
    href: 'https://www.linkedin.com/in/mayank2002/',
  },
  {
    social: 'twitter',
    link: '@Mayank834431091',
    href: 'https://www.twitter.com/Mayank834431091',
  },
  {
    social: 'instagram',
    link: 'mayank_upadhyay23',
    href: 'https://www.instagram.com/mayank_upadhyay23',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
