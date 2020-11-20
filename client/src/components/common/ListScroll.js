import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

const List = ({ vertical, scroll, content, component: Component }) => {
  const scrollRef = useRef(null);
  const [hasScroll, setHasScroll] = useState();
  // const [scrollHeight, setScrollHeight] = useState();
  const [leftLocation, setLeftLocation] = useState(false);

  useEffect(
    () => {
      resizeWindow();
      window.addEventListener('resize', resizeWindow);
      return () => window.removeEventListener('resize', resizeWindow);
    },
    [hasScroll],
  );

  const resizeWindow = () => {
    const hasHorizontalScrollbar = scrollRef.current.scrollWidth > scrollRef.current.clientWidth;
    setHasScroll(hasHorizontalScrollbar);
  };

  const onScroll = () => {
    scrollRef.current.scrollLeft === 0 ? setLeftLocation(false) : setLeftLocation(true);
  };
  const onClick = e => {
    const left = leftLocation ? 0 : scrollRef.current.scrollWidth;
    scrollRef.current.scrollTo({
      top: window.scrollTop,
      left: left,
      behavior: 'smooth',
    });
    setLeftLocation(!leftLocation);
  };

  return (
    <SkillListBlock ref={scrollRef} vertical={vertical} scroll={scroll} onScroll={onScroll}>
      {hasScroll &&
        <MoveButton left={leftLocation} onClick={onClick}>
          {leftLocation ? <RiArrowLeftSLine /> : <RiArrowRightSLine />}
        </MoveButton>}
      {content && content.map(item => <Component key={item.id} item={item} />)}
    </SkillListBlock>
  );
};

const MoveButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 50%;
  background: ${palette.white};
  cursor: pointer;
  color: ${palette.gray};
  align-self: center;
  outline: 0;
  border: 0;
  position: absolute;
  font-size: 1.5rem;
  right: -0.1rem;
  ${props =>
    props.left &&
    css`
      right: unset;
      left: -0.1rem;
    `};
  @media only screen and (max-width: 1200px) {
    display: none;
  }
`;

const SkillListBlock = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  ${props =>
    props.vertical &&
    css`
      flex-direction: column;
    `} overflow-x: auto;
  padding-bottom: 1rem;
  &::-webkit-scrollbar {
    visibility: hidden;
  }
  @media only screen and (max-width: 1200px) {
    &::-webkit-scrollbar {
      width: 4px;
      height: 4px;
      border-radius: 6px;
      background: rgba(255, 255, 255, 0.2);
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.3);
      border-radius: 6px;
    }
  }
  ${props =>
    props.scroll &&
    css`
    overflow-x: auto;
    flex-wrap: nowrap;
  `};
`;

export default List;
