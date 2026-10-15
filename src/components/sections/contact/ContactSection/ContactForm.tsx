"use client";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/src/components/ui/Button";
import { Heading } from "@/src/components/ui/Typography";
import Link from "next/link";
import {
  TextField,
  TextAreaField,
  MultiSelectField,
} from "@/src/components/ui/Form";
import {
  contactSchema,
  ContactFormValues,
} from "@/src/lib/validations/contact.schema";

interface Props {
  heading: {
    before: string;
    highlight: string;
  };

  disclaimer: string;
  treatmentOptions: string[];
}

export default function ContactForm({
  heading,
  disclaimer,
  treatmentOptions,
}: Props) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
    reValidateMode: "onChange",

    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      treatment: [],
      message: "",
    },
  });

  const parts = disclaimer.split(/privacy policy/i);
  const phoneRegistration = register("phone");

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message);
      }

      toast.success("Enquiry sent successfully!", {
        description:
          "Thank you for contacting Waldor Clinic. We'll get back to you shortly.",
      });
      reset();
    } catch (error) {
      console.error(error);
      toast.error("Unable to send enquiry", {
        description:
          error instanceof Error ? error.message : "Please try again later.",
      });
    }
  };

  return (
    <div className="w-full max-w-[780px] rounded-[24px] lg:rounded-[40px] bg-[#29302D] p-6 md:p-10 lg:p-14">
      {/* Heading */}
      <Heading
        before={heading.before}
        highlight={heading.highlight}
        className="mb-10 text-[#ECE0D1] lg:text-[48px]"
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-8 mt-20"
      >
        {/* Honeypot: invisible to people, bots fill it in */}
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="absolute -left-[9999px] h-0 w-0 opacity-0"
          {...register("website")}
        />

        {/* Name */}
        <div className="flex flex-col gap-8 md:grid md:grid-cols-2">
          <TextField
            label="FIRST NAME"
            placeholder="Jane"
            registration={register("firstName")}
            error={errors.firstName}
          />

          <TextField
            label="LAST NAME"
            placeholder="Smith"
            registration={register("lastName")}
            error={errors.lastName}
          />
        </div>

        {/* Email */}
        <TextField
          label="EMAIL"
          type="email"
          placeholder="jane@email.com"
          registration={register("email")}
          error={errors.email}
        />

        {/* Phone */}
        <TextField
          label="PHONE"
          type="tel"
          placeholder="7000000000"
          maxLength={20}
          registration={{
            ...phoneRegistration,
            onChange: (e) => {
              // Allow digits, one leading "+", spaces, dashes and brackets
              e.target.value = e.target.value
                .replace(/[^\d+\s\-()]/g, "")
                .replace(/(?!^)\+/g, "")
                .slice(0, 20);
              return phoneRegistration.onChange(e);
            },
          }}
          error={errors.phone}
        />

        {/* Treatment */}
        <MultiSelectField
          label="WHAT CAN WE HELP WITH?"
          options={treatmentOptions}
          value={watch("treatment") ?? []}
          onChange={(value) => setValue("treatment", value, { shouldValidate: true })}
          onBlur={() => trigger("treatment")}
          error={errors.treatment}
        />

        {/* Message */}
        <TextAreaField
          label="YOUR MESSAGE"
          placeholder="Tell us a little about your skin goals..."
          rows={6}
          registration={register("message")}
          error={errors.message}
        />

        {/* Footer */}
        <div className="mt-2 flex flex-col gap-8 lg:items-end lg:justify-between">
          <div>
            {/* Submit Button */}
            <Button
              type="submit"
              variant="gold"
              disabled={isSubmitting}
              className="w-full lg:w-auto justify-center"
            >
              {isSubmitting ? "SENDING..." : "SEND ENQUIRY"}
            </Button>
          </div>

          {/* Disclaimer */}
          <p className="max-w-full text-xs leading-6 text-[#7E8582]">
            {parts[0]}

            <Link
              href="/privacy-policy"
              className="text-[#E4E6E5] underline underline-offset-4 transition-colors hover:text-[#D6B98B]"
            >
              Privacy Policy
            </Link>

            {parts[1]}
          </p>
        </div>
      </form>
    </div>
  );
}
