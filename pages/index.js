import Head from 'next/head'
import Animation from '../components/DeskVersion/Animation'
import Image from 'next/image'
import Column from '../components/DeskVersion/ColumnSide'
import Buy_form_desk from '../components/DeskVersion/Buy_Form'

export default function Home() {
  
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

                        <div className="product ProductCard">
                            
                                <div className="ModuleImg-div">
                                    <Image src="/module_1.svg" width="42%" height="47%"/>
                                </div>
                            
                            
                            <p className="pkg_numb">Package No. 1</p>
                            <p >$100</p>
                        </div>

                        <button onClick={Show_Form} className="buy_button">Buy</button>
                        

                        <div className="product ProductCard">
                            <div className="ModuleImg-div">
                                <Image src="/module_2.svg" width="42%" height="50%"/>
                            </div>
                            <p className="pkg_numb">Package No. 2</p>
                            <p >$100</p>
                        </div>

                        <button onClick={Show_Form} className="buy_button">Buy</button>
                        

                        <div className="product ProductCard">
                            <div className="ModuleImg-div">
                                <Image src="/module_3.svg" width="42%" height="50%"/>
                            </div>

                            <p className="pkg_numb">Package No. 3</p>
                            <p >$100</p>
                        </div>

                        <button  onClick={Show_Form} className="buy_button">Buy</button>
                            
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
