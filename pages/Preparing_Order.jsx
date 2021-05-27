import Link from 'next/link';
import Image from 'next/image';
import Column from '../components/DeskVersion/ColumnSide';
import LeftSide from '../components/DeskVersion/LeftSide'
import Buy_form from './Buying';
import PreparingOrder from './Preparing-Order_mob';


function Preparing_Order (){

    return(
    
        <div className="borders">
               
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
                
            <Buy_form/>
        </div>
    );
}export default Preparing_Order;