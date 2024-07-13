import React from 'react'
import Image from 'next/image';

import { getUser } from '@/lib/actions/patient.actions';
import RegisterForm from '@/components/Forms/RegisterForm';
import { siteData } from '@/constants/SiteData';


const Registration = async({ params: { userId } }: SearchParamProps) => {

  const user = await getUser(userId);


  return (
    <div className='flex max-h-screen h-screen text-white'>
      <section className='remove-scrollbar container'>
        <div className='sub-container max-w-[860px] flex-1 flex-col py-10'>
          <Image
            src="/assets/icons/logo-nbg.svg"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-7 h-7 w-fit"
          />

          <RegisterForm user={user} />

          <p className="copyright py-12">{siteData.copyWrite}</p>
        </div>

      </section>
      
      <Image
        src="/assets/images/register-img.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[390px]"
      />
    </div>
  )
}

export default Registration;