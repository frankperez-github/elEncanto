import  Image from 'next/image';
import  Link from 'next/link';
import Column from '../components/DeskVersion/ColumnSide';
import Bath_mob from '../pages/Bath_mob';
import X_Bar from '../components/DeskVersion/X_Bar';
import Buy_form from './Buy_form';

const Show_Form =()=>{
    document.getElementById('buy_form_desk').style.display="block";
}

function Bathroom_products(){

    
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
            <Bath_mob />

            <Buy_form/>

            <div className="spec-product-div">

                <div className="StaticTruck-div">
                <Image className="StaticTruck" src="/../public/imgs/Truck.svg" width="450%" height="300%"/>
                </div>
            
                <div className="Garden_products">


                <div className="upline">

                    <div className="bath_single_product">
                    
                        <div className="image">
                            <Image src="/../public/imgs/Toilet.svg" width="100%" height="100%" className="product_image"/>
                        </div>
                        <div className="product_name">
                            <p>Bath Toilet</p>
                        </div>
                        <div className="price">
                            <p>$100</p>
                        </div>

                        
                        
                        <button onClick={Show_Form} className="buy_product red_button">Buy</button>
                        
                
                        

                    </div>

                    <div className="bath_single_product">
                        
                        <div className="image">
                            <Image src="/../public/imgs/Toilet.svg" width="100%" height="100%" className="product_image"/>
                        </div>
                        <div className="product_name">
                            <p>Bath Toilet</p>
                        </div>
                        <div className="price">
                            <p>$100</p>
                        </div>

                        
                        
                        <button onClick={Show_Form} className="buy_product violet_button">Buy</button>
                        
                

                    </div>

                    <div className="bath_single_product">
                        
                        <div className="image">
                            <Image src="/../public/imgs/Toilet.svg" width="100%" height="100%" className="product_image"/>
                        </div>
                        <div className="product_name">
                            <p>Bath Toilet</p>
                        </div>
                        <div className="price">
                            <p>$100</p>
                        </div>

                        
                        
                        <button onClick={Show_Form} className="buy_product blue_button">Buy</button>
                        
                

                    </div>

                </div>

                <div className="downline">

                    <div className="bath_single_product">
                    
                        <div className="image">
                            <Image src="/../public/imgs/Toilet.svg" width="100%" height="100%" className="product_image"/>
                        </div>
                        <div className="product_name">
                            <p>Bath Toilet</p>
                        </div>
                        <div className="price">
                            <p>$100</p>
                        </div>
                        
                        
                        <button onClick={Show_Form} className="buy_product brown_button">Buy</button>
                        
                

                    </div>

                    <div className="bath_single_product">
                        
                        <div className="image">
                            <Image src="/../public/imgs/Toilet.svg" width="100%" height="100%" className="product_image"/>
                        </div>
                        <div className="product_name">
                            <p>Bath Toilet</p>
                        </div>
                        <div className="price">
                            <p>$100</p>
                        </div>
                    
                            <button onClick={Show_Form} className="buy_product red_button">Buy</button>
                

                    </div>

                    <div className="bath_single_product">
                        
                        <div className="image">
                            <Image src="/../public/imgs/Toilet.svg" width="100%" height="100%" className="product_image"/>
                        </div>
                        <div className="product_name">
                            <p>Bath Toilet</p>
                        </div>
                        <div className="price">
                            <p>$100</p>
                        </div>
                        
                        
                        <button onClick={Show_Form} className="buy_product violet_button">Buy</button>
                        
                

                    </div>
                    
                </div>


            </div>

                <Column />                
            </div>

            <X_Bar />
        
        </div>

        <div className="Footer">
            <div className="boxes">
                <Image src="/../public/imgs/3Boxes.svg" width="220%" height="100%"/>
            </div>
        </div>

    </div>
);

}export default Bathroom_products