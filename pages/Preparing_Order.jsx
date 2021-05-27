import Link from 'next/link';
import Image from 'next/image';
import Column from '../components/DeskVersion/ColumnSide';
import LeftSide from '../components/DeskVersion/LeftSide'
import Buy_form from './Buying';
import PreparingOrder from './Preparing-Order_mob';


function Preparing_Order (){

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
                    
                    <div className="Pallets-div">
        
                        <LeftSide/>


                        <div className="Right_side" id="Pallets">

                            <div className="product ProductCard">
                                
                                    <div className="ModuleImg-div">
                                        <Image src="/../public/imgs/Module_1.svg" width="42%" height="47%"/>
                                    </div>
                                
                                
                                <p className="pkg_numb">Package No. 1</p>
                                <p >$100</p>
                            </div>

                            <Link href="/Pallets" >
                                <button className="buy_button">Buy</button>
                            </Link>

                            <div className="product ProductCard">
                                <div className="ModuleImg-div">
                                    <Image src="/../public/imgs/Module_2.svg" width="42%" height="50%"/>
                                </div>
                                <p className="pkg_numb">Package No. 2</p>
                                <p >$100</p>
                            </div>

                            <Link href="/Pallets" >
                                <button className="buy_button">Buy</button>
                            </Link>

                            <div className="product ProductCard">
                                <div className="ModuleImg-div">
                                    <Image src="/../public/imgs/Module_3.svg" width="42%" height="50%"/>
                                </div>

                                <p className="pkg_numb">Package No. 3</p>
                                <p >$100</p>
                            </div>

                            <Link href="/Pallets" >
                            <button className="buy_button">Buy</button>
                            </Link>

                        </div>

                        <Column />
            
                        
                    </div>
                </div>
                
                <div className="Footer">
                    <div className="boxes">
                        <Image src="/../public/imgs/3Boxes.svg" width="220%" height="100%"/>
                    </div>
                    <div id="TextTruck">
                        We are preparing your order!
                    </div>
                </div>
            
            

            <Buy_form/>
        </div>
    );
}export default Preparing_Order;