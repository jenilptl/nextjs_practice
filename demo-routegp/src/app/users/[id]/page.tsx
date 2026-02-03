async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const page = Number(id);

  return (
    <div>
      <h1>{page}</h1>
    </div>
  );
}

export default Page;