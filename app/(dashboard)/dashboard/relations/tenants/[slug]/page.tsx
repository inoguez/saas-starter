import React from 'react';

export default async function page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <div className='border border-off-white/15 bg-jet-black/20 text-off-white/80 shadow-sm p-4 rounded-3xl'>
      slug{slug}
    </div>
  );
}
