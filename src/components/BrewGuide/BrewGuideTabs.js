import { useState } from "react";
import styles from './BrewGuideTabs.module.css'
import BrewGuideStep from './BrewGuideStep'
import frenchPressSteps from '../../data/frenchpress-guide';
import percolatorSteps from '../../data/percolator-guide';

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

    const frenchPressStepsList = frenchPressSteps.map(step => <BrewGuideStep step={step} key={step.id} />);
    const percolatorStepsList = percolatorSteps.map(step => <BrewGuideStep step={step} key={step.id} />);

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
                    <div className={styles.need}>
                        <h3>What you'll need:</h3>
                        <p>Coffee, water, French press, grinder, kettle, scale, timer, wooden spoon.</p>
                        <p>Brew time: 4 minutes.</p>
                    </div>
                    {frenchPressStepsList}
                </div>

                <div className={toggleState === 2 ? `${styles.content}  ${styles["active-content"]}` : `${styles.content}`}>
                    <h2>Introduction</h2>
                    <hr />
                    <p>A coffee percolator is a kettle with separate chambers for the water and coffee grounds. Most people associate them with camping because the device works just as well on a campfire as it does on the stovetop. Today’s percolators aren’t limited to flame-based cooking methods, and electric models make it easier than ever to peak coffee.
                    </p>
                    <div className={styles.need}>
                        <h3>What you'll need:</h3>
                        <p>Coarsely ground coffee, water, percolator, grinder, scale, timer, wooden spoon.</p>
                        <p>Brew time: 7-10 minutes.</p>
                    </div>
                    {percolatorStepsList}
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