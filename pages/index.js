import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Buy_form_desk from '../components/DeskVersion/Buy_Form'
import ProductCard from '../components/DeskVersion/ProductCard'

  

export default function Home({products}) {

  const [page, setPage] = useState(0)
  const [pages, setPages] = useState([])
  useEffect(()=>{
    var pages = []
    for (let i=0;i<products.length;i+=5)
    {
      pages.push({"index":i/5, "isActive":i/5==page?true:false})
    }
    setPages(pages)
  }, [pages]
  )

 
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
                
                  {products.slice(page*5,page*5+5).map(product=><ProductCard key = {product.id} product={product}/>)}

                  <div className="pagination-bar ">
                    
                    <div className="arrow-div">
                      <Image alt="No Image" className="arrow-pag leftarr" src="/Larrow.svg" width="45%" height="45%" />
                    </div>

                
    {pages.map(item=><p key={item.index} onClick={()=>{setPage(item.index)}} className={item["isActive"]?"selectedNumber":""}>{item.index+1}</p>)}
                    <div className="arrow-div">
                      <Image alt="No Image"  className="arrow-pag rightarr" src="/Rarrow.svg" width="45%" height="45%" />
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
      products,
     // pages:[...Array(Math.ceil(products.lenght/5)).keys()]
    }
  }
}