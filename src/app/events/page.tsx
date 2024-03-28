import { type Metadata } from 'next';

import { Card } from '@/components/Card';
import { Section } from '@/components/Section';
import { SimpleLayout } from '@/components/SimpleLayout';

function EventsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  );
}

function Appearance({
  title,
  description,
  event,
  cta,
  href,
}: {
  title: string;
  description: string;
  event: string;
  cta: string;
  href: string;
}) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  );
}

export const metadata: Metadata = {
  title: 'Events',
  description:
    'See past and upcoming events Robosports Network will broadcating.',
};

export default function Speaking() {
  return (
    <SimpleLayout
      title="Events"
      intro="See past and upcoming events Robosports Network will broadcating."
    >
      <div className="space-y-20">
        <EventsSection title="Upcoming">
          <Appearance
            href="https://www.firstchampionship.org/watch"
            title="FIRST Championship 2024"
            description="FIRSTChampsLIVE is back for the 2024 Season!  We'll bring you the best matches and analysis live from the event."
            event="Houston, TX"
            cta="Watch"
          />
        </EventsSection>
        <EventsSection title="Recent">
          <Appearance
            href="https://www.youtube.com/watch?v=-McH3MwF-dU&list=PLIY-TB1MAu-XrZ1QHHkOAd6oVr5UYteAU"
            title="Chezy Champs 2023"
            description="See the best of the best compete in the annual Chezy Champs competition."
            event="San Jose, CA"
            cta="VODs"
          />
        </EventsSection>
      </div>
    </SimpleLayout>
  );
}
