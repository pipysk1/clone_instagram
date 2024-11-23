import {
  CreateLogo,
  DiscoverLogo,
  HomeLogo,
  InstagramLogo,
  MessageLogo,
  NotificationLogo,
  ReelsLogo,
  SearchLogo,
} from "@/components/image";
import styles from "./styles.module.css";
import { useState } from "react";

export default function SiderBar() {
  const [activeIndex, setActiveIndex] = useState(0);

  const menuItems = [
    { icon: <HomeLogo />, text: "Trang chủ" },
    { icon: <SearchLogo />, text: "Tìm kiếm" },
    { icon: <DiscoverLogo />, text: "Khám phá" },
    { icon: <ReelsLogo />, text: "Reels" },
    { icon: <MessageLogo />, text: "Tin nhắn" },
    { icon: <NotificationLogo />, text: "Thông báo" },
    { icon: <CreateLogo />, text: "Tạo" },
    { icon: null, text: "Trang cá nhân" },
  ];

  return (
    <div className={styles.sidebar}>
      <div className="pt-[25px] px-[12px] pb-[16px] mb-[19px] cursor-pointer">
        <InstagramLogo />
      </div>
      <div>
        <ul>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`flex my-[4px] p-3 cursor-pointer rounded-md transition-colors ${
                activeIndex === index ? "font-bold " : "hover:bg-gray-100"
              }`}
              onClick={() => setActiveIndex(index)}
            >
              {item.icon}
              <p className="pl-4 transition-all">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
