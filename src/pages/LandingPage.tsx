import React from 'react';

const LandingPage: React.FC = () => {
    return (
        <div className="flex flex-row w-full">
            <div className="w-1/2 bg-[#04020E] p-4">Left Side</div>
            <div className="flex w-1/2 bg-[#8B5CF6] p-4 text-white justify-center items-center">
            <img src="/logo_1.jpg" alt="Logo" className="h-62 w-62 rounded-[120px]" />
            </div>
        </div>
    );
};

export default LandingPage;