import Image from 'next/image'
import Link from 'next/link'
function Presentation(){

    return(
        <div className="Presentation">

            <div className="Logo_present">
                <Image src="/../public/imgs/logo.svg" width="200%" height="150%" className="Logo_present_img"/>
            </div>
            
            <div className="Continue">
                
                <Link href="/Pallets">
                    <button className="Presentation_button">Continuar</button>
                </Link>
                
            </div>

        </div>
    );
}export default Presentation