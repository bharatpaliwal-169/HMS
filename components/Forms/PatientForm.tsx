"use client";

import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form } from "@/components/ui/form";
import { createUser } from "@/lib/actions/patient.actions";
import { UserFormValidation } from "@/lib/validation";
import "react-phone-number-input/style.css";
import CustomFormField from "./utils/CustomFormField";
import { FormFieldType } from '@/constants/enums/FormFieldType';
import SubmitButton from "./utils/SubmitButton";
import { siteData } from '@/constants/SiteData';

import { PROJECT_ID,BUCKET_ID,ENDPOINT } from '@/lib/appwrite.config';
const PatientForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof UserFormValidation>) => {
    setIsLoading(true);

    try {
      const user = {
        name: values.name,
        email: values.email,
        phone: values.phone,
      };

      console.log(PROJECT_ID + " " + ENDPOINT +  " "  + BUCKET_ID);
      const newUser = await createUser(user);
      if (newUser) {
        router.push(`/patients/${newUser.$id}/register`);
      }
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex-1 space-y-6">
          <section className="mb-2 space-y-4">
            <h1 className="header text-white">{siteData.FormHeader1}</h1>
            <p className="text-dark-700">{siteData.appointments}</p>
          </section>

          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="name"
            label="Full name"
            placeholder="John Doe"
            iconSrc="/assets/icons/user.svg"
            iconAlt="user"
          />

          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="email"
            label="Email"
            placeholder="johndoe@gmail.com"
            iconSrc="/assets/icons/email.svg"
            iconAlt="email"
          />

          <CustomFormField
            fieldType={FormFieldType.PHONE_INPUT}
            control={form.control}
            name="phone"
            label="Phone number"
            placeholder="(+91) 1234567890"
          />

          <SubmitButton isLoading={isLoading}>{siteData.getStarted}</SubmitButton>
        </form>
      </Form>
    </>
  )
}

export default PatientForm