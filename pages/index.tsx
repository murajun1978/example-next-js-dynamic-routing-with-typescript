import Link from 'next/link';

const Home = () => (
  <>
    <div>Hello, Next.js</div>
    <Link href={'/about/next'}>
      <a>About Next</a>
    </Link>
  </>
);

export default Home;
