import { Link } from '../routes';

export default ({ url }) => (
  <div>
    <h1>{url.query.slug }</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias error voluptatibus assumenda soluta dolores, odit, ducimus doloribus libero quo in. Iusto omnis eveniet fuga harum soluta porro voluptate vel nihil.</p>
    <ul>
      <li><Link route="home"><a>Home</a></Link></li>
      <li><Link route="about"><a>About</a></Link></li>
      <li><Link route="posts" params={{ slug: 'best-post-ever'}}><a>Post</a></Link></li>
    </ul>
  </div>
);