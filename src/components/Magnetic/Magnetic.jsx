import { useRef, useState } from "react";
import { motion } from "framer-motion";

const Magnetic = ({ children }) => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const mouseMove = (e) => {
        const { clientX, clientY } = e;
        const { width, height, left, top } =
            ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        setPosition({ x: middleX, y: middleY });
    };

    const mouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    const { x, y } = position;

    return (
        <motion.div
            style={{ position: "relative" }}
            ref={ref}
            onMouseMove={mouseMove}
            onMouseLeave={mouseLeave}
            animate={{ x, y }}
            transition={{
                type: "string",
                stiffness: 150,
                damping: 15,
                mass: 0.1,
            }}
        >
            {children}
        </motion.div>
    );
};

export default Magnetic;
