import { useEffect, useRef, useState } from "react";

export default function useSearch() {
  const [searchContent, setSearchContent] = useState("");
  const isInitialMount = useRef(true);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    setSearchContent(query.get("city") || "");

    isInitialMount.current = false;
  }, []);

  useEffect(() => {
    if (isInitialMount.current) return;

    const newUrl = new URL(window.location.href);

    if (searchContent) {
      newUrl.searchParams.set("city", searchContent);
    } else {
      newUrl.searchParams.delete("city");
    }

    window.history.pushState({}, "", newUrl);
  }, [searchContent]);

  return { searchContent, setSearchContent };
}
