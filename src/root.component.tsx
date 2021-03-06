import React, { useState } from "react";
import openmrsRootDecorator from "@openmrs/react-root-decorator";
import Popup from "./popup/popup.component";
import styles from "./implementer-tools.styles.css";

function Root(props: RootProps) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [hasAlert, setHasAlert] = useState(false);

  function togglePopup() {
    setIsPopupOpen(!isPopupOpen);
  }

  return (
    <>
      <button
        tabIndex={0}
        onClick={togglePopup}
        className={`${styles.popupTriggerButton} ${
          hasAlert ? styles.triggerButtonAlert : ""
        }`}
      />
      {isPopupOpen && <Popup close={togglePopup} setHasAlert={setHasAlert} />}
    </>
  );
}

export default openmrsRootDecorator({
  featureName: "Implementer Tools",
  moduleName: "@openmrs/esm-implementer-tools-app",
})(Root);

type RootProps = {};
