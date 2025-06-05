"use client";
import "./loading.css";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import bg_img from "../assets/bg.png";

export default function LoadingOverlay() {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => setLoading(false), 2000);

    return () => clearTimeout(timeout);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="loading_container">
      <span className="loading_text">Carregando página...</span>
      <Image src={bg_img} alt="background" className="bg_img" />
    </div>
  );
}
