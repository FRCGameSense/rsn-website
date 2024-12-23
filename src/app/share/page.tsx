'use client';
import { Container } from '@/components/Container';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TeamEventForm } from './_components/team-event-form';

export default function Teamsome() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Container className="mt-16 sm:mt-32">
        <TeamEventForm />
      </Container>
    </QueryClientProvider>
  );
}
