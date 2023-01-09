import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className=" bg-opacity-50 bg-[url('../images/andrea-inicio.jpg')] h-[calc(75vh+35px)]  bg-[length:100%_100%] ">
    </div>
  );
}
