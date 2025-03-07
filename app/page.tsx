import Image from "next/image"
import Link from "next/link"
import Marquee from "../components/marquee"
import ProductCard from "../components/product-card"
import RelatedCard from "../components/related-card"
import VideoSection from "../components/VideoSection"
import Navbar from "../components/Navbar"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col font-helvetica ">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-white text-black section-margin mt-[calc(theme(height.20)+1rem)]">
        <VideoSection src="/Beautiful 4K tropical beach aerial l a bird s eye view of ocean waves l TimelapsePro 2_2.mp4" />
      </section>

      {/* Our Purpose Section */}
      <section className="container">
        <h2 className="heading-64 mb-6">Our Purpose</h2>
        <p className="text-40">
          The underlying natural order of the universe - circular continuity of the natural world. Undifferentiated,
          endlessly self-replenishing, immensely powerful and impassively generous.
        </p>
      </section>

      {/* Second Earth Image */}
      <section className="relative bg-white text-black mt-[40px] section-margin-bottom">
        <VideoSection src="/Logo Filcker Animation D5-09_1.mp4" />
      </section>

      {/* Products Section */}
      <section className="w-[1200px] mx-auto section-margin-bottom">
        <h2 className="font-helvetica text-[86px] leading-[110%] tracking-[-4.26px] align-middle font-normal mb-[120px]">Products</h2>
        <div className="grid grid-cols-2 gap-x-[40px] gap-y-[80px]">
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
      <section className="w-[1440px] h-[786px] mx-auto bg-black text-white pt-[180px] pb-[180px] px-[120px]">
        <div className="w-[1200px] mx-auto">
          <div className="mb-[80px]">
            <h2 className="heading-64 mb-[48px] text-white uppercase">Sustainability</h2>
            <p className="font-helvetica text-[36px] leading-[140%] align-middle font-normal w-[1200px] h-[100px] text-white">
              WAE leads transformative projects and develops cutting-edge purification systems, all aimed at ensuring a sustainable future.
            </p>
          </div>
          <div className="max-w-[1200px] h-[134px] flex justify-between gap-[60px] mx-auto">
            <div className="flex flex-col items-center">
              <h3 className="font-helvetica text-[64px] leading-[140%] tracking-[1%] align-middle font-normal uppercase w-[300px] h-[90px] text-white text-center">1,012,120.25</h3>
              <p className="font-mont text-[16px] leading-[24px] tracking-[1%] align-middle font-light uppercase w-[200px] h-[24px] text-gray-400 text-center">TONNES CO2 EMISSIONS SAVED</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="font-helvetica text-[64px] leading-[140%] tracking-[1%] align-middle font-normal uppercase w-[300px] h-[90px] text-white text-center">12,185.43</h3>
              <p className="font-mont text-[16px] leading-[24px] tracking-[1%] align-middle font-light uppercase w-[200px] h-[24px] text-gray-400 text-center">MILLION GALLONS WATER SAVED</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="font-helvetica text-[64px] leading-[140%] tracking-[1%] align-middle font-normal uppercase w-[300px] h-[90px] text-white text-center">22,253.65</h3>
              <p className="font-mont text-[16px] leading-[24px] tracking-[1%] align-middle font-light uppercase w-[200px] h-[24px] text-gray-400 text-center">TONNES PLASTIC REMOVED</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Logo Marquee */}
      <section className="w-full bg-white py-[80px]">
        <Marquee>
          <div className="flex items-center gap-[80px] px-[120px]">
            {/* First set of logos */}
            <Image 
              src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/1e62ea68-4b77-4744-faef-deb8f2324b00/public" 
              alt="Google Logo" 
              width={200} 
              height={80} 
            />
            <Image 
              src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/b6197ea7-d3f0-47f7-6f1c-7125afa8f900/public" 
              alt="Samsung Logo" 
              width={200} 
              height={80} 
            />
            <Image 
              src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/3296be7e-6a1d-499f-b845-ceaebc6ab000/public" 
              alt="Netflix Logo" 
              width={200} 
              height={80} 
            />
            <Image 
              src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/e010054b-71e5-4530-f6ea-1af344cb4c00/public" 
              alt="CBRE Logo" 
              width={200} 
              height={80} 
            />
            {/* Second set of logos */}
            <Image 
              src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/1e62ea68-4b77-4744-faef-deb8f2324b00/public" 
              alt="Google Logo" 
              width={200} 
              height={80} 
            />
            <Image 
              src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/b6197ea7-d3f0-47f7-6f1c-7125afa8f900/public" 
              alt="Samsung Logo" 
              width={200} 
              height={80} 
            />
            <Image 
              src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/3296be7e-6a1d-499f-b845-ceaebc6ab000/public" 
              alt="Netflix Logo" 
              width={200} 
              height={80} 
            />
            <Image 
              src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/e010054b-71e5-4530-f6ea-1af344cb4c00/public" 
              alt="CBRE Logo" 
              width={200} 
              height={80} 
            />
          </div>
        </Marquee>
      </section>

      {/* Made In India Section */}
      <section className="section-margin-bottom">
        <div className="w-[1200px] h-[500px] mx-auto px-[120px] flex items-start justify-between">
          <div className="relative w-[520px] h-[500px]">
            <Image 
              src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/db75c7b8-8d2c-44f3-b1e7-f8a200329800/public" 
              alt="Indian Fabric" 
              fill 
              className="object-cover" 
              priority
              sizes="520px"
            />
          </div>
          <div className="w-[598px] h-[385px] flex flex-col">
            <h2 className="font-helvetica text-[64px] leading-[120%] tracking-[-4%] align-middle font-normal mt-0 mb-[32px]">Made in India</h2>
            <p className="font-helvetica text-[32px] leading-[110%] tracking-[1%] align-middle font-normal w-[598px] h-[353px]">
              WAE captures the heart of Indian innovation by seamlessly blending the time-honoured ideals with the latest technology. We are driven by the mission to build a brand that not only saves the planet but also creates a potent impact on future generations for the country's advancements, integrity & innovation. Our approach strengthens community resilience while showcasing India's Intellectual capital on the world stage.
            </p>
          </div>
        </div>
      </section>

      {/* Life @ WAE Section */}
      <section className="container section-margin section-margin-bottom">
        <div className="flex justify-between items-start">
          <div className="w-[403px] h-[95px]">
            <h2 className="font-helvetica text-[86px] leading-[110%] tracking-[-4.26px] align-middle font-normal">Life @ WAE</h2>
          </div>
          <div className="w-[650px] h-[280px]">
            <p className="font-helvetica text-[32px] leading-[110%] tracking-[1%] align-middle font-[350]">
              Life at WAE is all about bringing your whole self to work. Our diverse and inclusive culture thrives on the unique perspectives of our team, making every day an opportunity to learn, connect, and grow together. It's a place where your ideas shine, your voice is heard, and you feel right at home no matter where you're from.
            </p>
            <Link href="/careers" className="inline-flex items-center bg-black text-white w-[253px] h-[56px] gap-[20px] pt-[16px] pr-[32px] pb-[16px] pl-[32px] mt-[40px] hover:bg-gray-800">
              KNOW MORE <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Related Information Section */}
      <section className="container section-margin">
        <h2 className="heading-86 mb-[120px]">Related Information</h2>
        <div className="grid grid-cols-4 gap-8">
          <RelatedCard image="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/0c32e685-fbfe-4edb-0e63-4bbf261b3100/public" 
          title="Awards and Other Information" 
          description="Information regarding awards received by the Hitachi Group in various fields and related announcements." />
          <RelatedCard
            image="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/67063015-a309-4a59-9247-c67c4efea500/public"
            title="News And Updates"
            description="Information regarding awards received by the Hitachi Group in various fields and related announcements."
          />
          <RelatedCard image="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/efbc7ed9-3a44-4bea-0cab-e1f7ba555500/public" 
          title="Impact We Enable For You" 
          description="Information regarding awards received by the Hitachi Group in various fields and related announcements." />
          <RelatedCard
            image="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/afdeb7b4-18e6-4bc2-0ed8-85d97cb6dc00/public"
            title="Our Sustainable Water Solutions"
            description="Information regarding awards received by the Hitachi Group in various fields and related announcements."
          />
      
        </div>
      </section>
    </main>
  )
}

