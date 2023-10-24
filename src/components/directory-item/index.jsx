import { useNavigate } from "react-router-dom";
import {
    BackgroundImage,
    Body,
    DirectoryItemContainer,
} from "./directory-item.styles";

export const DirectoryItem = ({ category }) => {
    const { title, imageUrl } = category;
    const navigate = useNavigate();
    const navigateToShopItemHandler = () => {
        navigate(`/shop/${title}`);
    };
    return (
        <DirectoryItemContainer onClick={navigateToShopItemHandler}>
            <BackgroundImage $imageUrl={imageUrl} />
            <Body>
                <h2>{title}</h2>
                <p>Show now</p>
            </Body>
        </DirectoryItemContainer>
    );
};
