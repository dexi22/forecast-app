import Card from "./card";

interface InfoCardProps {
  icon: JSX.Element;
  label: string;
  value: string;
  extra?: string;
}

export default function InfoCard({ icon, label, value, extra }: InfoCardProps) {
  return (
    <Card>
      <header className="text-xl flex gap-2 text-text-secondary">
        {icon}
        {label}
      </header>
      <p className="text-2xl pl-10 pt-2">
        {value} {extra && <span className="text-gray-400 text-lg">{`(${extra})`}</span>}
      </p>
    </Card>
  );
}
