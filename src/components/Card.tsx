interface CardProps {
  title: string;
  description: string;
  items: string[];
}

export default function Card({ title, description, items }: CardProps) {
  return (
    <div className="bg-white/10 backdrop-blur rounded-xl p-6">
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-blue-200 mb-4">{description}</p>
      <ul className="text-sm text-blue-300 space-y-1">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}