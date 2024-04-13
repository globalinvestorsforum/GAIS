import { useState } from "react";

export default function MyForm() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  const baseUrl = "http://localhost:8000";

 

  const sendEmail = async () => {
    let dataSend = {
      email: email,
      subject: subject,
      message: message,
      name: name,
    };
    
    const res = await fetch(`${baseUrl}/sendEmail`, {
      method: "POST",
      body: JSON.stringify(dataSend),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res);
        if (res.status > 199 && res.status < 300) {
          alert("Send Successfully !");
        }
      });
  };

  return (
    <div className="flex w-full mx-5 items-center justify-center  ">
      <div className=" py-10 px-6  ">
        <div className="mt-8 space-y-4  bg-gray-900 w-full shadow rounded p-8 sm:p-12 hover:border border-neutral-700 delay-150">
          <div className="bg-transparent">
            <label htmlFor="name" className=" text-gray-300 font-medium bg-transparent ">
              Name
            </label>
            <input
              id="name"
              type="name"
              placeholder="Full name"
              onChange={(e) => setName(e.target.value)}
              className="w-full  leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"
            />
          </div>
          <div className="bg-transparent">
            <label htmlFor="email" className=" text-gray-300 font-medium bg-transparent ">
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full  leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"
            />
          </div>
          <div className="bg-transparent">
            <label htmlFor="subject" className=" text-gray-300 bg-transparent font-medium">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              placeholder="Enter the subject here..."
              onChange={(e) => setSubject(e.target.value)}
              className="w-full  leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"
            />
          </div>
          <div className="bg-transparent">
            <label htmlFor="message" className=" text-gray-300 bg-transparent font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows="3"
              placeholder="Enter your message here..."
              onChange={(e) => setMessage(e.target.value)}
              className="w-full  leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"
            ></textarea>
          </div>
          <div className="space-y-4 ">
            <button
              className="w-full bg-blue-400 text-white py-2 px-4 rounded-md hover:bg-blue-500"
              onClick={() => sendEmail()}
            >
              Send Email
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
