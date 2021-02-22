import React, { useEffect, useState } from "react";
import { Download } from "../../svg/svg";
import "./free-materials.scss";

const FreeMaterials = () => {
  const [modalVideo1, setModalVideo1] = useState(false);
  const [modalVideo2, setModalVideo2] = useState(false);

  useEffect(() => {
    console.log(modalVideo1, modalVideo2);
  });

  const modalClass1 = modalVideo1
    ? "video-block video-block-width video-block-modal"
    : "video-block video-block-width";
  const modalClass2 = modalVideo2
    ? "video-block-two video-block-width video-block-modal"
    : "video-block-two video-block-width";

  return (
    <div className="free-materials">
      <div className="left-block">
        <div className="bonus">
          <div>Бонус</div>
        </div>

        <h2>Бесплатные материалы</h2>
        <div className="text">
          В этом разделе собраны материалы и статьи, которые будут вам полезны и
          интересны. Изучите их самостоятельно, в дополнение к прохождению
          курса, и результат точно не заставит себя ждать!
        </div>
        <div className="materials-button">
          <div>Скачать материалы</div>
          <div className="icon">
            <Download />
          </div>
        </div>
      </div>

      <div className={modalClass1}>
        <div
          className="background"
          onClick={() => setModalVideo1(!modalVideo1)}
        />
        <iframe
          className={modalVideo1 ? "displayOn" : ""}
          src="https://www.youtube.com/embed/xFa2_PVMeDQ"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      <div className={modalClass2}>
        <div
          className="background"
          onClick={() => setModalVideo2(!modalVideo2)}
        />
        <iframe
        className={modalVideo2 ? "displayOn" : ""}
          src="https://www.youtube.com/embed/xFa2_PVMeDQ"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

    </div>
  );
};

export default FreeMaterials;
