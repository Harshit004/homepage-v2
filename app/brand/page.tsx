"use client";

import Navbar from "@/components/Navbar";
import ResponsiveNavbar from "@/components/responsive-navbar"
import Footer from "@/components/footer";
import RelatedCard from "@/components/related-card";
import Image from "next/image";

export default function Brand() {
  return (
    <>
      <ResponsiveNavbar />
      <main className="max-w-[1440px] mx-auto pt-[1vh] overflow-x-hidden">
        {/* Hero / Banner Section */}
        <div className="relative w-full h-[688px]">
          <Image
            src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/d3a7d5b9-b62f-4c75-3179-f892318dfa00/public"
            alt="Brand Hero"
            priority
            width={1076}
            height={757}
            style={{
              maxWidth: "100%",
              height: "auto",
              display: "block",
              margin: "0 auto",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Bottom Spacing */}
        <div className="h-[180px]" />

        {/* Horizontal Divider */}
        <div className="w-full h-[1px] bg-black" />

        {/* Goals of Six Sigma Section */}
        <section className="px-[120px] pt-[10px] mb-[180px]">
          <h1
            className="
              font-[400]
              text-[86px]
              mb-[20px]
              leading-[110%]
              tracking-[-4.26px]
              align-middle
              font-[Helvetica Neue]
              capitalize
            "
          >
            Goals of Six Sigma
          </h1>
          <p
            className="
              max-w-[1170px]
              font-[400]
              text-[32px]
              leading-[110%]
              tracking-[1%]
              align-middle
              font-[Helvetica Neue]
              text-black
              mt-4
            "
          >
            The Six Sigma principles embedded in our logo highlight our dedication
            to quality and excellence. By reducing defects and errors, we aim to
            improve productivity, customer satisfaction, and operational efficiency.
            Our goal is to produce defect-free products 99.99966% of the time,
            underscoring our commitment to excellence.
          </p>
        </section>

        {/* Optional Divider */}
        <div className="w-full h-[1px] bg-black" />

        {/* WAE Section */}
        <section className="px-[120px] mt-[10px] mb-[120px]">
          <h1
            className="
              font-[400]
              text-[86px]
              mb-[40px]
              leading-[110%]
              tracking-[-4.26px]
              align-middle
              font-[Helvetica Neue]
              capitalize
              whitespace-pre-line
            "
          >
            WAE:
            {"\n"}A Brand Committed to
            {"\n"}Innovation and Transformation
          </h1>
          <p
            className="
              max-w-[950px]
              font-[400]
              text-[32px]
              leading-[110%]
              tracking-[-2%]
              align-middle
              font-[Helvetica Neue]
              text-black
              mt-4
              mb-[120px]
            "
          >
            At WAE, our brand embodies more than just products; it represents a
            belief in possibilities. Our commitment to innovation, quality, and
            making a positive impact on people's lives through technology drives us
            forward. This philosophy is at the heart of everything we do, guiding
            our efforts to bring transformative solutions to the world.
          </p>
        </section>

        {/* Related Information Section */}
        <section className="max-w-[75rem] mx-[120px] mb-[9.72%]">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-[24px] items-start">
            <RelatedCard
              image="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/0c32e685-fbfe-4edb-0e63-4bbf261b3100/public"
              title="Belief in Possibilities!"
              description="At WAE, we believe in progress driven by purpose and innovation. Our commitment lies in developing technologies that create real impact and enable meaningful change. More than just manufacturers, we are partners in shaping a sustainable future through ingenuity and excellence."
              width={282}
              height={270}
            />
            <RelatedCard
              image="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/67063015-a309-4a59-9247-c67c4efea500/public"
              title="Commitment to SDG 6"
              description="Aligned with the United Nations' Sustainable Development Goal 6, we focus on delivering innovative water solutions that ensure clean and accessible water for all. Through sustainable technologies and responsible resource management, we drive progress toward a water-secure future."
              width={282}
              height={162}
            />
            <RelatedCard
              image="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/efbc7ed9-3a44-4bea-0cab-e1f7ba555500/public"
              title="Moving Towards Zero-To-Landfill"
              description="Focused on achieving zero-to-landfill, we implement solutions that emphasize resource efficiency and waste reduction. Through innovation and responsible practices, we support a circular economy, minimizing environmental impact and driving measurable progress."
              width={282}
              height={200}
            />
            <RelatedCard
              image="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/afdeb7b4-18e6-4bc2-0ed8-85d97cb6dc00/public"
              title="Enabling Carbon Reduction"
              description="Our water solutions reduce carbon emissions by eliminating plastic water jars, offering a sustainable alternative made from stainless steel. Designed for longevity and aligned with the principles of a circular economy, they enable efficient resource use while supporting global climate goals."
              width={282}
              height={238}
            />
          </div>
        </section>

        {/* Bottom Spacing Before Next Divider */}
        <div className="mb-[180px]" />

        {/* Optional Divider */}
        <div className="w-full h-[1px] bg-black" />

        {/* WAE: A symbol of Unity and Progress Section */}
        <section className="px-[120px] mt-[10px] mb-[120px]">
          <h1
            className="
              font-[400]
              text-[86px]
              mb-[40px]
              leading-[110%]
              tracking-[-4.26px]
              align-middle
              font-[Helvetica Neue]
              capitalize
              whitespace-pre-line
            "
          >
            WAE:
            {"\n"}
            <span className="whitespace-nowrap">A symbol of Unity and Progress</span>
          </h1>
        </section>

        {/* Optional Divider */}
        <div className="w-full h-[1px] bg-black" />

        {/* Two-Text Sections Side-by-Side */}
        <section className="px-[120px] mt-[20px] mb-[180px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Text Section */}
            <p
              className="
                max-w-[535px]
                font-[400]
                text-[24px]
                leading-[110%]
                tracking-[-2%]
                font-[Helvetica Neue]
                text-[#808080]
              "
            >
              At WAE, our brand embodies more than just products; it represents a
              belief in possibilities. Our commitment to innovation, quality, and
              making a positive impact on people's lives through technology drives
              us forward. This philosophy is at the heart of everything we do,
              guiding our efforts to bring transformative solutions to the world.
            </p>

            {/* Right Text Section */}
            <p
              className="
                max-w-[572px]
                font-[400]
                text-[36px]
                leading-[110%]
                tracking-[-2%]
                font-[Helvetica Neue]
                text-black
              "
            >
              The logo features an illustration of six hands moving in harmony,
              symbolizing our commitment to making the earth a better and more
              sustainable place. These hands also represent teamwork and cooperation,
              essential values that drive our success in all endeavors. The number
              six signifies perfection and completion, reflecting our goal to achieve
              the highest standards in everything we do.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
