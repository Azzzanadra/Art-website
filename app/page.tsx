"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "./lib/supabase";

export default async function HomePage() {
  const [name, setName] = useState("");
  const router = useRouter();
  // const { data: files, error } = await supabase.storage
  //   .from("art-uploads")
  //   .list("", {
  //     limit: 1,
  //     sortBy: { column: "created_at", order: "desc" },
  //   });

  // if (error) {
  //   console.error("Error fetching latest image:", error.message);
  // }

  // let latestImage = "#";

  // if (files && files.length > 0) {
  //   const { data: publicUrlData } = supabase.storage
  //     .from("art-uploads")
  //     .getPublicUrl(files[0].name);

  //   latestImage = publicUrlData.publicUrl;
  // }

  const handleClick = () => {
    router.push("/other");
  };

  return (
    <main className="container">
      
      <section className="main">
        <div className="containerImg Latest">          
          <img src="#" alt="#" />
          <div className="innerContainer">
            <div className="title">
              Latest Upload
            </div>
            <div className="innerImg">
              <img src="#" alt="The latest upload" />
            </div>
          </div>
        </div>

        <div className="containerImg LatestComic">          
          <img src="#" alt="#" />
          <div className="innerContainer">
            <div className="title">
              Latest Comic page
            </div>
            <div className="innerImg">
              <img src="#" alt="#" />
            </div>
          </div>
        </div>

        <div className="containerImg LatestAnimation">          
          <img src="#" alt="#" />
          <div className="innerContainer">
            <div className="title">
              Latest Animation
            </div>
            <div className="innerImg">
              <img src="#" alt="#" />
            </div>
          </div>
        </div>

        <div className="containerImg LatestArt">          
          <img src="#" alt="#" />
          <div className="innerContainer">
            <div className="title">
              Latest Drawing
            </div>
            <div className="innerImg">
              <img src="#" alt="#" />
            </div>
          </div>
        </div>
      </section>

      <footer>

      </footer>

      {/* <h1 className="logo-title">🎨 MyArtSite</h1>

      <p className="description">
        Welcome! This is a placeholder page while I build out my art,
        comic, and animation gallery.
      </p>

      <input
        type="text"
        placeholder="Type something..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="text-input"
      />

      <button onClick={handleClick} className="go-button">
        Go to other page
      </button> */}
    </main>
  );
}
