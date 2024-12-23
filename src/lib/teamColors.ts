import z from 'zod';
const API_BASE_URL = 'https://api.frc-colors.com/v1';

export const teamColorsSchema = z.object({
  primaryHex: z.string(),
  secondaryHex: z.string(),
  verified: z.boolean(),
});

export type TeamColors = z.infer<typeof teamColorsSchema>;

export async function fetchTeamColors(team: number) {
  const response = await fetch(`${API_BASE_URL}/team/${team}`);

  return teamColorsSchema.parse(await response.json());
}
