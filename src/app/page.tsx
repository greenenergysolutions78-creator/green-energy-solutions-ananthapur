
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Factory, Sun, Droplets, Building2, Zap, Sprout, ClipboardList, HardHat, SunMedium, Wrench, Quote, Star } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import FaqSection from "@/components/ui/FaqSection";
import connectToDatabase from "@/lib/mongodb";
import Settings from "@/models/Settings";
import Testimonial from "@/models/Testimonial";

export const dynamic = 'force-dynamic';

export default async function Home() {
  await connectToDatabase();
  const settings = await Settings.findOne().lean();
  const testimonials = await Testimonial.find({ published: true }).sort({ createdAt: -1 }).lean();
  
  const stats = settings || {
    statsProjectsCompleted: "100+",
    statsMwInstalled: "50+",
    statsCo2Offset: "25,000",
    statsHappyClients: "100%"
  };
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative bg-primary-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary opacity-90 z-0"></div>
        {/* Placeholder for background image */}
        <div className="absolute inset-0 bg-[url('/hero_solar.jpg')] bg-cover bg-center mix-blend-overlay opacity-40 z-0"></div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="max-w-3xl">
            <FadeIn direction="up" delay={0.1}>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-sans">
                Powering a Sustainable Future with Smart Solar Energy
              </h1>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <p className="mt-6 text-lg leading-8 text-gray-200">
                End-to-end solar solutions for residential homes, commercial businesses, industries, and institutions.
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={0.3}>
              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  href="/consultation"
                  className="rounded-md bg-accent px-5 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition"
                >
                  Get a Free Consultation
                </Link>
                <Link href="/solutions" className="text-sm font-semibold leading-6 text-white flex items-center gap-2 hover:text-gray-300 transition">
                  Explore Our Solutions <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 2. COMPANY INTRODUCTION */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image Placeholder */}
            <FadeIn direction="right">
              <div className="relative h-96 lg:h-[500px] w-full rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 shadow-sm flex items-center justify-center">
                <div className="text-center p-6 text-gray-400">
                  <Image 
                  src="/owner.png" 
                  alt="Owner" 
                  width={500} 
                  height={500} 
                  className="rounded-2xl shadow-sm" 
                  />
                  <p className="font-medium text-sm">Owner Photo Placeholder</p>
                  <p className="text-xs mt-1">Update via Admin CMS or code replacement</p>
                </div>
              </div>
            </FadeIn>

            {/* Text Content */}
            <FadeIn direction="left" delay={0.2}>
              <div>
                <h2 className="text-base font-semibold leading-7 text-primary">About Green Energy Solutions</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-brand-text sm:text-4xl">
                  Powering Progress with Purpose
                </p>
                <p className="mt-6 text-lg leading-8 text-muted">
                  Established in 2016, we are a leading solar EPC company based in Ananthapur, dedicated to transforming how businesses and industries consume energy. By providing end-to-end solar engineering, procurement, and construction services, we help you reduce costs and build a cleaner planet.
                </p>
                <p className="mt-4 text-base leading-7 text-muted">
                  We provide both comprehensive vendor supply and expert installation services. To guarantee maximum efficiency and durability, we source our solar panels from <strong>Waaree Energies</strong>—one of the topmost Tier-1 manufacturing companies in the industry. With a commitment to quality and sustainable engineering, our team works closely with you to deliver solar solutions that stand the test of time.
                </p>
                <div className="mt-10">
                  <Link href="/about" className="inline-flex rounded-md bg-accent px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-opacity-90 transition items-center gap-2">
                    Learn More About Us <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3. SOLAR SOLUTIONS */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary">Capabilities</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-brand-text sm:text-4xl">
              Our Solar Solutions
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 md:max-w-none md:grid-cols-2 lg:grid-cols-4">
              
              {/* Solution 1 */}
              <FadeIn direction="up" delay={0.1}>
                <div className="flex flex-col bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-light">
                    <Building2 className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold leading-7 text-brand-text">Rooftop Solar</h3>
                  <p className="mt-4 flex-auto text-base leading-7 text-muted">
                    Solar systems designed for suitable residential, commercial and institutional rooftops. Turn unused space into a power asset.
                  </p>
                  <div className="mt-6">
                    <Link href="/solutions#rooftop" className="text-sm font-semibold leading-6 text-accent flex items-center gap-1">
                      Explore Rooftop Solar <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </FadeIn>

              {/* Solution 2 */}
              <FadeIn direction="up" delay={0.2}>
                <div className="flex flex-col bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-light">
                    <Sun className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold leading-7 text-brand-text">Ground Mount Solar</h3>
                  <p className="mt-4 flex-auto text-base leading-7 text-muted">
                    Ground-mounted solar solutions for suitable commercial and large-scale applications with high energy demands.
                  </p>
                  <div className="mt-6">
                    <Link href="/solutions#ground-mount" className="text-sm font-semibold leading-6 text-accent flex items-center gap-1">
                      Explore Ground Mount Solar <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </FadeIn>

              {/* Solution 3 */}
              <FadeIn direction="up" delay={0.3}>
                <div className="flex flex-col bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-light">
                    <Droplets className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold leading-7 text-brand-text">Floating Solar</h3>
                  <p className="mt-4 flex-auto text-base leading-7 text-muted">
                    Floating solar solutions designed for suitable water-based installations, reducing evaporation and saving land space.
                  </p>
                  <div className="mt-6">
                    <Link href="/solutions#floating" className="text-sm font-semibold leading-6 text-accent flex items-center gap-1">
                      Explore Floating Solar <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </FadeIn>

              {/* Solution 4 */}
              <FadeIn direction="up" delay={0.4}>
                <div className="flex flex-col bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-light">
                    <Zap className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold leading-7 text-brand-text">Solar Pumps & Motors</h3>
                  <p className="mt-4 flex-auto text-base leading-7 text-muted">
                    High-efficiency solar water pumps and motors tailored for agricultural, industrial, and residential water needs.
                  </p>
                  <div className="mt-6">
                    <Link href="/solutions#pumps" className="text-sm font-semibold leading-6 text-accent flex items-center gap-1">
                      Explore Pumps <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </FadeIn>

            </div>
          </div>
        </div>
      </section>

      {/* 4. INDUSTRIES */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-brand-text sm:text-4xl">
              Solar Solutions Across Industries
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted">
              We design custom solar power systems tailored to the specific energy requirements of your industry.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            <div className="flex flex-col items-center justify-center rounded-xl bg-gray-50 p-6 text-center border border-gray-100">
              <Factory className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold text-brand-text">Industrial Factories</h3>
            </div>
            <div className="flex flex-col items-center justify-center rounded-xl bg-gray-50 p-6 text-center border border-gray-100">
              <Sprout className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold text-brand-text">Agriculture & Poultry</h3>
            </div>
            <div className="flex flex-col items-center justify-center rounded-xl bg-gray-50 p-6 text-center border border-gray-100">
              <Building2 className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold text-brand-text">Schools & Colleges</h3>
            </div>
            <div className="flex flex-col items-center justify-center rounded-xl bg-gray-50 p-6 text-center border border-gray-100">
              <Zap className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold text-brand-text">Commercial Spaces</h3>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/industries" className="text-sm font-semibold leading-6 text-primary flex items-center justify-center gap-1 hover:text-primary-dark">
              View All Industries <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. IMPACT / STATISTICS SECTION */}
      <section className="relative bg-primary text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero_solar.jpg')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Trusted by Industry Leaders</h2>
              <p className="mt-4 text-lg leading-8 text-primary-light">
                Delivering measurable impact across Ananthapur and beyond.
              </p>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              <FadeIn direction="up" delay={0.1}>
                <div className="flex h-full flex-col bg-white/5 p-8 backdrop-blur-sm">
                  <dt className="text-sm font-semibold leading-6 text-gray-300">Projects Completed</dt>
                  <dd className="order-first text-3xl font-bold tracking-tight text-white">{stats.statsProjectsCompleted}</dd>
                </div>
              </FadeIn>
              <FadeIn direction="up" delay={0.2}>
                <div className="flex h-full flex-col bg-white/5 p-8 backdrop-blur-sm">
                  <dt className="text-sm font-semibold leading-6 text-gray-300">MW Installed Capacity</dt>
                  <dd className="order-first text-3xl font-bold tracking-tight text-white">{stats.statsMwInstalled}</dd>
                </div>
              </FadeIn>
              <FadeIn direction="up" delay={0.3}>
                <div className="flex h-full flex-col bg-white/5 p-8 backdrop-blur-sm">
                  <dt className="text-sm font-semibold leading-6 text-gray-300">Tons of CO2 Offset</dt>
                  <dd className="order-first text-3xl font-bold tracking-tight text-white">{stats.statsCo2Offset}</dd>
                </div>
              </FadeIn>
              <FadeIn direction="up" delay={0.4}>
                <div className="flex h-full flex-col bg-white/5 p-8 backdrop-blur-sm">
                  <dt className="text-sm font-semibold leading-6 text-gray-300">Happy Clients</dt>
                  <dd className="order-first text-3xl font-bold tracking-tight text-white">{stats.statsHappyClients}</dd>
                </div>
              </FadeIn>
            </dl>
          </div>
        </div>
      </section>

      {/* 6. OUR PROCESS */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-primary">How It Works</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-brand-text sm:text-4xl">
              Our 4-Step Process to Solar Independence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FadeIn direction="up" delay={0.1}>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative text-center">
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-accent text-white w-10 h-10 rounded-full flex items-center justify-center font-bold border-4 border-gray-50">1</div>
                <ClipboardList className="h-12 w-12 text-primary mx-auto mb-4 mt-2" />
                <h3 className="font-bold text-lg mb-2 text-brand-text">Consultation</h3>
                <p className="text-muted text-sm">We analyze your energy needs, site feasibility, and design a customized roadmap.</p>
              </div>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.2}>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative text-center">
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-accent text-white w-10 h-10 rounded-full flex items-center justify-center font-bold border-4 border-gray-50">2</div>
                <SunMedium className="h-12 w-12 text-primary mx-auto mb-4 mt-2" />
                <h3 className="font-bold text-lg mb-2 text-brand-text">System Design</h3>
                <p className="text-muted text-sm">Our engineers craft an optimal, high-efficiency system tailored precisely to your facility.</p>
              </div>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.3}>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative text-center">
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-accent text-white w-10 h-10 rounded-full flex items-center justify-center font-bold border-4 border-gray-50">3</div>
                <HardHat className="h-12 w-12 text-primary mx-auto mb-4 mt-2" />
                <h3 className="font-bold text-lg mb-2 text-brand-text">Installation</h3>
                <p className="text-muted text-sm">Certified technicians install the panels with strict adherence to safety and quality standards.</p>
              </div>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.4}>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative text-center">
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-accent text-white w-10 h-10 rounded-full flex items-center justify-center font-bold border-4 border-gray-50">4</div>
                <Wrench className="h-12 w-12 text-primary mx-auto mb-4 mt-2" />
                <h3 className="font-bold text-lg mb-2 text-brand-text">Maintenance</h3>
                <p className="text-muted text-sm">We ensure long-term performance with proactive monitoring and preventive maintenance.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-primary">Testimonials</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-brand-text sm:text-4xl">
              What Our Clients Say
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.length > 0 ? testimonials.map((testimonial: any, index: number) => (
              <FadeIn key={testimonial._id.toString()} direction="up" delay={index * 0.1}>
                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 relative h-full flex flex-col">
                  <Quote className="h-8 w-8 text-primary-light absolute top-6 right-6 opacity-50" />
                  <div className="flex gap-1 mb-4 text-accent">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={`h-5 w-5 ${i < testimonial.rating ? 'fill-current' : 'text-gray-300'}`} />
                    ))}
                  </div>
                  <p className="text-muted italic mb-6 flex-grow">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <h4 className="font-bold text-brand-text">{testimonial.clientName}</h4>
                    <p className="text-sm text-primary">{testimonial.designation}</p>
                  </div>
                </div>
              </FadeIn>
            )) : (
              <p className="col-span-3 text-center text-gray-500">More testimonials coming soon.</p>
            )}
          </div>
        </div>
      </section>

      {/* 8. FAQ SECTION */}
      <FaqSection />

    
      {/* 9. CALL TO ACTION */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="bg-primary-dark rounded-3xl p-8 sm:p-16 lg:flex lg:items-center lg:justify-between shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-dark to-primary opacity-90 z-0"></div>
            <div className="relative z-10 lg:w-2/3">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to switch to solar?
                <br />
                Start your journey today.
              </h2>
              <p className="mt-4 text-lg leading-8 text-primary-light max-w-xl">
                Join the hundreds of businesses in Ananthapur who are saving on electricity costs while protecting the environment.
              </p>
            </div>
            <div className="relative z-10 mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
              <Link
                href="/consultation"
                className="rounded-md bg-accent px-6 py-4 text-base font-semibold text-white shadow-sm hover:bg-opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition"
              >
                Schedule Free Consultation
              </Link>
              <Link href="/contact" className="text-sm font-semibold leading-6 text-white flex items-center gap-2 hover:text-gray-300">
                Contact Us <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
