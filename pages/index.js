import Link from 'next/link';

export default () => (
  <div>
    <span>NextJS</span>
    <ul>
      <li><Link href="/"><a>Home</a></Link></li>
      <li><Link href="/about"><a>About</a></Link></li>
    </ul>
  </div>
);