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

        
        <div className="CenterSection">
            <Bath_mob />

            <Buy_form/>

            <div className="spec-product-div">

                <div className="StaticTruck-div">
                <Image className="StaticTruck" src="/../public/imgs/truck.svg" width="450%" height="300%"/>
                </div>
            
                <div className="Garden_products">


                <div className="upline">

                    <div className="bath_single_product">
                    
                        <div className="image">
                            <Image src="/../public/imgs/toilet.svg" width="100%" height="100%" className="product_image"/>
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
                            <Image src="/../public/imgs/toilet.svg" width="100%" height="100%" className="product_image"/>
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
                            <Image src="/../public/imgs/toilet.svg" width="100%" height="100%" className="product_image"/>
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
                            <Image src="/../public/imgs/toilet.svg" width="100%" height="100%" className="product_image"/>
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
                            <Image src="/../public/imgs/toilet.svg" width="100%" height="100%" className="product_image"/>
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
                            <Image src="/../public/imgs/toilet.svg" width="100%" height="100%" className="product_image"/>
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

       

    </div>
);

}export default Bathroom_products