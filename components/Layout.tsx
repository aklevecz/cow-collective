import styles from "../styles/Layout.module.css";
import Link from "next/link";

type Props = {
  children: JSX.Element | JSX.Element[];
};

export default function Layout({ children }: Props) {
  return (
    <div className={styles.layout__container}>
      <div className={styles.layout__header}>COW COLLECTIVE</div>
      <div>
        <Link href="/about">about</Link>
      </div>
      {children}
    </div>
  );
}
