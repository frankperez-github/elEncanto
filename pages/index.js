import Head from 'next/head'
import Image from 'next/image'
import Buy_form_desk from '../components/DeskVersion/Buy_Form'
import ProductCard from '../components/DeskVersion/ProductCard'


export default function Home({products}) {
  
  
  return (


    <div>
      <Head>
        <title>El Encanto</title>
        <meta name="description" content="Generated with create next app by Frank Pérez and Adrian Valdés" />
        <link rel="icon" href="/logo_liquidation.ico" />
      </Head>

      <main >
        <div className="Pallets">

            <div id="Pallets-divForm">   

              <div className="Search-div">

                <input placeholder="Looking for something?" />
                <button className="form_button buttonSearch">Search</button>

              </div>
            
              

              <div className="Pallets-div" id="Pallets-div">
              
              
                <div className="Right_side " id="Right_side">
                
                  {products.map (product=><ProductCard key = {product.id} product={product}/>)}

                  <div className="pagination-bar ">
                    
                    <div className="arrow-div">
                      <Image className="arrow-pag leftarr" src="/Larrow.svg" width="45%" height="45%" />
                    </div>

                      <p>1</p>
                      <p>2</p>
                      <p className="selectedNumber">3</p>
                      <p>4</p>
                      <p>5</p>

                    <div className="arrow-div">
                      <Image  className="arrow-pag rightarr" src="/Rarrow.svg" width="45%" height="45%" />
                    </div>

                  </div>  
                  
                </div>


              </div>
            
            </div>

            <Buy_form_desk />

        </div>

      </main>

      
    </div>
  )
}

export const getStaticProps  = async()=> {
  const res = await fetch('http://django-env.eba-mpfqdpns.us-west-2.elasticbeanstalk.com/products')
  
  const products = await res.json()

  return {
    props: {
      products:products
    }
  }
}