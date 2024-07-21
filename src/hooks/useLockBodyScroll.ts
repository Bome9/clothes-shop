import { useEffect } from "react";


const useLockBodyScroll = ({ isOpen }: { isOpen: boolean }) => {

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);
}

export default useLockBodyScroll;
