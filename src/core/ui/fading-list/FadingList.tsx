import React, {
    useRef,
    useState,
    useEffect,
    type ReactNode,
    type FC,
} from "react";
import "./FadingList.css";
import { useTheme } from "../../theme/context/ThemeContext";

interface Props {
    items: ReactNode[];
    listHeight?: number | string;
    fadeHeight?: number;
}

const FadingList: FC<Props> = ({
    items,
    listHeight = 300,
    fadeHeight = 30,
}) => {
    const listRef = useRef<HTMLDivElement>(null);
    const [isAtBottom, setIsAtBottom] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const { theme } = useTheme();

    const fadeColor =
        theme === "dark" ? "rgba(1, 1, 1, 255)" : "rgba(255, 255, 255, 1)";

    useEffect(() => {
        const handleScroll = () => {
            if (listRef.current) {
                const { scrollTop, scrollHeight, clientHeight } =
                    listRef.current;
                const position = scrollTop / (scrollHeight - clientHeight);
                setScrollPosition(position);
                setIsAtBottom(scrollHeight - scrollTop <= clientHeight + 1); // +1 para manejar decimales
            }
        };

        const listElement = listRef.current;
        if (listElement) {
            listElement.addEventListener("scroll", handleScroll);
            handleScroll();
        }

        return () => {
            if (listElement) {
                listElement.removeEventListener("scroll", handleScroll);
            }
        };
    }, []);

    return (
        <div
            className="fading-list-container"
            style={{
                height:
                    typeof listHeight === "number"
                        ? `${listHeight}px`
                        : listHeight,
            }}
        >
            <div
                ref={listRef}
                className={`fading-list ${isAtBottom ? "at-bottom" : ""}`}
            >
                {items.map((item, index) => (
                    <React.Fragment key={index}>{item}</React.Fragment>
                ))}
            </div>
            {!isAtBottom && (
                <div
                    className="fade-bottom"
                    style={{
                        opacity: 1 - scrollPosition * 2,
                        height: `${fadeHeight}px`,
                        background: `linear-gradient(to bottom, rgba(255, 255, 255, 0), ${fadeColor})`,
                    }}
                ></div>
            )}
        </div>
    );
};

export default FadingList;
