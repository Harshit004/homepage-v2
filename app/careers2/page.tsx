"use client"

import { useState } from "react"
import Navbar from "@/components/Navbar"
import ResponsiveNavbar from "@/components/responsive-navbar"
import Footer from "@/components/footer"
import Image from "next/image"
import AutoScrollCarousel from "@/components/AutoScrollCarousel"

export default function Careers2() {
  // Each item in the Explore Opportunities section
  const exploreItems = [
    {
      id: 1,
      title: "Apprenticeship",
      description: `Step into the professional world with hands-on 
                    experience and expert mentorship. Ideal for those 
                    eager to learn and grow.`,
    },
    {
      id: 2,
      title: "Full-Time Positions",
      description: `Dive into diverse roles that challenge and excite you. From
                    engineering to marketing, we are on the lookout for passionate
                    professionals ready to innovate.`,
    },
    {
      id: 3,
      title: "Internship",
      description: `Our internships offer more than just experience. They’re gateways to
                    your future career, providing real-world skills and professional
                    development.`,
    },
    {
      id: 4,
      title: "Short Term Projects",
      description: `Engage in unique, high-impact projects. Perfect for specialists
                    looking to contribute their expertise on a flexible basis.`,
    },
  ]

  // State to track which items are open (multiple can be open at once)
  const [openItems, setOpenItems] = useState<number[]>([])

  // Toggle function: if item is open, close it; if closed, open it
  const handleToggle = (id: number) => {
    if (openItems.includes(id)) {
      setOpenItems(openItems.filter(itemId => itemId !== id))
    } else {
      setOpenItems([...openItems, id])
    }
  }

  return (
    <>
      <ResponsiveNavbar />
      <main className="max-w-[1440px] mx-auto overflow-x-hidden">
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

        {/* Bottom Margin */}
        <div className="h-[180px]" />

        {/* Horizontal Divider */}
        <div className="w-full h-[1px] bg-black" />

        {/* Careers Section */}
        <h1 
          className="mt-[10px] px-[120px] max-w-[600px] font-helvetica text-[120px] font-normal leading-[110%] tracking-[-4.96%] capitalize"
        >
          Careers
        </h1>

        {/* Text Below Heading */}
        <p 
          className="mt-[12px] px-[120px] max-w-[920px] font-helvetica text-[20px] font-normal leading-[110%] tracking-[-2%] text-[#808080]"
        >
          Life at WAE is vibrant and inspiring. Our culture is a tapestry of collaboration, inclusivity, and continuous learning. 
          Here, your professional growth is as important as your personal well-being. Enjoy a work environment that fosters creativity, 
          supports balance, and celebrates every success. At WAE, your journey is our story.
        </p>

        {/* Bottom Margin Before Next Divider */}
        <div className="mb-[132px]" />

        {/* Second Divider */}
        <div className="w-full h-[1px] bg-black" />

        {/* Open Roles Section */}
        <section className="mt-[40px] mb-[180px] px-[120px]">
          <div className="grid grid-cols-2 gap-0">
            {/* Heading spans both columns */}
            <h2 className="col-span-2 text-[86px] font-helvetica font-normal leading-[110%] tracking-[-4.96%] mb-8">
              Open Roles
            </h2>

            {/* Left column empty for 50% offset */}
            <div></div>

            {/* Right column content */}
            <div>
              {/* Role #1: Design */}
              <div className="mb-[60px]">
                <h3 className="text-[40px] font-helvetica font-normal leading-[110%] tracking-[-4.96%] mb-[20px]">
                  Design
                </h3>
                <p className="text-[15.5px] font-helvetica font-normal leading-[110%] tracking-[-2%] text-[#808080] mb-[40px]">
                  Whether you're looking for a full-time role, an apprenticeship, 
                  a short-term project, or an internship, WAE has a place for you. 
                  Discover your perfect fit and join a team that's shaping the future.
                </p>
                <button 
                  className="w-[230px] h-[56px] px-[32px] py-[16px] bg-black text-white border border-black
                            font-helvetica font-[400] text-[24px] leading-[100%] tracking-[2%] 
                            flex items-center justify-center gap-2 hover:bg-white hover:text-black 
                            transition group"
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

              {/* Horizontal Divider */}
              <div className="border-t border-black w-full md:mr-[120px] mb-8" />

              {/* Role #2: Management */}
              <div>
                <h3 className="text-[40px] font-helvetica font-normal leading-[110%] tracking-[-4.96%] mb-[20px]">
                  Management
                </h3>
                <p className="text-[15.5px] font-helvetica font-normal leading-[110%] tracking-[-2%] text-[#808080] mb-[40px]">
                  Whether you're looking for a full-time role, an apprenticeship, 
                  a short-term project, or an internship, WAE has a place for you. 
                  Discover your perfect fit and join a team that's shaping the future.
                </p>
                <button 
                  className="w-[230px] h-[56px] px-[32px] py-[16px] bg-black text-white border border-black
                            font-helvetica font-[400] text-[24px] leading-[100%] tracking-[2%] 
                            flex items-center justify-center gap-2 hover:bg-white hover:text-black 
                            transition group"
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
          </div>
        </section>

        {/* Third Divider */}
        <div className="w-full h-[1px] bg-black" />

        {/* Explore Opportunities Section as an Accordion */}
        <section className="mt-[10px] px-[120px] mb-[80px]">
          <div className="grid grid-cols-2 gap-0">
            {/* Section heading spans both columns */}
            <h2 className="col-span-2 text-[86px] font-helvetica font-normal leading-[110%] tracking-[-4.96%] capitalize mb-8">
              Explore Opportunity
            </h2>

            {/* Column 1 (Left) empty for 50% offset */}
            <div></div>

            {/* Column 2 (Right) - ACCORDION CONTENT */}
            <div>
              {exploreItems.map(item => {
                // Check if this item is currently open
                const isOpen = openItems.includes(item.id)
                return (
                  <div key={item.id} className="mb-[60px]">
                    {/* Accordion Heading (click to toggle) */}
                    <div 
                      onClick={() => handleToggle(item.id)}
                      className="cursor-pointer select-none"
                    >
                      <h3 className="text-[40px] font-helvetica font-normal leading-[110%] tracking-[-4.96%] mb-[20px]">
                        {item.title}
                      </h3>
                    </div>

                    {/* Smooth transition container */}
                    <div
                      className={`transition-all duration-1000 ease-in-out overflow-hidden ${
                        isOpen ? "max-h-[500px]" : "max-h-0"
                      }`}
                    >
                      {/* The content is now inside the transitioning div */}
                      <p className="max-w-[500px] text-[15.5px] font-helvetica font-normal leading-[110%] tracking-[-2%] text-[#808080] mb-[40px]">
                        {item.description}
                      </p>
                      <button 
                        className="w-[230px] h-[56px] px-[32px] py-[16px] bg-black text-white border border-black
                                   font-helvetica font-[400] text-[24px] leading-[100%] tracking-[2%] 
                                   flex items-center justify-center gap-2 hover:bg-white hover:text-black 
                                   transition group"
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

                    {/* Horizontal Divider after each item (except last) */}
                    {item.id < exploreItems.length && (
                      <div className="border-t border-black w-full md:mr-[120px] mt-8" />
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Bottom Margin Before Next Divider */}
        <div className="mb-[180px]" />

        {/* Auto-Scrolling Carousel Section */}
        <section className="mt-[80px] mb-[180px]">
          <AutoScrollCarousel />
        </section>
      </main>
      <Footer />
    </>
  )
}
