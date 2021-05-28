import Image from 'next/image';
import Column from '../components/DeskVersion/ColumnSide';
import Buy_form from '../components/DeskVersion/Buy_form';

const Show_Form =()=>{
    document.getElementById('buy_form_desk').style.display="block";
    document.getElementById('StaticTruck').style.display="block";
    document.getElementById('Animation').style.display="none";
}

function Pallets (){

    
    return(
        <div className="borders">

        

        <div id="CenterSection">

            <div className="Pallets">

                <Buy_form/>


                    
                <div className="Pallets-div" >
                    
                    
                    <div className="StaticTruck-div">
                            <Image id="StaticTruck" src="/truck.svg" width="450%" height="300%"/>
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