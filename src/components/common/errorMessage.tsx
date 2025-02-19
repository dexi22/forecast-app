import { AlertCircle } from "lucide-react";

interface ErrorMessageProps {
  message: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="flex justify-center mt-2">
      <div className="flex items-center gap-2 p-4 text-text-secondary bg-primary border border-opacity-70 border-purple-600 rounded-lg w-[50%]">
        <AlertCircle className="w-6 h-6 text-red-500" />
        <span className="text-lg font-medium">{message}</span>
      </div>
    </div>
  );
}
