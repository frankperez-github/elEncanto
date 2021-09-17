import Image from 'next/image';


export default function Animation() {

    return(
        
        <div id="Animation">

            <div className="Pallets-div">
                <div className="Left_side">
                    <div className="Truck_Animation_mob">
                        <div id="closeTruck">
                            <Image src="/truck.svg" width="400%" height="250%" className="truck_mob_img ClosedTruck" />
                        </div>
                        <div id="closeTruck2">
                            <Image src="/truck.svg" width="400%" height="250%" className="truck_mob_img ClosedTruck2" />
                        </div>
                        <div id="closeTruck3">
                            <Image src="/truck.svg" width="400%" height="250%" className="truck_mob_img ClosedTruck3" />
                        </div>
                        <div id="closeTruck4">
                            <Image src="/truck.svg" width="400%" height="250%" className="truck_mob_img ClosedTruck4" />
                        </div>
                        

                        <div id="OpenTruck_mob">
                            <Image src="/empty_truck.svg" width="400%" height="250%" />
                        </div>

                        <div className="chargeDron">
                            <Image src="/charge_dron.svg" width="370%" height="200%" id="ChargeDron_mob"/>
                        </div>

                        <div className="emptyDron">
                            <Image src="/empty_dron.svg"  width ="370%" height="100%" id="EmptyDron_mob"/>
                        </div>

                        <div id="Text_animation_mob">
                            Order Placed.<br/> We will contact you when it gets aproved.
                        </div>
                    </div>        
                </div>    
            </div>

            
                
       </div>

    );


} 
