import { useState } from "react";
import styles from './BrewGuideTabs.module.css'
import frenchPress1 from '../../images/brew-guide/guide-frenchpress-1.jpg'

function BrewGuideTabs() {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => setToggleState(index);

    const blockTabs = [{
        toggleState: 1,
        label: "French Press"
    }, {
        toggleState: 2,
        label: "Percolator"
    }, {
        toggleState: 3,
        label: "AeroPress"
    }, {
        toggleState: 4,
        label: "Drip"
    }]

    const tabTitles = blockTabs.map(tab => <button key={tab.toggleState} className={toggleState === tab.toggleState ? `${styles.tabs} ${styles["active-tabs"]}` : `${styles.tabs}`} onClick={() => toggleTab(tab.toggleState)}>{tab.label}</button>)

    return (
        <div className={styles.container}>
            <div className={styles["bloc-tabs"]}>
                {tabTitles}
            </div>

            <div className={styles["content-tabs"]}>
                <div className={toggleState === 1 ? `${styles.content}  ${styles["active-content"]}` : `${styles.content}`}>
                    <h2>Introduction</h2>
                    <hr />
                    <p>French press coffee is dense and heavy, yet it has its own sort of elegance. As with any method, the devil is in the details: To achieve a full expression of the coffee, decant it immediately after brewing so it doesn’t become bitter or chalky. Then, sink into this rich and heady cup. It only takes four minutes to brew.</p>
                    <br />

                    <section>
                        <h3>Step 1</h3>
                        <img src={frenchPress1} alt="" />
                        <p>Bring enough water to fill the French press to a boil. For a 17-oz press, you'll need about 350 grams (12 ounces)</p>
                    </section>

                    <section>
                        <h3>Step 2</h3>
                        <p>While the water is heating, grind your coffee. French press coffee calls for a coarse, even grind. We recommend starting with a 1:12 coffee-to-water ratio. If you're using 350 grams of water, you’ll want 30 grams of coffee.</p>
                    </section>

                    <section>
                        <h3>Step 3</h3>
                        <p>To start, gently pour twice the amount of water than you have coffee onto your grounds. For example, if you have 30 grams of coffee, you’ll want to start with 60 grams of water.</p>
                    </section>

                    <section>
                        <h3>Step 4</h3>
                        <p>Give the grounds a gentle stir with a bamboo paddle or chopstick. Allow the coffee to bloom for 30 seconds.</p>
                    </section>

                    <section>
                        <h3>Step 5</h3>
                        <p>Pour the remaining water and place the lid gently on top of the grounds. Don’t plunge just yet. Let the coffee steep for four minutes. Four. Don’t guess.</p>
                    </section>

                    <section>
                        <h3>Step 6</h3>
                        <p>Gently remove your French press from the scale and place it on your counter. Press the filter down. If it’s hard to press, that means your grind is too fine; if the plunger “thunks” immediately down to the floor, it means your grind is too coarse. The sweet spot, pressure-wise, is 15–20 pounds. When you’ve finished pressing, serve the coffee immediately. Don’t let it sit as this will cause it to continue brewing and over-extract.</p>
                    </section>

                </div>

                <div className={toggleState === 2 ? `${styles.content}  ${styles["active-content"]}` : `${styles.content}`}>
                    <h2>Introduction</h2>
                    <hr />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
                        voluptatum qui adipisci.
                    </p>
                </div>

                <div className={toggleState === 3 ? `${styles.content}  ${styles["active-content"]}` : `${styles.content}`}>
                    <h2>Introduction</h2>
                    <hr />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
                        nostrum rerum laudantium totam unde adipisci incidunt modi alias!
                        Accusamus in quia odit aspernatur provident et ad vel distinctio
                        recusandae totam quidem repudiandae omnis veritatis nostrum
                        laboriosam architecto optio rem, dignissimos voluptatum beatae
                        aperiam voluptatem atque. Beatae rerum dolores sunt.
                    </p>
                </div>
                <div className={toggleState === 4 ? `${styles.content}  ${styles["active-content"]}` : `${styles.content}`}>
                    <h2>Content 4</h2>
                    <hr />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
                        nostrum rerum laudantium totam unde adipisci incidunt modi alias!
                        Accusamus in quia odit aspernatur provident et ad vel distinctio
                        recusandae totam quidem repudiandae omnis veritatis nostrum
                        laboriosam architecto optio rem, dignissimos voluptatum beatae
                        aperiam voluptatem atque. Beatae rerum dolores sunt.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default BrewGuideTabs;