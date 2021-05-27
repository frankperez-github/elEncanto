import Image from 'next/image';







function LeftSide (){

    return(

        <div className="Left_side">
            <div className="">
                <div id="EmptyTruck">
                    <Image src="/../public/imgs/Truck.svg" width="450%" height="200%" />
                </div>
                <div id="OpenTruck">
                    <Image src="/../public/imgs/EmptyTruck.svg" width="500%" height="250%" />
                </div>
                <div id="ChargeDron">
                    <Image src="/../public/imgs/ChargeDron.svg" width="100%" height="100%" />
                </div>
                <div  id="EmptyDron">
                    <Image src="/../public/imgs/EmptyDron.svg" width="100%" height="100%"/>
                </div>
            </div>
        </div>    
 
    );
}export default LeftSide;