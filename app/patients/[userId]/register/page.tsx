import RegisterForm from '@/components/forms/RegisterForm'
import { getUser } from '@/lib/actions/patient.actions'
import Image from 'next/image'

const Register = async ({ params }: SearchParamProps) => {

  const { userId } = await params
  const user = await getUser(userId);

  return (
    <div className="flex h-screen max-h-screen">
      <section className="container remove-scrollbar">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
          <Image 
            src="/assets/icons/logo-ink.png"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-10 h-20 w-fit"
          />

          <RegisterForm user={user} />

          <p className="copyright py-12"> 
              &copy; 2024 Ink-Tadé
          </p>
        </div>
      </section>

      <Image
        src="/assets/images/tattoo-artist-color.jpg"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[390px]"
      />
    </div>
  )
}

export default Register
