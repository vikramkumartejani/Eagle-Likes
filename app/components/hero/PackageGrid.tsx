'use client';
import React from 'react';
import { Package, PlanType } from './types';
import { PACKAGES } from './data';

interface PackageGridProps {
    selectedPlanType: PlanType;
    selectedPackage: Package;
    onPackageSelect: (pkg: Package) => void;
}

const PackageGrid: React.FC<PackageGridProps> = ({ selectedPlanType, selectedPackage, onPackageSelect }) => {
    // Dynamic gradient based on selected plan type
    const getGradient = (pkg: Package) => {
        if (selectedPackage.count !== pkg.count) return 'bg-[#FFFFFF1A]';

        switch (selectedPlanType) {
            case 'premium':
                return 'bg-[linear-gradient(90deg,#0663CD_0%,#01AAFF_100%)]';
            case 'active':
                return 'bg-[linear-gradient(90deg,#D71E77_0%,#B0125D_100%)]';
            case 'vip':
                return 'bg-[linear-gradient(90deg,#00C853_0%,#00E676_100%)]';
            default:
                return 'bg-[#FFFFFF1A]';
        }
    };

    return (
        <div className="mt-11.25 grid grid-cols-2 sm:grid-cols-4 gap-6.5 mb-11.25 w-full max-w-157.5">
            {PACKAGES.map((pkg) => (
                <button
                    key={pkg.count}
                    onClick={() => onPackageSelect(pkg)}
                    className={`bg-[#FFFFFF1A] flex flex-col cursor-pointer items-center justify-center rounded-[26px] border transition-all duration-200 overflow-hidden group
                         ${selectedPackage.count === pkg.count
                            ? 'border-[#FFFFFF33]'
                            : 'border-[#FFFFFF1A]'
                        }
                    `}
                >
                    {/* Top part: Count */}
                    <div className={`rounded-[25px] w-full py-[27.22px] text-[35px] leading-8.75 font-semibold font-inter text-center text-white ${getGradient(pkg)}`}>
                        {pkg.count}
                    </div>

                    {/* Bottom part: Discount */}
                    <div className="w-full pt-3.75 pb-3.5 text-center text-[23.43px] leading-7.25 font-normal">
                        {pkg.discount[selectedPlanType]}% off
                    </div>
                </button>
            ))}
        </div>
    );
};

export default PackageGrid;
