import { AiFillCheckCircle } from "react-icons/ai";

export default function Feature({ feature }) {
  console.log(feature);
  return (
    <div className="flex items-center  gap-4">
      <AiFillCheckCircle></AiFillCheckCircle>
      <p>{feature}</p>
    </div>
  );
}
