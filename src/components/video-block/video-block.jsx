import React, { useEffect } from 'react';
import { LeftMenuBar } from './';
import { base } from '../../base/base.js';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions';
import QierPlayer from 'qier-player';
import './video-block.scss';

const VideoBlock = (props) => {
  const dispatch = useDispatch();

  const { active, numberCourse, videoRef } = useSelector((state) => state.serviceStore);
  const { paidTarifs } = useSelector((state) => state.userStore);
  const { courseProgram } = base;

  useEffect(() => {
    dispatch(actions.getAndSetVideoRef(props.match.params.id - 1, paidTarifs));
  }, [numberCourse]);

  const classFlashIn = active ? 'flashIn active' : 'flashIn';

  return (
    <div className="user-page">
      <LeftMenuBar props />
      <div className="block-two">
        <div className={classFlashIn}></div>
        <h4>{courseProgram[numberCourse].title}</h4>
        <div>
          <QierPlayer
            width={740}
            height={420}
            language="en"
            showVideoQuality={true}
            themeColor="#f23300"
            // src480p={video480p}
            // src720p={video720p}
            srcOrigin={videoRef}
          />
        </div>
        <div>
          <h4>Что включает курс:</h4>
          <div className="listGroup">
            {courseProgram[numberCourse].texts.map((item, key) => {
              return (
                <div className="listCourseText" key={item + key}>
                  -{item}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default VideoBlock;
