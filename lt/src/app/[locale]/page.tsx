'use client'
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const t = useTranslations("HomePage");
  const route = useRouter();
  // const handleClick=()=>{
  //   console.log("click");
  //   route.push("/en")
    
  // }
  const changLanguage = (e:React.ChangeEvent<HTMLSelectElement>)=>{
    const language = e.target.value
    console.log(language);
    route.push(`/${language}`);
  }
  return <>
  <select onChange={changLanguage} name="" id="">
    <option value="vi">Tieng viet</option>
    <option value="en">Tieng anh</option>
  </select>
  <h1>{t("title")}</h1>
  <h1>{t("description")}</h1>
  </>
}
