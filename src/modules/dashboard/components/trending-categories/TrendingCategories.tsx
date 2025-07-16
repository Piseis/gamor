import type { Category } from "../../types/category";
import CategoryCard from "../category-card";
import "./TrendingCategories.css";

const gameCategories: Category[] = [
    { id: "0", name: "First Person Shooters" },
    { id: "1", name: "Role Playing Games" },
    { id: "2", name: "Battle Royale" },
    { id: "3", name: "Sports Games" },
    { id: "4", name: "Strategy" },
    { id: "5", name: "Racing Games" },
    { id: "6", name: "Adventure" },
];

const TrendingCategories = () => {
    return (
        <section className="trending-categories">
            <h2 className="section-title">Trending Categories</h2>

            <div className="categories-grid">
                {gameCategories.map((category) => (
                    <CategoryCard
                        key={category.id}
                        category={category}
                        isFeatured={category.featured}
                    />
                ))}

                <CategoryCard isViewAll isFeatured />
            </div>
        </section>
    );
};

export default TrendingCategories;
