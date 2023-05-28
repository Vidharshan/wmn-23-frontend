import React from "react";

import { Img, Text } from "components";

const FrameTwoPage = () => {
  return (
    <>
      <div className="bg-blue_gray_100 font-helvetica h-[900px] mx-auto pt-[5px] px-[5px] relative w-full">
        <div className="absolute flex h-[203px] inset-x-[0] justify-end max-w-[1302px] mx-auto md:px-5 top-[36%] w-full">
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
        <div className="absolute h-[900px] inset-y-[0] my-auto md:px-5 right-[1%] w-[70%] md:w-full">
          <div className="h-[900px] m-auto w-full">
            <Img
              src="images/img_1.png"
              className="h-[900px] m-auto object-cover w-full"
              alt="One"
            />
            <Img
              src="images/img_frestica_white_a700.svg"
              className="absolute h-[203px] left-[0] top-[36%]"
              alt="frestica_One"
            />
          </div>
          <div className="absolute flex flex-col h-max inset-y-[0] items-start justify-start my-auto right-[5%] w-[37%]">
            <div className="flex flex-row items-start justify-between md:ml-[0] ml-[127px] w-[63%] md:w-full">
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
            <Img
              src="images/img_subtract_white_a700.svg"
              className="h-[116px] mt-[264px]"
              alt="subtract_One"
            />
            <div className="flex flex-col gap-[26px] items-center justify-start md:ml-[0] ml-[127px] mt-[152px]">
              <Text
                className="leading-[110.00%] text-white_A700 tracking-[-1.20px] uppercase w-[97%] sm:w-full"
                as="h1"
                variant="h1"
              >
                Create your personalized wardobe
              </Text>
              <Text
                className="leading-[120.00%] text-white_A700 tracking-[-0.80px] w-full"
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
        <Text
          className="absolute leading-[100.00%] left-[5%] text-white_A700 top-[4%] tracking-[-1.20px]"
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
          className="absolute bottom-[6%] leading-[110.00%] left-[5%] text-white_A700 tracking-[-1.20px] uppercase"
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
    </>
  );
};

export default FrameTwoPage;
