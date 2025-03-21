// import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PricingCard from "@/components/custom/pricing-card";



const PricingSection: React.FC = () => (
  <div className="my-6">
    <Tabs defaultValue="monthly">
        <TabsList className="flex max-w-[480px] mx-auto h-auto rounded-full my-10">
            <TabsTrigger className="w-1/2 data-[state=active]:bg-primary data-[state=active]:text-white" value="monthly">Monthly</TabsTrigger>
            <TabsTrigger className="w-1/2 data-[state=active]:bg-primary data-[state=active]:text-white" value="annually">Annually (Save 40%)</TabsTrigger>
        </TabsList>
        <TabsContent value="monthly">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <PricingCard 
                    type="basic"
                />
                <PricingCard 
                    type="basic"
                />
                <PricingCard 
                    type="custom"
                />
            </div>
        </TabsContent>
        <TabsContent value="annually">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <PricingCard 
                    type="basic"
                />
                <PricingCard 
                    type="basic"
                />
                <PricingCard 
                    type="custom"
                />
            </div>
        </TabsContent>
    </Tabs>

  </div>
);


export default PricingSection;