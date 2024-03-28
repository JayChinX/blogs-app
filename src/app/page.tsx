import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>Welcome to Next.js!
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/blog">blog</Link>
    </div>
    
  );
}
