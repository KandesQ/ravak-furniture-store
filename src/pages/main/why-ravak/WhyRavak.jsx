import "./WhyRavak.css"

import ShieldIcon from "../../../assets/pages/main/why-ravak/icons/shield.svg"
import HomeIcon from "../../../assets/pages/main/why-ravak/icons/home.svg"
import HollowShieldIcon from "../../../assets/pages/main/why-ravak/icons/hollowShield.svg"
import PersonIcon from "../../../assets/pages/main/why-ravak/icons/person.svg"
import CarIcon from "../../../assets/pages/main/why-ravak/icons/car.svg"
import ReloadIcon from "../../../assets/pages/main/why-ravak/icons/reload.svg"


export default function WhyRavak()
{
    const benefits = [
        {id: 1, iconPath: ShieldIcon, title: "Официальный дистрибьютор", description: "Прямые поставки Ravak, оригинальная продукция с документами."},
        {id: 2, iconPath: HollowShieldIcon, title: "Гарантия до 10 лет", description: "Расширенная гарантия на ключевые коллекции и комплектующие."},
        {id: 3, iconPath: CarIcon, title: "Бесплатная доставка по Москве", description: "Привезём в удобное время,  поднимем и распакуем."},
        {id: 4, iconPath: HomeIcon, title: "2 шоурума в Москве", description: "Посмотрите коллекции вживую перед покупкой."},
        {id: 5, iconPath: PersonIcon, title: "Подбор от менеджера", description: "Поможем собрать полный комплект под вашу ванную."},
        {id: 6, iconPath: ReloadIcon, title: "Возврат 30 дней", description: "Не подошло — вернём деньги в течение 30 дней."}
    ]

    return (
        <section className="why-ravak">

            <h2 className="why-ravak__title">
                Почему Ravak
            </h2>

            <div className="why-ravak__list">
                {benefits.map(benefit => {
                    return (
                        <article
                        className="why-ravak__list__item"
                        key={benefit.id}
                        >

                            <img
                                className="why-ravak__list__item-icon"
                                src={benefit.iconPath}
                                alt="benefit icon"
                            />

                            <div className="why-ravak__list__item-text">

                                <h3 className="why-ravak__list__item-title">
                                    {benefit.title}
                                </h3>

                                <p className="why-ravak__list__item-description">
                                    {benefit.description}
                                </p>
                            </div>

                        </article>
                    )
                })}
            </div>
        </section>
    )
}