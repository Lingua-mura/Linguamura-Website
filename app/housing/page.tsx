'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HousingPage() {
  const router = useRouter();

  useEffect(() => {
    router.push('/housing/apartments');
  }, [router]);

  return null;
}