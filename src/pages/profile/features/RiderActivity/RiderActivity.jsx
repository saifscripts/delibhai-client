import { AiFillStar } from "react-icons/ai";
import Achievement from "./Achievement";

export default function RiderActivity() {
  return (
    <div className="border-light flex items-center justify-center gap-8 border-b py-3">
      <Achievement title="21K রিভিও" stat="4.3" icon={<AiFillStar />} />
      <Achievement title="রাইড শেয়ার" stat="30K" />
      <Achievement title="রিসিভড কল" stat="35K" />
    </div>
  );
}
