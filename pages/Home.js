import { Link, Router} from '../routes';

export default () => (
  <div>
    <h1>NextJS</h1>
    <ul>
      <li><Link route="home"><a>Home</a></Link></li>
      <li><a onClick={() => Router.pushRoute('about')}>About</a></li>
      <li><Link route="posts" params={{ slug: 'best-post-ever'}}><a>Post</a></Link></li>
    </ul>
  </div>
);