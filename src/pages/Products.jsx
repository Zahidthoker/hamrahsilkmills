import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'

export default function Products(){
    return(
        <div className='flex flex-col'>
            <Hero/>
            <ProductCard/>
        </div>
    )
}