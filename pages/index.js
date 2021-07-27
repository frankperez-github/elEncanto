import Head from 'next/head'
import Pallets from './Pallets'

export default function Home() {
  return (
    <div>
      <Head>
        <title>El Encanto</title>
        <meta name="description" content="Generated with create next app by Frank Pérez and Adrian Valdés" />
        <link rel="icon" href="/logo_liquidation.ico" />
      </Head>

      <main >
        <Pallets />
      </main>

      
    </div>
  )
}
