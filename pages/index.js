import Head from 'next/head'
import Animation from '../components/DeskVersion/Animation'
import Image from 'next/image'
import Column from '../components/DeskVersion/ColumnSide'
import Buy_form_desk from '../components/DeskVersion/Buy_Form'
import ProductCard from '../components/DeskVersion/ProductCard'

export default function Home({products}) {
  
  const Show_Form =()=>{
    document.getElementById('buy_form_desk').style.display="block";
    document.getElementById('StaticTruck').style.display="block";
    document.getElementById('Animation').style.display="none";
    document.getElementById('Pallets-divForm').style.display="none";
  }

 
  
  return (
    <div>
      <Head>
        <title>El Encanto</title>
        <meta name="description" content="Generated with create next app by Frank Pérez and Adrian Valdés" />
        <link rel="icon" href="/logo_liquidation.ico" />
      </Head>

      <main >
        <div className="Pallets">

            <Animation />
            <div id="Pallets-divForm">    
                <div className="Pallets-div" id="Pallets-div">
                
                
                    <div className="StaticTruck-div">
                        <Image id="StaticTruck" src="/truck.svg" width="450%" height="300%"/>
                    </div>

                        
                    <div className="Right_side" id="Right_side">
                    
                      {products.map(product=><ProductCard key = {product.id} product={product}/>)}

                     
                    </div>
                    
                    <Column />

                </div>
            </div>

            <Buy_form_desk />

        </div>

      </main>

      
    </div>
  )
}

export const getServerSideProps  = async()=> {
  const res = await fetch('https://elencanto-drf-api.herokuapp.com/products')
  
  const products = await res.json()

  return {
    props: {
      products
    }
  }
}