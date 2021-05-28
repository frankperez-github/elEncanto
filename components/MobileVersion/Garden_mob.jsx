import Image from 'next/image';
import Link from 'next/link';
import NavBar_mob from '../components/MobileVersion/NavBar_mob';
import Footer_mob from '../components/MobileVersion/Fotter_mob';


function Garden_mob(){



    return(
        
        <div className="Garden_products_mob">
          
            <NavBar_mob />    

            <div className="Garden_mob">

                <div className="line">
                    <div className="bath_single_product_mob">
                        
                        <div >
                            <Image src="/toilet.svg" width="150%" height="150%" />
                        </div>
                        <div className="product_name_mob">
                            <p>Bath Toilet</p>
                        </div>
                        <div className="price_mob">
                            <p>$100</p>
                        </div>
                        
                        <Link href="/Buying">
                        <button  className="buy_product_mob red_button">Buy</button>
                        </Link>
                    </div>
                    
                    <div className="bath_single_product_mob">
                        
                        <div >
                        <Image src="/toilet.svg" width="150%" height="150%" />
                        </div>
                        <div className="product_name_mob">
                            <p>Bath Toilet</p>
                        </div>
                        <div className="price_mob">
                            <p>$100</p>
                        </div>

                        <Link href="/Buying">
                        <button  className="buy_product_mob violet_button">Buy</button>
                        </Link>
                    </div>
                </div>
                
                <div className="line">
                    <div className="bath_single_product_mob">
                        
                        <div >
                            <Image src="/toilet.svg" width="150%" height="150%" />
                        </div>
                        <div className="product_name_mob">
                            <p>Bath Toilet</p>
                        </div>
                        <div className="price_mob">
                            <p>$100</p>
                        </div>

                        <Link href="/Buying">
                        <button  className="buy_product_mob blue_button">Buy</button>
                        </Link>
                    </div>
                    
                    <div className="bath_single_product_mob">
                        
                        <div >
                            <Image src="/toilet.svg" width="150%" height="150%" />
                        </div>
                        <div className="product_name_mob">
                            <p>Bath Toilet</p>
                        </div>
                        <div className="price_mob">
                            <p>$100</p>
                        </div>

                        <Link href="/Buying">
                        <button  className="buy_product_mob brown_button">Buy</button>
                        </Link>
                    </div>
                </div>
                
                <div className="line">
                    <div className="bath_single_product_mob">
                        
                        <div >
                            <Image src="/toilet.svg" width="150%" height="150%" />
                        </div>
                        <div className="product_name_mob">
                            <p>Bath Toilet</p>
                        </div>
                        <div className="price_mob">
                            <p>$100</p>
                        </div>

                        <Link href="/Buying">
                        <button  className="buy_product_mob red_button">Buy</button>
                        </Link>

                    </div>
                    
                    <div className="bath_single_product_mob">
                        
                        <div >
                            <Image src="/toilet.svg" width="150%" height="150%" />
                        </div>
                        <div className="product_name_mob">
                            <p>Bath Toilet</p>
                        </div>
                        <div className="price_mob">
                            <p>$100</p>
                        </div>

                        <Link href="/Buying">
                        <button  className="buy_product_mob violet_button">Buy</button>
                        </Link>

                    </div>
                </div>

                <div className="X_Bar_mob">
                    <div className="arrow-div_mob">
                        <Image className="arrow_mob" src="/prev.svg" width="90%" height="90%"/>
                    </div>
                    
                    <div className="numbers_mob">
                        <p className="actual_numb">1</p>
                        <p>2</p>
                        <p>3</p>
                        <p>4</p>
                        <p>...</p>
                        <p>10</p>
                    </div>

                    <div className="arrow-div_mob">
                         <Image className="arrow_mob" src="/next.svg" width="90%" height="90%"/>
                    </div>
                </div>

            </div>

            <Footer_mob/>

        </div>
        
    );

}
export default Garden_mob;