'use client';
import React from 'react';
import Image from 'next/image';
import { FOLLOWERS_UPDATES } from './data';

const FollowersPreview: React.FC = () => {
    return (
        <div className="w-full max-w-196.5 bg-[#FFFFFF1A] sm:border border-[#FFFFFF26] rounded-[14px] sm:rounded-3xl overflow-hidden mb-[30px] sm:mb-10 flex flex-col" style={{ boxShadow: "0px 0px 4.75px 0px #00000033" }}>
            <div className="pb-3 sm:pb-6">
                <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3.25 border-b border-[#50505033] sm:border-[#FFFFFF33]">
                    <div className="flex items-center gap-[9px] sm:gap-3.5">
                        <Image src='/assets/user-icon.svg' alt='user-icon' width={24} height={26} className='sm:w-6 w-[15px]' />
                        <span className="text-[14px] sm:text-[24px] leading-6 font-semibold text-white">Followers Preview</span>
                    </div>
                    <div className="bg-[#FFFFFF33] px-[7px] sm:px-3 h-[26.27px] sm:h-10.75 rounded-[60px] flex items-center gap-1 sm:gap-1.5">
                        <svg width="17" height="16" className='sm:w-[17px] w-[13.50px]' viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.13104 0.820138C7.48634 -0.273351 9.03333 -0.273349 9.38863 0.82014L10.5248 4.31706C10.6837 4.80609 11.1395 5.13718 11.6536 5.13718H15.3305C16.4803 5.13718 16.9583 6.60846 16.0282 7.28427L13.0535 9.44549C12.6375 9.74772 12.4634 10.2834 12.6223 10.7725L13.7586 14.2694C14.1139 15.3629 12.8623 16.2722 11.9321 15.5964L8.95747 13.4351C8.54148 13.1329 7.97819 13.1329 7.5622 13.4351L4.58754 15.5964C3.65736 16.2722 2.40582 15.3629 2.76112 14.2694L3.89733 10.7725C4.05623 10.2834 3.88216 9.74772 3.46617 9.44549L0.491512 7.28427C-0.438665 6.60846 0.0393848 5.13718 1.18915 5.13718H4.86603C5.38022 5.13718 5.83593 4.80608 5.99482 4.31706L7.13104 0.820138Z" fill="#01AAFF" />
                        </svg>
                        <span className="text-[9.94px] sm:text-[16.62px] leading-[22px] sm:leading-9 font-semibold text-[#01AAFF]">Real Followers</span>
                    </div>
                </div>
                {/* Scrollable List */}
                <div className="mx-[9px] sm:mx-4 pt-[13.12px] sm:pt-5.75 grid grid-rows-3 grid-flow-col gap-x-[14.2px] sm:gap-x-[23.74px] gap-y-2 sm:gap-y-3.25 custom-scroll overflow-x-auto pb-4 sm:pb-6">
                    {FOLLOWERS_UPDATES.map((update, idx) => (
                        <div key={idx} className="text-nowrap flex items-center gap-[7px] sm:gap-3 pl-1 sm:pl-[7.12px] pr-[9px] sm:pr-[14.24px] rounded-[10.65px] sm:rounded-[17px] bg-[#EDEDED1A] sm:bg-[#EDEDED0D] border border-[#FFFFFF26] sm:border-[#FFFFFF1A] shrink-0 w-auto h-[34px] sm:h-14.25">
                            <div className="w-[26.27px] sm:w-11 h-[26.27px] sm:h-11 rounded-full bg-gray-700 overflow-hidden relative shrink-0">
                                <Image src={update.avatar} alt="User" fill sizes="44px" unoptimized className="object-cover" />
                            </div>
                            <div className="w-full flex justify-between gap-[7px] sm:gap-3">
                                <p className='text-[9.94px] sm:text-[16.62px] leading-5 sm:leading-6 font-normal'>
                                    <span className="text-white blur-xs select-none">{update.name}</span>
                                </p>
                                <p className="text-[9.94px] sm:text-[16.62px] leading-5 sm:leading-6 font-normal text-white">started following you. <span className='ml-[7px] sm:ml-2.5'>{update.time}</span></p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FollowersPreview;
