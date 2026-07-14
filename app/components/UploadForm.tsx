"use client";

import { useState } from "react";

export default function UploadForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Uploading...");

    const form = e.currentTarget;              // grab it now, while it's still valid
    const formData = new FormData(form);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      setStatus("Uploaded!");
      form.reset();                             // use the saved reference, not e.currentTarget
    } else {
      setStatus("Upload failed.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" name="file" accept="image/*" required />
      <input type="text" name="title" placeholder="Title" required />
      <input type="text" name="categoryId" placeholder="Category ID" required />
      <button type="submit">Upload</button>
      {status && <p>{status}</p>}
    </form>
  );
}