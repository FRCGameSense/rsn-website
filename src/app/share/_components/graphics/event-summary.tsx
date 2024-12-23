import { EventSimple, Team, TeamEventStatus } from '@/lib/tba';
import type { TeamColors } from '@/lib/teamColors';
import fontColorContrast from 'font-color-contrast';

export type EventSummaryProps = {
  team?: Team;
  teamColors?: TeamColors;
  event?: EventSimple;
  status?: TeamEventStatus;
};

function EventSummary({ team, teamColors, event, status }: EventSummaryProps) {
  if (!team || !teamColors || !event || !status) {
    return null;
  }
  return (
    <svg
      width="540"
      height="960"
      viewBox="0 0 540 960"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="540" height="960" fill={teamColors.primaryHex} />

      <text
        x="270"
        y="80"
        fontFamily="Orbitron"
        fontSize="36"
        fontWeight="bold"
        fill={fontColorContrast(teamColors.primaryHex)}
        textAnchor="middle"
      >
        Event Summary
      </text>

      <rect
        x="40"
        y="90"
        width="460"
        height="80"
        fill={teamColors.secondaryHex}
        rx="10"
      />
      <text
        x="270"
        y="145"
        fontFamily="Orbitron"
        fontSize="40"
        fontWeight="bold"
        fill={fontColorContrast(teamColors.secondaryHex)}
        textAnchor="middle"
      >
        {team.nickname}
      </text>

      <text
        x="270"
        y="235"
        fontFamily="Orbitron"
        fontSize="28"
        fill={fontColorContrast(teamColors.primaryHex)}
        textAnchor="middle"
      >
        {event.name}
      </text>
      <text
        x="270"
        y="290"
        fontFamily="Orbitron"
        fontSize="24"
        fill={fontColorContrast(teamColors.primaryHex)}
        textAnchor="middle"
      >
        {event.end_date}
      </text>

      <text
        x="60"
        y="360"
        fontFamily="Orbitron"
        fontSize="32"
        fontWeight="bold"
        fill={fontColorContrast(teamColors.primaryHex)}
      >
        Event Record
      </text>
      <rect
        x="40"
        y="380"
        width="460"
        height="60"
        fill={teamColors.secondaryHex}
        rx="10"
      />
      <text
        x="270"
        y="420"
        fontFamily="Orbitron"
        fontSize="36"
        fill={fontColorContrast(teamColors.secondaryHex)}
        textAnchor="middle"
      >
        {status.qual.ranking.record.wins} - {status.qual.ranking.record.losses}{' '}
        - {status.qual.ranking.record.ties}
      </text>

      <text
        x="60"
        y="500"
        fontFamily="Orbitron"
        fontSize="32"
        fontWeight="bold"
        fill={fontColorContrast(teamColors.primaryHex)}
      >
        Ranking Point Avg.
      </text>
      <rect
        x="40"
        y="520"
        width="460"
        height="60"
        fill={teamColors.secondaryHex}
        rx="10"
      />
      <text
        x="270"
        y="560"
        fontFamily="Orbitron"
        fontSize="36"
        fill={fontColorContrast(teamColors.secondaryHex)}
        textAnchor="middle"
      >
        {status.qual.ranking.sort_orders[0]}
      </text>

      <text
        x="60"
        y="630"
        fontFamily="Orbitron"
        fontSize="32"
        fontWeight="bold"
        fill={fontColorContrast(teamColors.primaryHex)}
      >
        Final Rank
      </text>
      <rect
        x="40"
        y="650"
        width="460"
        height="60"
        fill={teamColors.secondaryHex}
        rx="10"
      />
      <text
        x="270"
        y="690"
        fontFamily="Orbitron"
        fontSize="36"
        fill={fontColorContrast(teamColors.secondaryHex)}
        textAnchor="middle"
      >
        {status.qual.ranking.rank}
      </text>

      <text
        x="60"
        y="760"
        fontFamily="Orbitron"
        fontSize="32"
        fontWeight="bold"
        fill={fontColorContrast(teamColors.primaryHex)}
      >
        Awards
      </text>
      <rect
        x="40"
        y="780"
        width="460"
        height="90"
        fill={teamColors.secondaryHex}
        rx="10"
      />
      {['award1', 'award2'].map((award, index) => (
        <text
          key={index}
          x="50"
          y={810 + index * 35}
          fontFamily="Orbitron"
          fontSize="24"
          fill={fontColorContrast(teamColors.secondaryHex)}
          textAnchor="left"
        >
          • {award}
        </text>
      ))}
      <rect x="0" y="930" width="540" height="30" fill="black" />
      <text
        x="530"
        y="950"
        fontFamily="Orbitron"
        fontSize="16"
        fill="white"
        textAnchor="end"
      >
        Powered by RSN
      </text>
    </svg>
  );
}

export default EventSummary;
