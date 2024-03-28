import Image from 'next/image';

import { Container } from '@/components/Container';
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons';
import { MailIcon, SocialLink } from '../components';
import { allMembers } from '../members';

export async function generateStaticParams() {
  return Object.keys(allMembers).map((member) => ({
    member
  }));

}

export async function generateMetadata({params}: {params: {member: string}}) {
  const m = allMembers[params.member];
  return {
    title: `${m.first} ${m.last}`,
    description: m.bio,
  };
}

export default function About({params}: {params: {member: string}}) {
  const m = allMembers[params.member];
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={m.image}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            {`${m.first} ${m.last}`}
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
             {m.bio}
            </p>
           
          </div>
        </div>
        {m.socials && (
        <div className="lg:pl-20">
          <ul role="list">
            {m.socials.twitter && (
            <SocialLink href={m.socials.twitter} icon={XIcon}>
              Follow on X
            </SocialLink>
            )}
            {m.socials.instagram && (
            <SocialLink href={m.socials.instagram} icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            )}
            {m.socials.github && (
            <SocialLink href={m.socials.github} icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            )}
            {m.socials.linkedin && (
            <SocialLink href={m.socials.linkedin} icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            )}
            {m.socials.email && (
            <SocialLink
              href={`mailto:${m.socials.email}`}
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              {m.socials.email}
            </SocialLink>
            )}
          </ul>
        </div>)}
      </div>
    </Container>
  )
}
