"use client"

// import Image from 'next/image'

import { NextUIProvider } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import { Button, Tooltip } from "@nextui-org/react";
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';

export default function Home() {
  return (
    <NextUIProvider>
      <main className="w-screen min-h-screen flex items-center">
        <div className='w-1/2 min-h-screen bg-primary-dark text-primary-light p-12 flex flex-col justify-between items-end'>
          <Image
            isZoomed
            radius='none'
            width={50}
            alt="ts."
            src="/logo.svg"
            className="cursor-pointer"
          />
          <div className="flex flex-col gap-y-4 items-end">
            <Image
              isZoomed
              width={200}
              alt="Tushar Srivastava"
              src="/ts-photo.jpg"
              className="cursor-pointer"
            />
            <div className="text-6xl font-regular text-right flex flex-col gap-y-3">
              <span className="font-black underline decoration-4 hover:decoration-accent hover:text-accent">TUSHAR</span>
              <span>SRIVASTAVA</span>
            </div>
          </div>
          <div className="text-xs font-thin">© 2023 Tushar Srivastava. All Rights Reserved.</div>
        </div>
        <div className='w-1/2 min-h-screen bg-primary-light text-primary-dark p-12 text-left flex flex-col justify-between'>
          <div>
            <Tooltip showArrow={true} content="Shoot an email" className="text-black">
              <Button isIconOnly size="lg" variant="light" aria-label="Email">
                <MdAlternateEmail className="text-2xl" />
              </Button>
            </Tooltip>
            <Tooltip showArrow={true} content="Let's go social" className="text-black">
              <Button isIconOnly size="lg" variant="light" aria-label="LinkedIn">
                <FaLinkedinIn className="text-2xl" />
              </Button>
            </Tooltip>
            <Tooltip showArrow={true} content="Some of my work" className="text-black">
              <Button isIconOnly size="lg" variant="light" aria-label="Github">
                <FaGithub className="text-2xl" />
              </Button>
            </Tooltip>

          </div>
          <div className="text-xl flex flex-col font-bold text-primary-dark">
            <span>OPEN SOURCE ENTHUSIAST</span>
            <span className="text-4xl font-black">Transforming ideas into
              <span className="underline decoration-4 hover:decoration-accent hover:text-accent px-2">digital realities</span>
            </span>
          </div>
          <div></div>
        </div>
      </main>
    </NextUIProvider>
  )
}
