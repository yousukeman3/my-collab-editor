import CollabEditor from "@/components/CollabEditor";

export default async function Room({ params }: { params: Promise<{ id: string }> }) {
  var id = (await params).id;
  return (
    <div>
      <h1>Room ID: {id}</h1>
      <CollabEditor roomId={id} />
    </div>
  );
}