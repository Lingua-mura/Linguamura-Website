import Layout from "./../../Layout";
import Moviespage from "./movies/Moviespage";
import MusicPage from "./music/Musicpage";
import GamesPage from "./games/Gamespage"

const Page = () => {
  return (
    <Layout>
      <div className="">
        <Moviespage />
        <MusicPage />
        <GamesPage />
      </div>
    </Layout>
  );
};

export default Page;
