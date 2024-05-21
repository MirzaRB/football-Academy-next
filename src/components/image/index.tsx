import { Box, Stack } from "@mui/material";
import Image from "next/image";

export default function Img({
  src,
  alt,
  objectFit,
}: {
  src: string;
  alt: string;
  objectFit?: string;
}) {
  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <Image
        alt={alt}
        src={src}
        layout="responsive"
        width={1000}
        height={1000}
      />
    </div>
  );
}
