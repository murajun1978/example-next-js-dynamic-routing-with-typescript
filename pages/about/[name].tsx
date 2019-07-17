import Link from 'next/link';
import { useRouter } from 'next/router';

const About = () => {
  const router = useRouter();
  const { name } = router.query;

  return (
    <>
      <p>About: {name}</p>
      <Link href="/">
        <a>Home</a>
      </Link>
    </>
  );
};

export default About;
