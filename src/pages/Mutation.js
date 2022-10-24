import { gql, useMutation } from '@apollo/client'
import React from 'react'


const GET_PRODUCT = gql`
mutation{
    CreateProduct($name:String, $quantityPerUit:Int!){
        createProduct
            record:({
            name:$name
            quantityPerUit:$quantityPerUit
        })record{
            name
        }
    }
}
`
const Mutation = () => {
    const [] = useMutation(GET_PRODUCT, {
        variables: {
            name: "Hot Dog",
            quantityPerUit: 4
        }
    })
    return (
        <div>Mutation</div>
    )
}

export default Mutation