
export const metadata = {
  title: 'Dashboard',
}

export default async function Dashboard() {
  const data = await getData();
  console.log(data);
  return (
    <div>dashboard {data.data.title}</div>
  );
}

async function getData() {
  const res = await fetch('http://localhost:3000/api')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}