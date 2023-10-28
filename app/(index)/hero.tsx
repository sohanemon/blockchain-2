import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="container">
      <div className="relative py-20">
        <Image
          alt="hero"
          className="absolute inset-0 my-auto ml-auto max-lg:hidden"
          height={600}
          src={'/assets/hero-img.png'}
          width={600}
        />
        <h1 className="" style={{ fontSize: 'clamp(40px,5vw,56px)' }}>
          Blockchain + Binance
        </h1>
        <p className="font-poppins my-4 w-1/2 text-xl leading-9 max-lg:w-full">
          Every digital artwork on Upside is authentic and truly unique.
          Blockchain technology makes this new aproch to digital ownership
          possible. <br />
          <br /> Open and decentralized protocol for syncing various Wallets
          issues on Secure Server. This is not an app but a protocol that
          establishes a remote resolution between all noncustodial wallet.{' '}
          <br />
          <br /> It is an online server which gets you across to every wallet
          representative to enable effective complain and rectification of
          issues.
          <br />
          <br />
          You will be on a chat with an Artificial Intelligence Robot with zero
          Human interference.
        </p>
        <Link href={'/dapps'}>
          <button className="rounded-lg bg-primary px-5 py-2 transition-all hover:bg-primary/70">
            Connect Wallet
          </button>
        </Link>
      </div>
    </section>
  );
}
