import React from "react";
import HeaderFooterWrapper from "../header-footer-wrapper";
import { VideoBlock } from "../video-block";
import EmailConfirmBlock from "../email-confirm-block";
import BuyCourseButton from "../buy-course-button";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions";

const UserPage = (props) => {
  const dispatch = useDispatch();

  const { paidTarifs } = useSelector((state) => state.userStore);
  const { user } = useSelector((state) => state.authStore);

  const { emailVerified } = user;

  const VerifiedUser = () => {
    return (
      <>
        {emailVerified ? <VideoBlock {...props} /> : <EmailConfirmBlock />}
        <BuyCourseButton />
      </>
    );
  }; // Возможно отдельеый компонентEE
  return (
    <HeaderFooterWrapper>
      {paidTarifs ? <VideoBlock {...props} /> : <VerifiedUser />}
    </HeaderFooterWrapper>
  );
};
export default UserPage;
