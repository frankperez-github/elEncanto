const AddressCard = ({address, makeDefault}) => {
    return (
        <div>
             <address>{address.address} <span style={{color:"black"}}>{address.is_default && "(default)"}</span> </address> <button className="buy_button">Modify</button>
        {!address.is_default && <button onClick={()=>{makeDefault(address.id)}} className="buy_button">Make default</button> }
       </div>
    )
}

export default AddressCard