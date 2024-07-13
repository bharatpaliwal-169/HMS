import React from 'react'
import Image from 'next/image'
import PatientForm from '@/components/Forms/PatientForm'
import { siteData } from '@/constants/SiteData'
import Link from 'next/link'
import { navLinks } from '@/constants/Navs'

const Home = () => {
  return (
    <div className='flex h-screen min-h-screen dark:text-white'>
      <section className='remove-scrollbar container my-auto'>
        <div className='sub-container max-w-[496px]'>
          <Image src="/assets/icons/logo-nbg.svg" alt="logo" width = {496} height = {496}
            className='mb-5 h-7 w-fit'
          />

          <PatientForm />

          <div className="text-14-regular mt-5 mb-5 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              {siteData.copyWrite}
            </p>
            <Link href={navLinks.admin._url} className="text-green-500 hover:underline hover:text-green-400">
              {navLinks.admin.title}
            </Link>
          </div>
        </div>
      </section>

      <Image
        src="/assets/images/onboarding-img.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[50%]"
      />
    </div>
  )
}

export default Home;