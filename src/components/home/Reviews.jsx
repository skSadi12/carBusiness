import React, { useState } from "react";
import Gradient from "../reUse/Gradient";
import { cn } from "../../lib/utils";

function Reviews() {
  const [active, setActive] = useState(1);
  const Reviewsx = [
    {
      name: "David",
      image: "david.png",
      type: "Happy Client",
      review: {
        star: 4,
        title: "Amazing Experiance!",
        details: "The AI features saved us countless hours .",
      },
    },
    {
      name: "John Smith",
      image: "john-smith.png",
      type: "Happy Client",
      review: {
        star: 5,
        title: "It Was A Amazing Experiance!",
        details:
          "The AI features saved us countless hours and ensured our compliance was spot on.",
      },
    },
    {
      name: "Ronald Richards",
      image: "ronald-richards.png",
      type: "Happy Client",
      review: {
        star: 3,
        title: "Amazing",
        details: "The AI features was spot on.",
      },
    },
  ];
  const activeReview = Reviewsx[active]
  return (
    <section className="bg-[#F6F6F6]">
      <h2 className="text-center text-[46px] font-bold py-12 ">
        Reviews From <Gradient>Our Client</Gradient>
      </h2>
      <div className="max-w-[1300px] px-5 pb-20 mx-auto justify-evenly flex flex-col lg:flex-row gap-20   items-center">
        <div className="flex items-center gap-5 lg:w-1/2 w-full">
          <div className="space-y-5">
            {Array.from(Array(3).keys()).map((el) => (
              <div
                className={cn(
                  "w-[5px] h-[92px] rounded-[20px] bg-white ",
                  active === el &&
                    "bg-gradient-to-b from-[#00D2FF] to-[#059DBE]"
                )}
              />
            ))}
          </div>
          <div className="space-y-5  ">
            {Reviewsx.map((data, i) => (
              <button
                key={i}
                className={cn(
                  "inline-flex lg:min-w-[500px] min-w-full items-center gap-5 bg-white rounded-full border-blue-500 border-2",
                  active === i &&
                    "bg-gradient-to-b from-[#00D2FF] to-[#059DBE] text-white "
                )}
                active={active === i}
                onClick={() => {
                  setActive(i);
                }}
              >
                <div>
                  <img src={data.image} alt={data.name} />
                </div>
                <div>
                  <h5>{data.name}</h5>
                  <h5>{data.type}</h5>
                </div>
              </button>
            ))}
          </div>
        </div>
        <div className="lg:w-1/2 w-full">
          <div className="space-y-6">
            <h2 className="text-[30px] font-bold ">{activeReview.review.title}</h2>
            <div className="flex gap-2">
                {Array.from(Array(activeReview.review.star).keys()).map((el) => (
                  <img src="/star.svg" alt="" />
                ))}
              </div>
              <p>{activeReview.review.details}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
