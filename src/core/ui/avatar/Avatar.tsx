import type { FC } from "react";
import "./Avatar.css";

interface Props {
    src?: string;
    alt: string;
    fallback?: React.ReactNode;
    size: "sm" | "md" | "lg";
}

const Avatar: FC<Props> = ({ src, alt, fallback, size }) => {
    return (
        <div className={`avatar ${size}`}>
            {src ? (
                <img src={src} alt={alt} className="avatar-img" />
            ) : (
                <span className="avatar-fallback">{fallback}</span>
            )}
        </div>
    );
};

export default Avatar;
