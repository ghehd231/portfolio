import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';
import Button from './Button';
import List from './List';
const Section = ({ title, categories, sub, vertical, component: Component, content }) => {
  return (
    // <SectionBlock>
    //   <SectionTitleBox>
    //     <Title>
    //       {title}
    //     </Title>
    //     {categories &&
    //       <Categories>
    //         {categories.map(category => <Category key={category.id} category={category} />)}
    //       </Categories>}
    //   </SectionTitleBox>
    //   <Component />
    // </SectionBlock>
    <SectionWrap>
      <SectionBlock sub={sub}>
        <SectionTitleBox sub={sub}>
          <Title sub={sub}>
            {title}
          </Title>
          {categories &&
            <Categories>
              {categories.map(category => <Category key={category.id} category={category} />)}
            </Categories>}
        </SectionTitleBox>
        <List content={content} component={Component} vertical={vertical} />
      </SectionBlock>
    </SectionWrap>
  );
};

const Category = ({ category }) => {
  return (
    <CategoryItem>
      <Button category>
        {category.category}
      </Button>
    </CategoryItem>
  );
};
const SectionWrap = styled.section`
  width: 100%;
  background: ${palette.black};
  z-index: 100;
`;
const SectionBlock = styled.section`
  padding: 3rem 1rem;
  max-width: 70rem;
  width: 100%;
  margin: 0 auto;
  background: ${palette.black};
  z-index: 100;
  ${props =>
    props.sub &&
    css`
      padding: 2rem 1rem;
    `};
`;

const SectionTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  ${props =>
    props.sub &&
    css`
      margin-bottom: 0.5rem;
    `};
`;

const Title = styled.div`
  color: ${palette.white};
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  ${props =>
    props.sub &&
    css`
      font-size: 1.8rem;
    `};
`;

const Categories = styled.div`
  display: flex;
  align-items: center;
`;
const CategoryItem = styled.div`
  & + & {
    margin-left: 0.5rem;
  }
`;

export default Section;