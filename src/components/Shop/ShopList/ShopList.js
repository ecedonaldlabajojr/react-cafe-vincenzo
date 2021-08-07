import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom';
import ShopItem from '../ShopItem/ShopItem'
import styles from './ShopList.module.scss'
import shopCoffeeBeans from '../../../data/shop-coffee-beans';
import shopFiltersContext from '../../../store/shop-filters-context';

const ShopList = (props) => {
    const shopFiltersCtx = useContext(shopFiltersContext);
    const appliedFilters = shopFiltersCtx.appliedFilter;
    let shownProducts = [];

    const history = useHistory();
    const seeAllProducts = () => history.replace(`/shop`);

    if (appliedFilters.length) {
        // shownProducts = shopCoffeeBeans.filter(item => {
        //     return (item.keywords.every(keyword => appliedFilters.includes(keyword)));
        // }).map(item => <ShopItem key={item._id} item={item} />);
        shownProducts = shopCoffeeBeans.filter(item => (item.keywords
            .every(keyword => appliedFilters.includes(keyword))));
        shownProducts = shownProducts.map(item => <ShopItem key={item._id} item={item} />);

    } else shownProducts = shopCoffeeBeans.map(item => <ShopItem key={item._id} item={item} />);

    if (props.query && !props.query.isNullOrWhiteSpace() && shownProducts.length) {
        shownProducts = shownProducts.filter(product => {
            const { name, description, keywords } = product.props.item;
            const queryRegex = new RegExp(props.query, 'i');

            return (queryRegex.test(name) || // Name Regex match
                queryRegex.test(description) || // Description Regex Match
                keywords.some(keyword => queryRegex.test(keyword)) // Keywords Regex match
            )
        });

    };

    const searchResultsLabelShow = !props.query.isNullOrWhiteSpace() && shownProducts.length;
    const noResultsLabelShow = !props.query.isNullOrWhiteSpace() && !shownProducts.length;

    return (
        <section className={styles["section__shoplist-wrapper"]}>
            {!!searchResultsLabelShow && <h2 className={styles["search-results"]}>SEARCH RESULTS: ( {shownProducts.length} )</h2>}
            {!!noResultsLabelShow && <div className={styles["no-results"]}>
                <h2>Your search for "{props.query}" did not yield any results.</h2>
                <Link onClick={seeAllProducts} className={styles.seeAllproducts}>See All Products</Link>
            </div>}
            <div className={styles["shopItems-container"]}>
                {shownProducts}
            </div>
        </section>
    )
}

export default ShopList
