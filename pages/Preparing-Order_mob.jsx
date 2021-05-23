import Image from 'next/image'
import NavBar_mob from '../components/MobileVersion/NavBar_mob';
import Footer_mob from '../components/MobileVersion/Fotter_mob';

const Go_buying =()=>{
    document.getElementById('buy_form_mob').style.display="block";
    document.getElementById('mobile_animation').style.display="none";
}

function PreparingOrder(){

    return(
        
    <div className="Pallets_mobile" id="mobile_animation">

        
       
        <div className="Pallets_mob" id="Pallets_mob">
            
            <NavBar_mob />


            <div className="Truck_Animation">
                <div id="ClosedTruck">
                    <Image src="/../public/imgs/Truck.svg" width="350%" height="250%" className="truck_mob_img"/>
                </div>
                

                <div id="OpenTruck_mob">
                    <Image src="/../public/imgs/EmptyTruck.svg" width="370%" height="200%" />
                </div>

                <div id="ChargeDron_mob">
                    <Image src="/../public/imgs/ChargeDron.svg" width="370%" height="200%" />
                </div>

                <div id="EmptyDron_mob">
                    <Image src="/../public/imgs/EmptyDron.svg" width="370%" height="200%" />
                </div>

                <div id="Text_animation_mob">
                    We are preparing your order!
                </div>
            </div>        

            <div className="Pallets_menu" id="Pallets_menu" >

                <div className="product ProductCard_mob">

                    <Image src="/../public/imgs/Module_1.svg" width="42%" height="47%" className="Producticon_mob"/>
                    
                    <p className="pkg_numb_mob">Package No. 1</p>
                    <p className="Price_mob">$100</p>
                </div>

                
                
                <button onClick={Go_buying} className="buy_button_mob" >Buy</button>
            
                
                

                <div className="product ProductCard_mob">
                    <Image src="/../public/imgs/Module_2.svg" width="42%" height="47%" className="Producticon_mob"/>
                    <p className="pkg_numb_mob">Package No. 2</p>
                     <p className="Price_mob">$100</p>
                </div>

                
                
                <button onClick={Go_buying} className="buy_button_mob" >Buy</button>
            
                
                
                <div className="product ProductCard_mob">
                    <Image src="/../public/imgs/Module_3.svg" width="42%" height="47%" className="Producticon_mob"/>
                    <p className="pkg_numb_mob">Package No. 3</p>
                    <p className="Price_mob">$100</p>
                </div>
                
                
                
                    <button  className="buy_button_mob last" >Buy</button>

                
            
                <Footer_mob/>
            </div>
            
            
        </div>
    </div>       
    );
}export default PreparingOrder