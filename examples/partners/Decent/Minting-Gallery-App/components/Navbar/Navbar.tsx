import Link from "next/link";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Image from "next/image";
import styles from "./navbar.module.css";

interface NavItemProps {
  href: string;
  children: string | JSX.Element;
  openInNewTab?: boolean;
}

const Navbar = (props: any) => {
  function NavItem({ href, openInNewTab, children }: NavItemProps): JSX.Element {
    return (
      <Link passHref href={href} target={openInNewTab ? "_blank" : undefined} rel={openInNewTab ? "noreferrer" : undefined}>
        <p
          className={`tracking-widest font-[380] text-base hover:text-opacity-80 text-white p-2`}
        >
          {children}
        </p>
      </Link>
    );
  }

  return (
    <>
      <nav className={`${styles.navbar} w-full flex flex-wrap items-center sm:justify-between justify-center`} >
        <div className="flex gap-12 items-center">
          <NavItem href="http://decent.xyz/" openInNewTab><Image width={48} height={48} src="/images/decent-icon.png" alt="decent" /></NavItem>
          <p className="text-lg font-thin">{`${props.name}'s Curated Portfolio`}</p>
        </div>
        <div className="flex items-center gap-4">
          <ConnectButton />
          <Link href='https://github.com/decentxyz/Portfolio-Page' target='_blank'>
            <Image src='/images/github-mark-white.svg' height={20} width={20} alt='link to repository' />
          </Link>
          </div>
      </nav>
    </>

  );
};

export default Navbar;