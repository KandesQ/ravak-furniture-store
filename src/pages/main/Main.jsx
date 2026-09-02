
import Catalog from "./catalog/Catalog.jsx"
import CollectionBanner from "./collection-banner/CollectionBanner.jsx"
import Header from "./header/Header.jsx"
import Hero from "./hero/Hero.jsx"
import SpecialOfferBanner from "./special-offer-banner/SpecialOfferBanner.jsx"

export default function Main()
{
    return (
    <>
       <Header />
       <Hero />
       <Catalog />
       <CollectionBanner />
       <SpecialOfferBanner />
    </> 
    )
}