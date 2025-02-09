import PrincingContent from '@/app/(landing-page)/pricing/components/pricing-content';
import PricingHeader from '@/app/(landing-page)/pricing/components/princing-header';
import React from 'react';
import PrincingFooter from './components/pricing-footer';

export default function Pricing() {
  return (
    <>
      <PricingHeader />
      <PrincingContent />
      <PrincingFooter />
    </>
  );
}
