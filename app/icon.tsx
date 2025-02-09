import RealitaLogo from '@/components/core/realita-logo';
import { ImageResponse } from 'next/og';

// Image metadata
export const size = {
  width: 42,
  height: 42,
};
export const contentType = 'image/png';

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <RealitaLogo />
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported icons size metadata
      // config to also set the ImageResponse's width and height.
      ...size,
    }
  );
}
