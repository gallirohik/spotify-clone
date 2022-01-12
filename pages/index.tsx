import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Sidebar from '../components/Sidebar'
const Home: NextPage = () => {
  return (
    <div className="bg-black h-screen overflow-hidden">
     <Sidebar />
      <main>
      </main>
    </div>
  )
}

export default Home
