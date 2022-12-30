import Head from "next/head"
import { FC } from "react"
import { Sidebar } from '../ui/Sidebar';

interface Props {
  title: string,
  pageDescription: string,
  children: React.ReactNode
}

export const HomeLayout: FC<Props> = ({ children, title, pageDescription }) => {
  return (
    <div className="h-full">
      <Head>
        <title>{title}</title>
        <meta name="description" content={pageDescription} />

      </Head>

      <main className="flex bg-white">
        <Sidebar />
        <div className="w-full">
          {children}
        </div>
      </main>
    </div>
  )
}
