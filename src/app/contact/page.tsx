import Image from "next/image";
import { FaPhoneAlt, FaMapMarkerAlt, FaHeadset, FaShippingFast } from "react-icons/fa";
import { Card } from '@/components/ui/card';
import {Button} from "@/components/ui/button";
export default function Contact() {
  return (
    <section>
      <div className="bg-white max-w-[1177px] mx-auto py-16 px-4 sm:px-8">
        <div className="container mx-auto max-w-[1170px] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex space-x-4 justify-center sm:justify-start">
              <div className="w-[20px] h-[20px] sm:w-[25px] sm:h-[25px] bg-[#2b8e72] rounded-full"></div>
              <div className="w-[20px] h-[20px] sm:w-[25px] sm:h-[25px] bg-[#4427ff] rounded-full"></div>
              <div className="w-[20px] h-[20px] sm:w-[25px] sm:h-[25px] bg-[#fc3f32] rounded-full"></div>
            </div>
          </div>

          <div>
            <h2 className="text-[28px] sm:text-[36px] font-bold text-[#151875] font-josefin mb-6">
              Connect With Us
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 text-[#8A8FB9] text-[14px] sm:text-[16px]">
              {/* Left Section: Contact Info */}
              <div className="flex flex-col space-y-4 w-full">
                <div className="flex items-center space-x-4">
                  <FaPhoneAlt className="text-[#3a48ff] w-[30px] h-[30px] sm:w-[40px] sm:h-[40px]" />
                  <div className="font-semibold">
                    <p>Tel: +92345678910</p>
                    <p>E-Mail: abc@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <FaMapMarkerAlt className="text-[#c12b37] w-[30px] h-[30px] sm:w-[40px] sm:h-[40px]" />
                  <div className="font-semibold">
                    <p>Pakistan</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col space-y-4 w-full">
                <div className="flex items-center space-x-4">
                  <FaHeadset className="text-[#45c6a4] w-[30px] h-[30px] sm:w-[40px] sm:h-[40px]" />
                  <div className="font-semibold">
                    <p>24/7 Available</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <FaShippingFast className="text-[#fa893d] w-[30px] h-[30px] sm:w-[40px] sm:h-[40px]" />
                  <div className="font-semibold">
                    <p>Enjoy free standard shipping on every order.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-[1170px] mx-auto">
          <div className="order-2 lg:order-1">
            <h2 className="text-[28px] sm:text-[36px] font-bold text-[#151875]  mb-6">
              Get In Touch
            </h2>
            <p className="text-[#8A8FB9] font-josefin text-[14px] sm:text-[16px] mb-8">
              We would love to hear from you! Whether you have a question, suggestion, or just want to say hello, feel free to reach out to us. Our team is here to assist you and will get back to you as soon as possible. Don't hesitate to contact us through the provided details, and let's start the conversation today!
            </p>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="border rounded text-[#8A8FB9] text-[14px] sm:text-[16px] font-josefin border-gray-300 p-3 w-full"
                />
                <input
                  type="email"
                  placeholder="Your E-mail"
                  className="border text-[#8A8FB9] text-[14px] sm:text-[16px] font-josefin border-gray-300 p-3 w-full"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="border text-[#8A8FB9] text-[14px] sm:text-[16px] font-josefin border-gray-300 p-3 w-full"
              />
              <textarea
                placeholder="Type Your Message"
                rows={4}
                className="border text-[#8A8FB9] text-[14px] sm:text-[16px] font-josefin border-gray-300 p-3 w-full"
              ></textarea>
              <div className="flex sm:justify-start justify-center">
                <Button className="bg-blue-800 hover:bg-blue-600 w-[120px] h-[40px] text-[12px] sm:w-[150px] sm:h-[44px] sm:text-[14px] text-white px-6 py-2">
                  Send Mail
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
