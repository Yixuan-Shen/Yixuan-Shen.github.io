import styles from "./page.module.css";
import Link from "next/link";
import Frontpage from "@/utils/frontpage/frontpage";


export default function Home() {
  return (
    <>
      <title>Yixuan Shen</title>
      <meta name="description" content="Yixuan Shen's personal website" />
      <link rel="icon" href="/favicon.ico" />
      <main className={styles.main}>
        <Frontpage />
        <Link href={"./about"}> About </Link>
      </main>
    </>
  );
}
