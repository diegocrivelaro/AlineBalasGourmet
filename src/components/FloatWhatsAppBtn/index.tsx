import { memo } from "react";
import { BsWhatsapp } from "react-icons/bs";

import Link from "next/link";

import styles from "./styles.module.css";

function FloatWhatsAppBtn() {
  const whatsappPath = `https://api.whatsapp.com/send/?phone=16993070022&text=Olá! Acabei de dar uma olhada na sua página e surgiu uma dúvida aqui! Você pode me ajudar?&type=phone_number&app_absent=0`;

  return (
    <Link href={whatsappPath} target="_blank" prefetch={false} className={styles.floatWhatsAppBtnLink}>
      <BsWhatsapp className={styles.floatWhatsAppBtnIcon} />
    </Link>
  );
}

export default memo(FloatWhatsAppBtn);
