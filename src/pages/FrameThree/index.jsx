import React from "react";

import { Img, Text } from "components";

const FrameThreePage = () => {
  return (
    <>
      <div className="bg-blue_gray_100 font-helvetica h-[900px] mx-auto pl-[5px] pt-[5px] relative w-full">
        <div className="md:h-[895px] h-[900px] ml-auto my-auto md:px-5 w-[96%] md:w-full">
          <div className="md:h-[895px] h-[900px] m-auto w-full">
            <div className="absolute flex h-[203px] justify-end left-[0] top-[36%] w-[95%] md:w-full">
              <Img
                src="images/img_subtract.svg"
                className="h-[75px] ml-auto mr-[187px] mt-auto"
                alt="subtract"
              />
              <Img
                src="images/img_frestica.svg"
                className="absolute h-[203px] inset-[0] justify-center m-auto"
                alt="frestica"
              />
            </div>
            <div className="absolute md:h-[895px] h-[900px] inset-y-[0] my-auto pb-[5px] right-[0] w-[68%] md:w-full">
              <Img
                src="images/img_1_895x929.png"
                className="h-[895px] m-auto object-cover w-full"
                alt="One"
              />
              <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start my-auto right-[6%] w-[26%]">
                <div className="flex flex-row items-start justify-between w-[97%] md:w-full">
                  <Text
                    className="mb-0.5 text-right text-white_A700 tracking-[-0.80px]"
                    as="h2"
                    variant="h2"
                  >
                    Search
                  </Text>
                  <Text
                    className="mt-0.5 text-right text-white_A700 tracking-[-0.80px]"
                    as="h2"
                    variant="h2"
                  >
                    <span className="text-white_A700 text-xl font-helvetica font-normal">
                      Bag{" "}
                    </span>
                    <span className="text-white_A700 text-xl font-helvetica font-normal">
                      <>&#123;</>
                    </span>
                    <span className="text-white_A700 text-xl font-helvetica font-normal">
                      <>0&#125;</>
                    </span>
                  </Text>
                </div>
                <Text
                  className="leading-[110.00%] mt-[533px] text-white_A700 tracking-[-1.20px] uppercase w-[97%] sm:w-full"
                  as="h1"
                  variant="h1"
                >
                  Create your personalized wardobe
                </Text>
                <Text
                  className="leading-[120.00%] mt-[26px] text-white_A700 tracking-[-0.80px] w-full"
                  as="h2"
                  variant="h2"
                >
                  Discover the latest fashion trends and shop our stylish
                  collection, we have everything you need to look and feel your
                  best.
                </Text>
              </div>
            </div>
          </div>
          <Img
            src="images/img_frestica_white_a700.svg"
            className="absolute h-[203px] right-[5%] top-[36%]"
            alt="frestica_One"
          />
        </div>
        <div className="absolute flex sm:flex-col flex-row md:gap-10 h-max inset-y-[0] items-start justify-between left-[5%] max-w-[1111px] my-auto md:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-[591px] items-start justify-start">
            <Text
              className="leading-[100.00%] text-white_A700 tracking-[-1.20px]"
              as="h1"
              variant="h1"
            >
              <>
                Women
                <br />
                Men
                <br />
                Youths
                <br />
                Kids
                <br />
                Past seasons
              </>
            </Text>
            <Text
              className="leading-[110.00%] text-white_A700 tracking-[-1.20px] uppercase"
              as="h1"
              variant="h1"
            >
              <>
                Made for you,
                <br />
                by you
              </>
            </Text>
          </div>
          <Img
            src="images/img_subtract_white_a700.svg"
            className="h-[116px] sm:mt-0 mt-72"
            alt="subtract_One"
          />
        </div>
      </div>
    </>
  );
};

export default FrameThreePage;
