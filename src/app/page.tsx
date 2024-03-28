import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

import { Container } from '@/components/Container';
import {
  GitHubIcon,
  InstagramIcon,
  TwitchIcon,
  XIcon,
  YoutubeIcon
} from '@/components/SocialIcons';
import image1 from '@/images/photos/image-1.png';
import image2 from '@/images/photos/image-2.png';
import image3 from '@/images/photos/image-3.png';
import image4 from '@/images/photos/image-4.png';
import image5 from '@/images/photos/image-5.png';

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}


function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default async function Home() {

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Robosports Network
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            We are a group of passionate individuals who love to build robots
            and compete in robotics competitions. We are a community of students,
            mentors, and volunteers who are dedicated to promoting STEM education
            and robotics.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://www.twitch.tv/robosportsnetwork"
              aria-label="Follow on Twitch"
              icon={TwitchIcon}
            />
            <SocialLink
              href="https://www.youtube.com/c/RoboSportsNetwork"
              aria-label="Follow on YouTube"
              icon={YoutubeIcon}
            />
            <SocialLink href="https://twitter.com/FRCGameSense" aria-label="Follow on X" icon={XIcon} />
            <SocialLink
              href="https://www.instagram.com/robosportsnet/"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://github.com/RoboSportsNetwork"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
    </>
  )
}
