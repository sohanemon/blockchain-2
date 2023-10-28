import Link from 'next/link';

export default function Footer() {
  return (
    <section className="font-mont box flex items-center justify-between py-8 text-white">
      <p>Copyright © 2022 Blockchain Rectification . All rights reserved.</p>
      <div>
        <Link href={'/'}>Privacy Policy</Link> •{' '}
        <Link href={'/'}>Terms of Service</Link>
      </div>
    </section>
  );
}
