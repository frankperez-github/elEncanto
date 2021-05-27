import Image from 'next/image';
import Link from 'next/link';
import Column from '../components/DeskVersion/ColumnSide';
import Buy_form from './Buy_form';

const Show_Form =()=>{
    document.getElementById('buy_form_desk').style.display="block";
}

function Pallets (){

    
    return(
        <div className="borders">

        

        <div className="CenterSection">

            <div className="Pallets">

                <Buy_form/>


                    
                <div className="Pallets-div">
                    
                    
                    <div className="StaticTruck-div">
                            <Image className="StaticTruck" src="/truck.svg" width="450%" height="300%"/>
                    </div>

                        
                    <div className="Right_side" >

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

                            <button onClick={Show_Form} className="buy_button">Buy</button>
                            
                        </div>
                    
                    <Column />

                </div>

            </div>

        </div>

        
    </div>
      );
}export default Pallets;