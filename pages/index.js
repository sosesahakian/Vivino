import { Inter } from '@next/font/google'
import Homepage from './Homepage'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div>
        <Header />
        <Homepage />
      </div>
    </>
  )
}
