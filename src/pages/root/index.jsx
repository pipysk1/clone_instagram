import SiderBar from "@/layout/sidebar";
import styles from "./styles.module.css";

export default function RootPage() {
  return (
    <div className={`${styles.layout}`}>
      <SiderBar />
      <div>MainLayout / Content</div>
    </div>
  );
}
