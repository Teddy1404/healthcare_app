import PatientForm from "@/components/forms/PatientForm";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   
    <div className="flex min-h-screen h-screen">
    {/* otp verification  */}
      <section className="container remove-scrollbar my-auto">
      <div className="sub-container max-w-[496px]">
      <Image
      src="/assets/icons/logo-full.svg"
      width={1000}
      height={1000}
      alt="Logo"
      className="h-10 w-fit mb-12"
    />
    <PatientForm/>
    <div className="flex mt-20 text-14-regular justify-between">
      <p className="text-dark-600 justify-items-end xl:text-left">@carepulse copyright</p>
      <Link href='/?admin=true' className="text-green-500">Admin</Link>
    </div>
      </div>
      </section>
      <Image
      src="/assets/images/onboarding-img.png"
      width={1000}
      height={1000}
      alt="Logo"
      className="hidden h-full object-cover md:block max-w-[50%]"
    />
    </div>
  );
}
