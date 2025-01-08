import React from "react";
import "./ShopVideo.css";

const ShopVideo = () => {

    const categories = [
        { title: "", video: "/assets/Mix.mp4", price: "" },
        { title: "BRACELETS", video: "/assets/BRACELETS.mp4", price: "" },
        { title: "NECKLACES", video: "/assets/NECKLACES.mp4", price: "" },
        { title: "RINGS", video: "/assets/RINGS.mp4", price: "" },
        { title: "EARRINGS", video: "/assets/EARRINGS.mp4", price: "" },
        { title: "", video: "/assets/Jewellery.mp4", price: "" },
    ];

    return (
        <div className="shop-container">
            <h2 className="shop-title"></h2>
            <div className="categories-grid">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className="category-card"
                        style={{ cursor: "pointer" }}
                    >
                        <div className="category-video-container">
                            <video
                                src={category.video}
                                alt={category.title}
                                className="category-video"
                                muted
                                autoPlay
                                loop
                                disablePictureInPicture // Prevents PiP mode
                                playsInline // Ensures inline video behavior on mobile
                            />
                        </div>
                        <div className="category-details">
                            {/* <div className="category-title">{category.title}</div> */}
                            <div className="category-price">{category.price}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShopVideo;
