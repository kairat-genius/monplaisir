export const dynamic = 'force-dynamic';
import { Banner } from "@/widgets/Banner";
import { Employees } from "@/widgets/Employees";
import { Interior } from "@/widgets/Interior";
import { Map } from "@/widgets/Map";
import { PriceList } from "@/widgets/PriceList";
import { PromotionsCertificates } from "@/widgets/PromotionsCertificates";
import type { Metadata } from "next";
import {getStaff} from "@/api/staff/getStaff";
import {getCategory} from "@/api/category/getCategory";


export const metadata: Metadata = {
  title: "Mon Plaisir",
  description: "web site",
};

export default async function Home() {
  const category = await getCategory();
  const staff = await getStaff()
  
  return (
    <>
    <Banner/>
    <PromotionsCertificates/>
    {category.length > 0 && <PriceList category={category} />}
    <Interior/>
    {staff.length > 0 && <Employees staff={staff}/>}
    <Map/>
    </>
  );
}
