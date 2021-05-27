import Link from 'next/link';
import Image from 'next/image';
import NavBar_mob from '../components/MobileVersion/NavBar_mob';
import Footer_mob from '../components/MobileVersion/Fotter_mob';



function Pallets_mob(){

    
    return(
    <div className="Pallets_mobile">
       
        <div className="Pallets_mob" >
            
            <NavBar_mob />

            <div className="Truck">
                <Image className="truck_mob_img" src="/../public/imgs/truck.svg" width="300%" height="300%"/>
            </div>      

            <div className="Pallets_menu" >

                <div className="product ProductCard_mob">

                    <Image src="/../public/imgs/module_1.svg" width="42%" height="47%" className="Producticon_mob"/>
                    
                    <p className="pkg_numb_mob">Package No. 1</p>
                    <p className="Price_mob">$100</p>
                </div>

                <Link href="/Buying">
                
                    <button className="buy_button_mob" >Buy</button>
            
                </Link>
                

                <div className="product ProductCard_mob">
                    <Image src="/../public/imgs/module_2.svg" width="42%" height="47%" className="Producticon_mob"/>
                    <p className="pkg_numb_mob">Package No. 2</p>
                     <p className="Price_mob">$100</p>
                </div>

                <Link href="/Buying">
                
                    <button className="buy_button_mob" >Buy</button>
            
                </Link>
                
                <div className="product ProductCard_mob">
                   <Image src="/../public/imgs/module_3.svg" width="42%" height="47%" className="Producticon_mob"/>
                    <p className="pkg_numb_mob">Package No. 3</p>
                    <p className="Price_mob">$100</p>
                </div>
                
                <Link href="/Buying">
                
                    <button  className="buy_button_mob last" >Buy</button>

                </Link>
            
                
            </div>
            <Footer_mob/>
        </div>
    </div>       
    );
}export default Pallets_mob