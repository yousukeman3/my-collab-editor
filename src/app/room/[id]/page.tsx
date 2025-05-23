import CollabEditor from "@/components/CollabEditor";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Room ID: {params.id}</h1>
      <CollabEditor roomId={params.id} />
    </div>
  );
}