/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useRef } from "react";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import HousingSearch from "@/app/housing/_components/housing-search";

const ReceiptPage = () => {
  const router = useRouter();
  const receiptRef = useRef(null);

  const handleBackClick = () => {
    router.back();
  };

  const handleDownload = async () => {
    if (!receiptRef.current) return;
    
    try {
      // Show loading state
      const buttonElement = document.getElementById('download-button') as HTMLButtonElement;
      const originalText = buttonElement.innerText;
      buttonElement.innerText = 'Generating PDF...';
      buttonElement.disabled = true;
      
      // Create canvas from the receipt element
      const canvas = await html2canvas(receiptRef.current, {
        scale: 2, // Higher scale for better quality
        useCORS: true,
        logging: false,
        backgroundColor: '#FFFFFF'
      });
      
      // Calculate PDF dimensions based on the receipt's aspect ratio
      const imgData = canvas.toDataURL('image/png');
      const imgWidth = 210; // A4 width in mm (210mm × 297mm)
      const pageHeight = ((canvas.height * imgWidth) / canvas.width) * 0.9; 
      
      // Create PDF document
      const pdf = new jsPDF('p', 'mm', 'a4');
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, pageHeight);
      
      // Save the PDF
      pdf.save('linguamura_receipt.pdf');
      
      // Reset button state
      buttonElement.innerText = originalText;
      buttonElement.disabled = false;
      
      console.log("Receipt downloaded as PDF");
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Failed to generate PDF. Please try again.");
      
      // Reset button on error
      const buttonElement = document.getElementById('download-button');
      if (buttonElement) {
        buttonElement.innerText = 'Download Receipt';
        buttonElement.disabled = false;
      }
    }
  };

  return (
    <>
      <HousingSearch
        name="Hotels" 
        tagline="Find the Hotels that appeal to you the most" 
        searchRoute="/housing/hotels/search" 
        placeholder="Where are you going?"
      />

      <div className="container mx-auto px-4 py-8 max-w-md mb-20">
        {/* Back Button */}
        <button
          onClick={handleBackClick}
          className="flex items-center text-[#4E4B66] mb-20"
        >
          <Icon icon="bytesize:arrow-left" width={40} height={40} />
        </button>

        {/* Receipt Card */}
        <div className="flex flex-col justify-center items-center">
          <div 
            ref={receiptRef} 
            className="border-t border-b border-l border-r border-[#00BBBB] bg-[#FCFCFC] rounded-[12px] p-8 max-w-[530px]"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center -ml-1">
                <img src="/linguamura_logo.svg" alt="logo" width={34} height={34} />
                <div className="font-bold text-lg text-[#14142A]">linguamura</div>
              </div>
              <div className="text-gray-800 font-bold text-[16px]">
                Transaction Receipt
              </div>
            </div>

            {/* Amount */}
            <div className="text-center mb-2">
              <div className="text-[#00BBBB] text-2xl font-bold">
                NGN 37,000
              </div>
              <div className="font-bold mb-1">SUCCESS</div>
              <div className="text-gray-600 text-sm">May 8 2024, 16:35</div>
            </div>

            {/* Divider with dots */}
            <div className="relative my-6 pb-4">
              <div className="border-t border-[#00BBBB]"></div>
              <div className="absolute mt-[3px] -top-1.5 left-0 w-2 h-2 rounded-full bg-[#00BBBB]"></div>
              <div className="absolute mt-[3px] -top-1.5 right-0 w-2 h-2 rounded-full bg-[#00BBBB]"></div>
            </div>

            {/* Transaction Details */}
            <div className="space-y-[30px]">
              <div className="flex justify-between">
                <div className="text-[#A0A3BD]">Transaction Type</div>
                <div className="font-medium">Muracoin</div>
              </div>

              <div className="flex justify-between">
                <div className="text-[#A0A3BD]">Recipient Details</div>
                <div className="font-medium">Linguamura</div>
              </div>

              <div className="flex justify-between">
                <div className="text-[#A0A3BD]">Sender Details</div>
                <div className="font-medium">Prince Obeten</div>
              </div>

              <div className="flex justify-between">
                <div className="text-[#A0A3BD]">Transaction Reference</div>
                <div className="font-medium">123456785623</div>
              </div>

              <div className="flex justify-between">
                <div className="text-[#A0A3BD]">SessionID</div>
                <div className="font-medium text-sm">
                  123456785623123456785623
                </div>
              </div>

              <div className="flex flex-col justify-center pt-4 items-center">
                <div className="text-[#A0A3BD]">Support</div>
                <div className="font-bold text-[14px] text-[#00BBBB]">
                  customerservices@linguamura
                </div>
              </div>
            </div>

            {/* Bottom Divider with dots */}
            <div className="relative my-2">
              <div className="border-t border-[#00BBBB]"></div>
              <div className="absolute mt-[3px] -top-1.5 left-0 w-2 h-2 rounded-full bg-[#00BBBB]"></div>
              <div className="absolute mt-[3px] -top-1.5 right-0 w-2 h-2 rounded-full bg-[#00BBBB]"></div>
            </div>

            {/* Footer */}
            <div className="text-center font-medium text-[#6E7191] text-[12px]">
              Enjoy a reliable & stable network service on our payment service
            </div>
          </div>
          
          {/* Download Button */}
          <div className="mt-6">
            <button
              id="download-button"
              onClick={handleDownload}
              className="h-[66px] w-[430px] flex items-center justify-center text-white font-bold text-[20px] rounded-full bg-gradient-to-b from-[#04E2E2] to-[#00BBBB] shadow-[inset_0px_-4px_0.3px_#007979,inset_0px_0px_0.3px_#1AF0F0] hover:opacity-90 transition-all active:translate-y-0.5 active:shadow-[inset_0px_0px_0.3px_#007979] no-underline"
            >
              Download Receipt
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReceiptPage;