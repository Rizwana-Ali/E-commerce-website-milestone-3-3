import Hero from "./components/hero";
import Card from './components/card';
import Product from './components/product';
import Inspiration from './components/inspiration';
import Furniro from "./components/furniro";


export default function Home(){
  return(
    <main>
      <div>
         <Hero/>
         <Card/>
         <Product/>


<div 
  className="flex justify-center items-center mt-5 sm:mt-8 md:mt-10"
>
  <div 
    className="border border-[#B88E2F] p-2 w-[20%] sm:w-[60%] md:w-[40%] lg:w-[20%] xl:w-[10%]"
  >
    <span className="pl-2 sm:pl-3 text-[#B88E2F]">
      <a href="/shop">Show More</a>
    </span>
  </div>
</div>


 
         <Inspiration/>
         <Furniro />
         
      </div>
      </main>
  )
}
Home();
