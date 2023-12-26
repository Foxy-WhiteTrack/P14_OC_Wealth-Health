import { createSelector } from '@reduxjs/toolkit'

const nbr = createSelector(
    [(state) => state.item],
    (item) => item.nbr
)

const ItemsSelectors = {
    nbr
}

export default ItemsSelectors