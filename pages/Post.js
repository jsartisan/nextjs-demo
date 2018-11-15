import { Link } from '../routes';

const Post =  ({ stars }) => (
  <div className="flex-center position-ref full-height">
    <div className="content">
        <div className="title m-b-md">
          Count: {stars}
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

Post.getInitialProps = async ({ query }) => {
  const res = await fetch('https://api.github.com/repos/zeit/next.js')
  const json = await res.json()
  return { stars: json.stargazers_count }
};


export default Post;