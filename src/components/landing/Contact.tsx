"use client";

import { contactConfig } from "@/config/Contact";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import * as z from "zod";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Loader2, Send } from "lucide-react";

//to show heading as optional 
interface contactHeading {
  show?: boolean
}

const contactFormShecma = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "please enter valid email address",
  }),
  phone: z
    .string()
    .min(10, {
      message: "Phone number must be at least 10 characters.",
    })
    .regex(/^[\+]?[1-9][\d]{0,15}$/, {
      message: "Please enter a valid phone number.",
    }),
  message: z
    .string()
    .min(10, {
      message: "Message must be at least 10 characters.",
    })
    .max(1000, {
      message: "Message must not exceed 1000 characters.",
    }),
});

type contactFormValues = z.infer<typeof contactFormShecma>;

export default function ContactSection() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const Form = useForm<contactFormValues>({
        resolver: zodResolver(contactFormShecma),
        defaultValues: {
           name: '',
           email: '',
           phone: '',
           message: '',
        }
    });

    const onSubmit = async(data: contactFormValues)=>{
         
        try{
            const response = await fetch('/api/contact', {
                method: 'Post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            const result = await response.json();

            if (response.ok) {
               toast.success('Message sent successfully!');
               Form.reset();
            }else {
                toast.error( result.error || 'Failed to send message. Please try again');
            }   
        } catch(error){
            console.error('Error submitting form:', error);
        } finally {
            setIsSubmitting(false);
        }
    }

  return (
    <div className="py-10 w-full">
      <h1 className="text-center text-6xl font-black">
        Let's Work <br /> Together
      </h1>

      <Card className="mt-10 border-none shadow-none">
        <CardHeader>
          <CardTitle className="text-4xl font-black">
            {contactConfig.title}
          </CardTitle>
          <CardDescription className="text-small">
            <p className="text-secondary font-medium">
              Please contact me directly at{" "}
              <a
                href="mailto:ruchitk539@gmail.com"
                className="text-foreground underline decoration-transparent underline-offset-4  transition-all duration-300 hover:decoration-current"
              >
                ruchitk439@gmail.com
              </a>{" "}
              or drop your info here.
            </p>
          </CardDescription>
        </CardHeader>
        <CardContent>
            <form onSubmit={Form.handleSubmit(onSubmit)}>
              <FieldGroup>
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                      <Controller
                         name="name"
                         control={Form.control}
                         render={({field, fieldState})=>(
                              <Field data-invalid={fieldState.invalid}>
                                  <FieldLabel htmlFor={field.name}>Name *</FieldLabel>
                                  <Input 
                                     {...field}
                                     id={field.name}
                                     placeholder="Your full name"
                                     aria-invalid={fieldState.invalid}
                                   />
                                   {fieldState.invalid && (
                                      <FieldError errors={[fieldState.error]} />
                                    )}
                               </Field>  
                           )}
                        />
                      <Controller
                         name="email"
                         control={Form.control}
                         render={({field, fieldState})=>(
                              <Field data-invalid={fieldState.invalid}>
                                  <FieldLabel htmlFor={field.name}>Email *</FieldLabel>
                                  <Input 
                                     {...field}
                                     id={field.name}
                                     type="email"
                                     placeholder="you@example.com"
                                     aria-invalid={fieldState.invalid}
                                   />
                                   {fieldState.invalid && (
                                      <FieldError errors={[fieldState.error]} />
                                    )}
                               </Field>  
                           )}
                        />
                  </div> 
                      <Controller
                         name="phone"
                         control={Form.control}
                         render={({field, fieldState})=>(
                              <Field data-invalid={fieldState.invalid}>
                                  <FieldLabel htmlFor={field.name}>Phone *</FieldLabel>
                                  <Input 
                                     {...field}
                                     id={field.name}
                                     type="tel"
                                     placeholder="+1234567890"
                                     aria-invalid={fieldState.invalid}
                                   />
                                   {fieldState.invalid && (
                                      <FieldError errors={[fieldState.error]} />
                                    )}
                               </Field>  
                           )}
                        />
                      <Controller
                         name="message"
                         control={Form.control}
                         render={({field, fieldState})=>(
                              <Field data-invalid={fieldState.invalid}>
                                  <FieldLabel htmlFor={field.name}>Message *</FieldLabel>
                                  <Textarea 
                                     {...field}
                                     id={field.name}
                                     rows={5}
                                     placeholder="tell me about your project/idea..."
                                     aria-invalid={fieldState.invalid}
                                   />
                                   {fieldState.invalid && (
                                      <FieldError errors={[fieldState.error]} />
                                    )}
                               </Field>  
                           )}
                        />
                        <Button type="submit" disabled={isSubmitting} className="w-full">
                            {isSubmitting ? (
                                <>
                                  <Loader2 className="mr-2 size-4 animate-spin" />
                                  sending your message...
                                </>
                            ) : (
                                <>
                                   <Send className="mr-2 size-4" />
                                    Send Message
                                </>
                            )}
                        </Button>
              </FieldGroup>
            </form>
        </CardContent>
      </Card>
    </div>
  );
}
