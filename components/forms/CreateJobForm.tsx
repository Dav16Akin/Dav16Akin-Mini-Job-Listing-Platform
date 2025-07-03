"use client";

import { JobFormValidation } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Form } from "../ui/form";
import CustomFormField from "../shared/CustomFormField";
import SubmitButton from "../shared/SubmitButton";
import { toast } from "sonner";

import {
  Briefcase,
  Building2,
  MapPin,
  DollarSign,
  ClipboardList,
  ListChecks,
  Gift,
  Info,
} from "lucide-react";
import { SelectItem } from "../ui/select";
import { createJob } from "@/lib/api";

export enum FormFieldType {
  INPUT = "input",
  TEXTAREA = "textarea",
  SELECT = "select",
  SKELETON = "skeleton",
}

const locationtype = ["Remote", "Hybrid", "On-site"];

const CreateJobForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof JobFormValidation>>({
    resolver: zodResolver(JobFormValidation),
    defaultValues: {
      title: "",
      companyName: "",
      locationType: "Remote",
      salaryRange: {
        min: 0,
        max: 0,
      },
      description: "",
      requirements: "",
      benefits: "",
      howToApply: "",
    },
  });

  async function onSubmit(values: z.infer<typeof JobFormValidation>) {
    setIsLoading(true);
    try {
      const {
        title,
        companyName,
        locationType,
        salaryRange,
        requirements,
        description,
        howToApply,
        benefits,
      } = values;

      const newJob = await createJob({
        title,
        companyName,
        locationType,
        salaryRange: `₦${salaryRange.min} - ₦${salaryRange.max}`,
        description,
        requirements: requirements.split(",").map((r) => r.trim()),
        benefits: benefits.split(",").map((b) => b.trim()),
        howToApply,
      });

      toast("Job and details created successfully");
      form.reset();
      return newJob;
    } catch (error: any) {
      console.error("Error creating job and details: ", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 w-full max-w-md mx-auto p-8"
      >
        <section className="mb-8 space-y-2 text-center">
          <h1 className="text-2xl font-extrabold">Create a New Job Listing</h1>
          <p className="text-sm">Enter job information and details below.</p>
        </section>

        {/* Job Info */}
        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          name="title"
          label="Job Title"
          placeholder="e.g. Frontend Developer"
          icon={<Briefcase size={16} />}
        />

        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          name="companyName"
          label="Company Name"
          placeholder="e.g. MyTech Ltd"
          icon={<Building2 size={16} />}
        />

        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.SELECT}
          name="locationType"
          label="Location Type"
          placeholder="Select location type"
          icon={<MapPin size={16} />}
        >
          {locationtype.map((type, i) => (
            <SelectItem key={i} value={type}>
              <div className="cursor-pointer flex items-center gap-2">
                <p>{type}</p>
              </div>
            </SelectItem>
          ))}
        </CustomFormField>

        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          name="salaryRange.min"
          label="Minimum Salary"
          placeholder="e.g. 50000"
          icon={<DollarSign size={16} />}
        />

        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          name="salaryRange.max"
          label="Maximum Salary"
          placeholder="e.g. 80000"
          icon={<DollarSign size={16} />}
        />

        {/* Job Details */}
        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.TEXTAREA}
          name="description"
          label="Job Description"
          placeholder="Write a detailed job description"
          icon={<Info size={16} />}
        />

        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          name="requirements"
          label="Requirements"
          placeholder="Add requirements separated by commas"
          icon={<ListChecks size={16} />}
        />

        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          name="benefits"
          label="Benefits"
          placeholder="Add benefits separated by commas"
          icon={<Gift size={16} />}
        />

        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.TEXTAREA}
          name="howToApply"
          label="How to Apply"
          placeholder="Explain the application process"
          icon={<ClipboardList size={16} />}
        />

        <SubmitButton isLoading={isLoading}>Create Job</SubmitButton>
      </form>
    </Form>
  );
};

export default CreateJobForm;
