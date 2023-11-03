import { createSelector } from 'reselect'

const selectCategoryReducer = (state) => state.categories

export const selectCategories = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.categories
)


export const selectCategoriesMap = createSelector([selectCategories], (categories) => {
    return categories.reduce((acc, category) => {
        const { items, title } = category;
        acc[title.toLowerCase()] = items;

        return acc;
    }, {})
});