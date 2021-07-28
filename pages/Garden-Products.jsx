import Image from 'next/image';
import Column from '../components/DeskVersion/ColumnSide';

import X_Bar from '../components/DeskVersion/X_Bar';

import Garden_mob from '../components/MobileVersion/Garden_mob';


    const Show_Form =()=>{
        document.getElementById('buy_form_desk').style.display="block";
        document.getElementById('StaticTruck').style.display="block";
        document.getElementById('Animation').style.display="none";
    }

function Garden_products(){

    return(
        <div className="grdnProd">
            <Garden_mob />

            <buy_form/>

            <div className="spec-product-div" >

                <div className="StaticTruck-div">
                    <Image id="StaticTruck" src="/truck.svg" width="450%" height="300%"/>
                </div>
            
                <div className="Garden_products">


                    <div className="upline">

                        <div className="bath_single_product">
                        
                            <div className="image">
                                <Image src="/toilet.svg" width="100%" height="100%" className="product_image"/>
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
                                <Image src="/toilet.svg" width="100%" height="100%" className="product_image"/>
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
                                <Image src="/toilet.svg" width="100%" height="100%" className="product_image"/>
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
                                <Image src="/toilet.svg" width="100%" height="100%" className="product_image"/>
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
                                <Image src="/toilet.svg" width="100%" height="100%" className="product_image"/>
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
                                <Image src="/toilet.svg" width="100%" height="100%" className="product_image"/>
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

    );

}export default Garden_products