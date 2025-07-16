import { Play } from "lucide-react";
import "./CategoryCard.css";
import type { FC } from "react";
import type { Category } from "../../types/category";

interface Props {
    category?: Category;
    isFeatured?: boolean;
    isViewAll?: boolean;
}

const CategoryCard: FC<Props> = ({
    category,
    isFeatured = false,
    isViewAll = false,
}) => {
    return (
        <div
            className={`category-card ${isFeatured ? "featured" : ""} ${
                isViewAll ? "view-all" : ""
            }`}
        >
            <div className="card-header">
                <span className="category-id">
                    {category?.id ? <span>/{category?.id}</span> : "VIEW ALL"}
                </span>
            </div>

            <h3 className="category-name">
                {category?.name || "All Categories"}
            </h3>
            <Play className="play-icon" size={5} />
        </div>
    );
};

export default CategoryCard;
