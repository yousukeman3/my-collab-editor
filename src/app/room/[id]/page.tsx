import CollabEditor from "@/components/CollabEditor";

export default function Room({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Room ID: {params.id}</h1>
      <CollabEditor roomId={params.id} />
    </div>
  );
}