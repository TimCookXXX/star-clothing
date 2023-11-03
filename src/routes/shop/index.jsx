import { Routes, Route } from "react-router-dom";
import { CategoriesPreview } from "../categories-preview";
import { Category } from "../category";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCategoriesAsync } from "../../store/categories/category.action";

export const Shop = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategoriesAsync());
    }, [dispatch]);

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=":category" element={<Category />} />
        </Routes>
    );
};
