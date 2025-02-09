import CharacteristicsContent from '@/app/(landing-page)/characteristics/components/characteristics-content';
import CharacteristicsFooter from '@/app/(landing-page)/characteristics/components/characteristics-footer';
import CharacteristicsHeader from '@/app/(landing-page)/characteristics/components/characteristics-header';
import React from 'react';

export default function Characteristics() {
  return (
    <>
      <CharacteristicsHeader />
      <CharacteristicsContent />
      <CharacteristicsFooter />
    </>
  );
}
