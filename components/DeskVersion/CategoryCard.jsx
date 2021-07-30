import React from 'react'
import Link from 'next/link'
import Image from 'next/dist/client/image'

 const CategoryCard = ({category}) => {
    return (
        <div className="product ProductCard CardProducts">

            <div className="ModuleImg-div">
                <Image src={category.icon} width="42%" height="50%"/>
            </div>

            <p className="prod_name">{category.name}</p>
            
            <Link href="categories/[id]" as={`categories/${category.id}`} >
                <div className=""></div>
            </Link>
            
        </div>
    )
}

export default CategoryCard