"use client";

import { useEffect, useState } from "react";
import { Badge } from "./ui/badge";
import { Eye } from "lucide-react";

function getOrdinalSuffix(num) {
  const j = num % 10;
  const k = num % 100;

  if (j === 1 && k !== 11) {
    return "st";
  }
  if (j === 2 && k !== 12) {
    return "nd";
  }
  if (j === 3 && k !== 13) {
    return "rd";
  }
  return "th";
}

export default function VisitorBadge() {
  const [count, setCount] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        const response = await fetch("/api/visitor");
        const data = await response.json();
        setCount(data.count);
      } catch (error) {
        setCount(0);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVisitorCount();
  }, []);

  if (isLoading || count === null) {
    return (
      <Badge className="bg-black text-gray-300 border-gray-900 px-3 py-1.5 rounded-md">
        <Eye className="mr-2 h-4 w-4" />
        Loading...
      </Badge>
    );
  }

  if (count === 0) {
    return null;
  }

  const ordinalSuffix = getOrdinalSuffix(count);

  return (
    <Badge className="bg-black text-gray-300 border-gray-900 px-3 py-1.5 rounded-md">
      <Eye className="mr-2 h-4 w-4" />
      You are the{" "}
      <span className="font-semibold text-white">
        {count.toLocaleString()}
        {ordinalSuffix}
      </span>{" "}
      visitor
    </Badge>
  );
}
