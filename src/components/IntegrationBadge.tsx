interface IntegrationBadgeProps {
  name: string;
}

export const IntegrationBadge = ({ name }: IntegrationBadgeProps) => {
  return (
    <div className="px-4 py-2 bg-secondary border border-border rounded-full text-sm font-medium hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-default">
      {name}
    </div>
  );
};
