import BackButton from "../../../../../ui/dashboard/BackButton";
import UpdateForm from "../../../../../ui/dashboard/Update-form";

export default async function page(props: { params: Promise<{ id: number }> }) {
  const params = await props.params;
  const { id } = params;
  return (
    <>
    <BackButton/>
    <div className="mt-[100px]">
      
      <UpdateForm id={id} />
    </div>
    </>
  );
}
