// components/HistoryTimeline.tsx
'use client';

import React from 'react';

interface HistoryEvent {
    year: string;
    title: string;
    description: string;
}

interface HistoryTimelineProps {
    historyData: HistoryEvent[];
}

const HistoryTimeline: React.FC<HistoryTimelineProps> = ({ historyData }) => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            {/* Header */}
            <div className="mb-12">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Our History</h1>
                <p className="text-lg text-gray-600 mb-2">Established in 1996</p>
                <div className="w-24 h-1 bg-blue-600"></div>
            </div>

            {/* Timeline */}
            <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200"></div>

                {historyData.map((event, index) => (
                    <div
                        key={index}
                        className={`relative flex flex-col md:flex-row mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                            }`}
                    >
                        {/* Year marker */}
                        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white border-4 border-blue-600 text-blue-600 font-bold text-xl z-10 mx-auto md:mx-0 mb-4 md:mb-0">
                            {event.year}
                        </div>

                        {/* Content */}
                        <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} mt-2 md:mt-0`}>
                            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
                                <p className="text-gray-600">{event.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HistoryTimeline;