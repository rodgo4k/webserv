"use client";
import "./loading.css";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo_icon from "../assets/logo_icon.png";
import logo_text from "../assets//logo_text.png";

export default function LoadingOverlay() {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => setLoading(false), 1000);

    return () => clearTimeout(timeout);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="loading_container">
      <div className="icon_box">
        <Image src={logo_icon} alt="logo" className="icon_loading" />
      </div>
      <div className="text_box">
        <Image src={logo_text} alt="WebServ" className="text_loading" />
      </div>
    </div>
  );
}
