import React from "react";

export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
      <h2 className="text-3xl font-bold">Contact Me</h2>
      <p className="text-gray-200">
        You can find my full contact details and professional background in my resume below.
      </p>
      <iframe
        src="/KevinPilcherResume.pdf"
        width="100%"
        height="600"
        title="Resume PDF"
        className="border rounded-lg shadow"
      ></iframe>
    </div>
  );
}
