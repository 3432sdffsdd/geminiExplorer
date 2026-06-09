"use client";

interface MediumImagePopupProps {
  imageSrc: string;
  alt: string;
  children: React.ReactNode;
}

export default function MediumImagePopup({ imageSrc, alt, children }: MediumImagePopupProps) {
  return (
    <div className="inline-block overflow-hidden rounded-2xl transition duration-500 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-2xl">
      {children}
    </div>
  );
}
