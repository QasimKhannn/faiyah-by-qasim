export const zoomOutVariants = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 1.2, ease: "easeInOut" } },
};

export const introBoxVariants = {
    hidden: { x: -100, opacity: 0 }, // Start off-screen to the left
    visible: { x: 0, opacity: 1, transition: { duration: 1.2, ease: "easeInOut" } },
};

export const imageBoxVariants = {
    hidden: { y: -100, opacity: 0 }, // Start off-screen at the top
    visible: { y: 0, opacity: 1, transition: { duration: 1.2, ease: "easeInOut" } },
};

export const sideMenuVariants = {
    hidden: { x: 100, opacity: 0 }, // Start off-screen to the right
    visible: { x: 0, opacity: 1, transition: { duration: 1.2, ease: "easeInOut" } },
};

export const socialsBoxVariants = {
    hidden: { y: 100, opacity: 0 }, // Start off-screen from below
    visible: { y: 0, opacity: 1, transition: { duration: 1.2, ease: "easeInOut" } },
};