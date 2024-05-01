import DescriptionSection from '@components/Containers/Description/DescriptionSection';
import { useTranslations } from '../../hooks/use-translations';
import { FeatureSection } from '@components/Containers/Description/FeatureSection';
export default function DescriptionGrid() {
  const { description } = useTranslations();
  const descriptions = [
    description.stringType,
    description.numberType,
    description.dateType,
    description.colorsType,
  ];

  return (
    <>
      <section
        className="font-overused grid gap-0 grid-cols-1 grid-rows-1 grid-flow-col mx-auto !mt-3 md:grid-cols-2 lg:grid-cols-3 w-[95%]"
        style={{ maxWidth: 'min(94%, 1080px)' }}
      >
        <h1 id="description-grid" className="hidden">
          Description Grid
        </h1>
        <div
          className="shadow-[0_0_0_1px_rgba(255,255,255,0.14)] col-start-1 col-end-3 row-start-1 row-end-1 lg:col-end-2 lg:py-[90px] lg:px-12"
          aria-labelledby="description-heading"
        >
          <DescriptionSection items={descriptions} title={description.dataTypes} />
        </div>

        <div className="shadow-[0_0_0_1px_rgba(255,255,255,0.14)] hidden lg:block lg:col-start-2 lg:col-end-2 lg:row-start-1 lg:row-end-1 lg:py-[90px] lg:px-12 ">
          <h2 className="font-semibold text-ds-gray-900 tracking-[-0.05em] leading-[1.3125] text-center text-[16px] sm:text-[20px] md:text-[22px] lg:text-[26px] xl:text-[30px] 2xl:text-[32px]">
            {description.supported} <br />{' '}
            <span className="leading-[1.3125] text-center text-[32px] sm:text-[40px] md:text-[44px] lg:text-[52px] xl:text-[60px] 2xl:text-[64px]">
              {description.fifty}
            </span>{' '}
            <br /> {description.encryptionWays}
          </h2>
        </div>

        <div className="shadow-[0_0_0_1px_rgba(255,255,255,0.14)] col-start-1 col-end-3 row-start-2 row-end-3 p-12 lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-1 lg:py-[90px] lg:px-12 flex flex-col gap-[60px] justify-center items-center">
          {[
            description.greetingRU,
            description.greetingEN,
            description.greetingJP,
          ].map((description, index) => (
            <div
              className="text-center font-semibold text-ds-gray-900 tracking-[-0.05em] leading-[1.3125]"
              style={{ fontSize: 'clamp(1rem, 0.714rem + 1.43vw, 2rem)' }}
              key={index}
            >
              {description}
            </div>
          ))}
        </div>

        <div className="shadow-[0_0_0_1px_rgba(255,255,255,0.14)] col-start-1 col-end-3 row-start-3 row-end-3 p-12 lg:py-[90px] lg:px-12 lg:col-start-1 lg:col-end-4 lg:row-start-2 lg:row-end-2 w-full">
          <div className="lg:flex lg:text-left lg:justify-between lg:w-full">
            <FeatureSection title={description.dataVariety} description={description.selectData} />
            <FeatureSection title={description.transformationWays} description={description.encryptionMethods} />
            <FeatureSection title={description.support} description={description.languages} />
          </div>
        </div>
      </section>
    </>
  );
}
