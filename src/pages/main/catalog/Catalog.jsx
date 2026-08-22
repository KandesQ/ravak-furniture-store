import "./Catalog.css"

import Bath from "../../../assets/images/Bath.png"
import Shower from "../../../assets/images/Shower.png"
import Sink from "../../../assets/images/Sink.png"
import Mixer from "../../../assets/images/Mixer.png"
import Pallet from "../../../assets/images/Pallet.png"
import Toilet from "../../../assets/images/Toilet.png"
import BathFurniture from "../../../assets/images/BathFurniture.png"
import Accessories from "../../../assets/images/Accessories.png"

export default function Catalog()
{
    const categories = [
        {id: 1, title: "Ванны", imagePath: Bath},
        {id: 2, title: "Душевые углы, двери", imagePath: Shower},
        {id: 3, title: "Раковины и умывальники", imagePath: Sink},
        {id: 4, title: "Смесители", imagePath: Mixer},
        {id: 5, title: "Унитазы", imagePath: Toilet},
        {id: 6, title: "Мебель для ванной", imagePath: BathFurniture},
        {id: 7, title: "Душевые поддоны", imagePath: Pallet},
        {id: 8, title: "Аксессуары", imagePath: Accessories}
    ]

    return (
        <section className="catalog">
            <h2 className="catalog__title">Каталог</h2>

            <div className="catalog__categories">
                {categories.map(category => (
                    <a
                    key={category.id}
                    href="#" 
                    className="catalog__categories-item">
                        <img src={category.imagePath} alt={category.title} />
                        <h3 className="category-item__title">
                            {category.title}
                        </h3>
                    </a>
                ))}
            </div>
        </section>
    )
}