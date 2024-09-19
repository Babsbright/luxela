import Hero from "./components/Homepage/Hero";
import SolanaLogo1 from "/public/assests/solana-sol-logo-horizontal 1.svg";
import SolanaLogo2 from "/public/assests/image 3.svg";
import BrandImage from "/public/assests/Frame 2087327261.svg";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { QuestionIcon } from "./components/icons";

const featureData = [
  {
    title: "Make Payment in Crypto",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "NFTs to Serve Various Purposes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Security and Transparency",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Limited Fashion Pieces",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const brandData = [
  {
    name: "Veekee James",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Veekee James",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Veekee James",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const faqData = Array(6).fill({
  title: "Title or Header",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
});

// Reusable components
const FeatureCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="mt-[99px] flex justify-between items-center bg-[#1A1A1A] rounded-[20px]">
    <div className="pl-[40px] py-[121.5px] w-[540px]">
      <h2 className="font-aeonik text-[32px] text-white">{title}</h2>
      <p className="text-[#BFBFBF] font-spaceGrotesk text-[24px] mt-[24px]">
        {description}
      </p>
    </div>
    <div className="rounded-r-[20px] h-[720px] w-[620px] bg-gray-50"></div>
  </div>
);

const BrandCard = ({
  name,
  description,
}: {
  name: string;
  description: string;
}) => (
  <div className="mt-[80px] px-[60px]">
    <h3 className="text-white text-[18px] font-spaceGrotesk font-bold">
      {name}
    </h3>
    <p className="text-[#DCDCDC] text-[24px] font-spaceGrotesk mt-[4px]">
      {description}
    </p>
    <div className="text-left mt-[28px]">
      <button className="font-spaceGrotesk font-medium w-[230px] h-[44px] bg-gradient-to-b from-luxela_lilac via-luxela_purple2 to-luxela_purple rounded-lg text-sm text-white shadow-lg hover:bg-none hover:text-luxela_lilac hover:border hover:border-luxela_lilac focus:outline-luxela_lilac">
        Shop {name} Now
      </button>
    </div>
    <div className="mt-[80px]">
      <Image src={BrandImage} alt="Brand image" />
    </div>
  </div>
);

const FAQCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="max-w-[432px] h-[242px] rounded-[12px] flex flex-col justify-between bg-[#1A1A1A] p-[20px]">
    <div className="flex justify-between items-center">
      <h2 className="font-spaceGrotesk text-[17px] text-white">{title}</h2>
      <QuestionIcon />
    </div>
    <p className="font-spaceGrotesk text-[#BFBFBF]">{description}</p>
  </div>
);

export default function Home() {
  return (
    <div className="bg-[#0E0E0E]">
      <Hero />
      <div className="py-[100px]">
        <h2 className="text-white text-center font-aeonik text-[32px]">
          Our Trusted Partners
        </h2>
        <Marquee className="mt-[68px]">
          <Image src={SolanaLogo1} alt="solana logo" />
          <Image src={SolanaLogo2} alt="solana logo" />
          <Image src={SolanaLogo1} alt="solana logo" />
          <Image src={SolanaLogo2} alt="solana logo" />
        </Marquee>
      </div>

      <div className="p-[100px] text-center">
        <h2 className="font-aeonik text-[32px] text-white">
          What Exactly is Luxela?
        </h2>
        <p className="text-[#BFBFBF] text-[18px] font-spaceGrotesk mt-[20px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="mt-[68px] rounded-[20px] h-[538px] bg-gray-50"></div>
      </div>

      <div className="mt-[99px] p-[100px]">
        {featureData.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>

      <div className="mt-[99px] py-[100px]">
        <h2 className="text-white font-aeonik text-[32px] text-center">
          Featured Brands on Luxela
        </h2>
        <div className="space-y-[160px]">
          {brandData.map((brand, index) => (
            <BrandCard
              key={index}
              name={brand.name}
              description={brand.description}
            />
          ))}
        </div>
      </div>

      <div className="mt-[99px] py-[100px]">
        <div className="text-center">
          <h2 className="font-aeonik text-[32px] text-white">
            Frequently Asked Questions
          </h2>
          <p className="font-spaceGrotesk text-[18px] pl-[200.5px] pr-[199.5px] mt-[20px] text-[#BFBFBF]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
        <div className="mt-[72px] grid grid-cols-3 gap-[12px] px-[60px]">
          {faqData.map((faq, index) => (
            <FAQCard
              key={index}
              title={faq.title}
              description={faq.description}
            />
          ))}
        </div>
      </div>

      <div className="mt-[99px] px-[60px] py-[100px]">
        <div className="bg-[#1A1A1A] py-[95px] text-center ">
          <h2 className="font-aeonik text-white text-[32px]">
            Frequently Asked Questions
          </h2>
          <p className="px-[240px] mt-[16px] text-[#BFBFBF]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut{" "}
          </p>
          <div className="mt-[40px]">
            <button className="font-spaceGrotesk font-medium w-[230px] h-[44px] bg-gradient-to-b from-luxela_lilac via-luxela_purple2 to-luxela_purple rounded-lg text-sm text-white shadow-lg hover:bg-none hover:text-luxela_lilac hover:border hover:border-luxela_lilac focus:outline-luxela_lilac">
              Shop Luxela Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
