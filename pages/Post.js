import { Link, Router } from '../routes';

const Post =  ({ query }) => (
  <div>
    <h1>{query.slug}</h1>
    <ul>
      <li><Link route="home"><a>Home</a></Link></li>
      <li><a onClick={() => Router.pushRoute('about')}>About</a></li>
      <li><Link route="posts" params={{ slug: 'best-post-ever'}}><a>Post</a></Link></li>
    </ul>
  </div>
);

Post.getInitialProps = async ({ query }) => {
  return { query }
};


export default Post;