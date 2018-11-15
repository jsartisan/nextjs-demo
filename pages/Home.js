import { Link, Router} from '../routes';
import Head from 'next/head';

const Home =  () => (
  <div className="flex-center position-ref full-height">
    <Head>
      <title>Home - NextJS</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="content">
        <div className="title m-b-md">
          NextJS
        </div>

        <div className="links">
          <Link route="home"><a>Home</a></Link>
          <Link route="about"><a>About</a></Link>
          <Link route="posts" params={{ slug: 'best-post-ever'}}><a>Post</a></Link>
        </div>
    </div>
  </div>
);

export default Home;