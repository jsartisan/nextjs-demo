import { Link } from '../routes';

const About =  () => (
  <div className="flex-center position-ref full-height">
    <div className="content">
        <div className="title m-b-md">
          About
        </div>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis accusamus sequi nisi, commodi aperiam numquam quis rem molestias nemo vitae! Aspernatur aut totam harum rem culpa ipsam quisquam quis earum.</p>

        <div className="links">
          <Link route="home"><a>Home</a></Link>
          <Link route="about"><a>About</a></Link>
          <Link route="posts" params={{ slug: 'best-post-ever'}}><a>Post</a></Link>
        </div>
    </div>
  </div>
);

export default About;