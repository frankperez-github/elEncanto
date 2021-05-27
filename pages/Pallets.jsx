import Image from 'next/image';
import Link from 'next/link'
import Column from '../components/DeskVersion/ColumnSide';
import Buy_form from './Buy_form';
import Pallets_mob from './Pallets_mob';

const Show_Form =()=>{
    document.getElementById('buy_form_desk').style.display="block";
}

function Pallets (){

    
    return(
        <div className="borders">

            <div className="nav_bar">
                <div className="logo">
                    <Image className="logo_img" src="/../public/imgs/Logo_Liquidation.svg" alt="Logo" width="150%" height="150%" />
                </div>

                <div className="nav">

                    <div className="link-div">
                        <Link href="/Pallets" className="link_a"> 
                            <div className="NavLink-div">
                                <div className="LinkImg">
                                    <Image src="/../public/imgs/link_pallets.svg" width="40%" height="40%"/> 
                                </div>

                                <div className="LinkName">
                                    Pallets
                                </div> 
                            </div>
                        </Link>
                        
                        
                    </div>

                    <div className="link-div" >
                        <Link href="/Products" className="link_a">
                            <div className="NavLink-div">
                                <div className="LinkImg">
                                    <Image src="/../public/imgs/link_products.svg" width="40%" height="40%"/> 
                                </div>

                                <div className="LinkName">
                                    Products
                                </div> 
                            </div>
                        </Link>
                    </div>

                    <div className="link-div">
                        <Link href="/Contact">
                        <div className="NavLink-div">
                                <div className="LinkImg">
                                    <Image src="/../public/imgs/link_contact.svg" width="40%" height="40%"/> 
                                </div>

                                <div className="LinkName">
                                    Contact
                                </div> 
                            </div>
                        </Link>
                    </div>

                </div>
            </div>

            <div className="CenterSection">

                <div className="Pallets">

                    <Buy_form/>

                    <Pallets_mob />
                        
                    <div className="Pallets-div">
                    
                    
                        <div className="StaticTruck-div">
                                <Image className="StaticTruck" src="/../public/imgs/Truck.svg" width="450%" height="300%"/>
                        </div>

                            
                        <div className="Right_side" >

                            <div className="product ProductCard">
                                
                                    <div className="ModuleImg-div">
                                        <Image src="/../public/imgs/Module_1.svg" width="42%" height="47%"/>
                                    </div>
                                
                                
                                <p className="pkg_numb">Package No. 1</p>
                                <p >$100</p>
                            </div>

                            <button onClick={Show_Form} className="buy_button">Buy</button>
                            

                            <div className="product ProductCard">
                                <div className="ModuleImg-div">
                                    <Image src="/../public/imgs/Module_2.svg" width="42%" height="50%"/>
                                </div>
                                <p className="pkg_numb">Package No. 2</p>
                                <p >$100</p>
                            </div>

                            <button onClick={Show_Form} className="buy_button">Buy</button>
                            

                            <div className="product ProductCard">
                                <div className="ModuleImg-div">
                                    <Image src="/../public/imgs/Module_3.svg" width="42%" height="50%"/>
                                </div>

                                <p className="pkg_numb">Package No. 3</p>
                                <p >$100</p>
                            </div>

                            <button onClick={Show_Form} className="buy_button">Buy</button>
                                
                        </div>
                        
                        <Column />

                    </div>

                </div>
 
            </div>

            <div className="Footer">
                <div className="boxes">
                    <Image src="/../public/imgs/3Boxes.svg" width="220%" height="100%"/>
                </div>
            </div>
       
        </div>
          );
}export default Pallets;