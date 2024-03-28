import { type Metadata } from 'next';
import Image from 'next/image';

import { Container } from '@/components/Container';
import {
  GitHubIcon,
  InstagramIcon,
  TwitchIcon,
  XIcon,
  YoutubeIcon
} from '@/components/SocialIcons';
import portraitImage from '@/images/portrait.jpg';
import { MailIcon, Member, SocialLink } from './components';
import { allMembers } from './members';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Robosports Network Members',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            We&apos;re The Robosports Network.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              We&apos;re a group of FIRST Robotics Competition alumni who are
              passionate about sharing our knowledge and experiences with theF
              community. We&apos;ve been broadcasting live shows and creating content
              for the FRC community since 2014.
            </p>
          </div>
        </div>
        <div className="lg:col-span-2 flex flex-col space-y-3">

            {Object.values(allMembers).map((member) => (
              <Member key={member.first} member={member} />
            ))}
            </div>
        <div className="lg:pl-20">
          <ul role="list">
             <SocialLink
              href="#"
              aria-label="Follow on Twitch"
              icon={TwitchIcon}
            >
              Follow on Twitch
              </SocialLink>
            <SocialLink
              href="https://www.youtube.com/c/RoboSportsNetwork"
              aria-label="Follow on YouTube"
              icon={YoutubeIcon}
            >
              Follow on YouTube
              </SocialLink>
            <SocialLink href="https://twitter.com/FRCGameSense" 
            aria-label="Follow on X"
             icon={XIcon} >
              Follow on X
              </SocialLink>
            <SocialLink
              href="https://www.instagram.com/robosportsnet/"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            >
              Follow on Instagram
              </SocialLink>
            <SocialLink
              href="https://github.com/RoboSportsNetwork"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            >
              Follow on GitHub
              </SocialLink>
              
            <SocialLink
              href="mailto:frcgamesense@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              frcgamesense@gmail.com
            </SocialLink>
          </ul>
        d</div>
      </div>
    </Container>
  )
}
