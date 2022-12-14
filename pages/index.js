import { getSession } from 'next-auth/react'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/feed/Feed'
import Header from '../components/header/Header'
import Login from '../components/login/Login'
import Rightbar from '../components/rightbar/Rightbar'
import Sidebar from '../components/sidebar/Sidebar'

export default function Home({session}) {
  if (!session) return <Login />
  return (
    <div>
      <Head>
        <title>Something Not Sure Yet</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className='flex bg-gray-100'>
       <Sidebar />
       <Feed />
       <Rightbar />
      </main>
    </div>
  )
}

export async function getServerSideProps(context){
  const session = await getSession(context)
  return{
    props: {session},
  }
}
