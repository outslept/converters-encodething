import { Hero } from './HeroSection';
import DescriptionGrid from './DescriptionGrid';
import BenefitsGrid from './BenefitsGrid';
import TailwindIcon from '@components/icons/tailwind-icon';
import useLenis from '@components/Lenis/lenis';

export function Home(): JSX.Element {
  useLenis();

  return (
    <main className="font-overused">
      <Hero />
      <DescriptionGrid />
      <BenefitsGrid />
            <section
        className="grid h-fit mx-auto !mt-3"
        style={{ maxWidth: 'min(94%, 1080px)' }}
      >
        <h1 id="tailwind-section" className="hidden">
          Tailwind Section
        </h1>
        <div className="shadow-[0_0_0_1px_rgba(255,255,255,0.14)] p-8 flex flex-col gap-8">
          <div className="flex text-gray-main items-center gap-3 font-normal text-[18px]">
            {' '}
            <TailwindIcon aria-hidden="true" /> Tailwind Converter
          </div>
          <p
            className="font-normal text-gray-main max-w-[600px]"
            style={{ fontSize: 'clamp(1rem, 0.943rem + 0.28vw, 1.125rem)' }}
          >
            <span className="font-semibold text-white-main">
              We also have Tailwind Converter, which supports the latest version
              of Tailwind.
            </span>
            We support absolutely all classes and features that are available in
            Tailwind.{' '}
          </p>
          <button
            type="button"
            className="rounded-full py-0 px-3 font-semibold cursor-pointer xl:w-[200px] shadow-[0_0_0_1px_rgba(255,255,255,0.14)] text-[14px] leading-[125%] text-center bg-[#0a0a0a]"
            style={{ minHeight: 'clamp(2.5rem, 2.357rem + 0.71vw, 3rem)' }}
            aria-label="Convert Styles Button"
          >
            Let&apos;s convert your styles
          </button>
        </div>
      </section>
    </main>
  );
}
