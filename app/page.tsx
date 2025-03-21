"use client"

import Image from "next/image"
import Link from "next/link"
//import Marquee from "../components/marquee"
import ProductCard from "../components/product-card"
import RelatedCard from "../components/related-card"
import VideoSection from "../components/VideoSection"
import Navbar from "@/components/Navbar"
import ResponsiveNavbar from "@/components/responsive-navbar"
import Footer from "@/components/footer"
import CountUp from "react-countup"
import { useEffect, useState } from "react"

export default function Home() {
  const [startCount, setStartCount] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("sustainability-section")
      if (element) {
        const rect = element.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.75) {
          setStartCount(true)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="overflow-x-hidden flex min-h-screen flex-col font-helvetica">
      {/* Navigation */}
      <ResponsiveNavbar />

      {/* Hero Section */}
      <section className="relative bg-white text-black section-margin mt-24">
        <VideoSection src="/Beautiful 4K tropical beach aerial l a bird s eye view of ocean waves l TimelapsePro 2_2.mp4" />
      </section>

      {/* Our Purpose Section */}
      <section className="container mb-[7.5rem]">
        <h2 className="heading-64 mb-3">Our Purpose</h2>
        <p className="text-[2rem] leading-[110%] tracking-[2%]">
          The underlying natural order of the universe - circular continuity of the natural world. Undifferentiated,
          endlessly self-replenishing, immensely powerful and impassively generous.
        </p>
      </section>

      {/* Second Earth Image */}
      <section className="relative bg-white text-black mt-10 section-margin-bottom">
        <VideoSection src="/Logo Filcker Animation D5-09_1.mp4" />
      </section>

      {/* Horizontal Rule */}
      <hr className="w-full border-[0.03125rem] border-black mb-2.5" />

      {/* Products Section */}
      <section className="max-w-[75rem] mx-auto section-margin-bottom">
        <h2 className="font-helvetica text-[5.375rem] leading-[110%] tracking-[-0.27rem] align-middle font-normal mb-[2.625rem]">
          Products
        </h2>
        <div className="grid grid-cols-2 gap-x-10 gap-y-20">
          <ProductCard
            image="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/3be892cf-2037-4046-8d68-aff3c7328a00/public"
            title="DRINKING WATER STATIONS"
            description="Water dispensers with inbuilt purification —pure, safe water delivered efficiently."
          />
          <ProductCard
            image="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/c2a345b2-d818-48a0-69db-98b041c9ea00/public"
            title="DRINKING WATER DISPENSER"
            description="Stainless steel water dispensers give you fresh, clean water anytime."
          />
          <ProductCard
            image="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/eddf866f-bdd3-4563-e7d1-a2f5c7dd8900/public"
            title="DRINKING WATER FAUCETS"
            description="Drinking water faucets with under the counter storage units to make access to fresh water simple."
          />
          <ProductCard
            image="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/1d17bc90-292c-4cd5-cd1a-6d32159a2e00/public"
            title="WATER COOLERS & FOUNTAINS"
            description="Water coolers cum bubblers provide chilled water on demand."
          />
          <ProductCard
            image="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/71f8a54e-d8e0-454e-951a-dcf52863aa00/public"
            title="PUBLIC UTILITY SYSTEMS"
            description="Designed for large public spaces, PUS systems ensure clean, accessible water."
          />
          <ProductCard
            image="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/b435dee3-0609-4f07-9c04-060c1e41fc00/public"
            title="COMMERCIAL/INDUSTRIAL PLANTS"
            description="Power your facility with our large-scale hydration plants. Scalable and efficient."
          />
        </div>
      </section>

      {/* Sustainability Section */}
      <section
        id="sustainability-section"
        className="w-full bg-black text-white pt-[11.25rem] pb-[11.25rem]"
      >
        <div className="max-w-[75rem] mx-auto">
          <div className="mb-[3.75rem]">
            <h2 className="font-helvetica text-[4rem] leading-[100%] tracking-[-4%] align-middle font-normal uppercase md:whitespace-nowrap mb-5">
              Sustainability
            </h2>
            <p className="font-helvetica text-[1.25rem] leading-[110%] tracking-[0%] align-middle font-normal max-w-full text-white">
              WAE leads transformative projects and develops cutting-edge purification systems, all aimed at ensuring a sustainable future.
            </p>
          </div>
          <div className="max-w-[75rem] flex justify-between gap-[3.75rem] mx-auto">
            <div className="flex flex-col items-center">
              <h3 className="font-helvetica text-[4.5rem] leading-[140%] tracking-[1%] align-middle font-normal uppercase w-fit text-white text-center mb-5">
                <CountUp
                  start={0}
                  end={startCount ? 1012120.25 : 0}
                  duration={3}
                  separator=","
                  decimal="."
                  decimals={2}
                />
              </h3>
              <p className="font-mont text-[1rem] leading-[1.5rem] tracking-[1%] align-middle font-light uppercase w-fit self-start text-gray-400 text-left">
                TONNES CO2 EMISSIONS SAVED
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="font-helvetica text-[4.5rem] leading-[140%] tracking-[1%] align-middle font-normal uppercase w-fit text-white text-center mb-5">
                <CountUp
                  start={0}
                  end={startCount ? 12185.43 : 0}
                  duration={3}
                  separator=","
                  decimal="."
                  decimals={2}
                />
              </h3>
              <p className="font-mont text-[1rem] leading-[1.5rem] tracking-[1%] align-middle font-light uppercase w-fit self-start text-gray-400 text-left">
                MILLION GALLONS WATER SAVED
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="font-helvetica text-[4.5rem] leading-[140%] tracking-[1%] align-middle font-normal uppercase w-fit text-white text-center mb-5">
                <CountUp
                  start={0}
                  end={startCount ? 22253.65 : 0}
                  duration={3}
                  separator=","
                  decimal="."
                  decimals={2}
                />
              </h3>
              <p className="font-mont text-[1rem] leading-[1.5rem] tracking-[1%] align-middle font-light uppercase w-fit self-start text-gray-400 text-left">
                TONNES PLASTIC REMOVED
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Made In India Section */}
<section className="section-margin-top section-margin-bottom">
  <div className="max-w-[75rem] mx-auto px-4 flex flex-col md:flex-row items-start justify-between">
    <div className="relative w-full md:w-[46.5%] h-[31.25rem]">
      <Image 
        src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/db75c7b8-8d2c-44f3-b1e7-f8a200329800/public" 
        alt="Indian Fabric" 
        fill 
        className="object-cover" 
        priority
        sizes="(max-width: 768px) 100vw, 46.5vw"
      />
    </div>
    <div className="w-full md:w-[37.375rem] flex flex-col mt-8 md:mt-0 md:ml-16">
      <h2 className="font-helvetica text-[4rem] leading-[120%] tracking-[-4%] align-middle font-normal mb-[0.625rem]">
        Made in India
      </h2>
      <p className="font-helvetica text-[1.25rem] leading-[110%] tracking-[1%] align-middle font-normal w-[37.375rem] h-[9.625rem]">
        WAE captures the heart of Indian innovation by seamlessly blending the time-honoured ideals with the latest technology. We are driven by the mission to build a brand that not only saves the planet but also creates a potent impact on future generations for the country's advancements, integrity & innovation. Our approach strengthens community resilience while showcasing India's Intellectual capital on the world stage.
      </p>
    </div>
  </div>
</section>



      <hr className="w-full border-[0.03125rem] border-black mb-2.5" />

      {/* Life @ WAE Section */}
      <section className="container section-margin section-margin-bottom">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="w-full md:w-[25.19rem] h-[5.94rem]">
            <h2 className="font-helvetica text-[5.375rem] leading-[110%] tracking-[-0.27rem] align-middle font-normal">
              Life @ WAE
            </h2>
          </div>
          <div className="w-full md:w-[40.625rem] h-[17.5rem]">
            <p className="font-helvetica text-[1.25rem] leading-[110%] tracking-[1%] align-middle font-[350] mb-10">
              Life at WAE is all about bringing your whole self to work. Our diverse and inclusive culture thrives on the unique perspectives of our team, making every day an opportunity to learn, connect, and grow together. It's a place where your ideas shine, your voice is heard, and you feel right at home no matter where you're from.
            </p>
            <Link
              href="/careers"
              className="group inline-flex items-center bg-black text-white w-fit h-fit gap-[1.25rem] py-4 px-8 mt-10 hover:bg-white hover:text-black border border-black transition-all duration-300"
            >
              KNOW MORE
              <img
                src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/c424b7fd-5c2d-49b5-ca8d-df4e8bc5f100/public"
                className="h-4 w ml-[1.25rem] group-hover:hidden"
              />
              <img
                src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/4c9c84df-2bee-4474-903d-f4abc94b1900/public"
                className="h-4 w ml-[1.25rem] hidden group-hover:block"
              />
            </Link>
          </div>
        </div>
      </section>

      <hr className="w-full border-[0.03125rem] border-black mb-2.5" />

      {/* Related Information Section */}
      <section className="max-w-[75rem] mx-auto mb-[9.72%]">
        <h2 className="font-helvetica text-[4rem] leading-[120%] tracking-[0%] align-middle font-normal uppercase md:whitespace-nowrap mb-[3.125rem]">
          Related Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
          <RelatedCard
            image="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/0c32e685-fbfe-4edb-0e63-4bbf261b3100/public"
            title="Awards and Other Information"
            description="Information regarding awards received by the Hitachi Group in various fields and related announcements."
            width={282}
            height={270}
          />
          <RelatedCard
            image="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/67063015-a309-4a59-9247-c67c4efea500/public"
            title="News And Updates"
            description="Information regarding awards received by the Hitachi Group in various fields and related announcements."
            width={282}
            height={162}
          />
          <RelatedCard
            image="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/efbc7ed9-3a44-4bea-0cab-e1f7ba555500/public"
            title="Impact We Enable For You"
            description="Information regarding awards received by the Hitachi Group in various fields and related announcements."
            width={282}
            height={200}
          />
          <RelatedCard
            image="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/afdeb7b4-18e6-4bc2-0ed8-85d97cb6dc00/public"
            title="Our Sustainable Water Solutions"
            description="Information regarding awards received by the Hitachi Group in various fields and related announcements."
            width={282}
            height={238}
          />
        </div>
      </section>

      <Footer />
    </main>
  )
}
