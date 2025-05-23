import CollabEditor from "@/components/CollabEditor";

export default async function Room({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <div>
      <h1>Room ID: {id}</h1>
      <CollabEditor roomId={id} />
    </div>
  );
}