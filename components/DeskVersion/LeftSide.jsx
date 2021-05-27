import Image from 'next/image';







function LeftSide (){

    return(

        <div className="Left_side">
            <div className="">
                <div id="EmptyTruck">
                    <Image src="/truck.svg" width="450%" height="200%" />
                </div>
                <div id="OpenTruck">
                    <Image src="/empty_truck.svg" width="500%" height="250%" />
                </div>
                <div id="ChargeDron">
                    <Image src="/charge_dron.svg" width="100%" height="100%" />
                </div>
                <div  id="EmptyDron">
                    <Image src="/empty_dron.svg" width="100%" height="100%"/>
                </div>
            </div>
        </div>    
 
    );
}export default LeftSide;