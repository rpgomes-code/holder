import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InterestCalculatorWrapper from "@/components/stonks/tools/calculators/interest/wrapper";
import GoalCalculatorWrapper from "@/components/stonks/tools/calculators/goal/wrapper";

export default function CalculatorsPage() {
  return (
    <>
      <header className="flex h-16 shrink-0 items-center gap-2">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="/stonks">Stonks</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="/stonks/tools">Tools</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Calculators</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <div className="flex justify-center p-4">
        <Tabs
          defaultValue="interest"
          className="w-full flex flex-col justify-center"
        >
          <TabsList className="max-w-fit mx-auto mb-5">
            <TabsTrigger value="interest">Interest Calculator</TabsTrigger>
            <TabsTrigger value="goal">Goal Calculator</TabsTrigger>
            <TabsTrigger value="roic">ROIC Calculator</TabsTrigger>
            <TabsTrigger value="fire">FIRE Calculator</TabsTrigger>
          </TabsList>
          <TabsContent
            value="interest"
            className="px-4 flex flex-col flex-1 gap-8 mt-0"
          >
            <InterestCalculatorWrapper />
          </TabsContent>
          <TabsContent
            value="goal"
            className="px-4 flex flex-col flex-1 gap-8 mt-0"
          >
            <GoalCalculatorWrapper />
          </TabsContent>
          <TabsContent value="roic" className="px-4">
            ROIC Calculator
          </TabsContent>
          <TabsContent value="fire" className="px-4">
            FIRE Calculator
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
