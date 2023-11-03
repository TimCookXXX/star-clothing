import { useNavigate } from "react-router-dom";
import { ProductCard } from "../product-card";
import {
    CategoryPreviewContainer,
    PreviewContainer,
    Title,
} from "./category-preview.styles";

export const CategoryPreview = ({ title, products }) => {
    const navigate = useNavigate();
    const navigateToShopItemHandler = () => {
        navigate(`/shop/${title}`);
    };
    return (
        <CategoryPreviewContainer>
            <Title>
                <span onClick={navigateToShopItemHandler}>
                    {title.toUpperCase()}
                </span>
            </Title>
            <PreviewContainer>
                {products
                    .filter((_, idx) => idx < 4)
                    .map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
            </PreviewContainer>
        </CategoryPreviewContainer>
    );
};
