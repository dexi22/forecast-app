import { useEffect, useMemo } from "react";
import useSearch from "../../hooks/useSearch";
import { debounce } from "../../utils/utils";

interface SearchBarProps {
  onChange: (value: string) => void;
}

export default function SearchBar({ onChange }: SearchBarProps) {
  const { searchContent, setSearchContent } = useSearch();

  const debouncedOnChange = useMemo(() => debounce(onChange, 500), [onChange]);

  useEffect(() => {
    debouncedOnChange(searchContent);
  }, [searchContent, debouncedOnChange]);

  return (
    <input
      name="q"
      className="bg-primary rounded-xl p-3 w-full focus:outline focus:outline-outline focus:relative focus:translate-y-1 transition-all"
      placeholder="Search location..."
      defaultValue={searchContent}
      onChange={(e) => {
        const { value } = e.target;
        setSearchContent(value);
        debouncedOnChange(value);
      }}
    />
  );
}
