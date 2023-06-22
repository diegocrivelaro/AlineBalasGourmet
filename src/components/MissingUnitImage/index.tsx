import { memo } from "react";
import { BiCameraOff } from "react-icons/bi";

import styles from "./styles.module.css";

function MissingUnitImage() {
  return (
    <div className={styles.missingUnitImageWraper}>
      <BiCameraOff className={styles.missingUnitImageIcon} />
    </div>
  );
}

export default memo(MissingUnitImage);
