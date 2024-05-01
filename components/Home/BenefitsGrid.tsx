import Image from 'next/image';
import { useTranslations } from '../../hooks/use-translations';
import IllustrationSettings from '../../public/illu1.svg';
import IllustrationTyping from '../../public/illu2.svg';
import { Typography } from '@components/Common/Typography/typography';
import { Settings, Typing } from '@components/Icon/icons';

const benefitsData = [
  {
    icon: <Settings />,
    title: 'autoConfiguration',
    description: 'configurationEase',
    image: IllustrationSettings,
  },
  {
    icon: <Typing />,
    title: 'autoConfiguration',
    description: 'configurationEase',
    image: IllustrationTyping,
  },
];

export default function BenefitsGrid() {
  const { benefits } = useTranslations();

  return (
    <section
      className="grid grid-cols-[auto] !mt-3 xl:grid-cols-2-big mx-auto"
      style={{ maxWidth: 'calc(min(94%, 1080px))' }}
      aria-labelledby="benefits-grid"
    >
      <Typography variant="h1" className="hidden" id="benefits-grid">
        Benefits Grid
      </Typography>
      {benefitsData.map((benefit, index) => (
        <div key={index} className="p-16 shadow-[0_0_0_1px_rgba(255,255,255,0.14)]">
          <div className="flex gap-3 font-normal text-[18px] text-ds-gray-900">
            {benefit.icon} <Typography variant="span">{benefits[benefit.title]}</Typography>
          </div>
          <Typography
            variant="caption"
            className="text-ds-gray-900"
            style={{ fontSize: 'clamp(1rem, 0.943rem + 0.28vw, 1.125rem)' }}
          >
            <Typography variant="span" className="font-semibold text-ds-gray-1000">
              {benefits[benefit.description]}
            </Typography>{' '}
            {benefits.standardValues}
          </Typography>
          <Image src={benefit.image} alt="" style={{ marginInline: 'auto' }} />
        </div>
      ))}
    </section>
  );
}