"use client";

import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import { reviewsData, Review } from "./data"; // Import reviewsData

const Testimonials = () => {
    const [showAll, setShowAll] = useState(false);

    const displayedReviews = showAll ? reviewsData : reviewsData.slice(0, 3);

    return (
        <div className="max-w-[1240px] mx-auto px-4 py-16">
            <h1 className="text-[48px] font-bold uppercase text-center">Achivment Feedbacks</h1>
            <div className="flex gap-5 mt-10 overflow-x-auto" id="testimonials">
                {displayedReviews.map((review) => (
                    <div
                        key={review.id}
                        className="w-[400px] h-[240px] px-6 py-4 border border-[rgba(0,0,0,0.3)] rounded-[20px] shrink-0 flex flex-col justify-between"
                    >
                        <div>
                            <div className="mb-[15px] flex">
                                {/* Render Stars dynamically based on rating */}
                                {Array.from({ length: review.rating }, (_, i) => (
                                    <FaStar key={i} className="h-5 w-5 text-yellow-500" />
                                ))}
                            </div>
                            <div className="flex gap-2 items-center mb-2">
                                <h3 className="font-semibold text-lg">{review.user}</h3>
                                <BsFillCheckCircleFill className="h-6 w-6 text-green-500" />
                            </div>
                            <p className="text-[16px] text-[rgba(0,0,0,0.6)]">{review.content}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Show "See More" button if there are more reviews */}
            {reviewsData.length > 3 && (
                <Button
                    onClick={() => setShowAll(!showAll)}
                    className="bg-blue-800 text-white hover:bg-blue-700 transition"
                >
                    {showAll ? "See Less" : "See More"}
                </Button>
            )}
        </div>
    );
};

export default Testimonials;
