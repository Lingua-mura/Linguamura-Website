import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ServiceSectionProps {
  serviceTitle: string;
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  direction: 'left' | 'right';
  redirectLink: string;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  serviceTitle,
  title,
  description,
  buttonText,
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  direction,
  redirectLink,
}) => (
  <div className="my-6">
    <div className={`flex items-center space-x-6 mb-0 md:mb-5 ${direction === "left"? "space-x-0" : "order-first space-x-6"}`}>
      <div className={`flex-grow flex items-center ${direction === "left"? "order-last" : "order-first"}`}>
        <div className={`w-full h-px bg-primary ${direction === "left"? "order-first" : "order-last"}`}></div>

        <div className={`relative flex justify-center items-center ${direction === "left"? "order-last" : "order-first"}`}>
          <div className="w-4 h-4 md:w-8 md:h-8 rounded-full bg-primary-foreground flex justify-center items-center">
            <div className="w-2 h-2 md:w-4 md:h-4 rounded-full bg-primary"></div>
          </div>
        </div>
      </div>
      <div className={`${direction === "left"? "order-first !me-6" : "order-last"}`}>
        <h4 className="text-gray-900 font-semibold text-lg md:text-3xl leading-9">
          {serviceTitle}
        </h4>
      </div>
    </div>

    <div className={`flex flex-col items-center md:justify-center md:items-start md:flex-row px-4 py-8 md:p-8 ${direction === "left"? "space-x-0" : "order-first md:space-x-10"}`}>
      <div className={`mb-8 md:mb-0 md:flex-shrink-0 w-52 md:w-80 h-[310px] md:h-[446px] rounded-xl overflow-hidden ${direction === "left"? "order-first md:order-last" : "order-first"}`}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full cursor-pointer object-cover hover:scale-105 transform transition-transform duration-300"
          width={imageWidth}
          height={imageHeight}
        />
      </div>

      <div className= {`flex flex-col text-center md:text-left md:self-end justify-center space-y-5 md:space-y-8 md:w-2/4 ${direction === "left"? "md:!mr-8 order-last md:order-first" : "order-last"}`}>
        <h2 className="text-lg md:text-2xl font-bold text-gray-900">{title}</h2>

        <p className="text-sm md:text-base">{description}</p>

        <Link
          href={redirectLink}
          className={`${buttonVariants({
            variant: "primary",
            size: "lg",
          })} w-full md:w-3/4 text-lg`}
        >
          {buttonText} <ArrowRight size={30} />
        </Link>
      </div>
    </div>
  </div>
);


export default ServiceSection;