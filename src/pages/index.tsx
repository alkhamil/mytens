import axios from "axios";
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import { getReposData } from '@/state/actions/repoActions';

export default function Home() {
  const data = useSelector((state: any) => state?.repo);
  const dispatch = useDispatch();

  const fetchRepos = async () => {
    await axios.get("https://api.github.com/users/alkhamil/repos")
      .then((res) => {
        dispatch(getReposData(res.data))
      })
  }

  useEffect(() => {
    fetchRepos()
  }, [])

  const handleClickItem = (item: any) => {
    window.open(item.html_url)
  }
  
  return (
    <>
      <Head>
        <title>Github Repositories</title>
        <meta name="description" content="Github repositories" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.header}>
        <h1>Github Repositories | MyTens</h1>
        </div>
        {data.loading ? <p>Loading</p> :
          <div className={styles.repoWrapper}>
            {data.repos.map((item: any, i: string) => {
              return (
                <div onClick={() => handleClickItem(item)} key={i} className={styles.repoItem}>
                  <div className={styles.repoItemTitle}>
                    <h2>{item.name}</h2>
                    <div className={styles.badge}>{item.visibility}</div>
                  </div>
                  <div className={styles.repoItemInfo}>
                    <p>{item.language}</p>
                    <p>{item.updated_at}</p>
                  </div>
                </div>
              )
            })}
          </div>
        }
      </main>
    </>
  )
}
