import { filterLeague, filterLeagueFinished } from "../../../api";
import LeagueTable from "@/app/components/league-table/LeagueTable";
import Link from "next/link";

const PremierLeague = async () => {
  const league = "Premier League";
  const getEnglishLeague = await filterLeague(league);
  const getEnglishLeagueFinished = await filterLeagueFinished(league);

  const nd = new Date();
  const dateConvert = nd.toDateString();

  return (
    <section className="px-2 md:px-4 md:w-[600px]">
      <div className="flex justify-between items-center mb-4 md:mb-2">
        <h1 className="px-4 py-0 md:py-1 bg-teal-100 rounded-md text-md md:text-xl font-bold">
          Sport{` > `}Football{" "}
          <Link href="/" className="text-teal-500">
            MATCHES
          </Link>
          {` > `}LEAGUES
        </h1>
        <div className="px-4 py-0 md:py-1 bg-slate-600 rounded-md text-textSecondary text-sm">
          <p>{`${dateConvert}`}</p>
        </div>
      </div>
      {getEnglishLeague?.map((data) => (
        <div key={data.id}>
          <LeagueTable matches={data} />
        </div>
      ))}
      {getEnglishLeagueFinished?.map((data) => (
        <div key={data.id}>
          <LeagueTable matches={data} />
        </div>
      ))}
    </section>
  );
};

export default PremierLeague;
