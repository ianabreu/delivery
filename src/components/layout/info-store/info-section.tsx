import { ReactNode } from "react";

interface InfoSectionProps {
  title: string;
  children: ReactNode;
}

const InfoSection = ({ title, children }: InfoSectionProps) => {
  return (
    <div className="flex flex-col gap-2 mb-2">
      <h6 className="text-xs font-bold">{title}</h6>
      {children}
    </div>
  );
};

export default InfoSection;
