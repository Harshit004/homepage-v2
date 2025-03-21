import Navbar from "@/components/Navbar";
import ResponsiveNavbar from "@/components/responsive-navbar"
import Footer from "@/components/footer"
import Image from "next/image";
import Link from "next/link";

export default function Careers() {
  return (
    <>
      <ResponsiveNavbar />
      <main className="max-w-[1440px] mx-auto">
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
        <div className="w-full h-[1px] bg-black"></div>

        {/* Careers Section */}
        <h1 
          className="mt-[10px] ml-[120px] w-[600px] h-[132px] font-helvetica text-[120px] font-normal leading-[110%] tracking-[-4.96%] capitalize"
        >
          Careers
        </h1>

        {/* Text Box Below Heading */}
        <p 
          className="mt-[12px] ml-[120px] w-[600px] h-[110px] font-helvetica text-[20px] font-normal leading-[110%] tracking-[1%] text-[#808080]"
        >
          Life at WAE is vibrant and inspiring. Our culture is a tapestry of collaboration, inclusivity, and continuous learning. 
          Here, your professional growth is as important as your personal well-being. Enjoy a work environment that fosters creativity, 
          supports balance, and celebrates every success. At WAE, your journey is our story.
        </p>

        {/* Bottom Margin Before Next Divider */}
        <div className="mb-[132px]"></div>

        {/* Second Divider */}
        <div className="w-[1440px] h-[1px] bg-black mx-auto"></div>

        {/* Current Openings Section */}
        <h2 
          className="mt-[10px] ml-[120px] w-fit h-[95px] font-helvetica text-[86px] font-normal leading-[110%] tracking-[-4.96%] whitespace-nowrap"
        >
          Current Openings
        </h2>

        {/* Parent Container for Sales Manager & Description Box */}
        <div className="mt-[40px] mx-[120px] mb-[120px] flex justify-between items-start">
          
          {/* Left Item: Sales Manager */}
          <h3 className="w-fit whitespace-nowrap h-[48px] font-helvetica text-[40px] font-normal leading-[110%] tracking-[-4.96%]">
            Sales Manager
          </h3>

          {/* Right Item: Description + Apply Button */}
          <div className="w-[640px] h-[150px] flex flex-col">
            
            {/* Job Description */}
            <p className="w-[640px] h-[54px] font-helvetica text-[15.5px] font-normal leading-[110%] tracking-[-2%] text-[#808080]">
              Whether you're looking for a full-time role, an 
              apprenticeship, a short-term project, or an 
              internship, WAE has a place for you. Discover your 
              perfect fit and join a team that's shaping the future.
            </p>

            <div className="mb-[40px]"></div>

            {/* Apply Now Button (40px below text) */}
            <button 
              className="w-[230px] h-[56px] px-[32px] py-[16px] bg-black text-white border border-black
              font-helvetica font-[400] text-[24px] leading-[100%] tracking-[2%] 
              flex items-center justify-center gap-2 hover:bg-white hover:text-black transition group"
            >
              Apply Now
              <img 
                src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/b65e6ab9-db4f-4c7a-ee12-08b6d540ab00/public" 
                alt="Arrow Icon" 
                width="24" 
                height="24" 
                className="group-hover:hidden"
              />
              <img 
                src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/531927db-f544-4083-04ff-c05ab2bc2600/public" 
                alt="Arrow Icon Hover" 
                width="24" 
                height="24" 
                className="hidden group-hover:block"
              />
            </button>


          </div>
        </div>

        {/* Parent Container for Graphic Designer & Description Box */}
        <div className="mt-[120px] mx-[120px] mb-[180px] flex justify-between items-start">
          
          {/* Left Item: Graphic Designer */}
          <h3 className="w-fit whitespace-nowrap h-[48px] font-helvetica text-[40px] font-normal leading-[110%] tracking-[-4.96%]">
            Graphic Designer
          </h3>


          {/* Right Item: Description + Apply Button */}
          <div className="w-[640px] h-[150px] flex flex-col">
            
            {/* Job Description */}
            <p className="w-[640px] h-[54px] font-helvetica text-[15.5px] font-normal leading-[110%] tracking-[-2%] text-[#808080]">
              Whether you're looking for a full-time role, an 
              apprenticeship, a short-term project, or an 
              internship, WAE has a place for you. Discover your 
              perfect fit and join a team that's shaping the future.
            </p>

            <div className="mb-[40px]"></div>

            {/* Apply Now Button (40px below text) */}
            <button 
              className="w-[230px] h-[56px] px-[32px] py-[16px] bg-black text-white border border-black
              font-helvetica font-[400] text-[24px] leading-[100%] tracking-[2%] 
              flex items-center justify-center gap-2 hover:bg-white hover:text-black transition group"
            >
              Apply Now
              <img 
                src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/b65e6ab9-db4f-4c7a-ee12-08b6d540ab00/public" 
                alt="Arrow Icon" 
                width="24" 
                height="24" 
                className="group-hover:hidden"
              />
              <img 
                src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/531927db-f544-4083-04ff-c05ab2bc2600/public" 
                alt="Arrow Icon Hover" 
                width="24" 
                height="24" 
                className="hidden group-hover:block"
              />
            </button>


          </div>
        </div>

        {/* Third Divider */}
        <div className="w-[1440px] h-[1px] bg-black mx-auto"></div>

        {/* Explore opportunities section */}
        <section className="mt-[10px] ml-[120px] mb-[80px]">
          <h2 className="w-fit h-[95px] font-helvetica font-[400] text-[86px] leading-[110%] tracking-[-4.96%] capitalize whitespace-nowrap">
            Explore Opportunity
          </h2>
        </section>

        {/* Opportunity list */}
        <div
          className="relative w-full h-[400px] bg-cover bg-center transition-all duration-500 group"
          style={{
            backgroundImage:
              "url('https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/e4d61536-8242-40a4-4110-ddb20c607300/public')",
          }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              backgroundImage:
                "url('https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/376fd209-de50-4657-9fa1-62d2b83bd700/public')",
            }}
          ></div>

          <div className="flex justify-between items-start h-full px-[120px] relative z-10">
            {/* Left Item */}
            <div className="mt-[160px]">
              <h2 className="w-[500px] h-[77px] font-helvetica font-[400] text-[64px] leading-[120%] tracking-[-4%] text-white mb-[8px]">
                Apprenticeship
              </h2>
              <p className="w-[500px] h-[87px] font-helvetica font-[400] text-[16px] leading-[120%] tracking-[-4%] text-white">
                Step into the professional world with hands-on 
                experience and expert mentorship. Ideal for those 
                eager to learn and grow.
              </p>
            </div>

            {/* Right Item - Button */}
            <div className="mt-[160px] mr-[120px]">
              <button 
                className="w-[222px] h-[56px] px-[32px] py-[16px] bg-white text-black border border-black
                font-helvetica font-[400] text-[24px] leading-[100%] tracking-[2%] 
                flex items-center justify-center gap-2 hover:bg-black hover:text-white transition apply-button-group"
              >
                Apply Now
                <img 
                  src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/531927db-f544-4083-04ff-c05ab2bc2600/public" 
                  alt="Arrow Icon" 
                  width="24" 
                  height="24" 
                  className="apply-button-group-hover:hidden"
                />
                <img 
                  src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/b65e6ab9-db4f-4c7a-ee12-08b6d540ab00/public" 
                  alt="Arrow Icon Hover" 
                  width="24" 
                  height="24" 
                  className="hidden apply-button-group-hover:block"
                />
              </button>
            </div>
          </div>
        </div>


        <div
          className="relative w-full h-[400px] bg-cover bg-center group"
          style={{
            backgroundImage:
              "url('https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/775d9d34-50d8-4e70-2f4b-34937f790c00/public')",
          }}
        >
          {/* Hover Image Overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              backgroundImage:
                "url('https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/69a60181-953b-4c2b-e1bd-d0ce14d49100/public')",
            }}
          ></div>

          <div className="flex justify-between items-start h-full px-[120px] relative">
            {/* Left Item */}
            <div className="mt-[160px]">
              <h2 className="w-fit h-[77px] font-helvetica font-[400] text-[64px] leading-[120%] tracking-[-4%] text-white mb-[8px]">
                Full-Time Positions
              </h2>
              <p className="w-[500px] h-[87px] font-helvetica font-[400] text-[16px] leading-[120%] tracking-[-4%] text-white">
                Dive into diverse roles that challenge and excite you. From
                engineering to marketing, we are on the lookout for passionate
                professionals ready to innovate.
              </p>
            </div>

            {/* Right Item - Button */}
            <div className="mt-[160px] mr-[120px]">
              <button 
                className="w-[222px] h-[56px] px-[32px] py-[16px] bg-white text-black border border-black
                font-helvetica font-[400] text-[24px] leading-[100%] tracking-[2%] 
                flex items-center justify-center gap-2 hover:bg-black hover:text-white transition apply-button-group"
              >
                Apply Now
                <img 
                  src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/531927db-f544-4083-04ff-c05ab2bc2600/public" 
                  alt="Arrow Icon" 
                  width="24" 
                  height="24" 
                  className="apply-button-group-hover:hidden"
                />
                <img 
                  src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/b65e6ab9-db4f-4c7a-ee12-08b6d540ab00/public" 
                  alt="Arrow Icon Hover" 
                  width="24" 
                  height="24" 
                  className="hidden apply-button-group-hover:block"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Internship Section */}
        <div
          className="relative w-full h-[400px] bg-cover bg-center group"
          style={{
            backgroundImage:
              "url('https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/d2555e3b-02fb-4fad-f924-5b81439b4c00/public')",
          }}
        >
          {/* Hover Image Overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              backgroundImage:
                "url('https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/ac2eee46-ca15-4f28-574a-37f8b762f100/public')",
            }}
          ></div>

          <div className="flex justify-between items-start h-full px-[120px] relative">
            {/* Left Item */}
            <div className="mt-[160px]">
              <h2 className="w-[500px] h-[77px] font-helvetica font-[400] text-[64px] leading-[120%] tracking-[-4%] text-white mb-[8px]">
                Internship
              </h2>
              <p className="w-[500px] h-[87px] font-helvetica font-[400] text-[16px] leading-[120%] tracking-[-4%] text-white">
                Our internships offer more than just experience. They’re gateways to
                your future career, providing real-world skills and professional
                development.
              </p>
            </div>

            {/* Right Item - Button */}
            <div className="mt-[160px] mr-[120px]">
              <button 
                className="w-[222px] h-[56px] px-[32px] py-[16px] bg-white text-black border border-black
                font-helvetica font-[400] text-[24px] leading-[100%] tracking-[2%] 
                flex items-center justify-center gap-2 hover:bg-black hover:text-white transition apply-button-group"
              >
                Apply Now
                <img 
                  src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/531927db-f544-4083-04ff-c05ab2bc2600/public" 
                  alt="Arrow Icon" 
                  width="24" 
                  height="24" 
                  className="apply-button-group-hover:hidden"
                />
                <img 
                  src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/b65e6ab9-db4f-4c7a-ee12-08b6d540ab00/public" 
                  alt="Arrow Icon Hover" 
                  width="24" 
                  height="24" 
                  className="hidden apply-button-group-hover:block"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Short Term Projects Section */}
        <div
          className="relative w-full h-[400px] bg-cover bg-center group"
          style={{
            backgroundImage:
              "url('https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/2fb9f347-99a2-4263-894e-4cd47eb3e600/public')",
          }}
        >
          {/* Hover Image Overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              backgroundImage:
                "url('https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/16d7a205-7f2b-4d1c-993b-ef686f473000/public')",
            }}
          ></div>

          <div className="flex justify-between items-start h-full px-[120px] relative">
            {/* Left Item */}
            <div className="mt-[168px]">
              <h2 className="w-fit h-[77px] font-helvetica font-[400] text-[64px] leading-[120%] tracking-[-4%] text-white mb-[8px]">
                Short Term Projects
              </h2>
              <p className="w-[500px] h-[87px] font-helvetica font-[400] text-[16px] leading-[120%] tracking-[-4%] text-white">
                Engage in unique, high-impact projects. Perfect for specialists
                looking to contribute their expertise on a flexible basis.
              </p>
            </div>

            {/* Right Item - Button */}
            <div className="mt-[160px] mr-[120px]">
              <button 
                className="w-[222px] h-[56px] px-[32px] py-[16px] bg-white text-black border border-black
                font-helvetica font-[400] text-[24px] leading-[100%] tracking-[2%] 
                flex items-center justify-center gap-2 hover:bg-black hover:text-white transition apply-button-group"
              >
                Apply Now
                <img 
                  src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/531927db-f544-4083-04ff-c05ab2bc2600/public" 
                  alt="Arrow Icon" 
                  width="24" 
                  height="24" 
                  className="apply-button-group-hover:hidden"
                />
                <img 
                  src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/b65e6ab9-db4f-4c7a-ee12-08b6d540ab00/public" 
                  alt="Arrow Icon Hover" 
                  width="24" 
                  height="24" 
                  className="hidden apply-button-group-hover:block"
                />
              </button>
            </div>
          </div>
        </div>          


        {/* Bottom Margin Before Next Divider */}
        <div className="mb-[180px]"></div>

        {/* 4 images section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-[55px] w-full max-w-[1200px] mx-[120px] mb-[100px] md:mb-[180px]">
          <img
            src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/4ffa90ac-3776-43bf-9516-d4be96312300/public"
            className="w-full aspect-auto object-contain"
          />
          <img
            src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/8b2d976b-dfd5-41ff-3030-739208c2da00/public"
            className="w-full aspect-auto object-contain md:row-span-2"
          />
          <img
            src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/d6333765-ee81-4dab-9a9a-b5a40184ef00/public"
            className="w-full aspect-auto object-contain md:row-span-2"
          />
          <img
            src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/0d155b2e-5450-4223-f126-17aa853d4300/public"
            className="w-full aspect-auto object-contain"
          />
        </div>

      </main>
      <Footer />
    </>
  );
}
