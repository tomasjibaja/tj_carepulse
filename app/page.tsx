import PasskeyModal from "@/components/PasskeyModal";
import PatientForm from "@/components/forms/PatientForm";
import Image from "next/image";
import Link from "next/link";

export default async function Home({ searchParams }: SearchParamProps) {

  const { admin } = await searchParams;
  const isAdmin = admin === 'true';

  return (
    <div className="flex h-screen max-h-screen">
      {isAdmin && <PasskeyModal />}
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image 
            src="/assets/icons/logo-ink.png"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-28 w-fit"
          />

          <PatientForm />

          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left"> 
              &copy; 2024 InkTadé
            </p>
            <Link href="/?admin=true" className="text-beige-500">
              Admin
            </Link>
          </div>
        </div>
      </section>

      <Image
        src="/assets/images/tattoo-artist-bw.jpg"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[50%]"
      />
    </div>
  );
}
