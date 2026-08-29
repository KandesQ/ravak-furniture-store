import styles from "./CollectionBannerMobile.module.css"

import CollectionBannerImage from "../../../../assets/images/CollectionBannerMobile.png"

export default function CollectionBannerMobile() 
{
    return (
        <section className={styles["collection-banner"]}>
            <img 
            className={styles["collection-banner__image"]}
            src={CollectionBannerImage} alt="banner image" 
            />

            <div className={styles["collection-banner__content"]}>
                <div className={styles["collection-banner__content-text"]}>
                    <h2 className={styles["collection-banner__content-title"]}>
                        Дизайнерские коллекции
                    </h2>

                    <p className={styles["collection-banner__content-description"]}>
                        Премиальные серии для интерьеров, где важна каждая деталь. Завоз осенью 2026.
                    </p>
                </div>

                <button className={styles["collection-banner__content-button"]}>
                    Подробнее
                </button>
            </div>
        </section>
    )    
}