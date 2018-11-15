import { Link } from '../routes';

export default () => (
  <div>
    <h1>About</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit dolorum pariatur, cupiditate corrupti consequuntur voluptatum quo reprehenderit quaerat quod eligendi, nemo id optio saepe laborum alias quae nesciunt. Accusamus, perspiciatis!</p>
    <ul>
      <li><Link route="home"><a>Home</a></Link></li>
      <li><Link route="about"><a>About</a></Link></li>
      <li><Link route="posts" params={{ slug: 'best-post-ever'}}><a>Post</a></Link></li>
    </ul>
  </div>
);