'use client';

import React from 'react';

interface ToggleSwitchProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ checked, onChange }) => {
    return (
        <button
            type="button"
            role="switch"
            aria-checked={checked}
            onClick={() => onChange(!checked)}
            className={`w-12.25 h-5.75 rounded-full relative shrink-0 transition-colors duration-300 ease-in-out focus:outline-none cursor-pointer  ${checked ? 'bg-[#0663CD]' : 'bg-transparent border border-[#BFA9B5]'
                }`}
        >
            <span
                className={`absolute left-1 top-1 w-3.25 h-3.25 bg-[#BFA9B5] rounded-full shadow-sm transform transition-transform duration-300 ease-in-out ${checked ? 'translate-x-6.75 mt-px bg-white' : 'translate-x-0'
                    }`}
            />
        </button>
    );
};

export default ToggleSwitch;