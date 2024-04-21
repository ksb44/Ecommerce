import React from 'react';
import Link from 'next/link';
import Product from '@/models/Product';
import connectDB from '@/databases';
function mugs({products}) {
    return (
      <div>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap text-center ">
            <div className=" p-4 w-full">
              {Object.keys(products).length===0 && <p>Sorry all mugs are out of stock. Stay Tuned</p>}
             {Object.keys(products).map((item)=>{ 
              return  <div key={products[item]._id}>
             <Link 
                href={`/product/${products[item].slug}`}
                className="block relative h-48 rounded overflow-hidden"
              >
                <img
                  alt="ecommerce"
                  className=" h-[34vh] w-[40vh] m-auto block"
                  src={products[item].img}
                />
              </Link>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                 { products[item].title}
                </h3>
                <h2 className="text-white title-font text-lg font-medium">
                 {products[item].desc}
                </h2>
                <p className="mt-1">Rs.{products[item].price}</p>

                <div className="mt-1 space-x-3 ">
                    
                    {products[item].size.includes('S') && <span>S,</span>}
                    {products[item].size.includes('M') && <span>M,</span>}
                    {products[item].size.includes('L') && <span>L,</span>}
                    {products[item].size.includes('XL') && <span>XL,</span>}
                    {products[item].size.includes('XXL') && <span>XXL</span>}

                    
                    </div>
                    <div className=" mt-1 space-x-3">
    {products[item].color.includes('red') && <button className="border-2 border-gray-300 mx-2 bg-red-700 rounded-full w-6 h-6 focus:outline-none"></button>}
    {products[item].color.includes('white') && <button className="border-2 border-gray-300 mx-2 bg-white rounded-full w-6 h-6 focus:outline-none"></button>}
    {products[item].color.includes('blue') && <button className="border-2 border-gray-300 bg-blue-700 rounded-full w-6 h-6 focus:outline-none"></button>}
    {products[item].color.includes('black') && <button className="border-2 border-gray-300 bg-black-700 rounded-full w-6 h-6 focus:outline-none"></button>}
    {products[item].color.includes('green') && <button className="border-2 border-gray-300 bg-green-700 rounded-full w-6 h-6 focus:outline-none"></button>}
    {products[item].color.includes('pink') && <button className="border-2 border-gray-300 bg-pink-700 rounded-full w-6 h-6 focus:outline-none"></button>}
    {products[item].color.includes('brown') && <button className="border-2 border-gray-300 bg-amber-950 rounded-full w-6 h-6 focus:outline-none"></button>}
    {products[item].color.includes('yellow') && <button className="border-2 border-gray-300 bg-yellow-300 rounded-full w-6 h-6 focus:outline-none"></button>}

                        </div>
            
              </div>
            </div>  })} 
            </div>
          </div>
        </div>
      </section>
    </div>
    )

}

export async function getServerSideProps(context) {
  
  connectDB();
  let Products = await Product.find({category:'mugs'});
  let mugs={}
for(let item of Products){
if(item.title in mugs){
    if(!mugs[item.title].color.includes(item.color) && item.availableQty>0)

    {
      mugs[item.title].color.push(item.color)

    }
    if(!mugs[item.title].size.includes(item.size) && item.availableQty>0)

    {
      mugs[item.title].size.push(item.size)

    }
}
else {
  mugs[item.title]=JSON.parse(JSON.stringify(item))
    if(item.availableQty >0){
      mugs[item.title].color=[item.color]
        mugs[item.title].size=[item.size]
    }
}

}
  return {
    props: {products:JSON.parse(JSON.stringify(mugs))},
  };
}
export default mugs;