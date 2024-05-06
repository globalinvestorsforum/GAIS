import { useState, useEffect, useRef } from "react";
import { industries } from "../../constants";
import emailjs from "@emailjs/browser";

export default function MyForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [job, setJob] = useState("");
  const [company, setCompany] = useState("");
  const [city, setCity] = useState("");
  const [industry, setIndustry] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!name.trim()) {
      errors.name = "Name is required";
    }
    if (!email.trim()) {
      errors.email = "Email is required";
    }
    if (!job.trim()) {
      errors.job = "Job title is required";
    }
    if (!company.trim()) {
      errors.company = "Company name is required";
    }
    if (!city.trim()) {
      errors.city = "City name is required";
    }
    if (!industry) {
      errors.industry = "Industry is required";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (!isValid) return;
    setIsSubmitting(true);

    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    const templateParams = {
      name: name,
      email: email,
      job: job,
      company: company,
      city: city,
      industry: industry,
    };

    try {
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );
      console.log("Email sent successfully!", response);
      alert("Email sent successfully");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Email not sent successfully");
    } finally {
      setName("");
      setEmail("");
      setJob("");
      setCompany("");
      setCity("");
      setIndustry("");
      setIsSubmitting(false);
      setCaptchaKey(Date.now());
    }
  };

  return (
    <div className="flex w-full mx-5 items-center justify-center  ">
      <div className=" py-8 md:px-6  ">
        <div className="mt-8 space-y-4   w-full shadow rounded  p-8 sm:p-12 hover:border border-neutral-700 delay-100">
          <div className="bg-transparent">
            <label
              htmlFor="name"
              className=" text-white font-medium bg-transparent "
            >
              Name
            </label>
            <input
              value={name}
              id="name"
              type="name"
              placeholder="Full name"
              onChange={(e) => setName(e.target.value)}
              className="w-full  leading-none text-black p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-neutral-50 rounded"
            />
            {errors.name && (
              <div className="text-black px-2">{errors.name}</div>
            )}
          </div>
          <div className="bg-transparent">
            <label
              htmlFor="email"
              className=" text-white font-medium bg-transparent "
            >
              Email address
            </label>
            <input
              value={email}
              id="email"
              type="email"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full  leading-none text-black p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-neutral-50 rounded"
            />
            {errors.email && (
              <div className="text-black px-2">{errors.email}</div>
            )}
          </div>
          <div className="bg-transparent">
            <label
              htmlFor="job"
              className=" text-white bg-transparent font-medium"
            >
              Job Title
            </label>
            <input
              value={job}
              id="job"
              type="text"
              placeholder="Enter the Job title here..."
              onChange={(e) => setJob(e.target.value)}
              className="w-full  leading-none text-black p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-neutral-50 rounded"
            />
            {errors.job && <div className="text-black px-2">{errors.job}</div>}
          </div>
          <div className="bg-transparent">
            <label
              htmlFor="company"
              className=" text-white bg-transparent font-medium"
            >
              Company
            </label>
            <input
              value={company}
              id="company"
              type="text"
              placeholder="Enter your company name .."
              onChange={(e) => setCompany(e.target.value)}
              className="w-full  leading-none text-black  p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-neutral-50 rounded"
            />
            {errors.company && (
              <div className="text-black px-2">{errors.company}</div>
            )}
          </div>

          <div className="bg-transparent">
            <label
              htmlFor="city"
              className=" text-white bg-transparent font-medium"
            >
              City
            </label>
            <input
              value={city}
              id="city"
              type="text"
              placeholder="Enter your city name .."
              onChange={(e) => setCity(e.target.value)}
              className="w-full  leading-none text-black p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-neutral-50 rounded"
            />
            {errors.city && (
              <div className="text-black px-2">{errors.city}</div>
            )}
          </div>
          <div className="bg-transparent">
            <label
              htmlFor="industry"
              className="text-white bg-transparent font-medium"
            >
              Industry
            </label>
            <select
              id="industry"
              onChange={(e) => setIndustry(e.target.value)}
              className="w-full leading-none text-black p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-neutral-50 rounded"
            >
              <option selected disabled>Select your Industry</option>
              {industries.map((industry, index) => (
                <option value={industry.value}>{industry.name}</option>
              ))}
            </select>
            {errors.industry && (
              <div className="text-black px-2">{errors.industry}</div>
            )}
          </div>
          <div className="space-y-4 ">
            <button
              disabled={isSubmitting}
              type="submit"
              className="w-full bg-blue-400 text-white py-2 px-4 rounded-md hover:bg-blue-500 "
              onClick={(e) => sendEmail(e)}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
