import { useEffect, useState } from "react"

import CollectionBannerDesktop from "./desktop/CollectionBannerDesktop.jsx"
import CollectionBannerTablet from "./tablet/CollectionBannerTablet.jsx"
import CollectionBannerMobile from "./mobile/CollectionBannerMobile.jsx"

export default function CollectionBanner() 
{
    const getScreenType = () => {
        const width = window.innerWidth

        if (width > 1024) 
        {
            return "desktop"
        }

        if (width > 768)
        {
            return "tablet"
        }

        return "mobile"
    }

    const [screenType, setScreenType] = useState(getScreenType)

    useEffect(() => {
        const handleResize = () => {
            setScreenType(getScreenType())
        }

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    switch (screenType) {
        case "desktop":
            return <CollectionBannerDesktop />

        case "tablet":
            return <CollectionBannerTablet />
        
        case "mobile":
            return <CollectionBannerMobile />
        default:
            break;
    }
}