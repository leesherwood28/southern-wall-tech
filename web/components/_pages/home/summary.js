import MakeAnInquiryButton from '../../shared/make-an-inquiry-button';
import { ScrollReveal } from '../../shared/scroll-reaveal';

export default function Summary() {
  return (
    <div className='flex flex-col items-center'>
      <div className='text-center text-sm mb-4'>
        <ScrollReveal>
          <p className='mb-4'>
            Welcome to southern wall tech limited. Plastering and rendering
            contractors, covering Dorset and surrounding areas. We provide
            services to both the commercial and private sector. We are fully
            qualified and insured.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p>
            Here at Southern Wall Tech ltd we specialise in undertaking all
            aspects of plastering and rendering, meeting any requirements and
            specifications our clients need. We work with all types of
            customers, from small residential projects to large commercial
            building developments.
          </p>
        </ScrollReveal>
      </div>
      <ScrollReveal>
        <MakeAnInquiryButton></MakeAnInquiryButton>
      </ScrollReveal>
    </div>
  );
}
