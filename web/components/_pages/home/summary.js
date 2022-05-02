import MakeAnInquiryButton from '../../shared/make-an-inquiry-button';
import { ScrollReveal } from '../../shared/scroll-reaveal';

export default function Summary({ summary }) {
  const summaryParagrahs = summary.split('\n').filter((s) => s !== '');

  return (
    <div className='flex flex-col items-center'>
      <div className='text-center text-sm mb-4'>
        {summaryParagrahs.map((p, i) => (
          <ScrollReveal key={i}>
            <p className='mb-4'>{p}</p>
          </ScrollReveal>
        ))}
      </div>
      <ScrollReveal>
        <MakeAnInquiryButton></MakeAnInquiryButton>
      </ScrollReveal>
    </div>
  );
}
