"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function QuickNav() {
  const [name, setName] = useState("");
  const router = useRouter();

  return (
    <div>
      <input
        type="text"
        placeholder="Type something..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="text-input"
      />
      <button onClick={() => router.push("/other")} className="go-button">
        Go to other page
      </button>
    </div>
  );
}