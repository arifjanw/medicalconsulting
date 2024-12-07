//QuestionareViewer.jsx
import React from "react";
import { useParams } from "react-router-dom";
import html2pdf from "html2pdf.js";
const QuestionnaireViewer = (  ) => {
    const { id } = useParams();  // Get the id from the URL
  console.log('Questionnaire ID from URL:', id);  // Log the id to ensure it's correct

  const responseData = JSON.parse(localStorage.getItem(id));
  const triggerInput1 = localStorage.getItem(`triggerInput1`); 
  console.log('Retrieved data from localStorage:', responseData);
  if (!responseData) {
    return <p className="text-red-500">No data found or the link has expired.</p>;
  }
  const handleOnClick = () => {
    const element = document.querySelector("#invoice");
    if (!element) {
      console.error('Element with ID "invoice" not found');
      return;
    }
  
    // Hide the button before generating the PDF
    const downloadButton = document.querySelector("button");
    if (downloadButton) {
      downloadButton.style.display = "none";
    }
  
    // Set options for the PDF generation
    const options = {
      margin: 1,
      filename: "questionnaire.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
  
    // Generate the PDF and then show the button again
    html2pdf()
      .set(options)
      .from(element)
      .save()
      .then(() => {
        if (downloadButton) {
          downloadButton.style.display = "block";
        }
      })
      .catch((error) => {
        console.error("Error generating PDF:", error);
        if (downloadButton) {
          downloadButton.style.display = "block";
        }
      });
  };
  console.log('triggerInput1 from localStorage:', triggerInput1);
  
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center ">
    <div id="invoice" className="bg-white p-12 rounded-lg shadow-lg w-full sm:w-96 ">
      <button
        onClick={handleOnClick}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300 mb-6 w-full"
      >
        Download PDF
      </button>
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">User Questionnaire Response</h1>
      <ul className="space-y-4">
        <li className="text-md text-gray-700 list-disc pl-6">
          <strong className="font-semibold">Full Name:</strong> {responseData.fullName}
        </li>
        <li className="text-md text-gray-700 list-disc pl-6">
          <strong className="font-semibold">What gender were you assigned at birth?</strong> {responseData.gender}
          <span className="font-semibold"><br /> Please provide additional info: </span> {responseData.additionalInfo}
          </li>
        <li className="text-md text-gray-700 list-disc pl-6">
          <strong className="font-semibold">Are you currently taking iron-containing vitamins or prenatal supplements?</strong> {responseData.iron}
          <br /><span className="font-semibold">   Please specify the supplements you're taking:</span> {responseData.supplementInput}
        </li>
        <li className="text-md text-gray-700 list-disc pl-6">
          <strong className="font-semibold">{responseData.Q1}</strong> {responseData.A1} <br /><span className="font-semibold">Answer:</span> {responseData.radioans}
        </li>
        <li className="text-md text-gray-700 list-disc pl-6">
          <strong className="font-semibold">{responseData.Q2}</strong> {responseData.A2}
        </li>
        <li className="text-md text-gray-700 list-disc pl-6">
          <strong className="font-semibold">{responseData.Q3}</strong> {responseData.A3}
        </li>
      </ul>
    </div>
  </div>
  
  );
};

export default QuestionnaireViewer;
