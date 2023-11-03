import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ProductCard } from "../../components/product-card";
import { Spinner } from "../../components/spinner";
import {
    selectCategoriesIsLoading,
    selectCategoriesMap,
} from "../../store/categories/category.selector";
import { CategoryContainer, CategoryTitle } from "./category.styles";

export const Category = () => {
    const { category } = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [categoriesMap, category]);

    return (
        <>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            {isLoading ? (
                <Spinner />
            ) : (
                <CategoryContainer>
                    {products &&
                        products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                </CategoryContainer>
            )}
        </>
    );
};
