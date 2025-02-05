"use client"

import type React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select } from "./ui/select";
import emailjs from "@emailjs/browser"
import { useRef, useState } from "react";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    

    if(!formRef.current) {
      console.error('Form reference is not available');
      setSubmitStatus('An error occured. Please try again');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('');

    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID as string;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID as string;
    const publicKey = process.env.NEXT_PUBLIC_KEY as string;

    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS environment varaibles are not properly configured');
      setSubmitStatus('COnfiguration error. Please contact support');
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      );

      if (res.text === 'OK') {
        setSubmitStatus('Message sent successfully');
        formRef.current.reset();
      } else {
        setSubmitStatus('Failed to send message. Please try again');
      } 
    } catch (error) {
      setSubmitStatus('An error occured. Please try again later.');
    }

  }

  const serviceOptions = [
    { value: "", label: "Select a service" },
    { value: "financial-management", label: "Financial Management" },
    { value: "statutory-reporting", label: "Statutory Reporting" },
    { value: "audit", label: "Audit Services" },
    { value: "caseware", label: "CaseWare Implementation" },
    { value: "consulting", label: "Financial Consulting" },
  ]

  return (
    <section className="bg-white py-24" id="contact">
      <div className="container px-5 mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">
            {`Get in`} <span className="text-yellow-500">{`Touch`}</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto rounded mt-4"></div>
          <p className="mt-4 text-gray-600">{`Feel free to reach out for any inquiries or collaboration opportunities.`}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    {`Your Name`}
                  </label>
                  <Input id="name" name="name" placeholder="Enter your full name" required className="w-full" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    {`Your Email`}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    {`Service Required`}
                  </label>
                  <Select id="service" name="service" options={serviceOptions} className="text-gray-900" required />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    {`Message`}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Write your message here"
                    required
                    className="min-h-[150px] w-full"
                  />
                </div>
              </div>
              {submitStatus && (
                <div>
                  <p className={`text-sm ${submitStatus.includes('success') ? 'text-green-500' : 'text-red-500'}`}>
                  {submitStatus}
                  </p>
                </div>
              )}

              <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-white">
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </Button>
            </form>
          </div>

          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">{`Contact Information`}</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-yellow-500" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{`Location`}</p>
                    <p className="text-gray-600">{`Winchester Hills – Gauteng, South Africa`}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center">
                    <Phone className="h-6 w-6 text-yellow-500" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{`Phone`}</p>
                    <p className="text-gray-600">{`+27 76 272 0013`}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-yellow-500" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{`Email`}</p>
                    <p className="text-gray-600">{`ayandasizalobuhle@gmail.com`}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}

export default Contact;

