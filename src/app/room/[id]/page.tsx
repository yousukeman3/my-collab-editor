import CollabEditor from "@/components/CollabEditor";

type Props = {
  params: {
    id: string;
  };
};

export default function Page({ params }: Props) {
  return (
    <div>
      <h1>Room ID: {params.id}</h1>
      <CollabEditor roomId={params.id} />
    </div>
  );
}