import styles from "../page.module.css";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <title>Yixuan Shen | About</title>
      <meta name="description" content="Yixuan Shen's personal website" />
      <link rel="icon" href="/favicon.ico" />
      <main className={styles.main}>
        <h2 className="text-display-sm">About Me</h2>
        <Link href="/">
          <div className="cursor-pointer text-xl text-teal-200 flex gap-4 items-center self-start">
            Back to Main
          </div>
        </Link>
      </main>
    </>
  );
}
