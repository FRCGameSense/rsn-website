'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { fetchTeam, fetchTeamEvents, fetchTeamEventStatuses } from '@/lib/tba';
import { fetchTeamColors } from '@/lib/teamColors';
import { useQuery } from '@tanstack/react-query';
import { useMemo, useState } from 'react';
import EventSummary from './graphics/event-summary';

export function TeamEventForm() {
  const [year, setYear] = useState(new Date().getFullYear().toString());
  const [teamKey, setTeamKey] = useState('');
  const [eventKey, setEventKey] = useState('');

  const yearOptions = useMemo(() => {
    return Array.from({ length: new Date().getFullYear() - 1991 }, (_, i) => {
      return new Date().getFullYear() - i;
    });
  }, []);

  const teamFormSchema = useMemo(
    () =>
      z.object({
        teamNumber: z.number().int().positive().max(19999).optional(),
        year: z.string().refine(value => yearOptions.includes(Number(value)), {
          message: 'Invalid year',
        }),
      }),
    [yearOptions],
  );

  const teamForm = useForm<z.infer<typeof teamFormSchema>>({
    resolver: zodResolver(teamFormSchema),
    defaultValues: {
      teamNumber: undefined,
      year: year.toString(),
    },
  });

  function onSubmit(values: z.infer<typeof teamFormSchema>) {
    setTeamKey(`frc${values.teamNumber}`);
  }

  const {
    data: team,
    error: teamError,
    isLoading: teamLoading,
  } = useQuery({
    queryKey: ['team', teamKey],
    queryFn: () => fetchTeam(teamKey),
    enabled: teamForm.formState.isSubmitted,
  });

  const {
    data: teamEvents,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['eventStatuses', year, teamKey],
    queryFn: () => fetchTeamEvents(teamKey, Number(year)),
    enabled: teamForm.formState.isSubmitted,
  });

  const {
    data: eventSummaries,
    error: eventSummariesError,
    isLoading: eventSummariesLoading,
  } = useQuery({
    queryKey: ['eventSummary', eventKey],
    queryFn: () => fetchTeamEventStatuses(teamKey, Number(year)),
    enabled: teamForm.formState.isSubmitted,
  });

  const {
    data: teamColors,
    error: teamColorsError,
    isLoading: teamColorsLoading,
  } = useQuery({
    queryKey: ['teamColors', teamKey],
    queryFn: () => fetchTeamColors(Number(teamKey.slice(3))),
    enabled: teamForm.formState.isSubmitted,
  });

  return (
    <>
      <Form {...teamForm}>
        <form
          onSubmit={teamForm.handleSubmit(onSubmit)}
          className="flex flex-row items-center gap-4 justify-between"
        >
          <FormField
            control={teamForm.control}
            name="year"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Year</FormLabel>
                <Select
                  onValueChange={value => {
                    field.onChange(value);
                    setYear(value);
                  }}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a year" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {yearOptions.map((y, i) => (
                      <SelectItem key={i} value={y.toString()}>
                        {y}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={teamForm.control}
            name="teamNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Team Number</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Enter team number"
                    {...field}
                    onChange={e => field.onChange(parseInt(e.target.value, 10))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            disabled={
              !teamForm.formState.isValid || !teamForm.formState.isDirty
            }
          >
            GetEvents
          </Button>
        </form>
      </Form>

      {isLoading && <div>Loading...</div>}

      {teamLoading && <div>Loading team...</div>}
      {team && <h2 className="text-3xl my-8">{team.nickname}</h2>}

      {teamEvents && (
        <Select onValueChange={setEventKey}>
          <SelectTrigger className="mb-4">
            <SelectValue placeholder="Select an event" />
          </SelectTrigger>
          <SelectContent>
            {teamEvents?.map(event => (
              <SelectItem key={event.key} value={event.key}>
                {event.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
      {eventKey && eventSummaries?.[eventKey] && (
        <div className="flex justify-center">
          <EventSummary
            event={teamEvents?.find(e => e.key === eventKey)}
            team={team}
            status={eventSummaries[eventKey]}
            teamColors={teamColors}
          />
        </div>
      )}
    </>
  );
}
