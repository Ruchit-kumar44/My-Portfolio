import {Skills } from "@/config/Skills";
import SectionHeading from "../common/SectioHeading";
import SkillBox from "../common/SkillBox";
import Bun from "../technologies/Bun";

export default function SkillsSection() {
    const {frontend, backend} = Skills
  return (
    <div className="pt-10">
      <SectionHeading heading="My Stack" className="mb-2" />
      <div className="flex justify-between">
        <h2 className="text-[20px] font-black">FRONTEND</h2>
        <div className=" w-85 flex flex-wrap gap-x-2 gap-y-1">
          {frontend.map((skill) => (
            <span className="">
                <SkillBox key={skill.name} name={skill.name} href={skill.href}>
                 <Bun />
                </SkillBox>
            </span>
          ))}
        </div>
      </div>
      <div className="pt-5 flex justify-between">
        <h2 className="text-[20px] font-black">BACKEND</h2>
        <div className=" w-85 flex flex-wrap gap-x-2 gap-y-1">
          {backend.map((skill) => (
            <span className="">
                <SkillBox key={skill.name} name={skill.name} href={skill.href}>
                 <Bun />
                </SkillBox>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
