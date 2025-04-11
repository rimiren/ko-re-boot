import Head from 'next/head'
import {Header} from '@/components/Header'
import {Sidebar} from '@/components/Sidebar'
import {MainContent} from '@/components/MainContent'

export default function Home() {
  return (
    <>
      <Head>
        <title>Converted Frontend</title>
      </Head>
      <div className="min-vh-100 d-flex d-flex-column">
        <Header />
        <div className="d-d-flex">
          <Sidebar />
          <MainContent />
        </div>
      </div>
    </>
  )
}
