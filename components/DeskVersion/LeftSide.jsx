import Image from 'next/image';
import EmptyTruck from '../../public/imgs/Truck.svg';     
import OpenTruck from '../../public/imgs/EmptyTruck.svg';
import ChargeDron from '../../public/imgs/ChargeDron.svg';
import EmptyDron from '../../public/imgs/EmptyDron.svg';






function LeftSide (){

    return(

        <div className="Left_side">
            <div className="">
                <div id="EmptyTruck">
                    <Image src="/../public/imgs/Truck.svg" width="450%" height="200%" />
                </div>
                <div id="OpenTruck">
                    <Image src="/../public/imgs/EmptyTruck.svg" width="670%" height="248%" />
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