import Link from 'next/link';
import { useTranslations } from '../../hooks/use-translations';

export function Hero() {
  const { hero } = useTranslations();

  return (
    <div className="relative pb-10">
      <div className='"max-w-7xl mx-auto px-6 md:px-12 xl:px-6"'>
        <div className="relative pt-20 ml-auto md:pt-36">
          <div className="mx-auto mt-4 text-center">
            <h1
              className="mx-auto font-medium text-zinc-900 dark:text-ds-gray-1000"
              style={{
                fontSize: 'clamp(1.375rem, 1.054rem + 1.61vw, 2.5rem)',
                letterSpacing:
                  'calc(0px - clamp(0.06rem, 0.048rem + 0.001vw, 0.094rem))',
                maxWidth: 'clamp(16.25rem, 2.841rem + 67.05vw, 53.125rem)',
              }}
            >
              {hero.encodingTool}.{' '}
              <span className="text-ds-gray-900">{hero.functionalities}</span>
            </h1>
            <div className="flex flex-wrap justify-center mt-8 gap-y-4 gap-x-6">
              <Link
                href="/docs/introduction"
                className="w-full sm:w-max"
                aria-label="Introduction Link"
              >
                <button
                  type="button"
                  className="relative bg-ds-gray-1000 text-ds-background-100 w-full sm:w-max xl:w-[200px] rounded-full py-0 px-3 font-semibold pointer text-[14px] leading-[125%] text-center flex items-center justify-center transition-all hover:shadow-[0_0_0_3px_rgba(255,255,255,0.3)_inset]"
                  style={{
                    minHeight: 'clamp(2.5rem, 2.357rem + 0.71vw, 3rem)',
                  }}
                  aria-label="Get Started Button"
                >
                  <span className="relative whitespace-pre text-center text-base font-semibold leading-none tracking-tight text-ds-background-100 z-10">
                    {hero.convertTailwind}
                  </span>
                </button>
              </Link>
              <Link
                href="/blog/virtual-dom"
                className="w-full sm:w-max"
                aria-label="Virtual Dom Link"
              >
                <button
                  type="button"
                  className="relative bg-[#0a0a0a] w-full sm:w-max xl:w-[200px] rounded-full py-0 px-3 font-semibold pointer text-[14px] leading-[125%] text-center flex items-center justify-center transition-all shadow-[0_0_0_1px_rgba(255,255,255,0.14)]"
                  style={{
                    minHeight: 'clamp(2.5rem, 2.357rem + 0.71vw, 3rem)',
                  }}
                  aria-label="How It Works Button"
                >
                  <span className="relative z-10 text-base font-semibold leading-none tracking-tight text-center whitespace-pre text-white-main">
                    {hero.dataPlay}
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
