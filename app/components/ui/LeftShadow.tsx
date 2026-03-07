import React from "react";

const LeftShadow = () => {
    return (
        <>
            {/* Desktop */}
            <div className="absolute -z-10 lg:-left-[187px] lg:-left-[321px] lg:-top-[280px] w-[292px] h-64 lg:w-[517px] lg:h-[517px] shrink-0 rounded-[292px] lg:rounded-[517px] bg-[rgba(0,103,219,0.32)] blur-[100px]"></div>
            {/* Mobile */}
            <div className="block lg:hidden absolute z-10 -left-[140px] -top-[3px] w-[292px] h-64 shrink-0 rounded-[292px] bg-[rgba(0,103,219,0.32)] blur-[100px] will-change-transform"></div>
        </>
    );
};

export default LeftShadow;