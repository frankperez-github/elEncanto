import Head from 'next/head'
import PresentationDesk from '../pages/PresentationDesk'
import Presentation_mob from '../pages/Presentation_mob'

export default function Home() {
  return (
    <div>
      <Head>
        <title>El Encanto</title>
        <meta name="description" content="Generated with create next app by Frank Pérez and Adrian Valdés" />
        <link rel="icon" href="/Logo_Liquidation.ico" />
      </Head>

      <main >
        <PresentationDesk />

        <Presentation_mob />
      </main>

      
    </div>
  )
}
