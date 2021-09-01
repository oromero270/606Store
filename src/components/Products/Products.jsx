import React from 'react';
import {Grid} from '@material-ui/core';
import Product from './Product/Product';

const products =[
    {id:1, name:'Shoes',description:'running shoes',price:'$6' },
    {id:2, name:'flats',description:'running not shoes',price:'$8' },
]

const Products = () => {
    return (
        <main >
        <div  />
        <Grid container justify="center" spacing={4}>
            {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                <Product product={product} />
            </Grid>
            ))}
        </Grid>
        </main>
    );

};

export default Products;