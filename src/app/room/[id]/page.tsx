import CollabEditor from "@/components/CollabEditor";

export default async function Room({ params }: { params: Promise<{ id: string }> }) {
  const ID = (await params).id;
  return (
    <div>
      <h1>Room ID: {ID}</h1>
      <CollabEditor roomId={ID} />
    </div>
  );
}