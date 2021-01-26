import Head from 'next/head'
import { useGetTodosQuery } from '../generated/graphql'
import styles from '../styles/Home.module.css'

export default function Home() {
  const {data, loading, error} = useGetTodosQuery();

  // console.log(data, loading, error);

  return (
    <div className={styles.container}>
      <Head>
        <title>React w/GraphQL server template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Todo List
        </h1>

        <input className={styles.input} type="text" placeholder="Get eggs from the green grocer"/>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/o2bomb/react-graphql"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source code available on Github{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
