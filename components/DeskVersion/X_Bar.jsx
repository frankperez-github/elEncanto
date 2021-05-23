import Image from 'next/image';
import  Left_arrow from '../../public/imgs/prev.svg';
import  Right_arrow from '../../public/imgs/next.svg';

function X_Bar(){

    return(

    

        <div className="X_Bar">
            <div className="arrow-div">
                <Image className="arrow"  src="/../public/imgs/prev.svg" width="100%" height="100%"/>
            </div>
            
            <div className="numbers">
                <p className="actual_numb">1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>...</p>
                <p>10</p>
            </div>

            <div className="arrow-div">
                <Image className="arrow" src="/../public/imgs/next.svg" width="102%" height="100%"/>
            </div>
        </div>

    
    );
}export default X_Bar