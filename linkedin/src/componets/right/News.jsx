import React from 'react'

const News = () => {
    const data = [
        {
            news: "Top 10 crashes",
            time: "2 hr ago",
            reader: 200
        },
        {
            news: "World Bank cuts..",
            time: "2 day ago",
            reader: 2002
        },
        {
            news: "How to compile resume",
            time: "1 hr ago",
            reader: 5454
        },
        {
            news: "Most job fining",
            time: "2 min ago",
            reader: 276
        },
        {
            news: "Top 10 crashes",
            time: "2 hr ago",
            reader: 998
        },
    ]
    return (
        <>
            <div className='bg-white rounded-xl text-gray-500 p-4'>
                <div>
                    <h1 className='text-xl font-medium py-2'>LinkedIn News</h1>
                </div>
                {data.map((data) => (
                    <div className='pb-2'>
                        <div className=''>
                            <span className='text-lg font-medium'><span>*{" "}</span>{data.news}</span>
                            <div className='text-gray-400 flex gap-1 text-sm pl-4'>
                                <span>{data.time}</span>
                                <span>{data.reader}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default News