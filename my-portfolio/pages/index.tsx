import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Mohit's Portfolio</title>
      </Head>

      <h1 className='text-red-500'>My Name is Mohit Mishra</h1>
    </div>
  )
}

export default Home
