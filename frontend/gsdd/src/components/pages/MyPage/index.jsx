import React, { useEffect, useState } from 'react';
import * as S from './styles';
import { FcLike } from 'react-icons/fc';
import MypageCard from '../../molecules/MypageCard';
import Navbar from '../../molecules/Navbar';
import Sidebar from '../../molecules/Sidebar';

const MyPage = () => {
  const username = '싸피';

  // 여기서 axios 통신
  return (
    <>
      <Sidebar />
      <S.ArticleCard>
        {username}님! 오늘도 안전길 다니세요
        <FcLike size="2rem" />
      </S.ArticleCard>
      <MypageCard />
    </>
  );
};

export default MyPage;