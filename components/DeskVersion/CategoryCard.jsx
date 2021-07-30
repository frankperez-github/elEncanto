import React from 'react'
import Link from 'next/link'
import Image from 'next/dist/client/image'

 const CategoryCard = ({category}) => {
    return (
        <Link href="Categories/[id]" as={`Categories/${category.id}`} >
        <div className="product ProductCard CardProducts">
            

            <div className="ModuleImg-div">
                <Image src={category.icon} width="42%" height="50%"/>
            </div>

            <p className="prod_name">{category.name}</p>
            
           
               
           
            
        </div>
        </Link>
    )
}

export default CategoryCard