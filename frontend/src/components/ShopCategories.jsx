import React from "react";
import { useNavigate } from "react-router-dom"; // Import for navigation
import "./ShopCategories.css";

const ShopCategories = () => {
    const navigate = useNavigate(); // Initialize navigate hook

    const categories = [
        { title: "BRACELETS", image: "/assets/BRACELETS.jpg" },
        { title: "NECKLACES", image: "/assets/NECKLACES.jpg" },
        { title: "RINGS", image: "/assets/RINGS.jpg" },
        { title: "EARRINGS", image: "/assets/EARRINGS.jpg" },
    ];

    const handleCategoryClick = (subcategory) => {
        // Navigate to the Collection page with query parameter
        navigate(`/collection?subcategory=${subcategory}`);
    };

    return (
        <div className="shop-container">
            <h2 className="shop-title">Shop What You Love</h2>
            <div className="categories-grid">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className="category-card"
                        onClick={() => handleCategoryClick(category.title)} // Handle click
                        style={{ cursor: "pointer" }} // Add pointer cursor
                    >
                        <img
                            src={category.image}
                            alt={category.title}
                            style={{ width: "250px", height: "auto" }}
                        />
                        <div className="category-title">{category.title}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShopCategories;
