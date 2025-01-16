```javascript
// pages/about.js
import { unstable_getServerSession } from 'next-auth' //if you use next-auth
import fetch from 'node-fetch';

export async function getServerSideProps(context) {
  //If you use next-auth, you can access session like this:
  // const session = await unstable_getServerSession(context.req, context.res);

  const response = await fetch('https://api.example.com/data');
  if (!response.ok) {
    // Handle HTTP errors
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();

  return {
    props: { data },
  };
}

export default function About({ data }) {
  return (
    <div>
      <h1>About Page</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
```