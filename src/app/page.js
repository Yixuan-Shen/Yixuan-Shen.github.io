import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
      </div>

      <div className={styles.center}>
        <h1>Yixuan Shen</h1>
      </div>

      <div className={styles.career}>
        <h2>Software Engineer</h2>
      </div>

      <div className={styles.grid}>
        <a
          href="https://github.com/Yixuan-Shen"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            GitHub <span>-&gt;</span>
          </h2>
        </a>

        <a
          href="https://www.linkedin.com/in/yixuan-shen-309419253/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            LinkedIn <span>-&gt;</span>
          </h2>
        </a>

        <a
          href="\src\app\Yixuan Shen-Resume.pdf"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Resume <span>-&gt;</span>
          </h2>
        </a>

      </div>
    </main>
  )
}
