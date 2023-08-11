import Image from 'next/image'
import RsnLogo from './components/RsnLogo'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-8 bg-[#FFCC00] p-4">
      <div className="flex flex-col justify-between items-center w-full gap-24">
        <div className="p-8 w-96">
          <RsnLogo />
        </div>
        <h1 className="text-4xl font-bold text-center font-orbitron text-[#463F3A]">
          New website coming soon...
        </h1>
      </div>
    </main>
  )
}
