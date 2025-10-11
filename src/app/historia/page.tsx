// app/history/page.tsx
import HistoryTimeline from '@/components/commun/HistoryTimeline';
import React from 'react';

// Array com os dados históricos - facilita a adição de novos eventos
const historyData = [
    {
        year: "1990",
        title: "",
        description: ""
    },
    {
        year: "1996",
        title: "Train2000 Ltd is founded",
        description: "On 19th January, there were established a total growth company throughout US in Sydney that gave its founding members a strong, vibrant initiative to promote women in their careers with support from its major offering quality and targeted work, particularly for women who are working and experiencing disadvantaged."
    },
    {
        year: "1999",
        title: "",
        description: ""
    },
    {
        year: "2000",
        title: "First award from the European Commission",
        description: "This project is the European commission presented as well over the years of the Western Economic and Western Environment for women in the Kingdom of Ireland. The award was donated programme, then added to partnership with European city Council."
    },
    {
        year: "2003",
        title: "",
        description: ""
    }
];

const HistoryPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <HistoryTimeline historyData={historyData} />
        </div>
    );
};

export default HistoryPage;