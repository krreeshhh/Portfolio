import { Suspense } from 'react'
import { GithubGraphClient } from './GithubGraphClient'
import { AnimationWrapper } from './ui/animation-wrapper'

type ContributionDay = {
  date: string;
  count: number;
  level: number;
};

const getLevel = (count: number): number => {
  if (count === 0) return 0;
  if (count < 5) return 1;
  if (count < 10) return 2;
  if (count < 20) return 3;
  return 4;
};

async function getGithubContributions() {
  const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

  if (!GITHUB_USERNAME || !GITHUB_TOKEN) {
    console.error('GitHub Credentials missing');
    return null;
  }

  const query = `
    {
      user(login: "${GITHUB_USERNAME}") {
        contributionsCollection(from: "2026-01-01T00:00:00Z", to: "2026-12-31T23:59:59Z") {
          contributionCalendar {
            weeks {
              contributionDays {
                date
                contributionCount
              }
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) return null;

    const json = await response.json();
    type GraphQLWeek = {
      contributionDays: {
        date: string;
        contributionCount: number;
      }[];
    };
    const weeks = json.data.user.contributionsCollection.contributionCalendar.weeks as GraphQLWeek[];
    const days = weeks.flatMap((week) => week.contributionDays);

    const formatted: ContributionDay[] = days.map((day) => ({
      date: day.date,
      count: day.contributionCount,
      level: getLevel(day.contributionCount),
    }));

    return formatted;
  } catch (err) {
    console.error('Failed to load contributions:', err)
    return null
  }
}

async function GithubGraphContent() {
  const data = await getGithubContributions()

  return <GithubGraphClient data={data} />
}

export default function GithubGraph() {
  return (
    <Suspense fallback={<div />}>
      <AnimationWrapper className='px-4 md:px-8 pt-0 pb-8' id='github'>
        <GithubGraphContent />
      </AnimationWrapper>
    </Suspense>
  )
}