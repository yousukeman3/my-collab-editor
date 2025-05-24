import CollabEditor from "@/components/CollabEditor";

export const runtime = "edge";

export type Params = Promise<{ id: string }>;

export default async function Room({ params }: { params: Params }) {
  const { id } = await params;
  return (
    <div>
      <h1>Room ID: {id}</h1>
      <CollabEditor roomId={id} />
    </div>
  );
}