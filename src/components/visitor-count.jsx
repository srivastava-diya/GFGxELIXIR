"use client";

import { useEffect, useState } from "react";

export default function VisitorBadge() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    fetch("/api/visitor")
      .then((r) => r.json())
      .then((d) => setCount(d.count));
  }, []);

  if (!count) return null;

  return (
    <div className="rounded-full border px-4 py-2 backdrop-blur">
      You are the <b>{count.toLocaleString()}</b> visitor
    </div>
  );
}
