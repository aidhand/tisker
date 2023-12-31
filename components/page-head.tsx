export default async function PageHead({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="my-4 py-4 flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
        <h4 className="text-base font-medium">{description}</h4>
      </div>
      <div>{children}</div>
    </div>
  );
}
