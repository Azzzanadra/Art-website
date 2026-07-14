import QuickNav from "./components/QuickNav";
import { sql } from "./lib/db";

export default async function HomePage() {
  const items = await sql`
    SELECT title, image_url
    FROM items
    ORDER BY created_at DESC
    LIMIT 1
  `;

  const latestImage = items[0]?.image_url ?? "#";

  return (
    <main className="container">
      <QuickNav/>
      <section className="main">
        <div className="containerImg Latest">
          <img src={latestImage} alt="Latest upload" />
          <div className="innerContainer">
            <div className="title">Latest Upload</div>
            <div className="innerImg">
              <img src={latestImage} alt="The latest upload" />
            </div>
          </div>
        </div>

        <div className="containerImg LatestComic">
          <img src="#" alt="#" />
          <div className="innerContainer">
            <div className="title">Latest Comic page</div>
            <div className="innerImg">
              <img src="#" alt="#" />
            </div>
          </div>
        </div>

        <div className="containerImg LatestAnimation">
          <img src="#" alt="#" />
          <div className="innerContainer">
            <div className="title">Latest Animation</div>
            <div className="innerImg">
              <img src="#" alt="#" />
            </div>
          </div>
        </div>

        <div className="containerImg LatestArt">
          <img src="#" alt="#" />
          <div className="innerContainer">
            <div className="title">Latest Drawing</div>
            <div className="innerImg">
              <img src="#" alt="#" />
            </div>
          </div>
        </div>
      </section>

      <footer></footer>
    </main>
  );
}