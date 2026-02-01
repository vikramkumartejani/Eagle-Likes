'use client';
import React, { useState } from 'react';

const GlobeIcon = ({ className }: { className?: string }) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M7.992 0C3.576 0 0 3.584 0 8C0 12.416 3.576 16 7.992 16C12.416 16 16 12.416 16 8C16 3.584 12.416 0 7.992 0ZM13.536 4.8H11.176C10.92 3.8 10.552 2.84 10.072 1.952C11.544 2.456 12.768 3.48 13.536 4.8ZM8 1.632C8.664 2.592 9.184 3.656 9.528 4.8H6.472C6.816 3.656 7.336 2.592 8 1.632ZM1.808 9.6C1.68 9.088 1.6 8.552 1.6 8C1.6 7.448 1.68 6.912 1.808 6.4H4.512C4.448 6.928 4.4 7.456 4.4 8C4.4 8.544 4.448 9.072 4.512 9.6H1.808ZM2.464 11.2H4.824C5.08 12.2 5.448 13.16 5.928 14.048C4.456 13.544 3.232 12.528 2.464 11.2ZM4.824 4.8H2.464C3.232 3.472 4.456 2.456 5.928 1.952C5.448 2.84 5.08 3.8 4.824 4.8ZM8 14.368C7.336 13.408 6.816 12.344 6.472 11.2H9.528C9.184 12.344 8.664 13.408 8 14.368ZM9.872 9.6H6.128C6.056 9.072 6 8.544 6 8C6 7.456 6.056 6.92 6.128 6.4H9.872C9.944 6.92 10 7.456 10 8C10 8.544 9.944 9.072 9.872 9.6ZM10.072 14.048C10.552 13.16 10.92 12.2 11.176 11.2H13.536C12.768 12.52 11.544 13.544 10.072 14.048ZM11.488 9.6C11.552 9.072 11.6 8.544 11.6 8C11.6 7.456 11.552 6.928 11.488 6.4H14.192C14.32 6.912 14.4 7.448 14.4 8C14.4 8.552 14.32 9.088 14.192 9.6H11.488Z" fill="white" />
    </svg>
);

const ChevronDownIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <polyline points="6 9 12 15 18 9" />
    </svg>
);

export const LanguageSelector = () => {
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState('EN');
    const languages = ['EN', 'ES', 'FR', 'DE'];

    return (
        <div className="relative w-full flex justify-center items-center md:justify-start">
            <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 text-[20px] font-inter leading-5 cursor-pointer hover:text-gray-300 w-fit px-2 py-1 rounded hover:bg-white/5 transition-colors"
            >
                <GlobeIcon className="w-5 h-5" />
                <span>{currentLang}</span>
                <ChevronDownIcon className={`w-5 h-5 transition-transform duration-200 ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>

            {isLangOpen && (
                <div className="absolute bottom-full left-0 mb-2 w-32 bg-[#1a1a1a] border border-white/10 rounded-lg shadow-xl overflow-hidden py-1">
                    {languages.map((lang) => (
                        <button
                            key={lang}
                            onClick={() => {
                                setCurrentLang(lang);
                                setIsLangOpen(false);
                            }}
                            className={`w-full text-left px-4 py-2 cursor-pointer text-sm hover:bg-white/5 transition-colors ${currentLang === lang ? 'text-white font-medium' : 'text-gray-400'}`}
                        >
                            {lang}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};
