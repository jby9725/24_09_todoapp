'use client';
import Image from 'next/image';
import Button from '@mui/material/Button';

export default function Home() {
  return (
    <>
      <Button className="tw-bg-red-500" variant="contained">
        버튼
      </Button>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex">
          안녕
        </div>
      </main>
    </>
  );
}
