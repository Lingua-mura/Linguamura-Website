// components/custom/pricing-card.tsx
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Check } from 'lucide-react';
import React from 'react';

interface PriceCardProps {
    type: "basic" | "custom";
  }

const PricingCard: React.FC<PriceCardProps> = ({
    type
}) => {
  return (
    <Card className={type === "custom"? "bg-gradient-to-b from-gradient-color-1 to-gradient-color-2" : ""}>
        <CardHeader className='mb-4'>
            <div className='w-20 h-10 inline-flex items-center justify-center rounded-full bg-primary text-white px-4 mb-4'>
                Free
            </div>
            <p className='text-gray-900'>Just trying things out</p>
        </CardHeader>
        <CardContent>
            <p className="text-3xl font-bold text-gray-900 mb-4">
                $19
                <span className="text-sm align-baseline text-gray-600 mt-1">/month</span>
            </p>

            <Button variant={`${type === "custom"? "secondary" : "primary"}`} size="lg" className='mb-4 w-full'>Get Started</Button>

            <div className="h-px bg-gray-200 -mx-6" style={{width: "calc(100% + 3rem)"}}></div>

            <div className="py-10">
                <ul className="text-left space-y-5 text-gray-600">
                    <li className="flex space-x-3 items-center">
                        <span className={`h-6 w-6 flex items-center justify-center rounded-full text-white border-primarybuttonborder border-b-2 ${type === "custom"? "bg-white" : "bg-primary"}`}>
                            <Check 
                                size={15}
                                className={`${type === "custom"? "text-primary" : "text-white"}`}
                             />
                        </span>
                        <span>1GB Storage</span>
                    </li>
                    <li className="flex space-x-3 items-center">
                        <span className={`h-6 w-6 flex items-center justify-center rounded-full text-white border-primarybuttonborder border-b-2 ${type === "custom"? "bg-white" : "bg-primary"}`}>
                            <Check 
                                size={15}
                                className={`${type === "custom"? "text-primary" : "text-white"}`}
                             />
                        </span>
                        <span>Unlimited Support</span>
                    </li>
                    <li className="flex space-x-3 items-center">
                        <span className={`h-6 w-6 flex items-center justify-center rounded-full text-white border-primarybuttonborder border-b-2 ${type === "custom"? "bg-white" : "bg-primary"}`}>
                            <Check 
                                size={15}
                                className={`${type === "custom"? "text-primary" : "text-white"}`}
                             />
                        </span>
                        <span>Access to Beta Features</span>
                    </li>
                </ul>
            </div>
        </CardContent>
    </Card>
  );
};

export default PricingCard;
