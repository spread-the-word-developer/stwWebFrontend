
import { useEffect, RefObject, MouseEvent } from "react";

export function useOutSideClickAlert(ref, onClick) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event){
            if (ref.current && !(ref.current).contains(event.target )) {
                onClick();
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, onClick]);
}
