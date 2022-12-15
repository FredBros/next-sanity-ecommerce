import React from 'react'

import { Product, FooterBanner, HeroBanner} from '../src/components'
import {client} from '../src/lib/client'

const Home = ({products, bannerData}) => {
  console.log(products)
  return (
    <>
      <HeroBanner heroBanner = {bannerData.length && bannerData[0]}/>
      <div className= "products-heading">
        <h2>Best selling products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className= "products-container">{products?.map((product) => <Product key={product._id} product={product} />)}</div>

      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  );
};

export default Home;

export async function getServerSideProps() {
  const query = '*[_type == "product"]'
  const products = await client.fetch(query)
  const bannerQuery = '*[_type == "banner"]'
  const bannerData = await client.fetch(bannerQuery);
  return {
    props: {products, bannerData}, // will be passed to the page component as props
  };
}
