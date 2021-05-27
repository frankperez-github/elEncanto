import Image from 'next/image'

function Column(){

    return(

        <div className="Networks_column">
            
            <div className="ColumnLink">
                <a href="">
                    <Image className="link" src="/facebook.svg" width="45%" height="50%"></Image>
                </a>
            </div>
            
            <div className="ColumnLink">
                <a href="">
                    <Image className="link" src="/google_p.svg" width="45%" height="50%"></Image>
                </a>
            </div>
            
            <div className="ColumnLink">
                <a href="">
                    <Image className="link" src="/whatsapp.svg" width="45%" height="50%"></Image>
                </a>
            </div>
            
            <div className="ColumnLink">
                <a href="">
                    <Image className="link" src="/instagram.svg" width="45%" height="50%"></Image>
                </a>
            </div>
            
            <div className="ColumnLink">
                <a href="">
                    <Image className="link" src="/to_call.svg" width="45%" height="50%"></Image>   
                </a>
            </div>
            
            <div className="ColumnLink">
                <a href="">
                    <Image className="link" src="/twitter.svg" width="45%" height="50%"></Image>
                </a>
            </div>
            
            <div className="ColumnLink">
                <a href="">
                    <Image className="link" src="/message.svg" width="45%" height="50%"></Image>
                </a>
            </div>
            

        </div>
    );
}export default Column