import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Mayank is an avid full stack web developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="mayank , mayank, , web developer portfolio, mayank web developer, mayank developer, mern stack, mayank  portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="mayank 's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />
     
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Mayank',

};
