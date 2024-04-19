import Landing from "@/component/Landing/Landing";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Landing/>
    </div>
  );
}
