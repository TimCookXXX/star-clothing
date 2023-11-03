import { useSelector } from "react-redux";
import { CategoryPreview } from "../../components/category-preview";
import { Spinner } from "../../components/spinner";
import {
    selectCategoriesIsLoading,
    selectCategoriesMap,
} from "../../store/categories/category.selector";

export const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);

    return (
        <>
            {isLoading ? (
                <Spinner />
            ) : (
                Object.keys(categoriesMap).map((title) => {
                    const products = categoriesMap[title];
                    return (
                        <CategoryPreview
                            key={title}
                            title={title}
                            products={products}
                        />
                    );
                })
            )}
        </>
    );
};
