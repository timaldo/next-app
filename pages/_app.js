import Link from 'next/link';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Component {...pageProps} />
      <footer>Copyright&#169;{new Date().getFullYear()} Tim Dorsett, All rights reserved.</footer>
    </>
  );
};
export default MyApp;
