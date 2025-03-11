import Navbar from "@/components/Navbar";
import { Footer2 } from "@/components/footer2";
import Image from "next/image";
import Link from "next/link";

export default function Careers() {
  return (
    <>
      <Navbar />
      <main className="max-w-[1440px] mx-auto px-0 pt-[19vh]">
        {/* Banner Image */}
        <div className="relative w-full h-[688px]">
          <Image
            src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/cb27201b-56c0-4d35-6e97-ef588c849600/public"
            alt="Careers Banner"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        {/* Margin Bottom */}
        <div className="h-[180px]"></div>

        {/* Horizontal Divider */}
        <div className="w-full h-[1px] bg-gray-300"></div>

        {/* Careers Section */}
        <h1 
          className="mt-[10px] ml-[120px] w-[383px] h-[132px] font-helvetica text-[120px] font-normal leading-[110%] tracking-[-4.96%] capitalize"
        >
          Careers
        </h1>

        {/* Text Box Below Heading */}
        <p 
          className="mt-[40px] ml-[120px] w-[600px] h-[315px] font-helvetica text-[32px] font-normal leading-[110%] tracking-[1%] text-[#808080]"
        >
          Life at WAE is vibrant and inspiring. Our culture is a tapestry of collaboration, inclusivity, and continuous learning. 
          Here, your professional growth is as important as your personal well-being. Enjoy a work environment that fosters creativity, 
          supports balance, and celebrates every success. At WAE, your journey is our story.
        </p>

        {/* Bottom Margin Before Next Divider */}
        <div className="mb-[180px]"></div>

        {/* Second Divider */}
        <div className="w-[1440px] h-[1px] bg-black mx-auto"></div>

        {/* Current Openings Section */}
        <h2 
          className="mt-[29px] ml-[120px] w-fit h-[95px] font-helvetica text-[86px] font-normal leading-[110%] tracking-[-4.96%] whitespace-nowrap"
        >
          Current Openings
        </h2>

        {/* Parent Container for Sales Manager & Description Box */}
        <div className="mt-[38px] mx-[120px] mb-[120px] flex justify-between items-start">
          
          {/* Left Item: Sales Manager */}
          <h3 className="w-[397px] h-[77px] font-helvetica text-[64px] font-normal leading-[110%] tracking-[-4.96%]">
            Sales Manager
          </h3>

          {/* Right Item: Description + Apply Button */}
          <div className="w-[535px] h-[200px] flex flex-col">
            
            {/* Job Description */}
            <p className="w-[535px] h-[104px] font-helvetica text-[24px] font-normal leading-[110%] tracking-[-2%] text-[#808080]">
              Whether you're looking for a full-time role, an 
              apprenticeship, a short-term project, or an 
              internship, WAE has a place for you. Discover your 
              perfect fit and join a team that's shaping the future.
            </p>

            {/* Apply Now Button (40px below text) */}
            <button className="mt-[40px] w-[222px] h-[56px] px-[32px] py-[16px] bg-black text-white 
            font-helvetica font-[400] text-[24px] leading-[100%] tracking-[2%] 
            flex items-center justify-center gap-2 hover:bg-gray-800 transition">
              Apply Now
              <span className="text-lg font-bold">↗</span> {/* North-East Arrow */}
            </button>

          </div>
        </div>

        {/* Parent Container for Graphic Designer & Description Box */}
        <div className="mt-[38px] mx-[120px] mb-[180px] flex justify-between items-start">
          
          {/* Left Item: Sales Manager */}
          <h3 className="w-[397px] h-[77px] font-helvetica text-[64px] font-normal leading-[110%] tracking-[-4.96%]">
            Graphic Designer
          </h3>

          {/* Right Item: Description + Apply Button */}
          <div className="w-[535px] h-[200px] flex flex-col">
            
            {/* Job Description */}
            <p className="w-[535px] h-[104px] font-helvetica text-[24px] font-normal leading-[110%] tracking-[-2%] text-[#808080]">
              Whether you're looking for a full-time role, an 
              apprenticeship, a short-term project, or an 
              internship, WAE has a place for you. Discover your 
              perfect fit and join a team that's shaping the future.
            </p>

            {/* Apply Now Button (40px below text) */}
            <button className="mt-[40px] w-[222px] h-[56px] px-[32px] py-[16px] bg-black text-white 
            font-helvetica font-[400] text-[24px] leading-[100%] tracking-[2%] 
            flex items-center justify-center gap-2 hover:bg-gray-800 transition">
              Apply Now
              <span className="text-lg font-bold">↗</span> {/* North-East Arrow */}
            </button>

          </div>
        </div>

        {/* Third Divider */}
        <div className="w-[1440px] h-[1px] bg-black mx-auto"></div>

        {/* Explore opportunities section */}
        <section className="mt-[29px] ml-[120px] mb-[80px]">
          <h2 className="w-fit h-[95px] font-helvetica font-[400] text-[86px] leading-[110%] tracking-[-4.96%] capitalize whitespace-nowrap">
            Explore Opportunity
          </h2>
        </section>

        {/* Opportunity list */}
        <div
          className="relative w-full h-[400px] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/e4d61536-8242-40a4-4110-ddb20c607300/public')",
          }}
        >
          <div className="flex justify-between items-start h-full px-[120px]">
            {/* Left Item */}
            <div className="mt-[168px]">
              <h2 className="w-[500px] h-[77px] font-helvetica font-[400] text-[64px] leading-[120%] tracking-[-4%] text-white mb-[8px]">
                Apprenticeship
              </h2>
              <p className="w-[500px] h-[87px] font-helvetica font-[400] text-[22px] leading-[120%] tracking-[-4%] text-white">
                Step into the professional world with hands-on 
                experience and expertvmentorship. Ideal for those 
                eager to learn and grow.
              </p>
            </div>

            {/* Right Item - Button */}
            <div className="mt-[168px] mr-[120px]">
            <button className="w-[222.25px] h-[56px] border border-white flex items-center justify-center 
            gap-[20px] px-[32px] py-[16px] bg-white text-black hover:bg-gray-200 transition 
            font-helvetica font-[400] text-[24px] leading-[100%] tracking-[2%]">
              Apply Now{" "}
              <span className="text-lg">↗</span>
            </button>
            </div>
          </div>
        </div>

        <div
          className="relative w-full h-[400px] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/e4d61536-8242-40a4-4110-ddb20c607300/public')",
          }}
        >
          <div className="flex justify-between items-start h-full px-[120px]">
            {/* Left Item */}
            <div className="mt-[168px]">
              <h2 className="w-fit h-[77px] font-helvetica font-[400] text-[64px] leading-[120%] tracking-[-4%] text-white mb-[8px]">
              Full-Time Positions
              </h2>
              <p className="w-[500px] h-[87px] font-helvetica font-[400] text-[22px] leading-[120%] tracking-[-4%] text-white">
                Dive into diverse roles that challenge and excite 
                you. From engineering to marketing, we are on the 
                lookout for passionate professionals ready to 
                innovate.
              </p>
            </div>

            {/* Right Item - Button */}
            <div className="mt-[168px] mr-[120px]">
            <button className="w-[222.25px] h-[56px] border border-white flex items-center justify-center 
            gap-[20px] px-[32px] py-[16px] bg-white text-black hover:bg-gray-200 transition 
            font-helvetica font-[400] text-[24px] leading-[100%] tracking-[2%]">
              Apply Now{" "}
              <span className="text-lg">↗</span>
            </button>
            </div>
          </div>
        </div>

        <div
          className="relative w-full h-[400px] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/e4d61536-8242-40a4-4110-ddb20c607300/public')",
          }}
        >
          <div className="flex justify-between items-start h-full px-[120px]">
            {/* Left Item */}
            <div className="mt-[168px]">
              <h2 className="w-[500px] h-[77px] font-helvetica font-[400] text-[64px] leading-[120%] tracking-[-4%] text-white mb-[8px]">
                Internship
              </h2>
              <p className="w-[500px] h-[87px] font-helvetica font-[400] text-[22px] leading-[120%] tracking-[-4%] text-white">
                Our internships offer more than just experience. 
                They’re gateways to your future career, providing 
                real-world skills and professional development.
              </p>
            </div>

            {/* Right Item - Button */}
            <div className="mt-[168px] mr-[120px]">
            <button className="w-[222.25px] h-[56px] border border-white flex items-center justify-center 
            gap-[20px] px-[32px] py-[16px] bg-white text-black hover:bg-gray-200 transition 
            font-helvetica font-[400] text-[24px] leading-[100%] tracking-[2%]">
              Apply Now{" "}
              <span className="text-lg">↗</span>
            </button>
            </div>
          </div>
        </div>

        <div
          className="relative w-full h-[400px] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/e4d61536-8242-40a4-4110-ddb20c607300/public')",
          }}
        >
          <div className="flex justify-between items-start h-full px-[120px]">
            {/* Left Item */}
            <div className="mt-[168px]">
              <h2 className="w-fit h-[77px] font-helvetica font-[400] text-[64px] leading-[120%] tracking-[-4%] text-white mb-[8px]">
                Short Term Projects
              </h2>
              <p className="w-[500px] h-[87px] font-helvetica font-[400] text-[22px] leading-[120%] tracking-[-4%] text-white">
                Engage in unique, high-impact projects. Perfect for 
                specialists looking to contribute their expertise on 
                a flexible basis.
              </p>
            </div>

            {/* Right Item - Button */}
            <div className="mt-[168px] mr-[120px]">
            <button className="w-[222.25px] h-[56px] border border-white flex items-center justify-center 
            gap-[20px] px-[32px] py-[16px] bg-white text-black hover:bg-gray-200 transition 
            font-helvetica font-[400] text-[24px] leading-[100%] tracking-[2%]">
              Apply Now{" "}
              <span className="text-lg">↗</span>
            </button>
            </div>
          </div>
        </div>

      </main>
      <Footer2 />
    </>
  );
}
