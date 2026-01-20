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
            className={`group w-[50px] h-[26px] rounded-full relative shrink-0 transition-all duration-300 ease-in-out focus:outline-none cursor-pointer overflow-hidden ${checked
                ? 'bg-linear-to-r from-[#0663CD] to-[#01AAFF]'
                : 'bg-[#101828] border border-[#FFFFFF33]'
                }`}
            style={{
                boxShadow: checked ? 'inset 0 2px 4px rgba(0,0,0,0.2)' : 'inset 0 2px 4px rgba(0,0,0,0.5)'
            }}
        >
            <span
                className={`absolute left-[3px] top-1/2 -translate-y-1/2 w-[20px] h-[20px] bg-white rounded-full transition-all duration-300 ease-in-out ${checked ? 'translate-x-[24px]' : 'translate-x-[-1px]'
                    }`}
            />
        </button>
    );
};

export default ToggleSwitch;