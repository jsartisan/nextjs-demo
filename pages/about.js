import Link from 'next/link';

export default () => (
  <div>
    <span>About Us</span>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias error voluptatibus assumenda soluta dolores, odit, ducimus doloribus libero quo in. Iusto omnis eveniet fuga harum soluta porro voluptate vel nihil.</p>
    <ul>
      <li><Link href="/"><a>Home</a></Link></li>
      <li><Link href="/about"><a>About</a></Link></li>
    </ul>
  </div>
);