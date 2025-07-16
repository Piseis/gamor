import { useEffect, type FC } from "react";
import "./Notification.css";
import { X } from "lucide-react";

interface Props {
    message: string;
    type: "error" | "success" | "info";
    onClose: () => void;
    autoClose?: boolean;
    autoCloseDuration?: number;
}

const Notification: FC<Props> = ({
    message,
    onClose,
    type,
    autoClose,
    autoCloseDuration,
}) => {
    useEffect(() => {
        if (autoClose) {
            const timer = setTimeout(() => {
                onClose();
            }, autoCloseDuration);
            return () => clearTimeout(timer);
        }
    }, [autoClose, autoCloseDuration, onClose]);

    return (
        <div className={`notification ${type}`}>
            <div className="message">{message}</div>
            <button onClick={onClose} className="close-button">
                <X size={18} />
            </button>
        </div>
    );
};

export default Notification;
