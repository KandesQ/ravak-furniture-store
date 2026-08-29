import styles from "./CollectionBannerDesktop.module.css"


export default function CollectionBannerDesktop()
{
    return (
        <section className={styles["collection-banner"]}>
            <div className={styles["collection-banner__content"]}>
                <div className={styles["collection-banner__content-text"]}>
                    <h2 className={styles["collection-banner__content-title"]}>
                        Дизайнерские коллекции
                    </h2>

                    <p className={styles["collection-banner__content-description"]}>
                        Премиальные серии для интерьеров, где важна каждая деталь. Завоз осенью 2026.
                    </p>
                </div>

                <button className={styles["collection-banner__content-button"]}>Подробнее</button>
            </div>
        </section>
    )    
}