import Image from 'next/image';


export default function Animation() {

    return(
        
        <div id="Animation">

            <div className="Pallets-div">
                <div className="Left_side">
                    <div className="">
                        <div id="EmptyTruck">
                            <Image alt="No Image" src="/truck.svg" width="450%" height="200%" />
                        </div>
                        <div id="OpenTruck">
                            <Image alt="No Image" src="/empty_truck.svg" width="500%" height="250%" />
                        </div>
                        <div id="ChargeDron">
                            <Image alt="No Image" src="/charge_dron.svg" width="100%" height="100%" />
                        </div>
                        <div  id="EmptyDron">
                            <Image alt="No Image" src="/empty_dron.svg" width="100%" height="100%"/>
                        </div>
                    </div>
                </div>    
            </div>

            <div id="TextTruck">
                We are preparing your order!
            </div>
                
            <buy_form/>
       </div>

    );


} 
