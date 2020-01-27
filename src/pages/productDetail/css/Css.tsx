import React from 'react';
import { ContentContainer } from '../../../components/ContentContainer';
import { Container, ProductImage, Text, BoldText } from '../style';
import CssImage from '../../../images/product/css.jpg';
import OseroGif from '../../../images/product/osero.gif';
import { GithubLink } from '../../../components/GithubLink';
import { CustomLink } from '../../product/components/ProductCard/style';
import { CommonGreenButton } from '../../../components/CommonButton';
import { ButtonWrapper } from './style';

export const Css = () => {
  window.scrollTo(0, 0);

  return (
    <ContentContainer>
      <Container>
        <ProductImage src={CssImage} />
        <Text>
          Twitterで好きな実況者さん関係の絵を描いてる人が多く憧れを持っていたが絶望的に絵が下手なため、なにかできないものかと思いCSSでお絵かきを始めた。
        </Text>
        <BoldText>制作風景</BoldText>
        <ProductImage src={OseroGif} />
        <BoldText>Github URL</BoldText>
        <GithubLink
          url="https://github.com/mr04vv/css_illust_practice"
          name="css_illust_practice"
          description="Contribute to mr04vv/css_illust_practice development by creating an account on GitHub."
        />
        <BoldText>サイトURL</BoldText>
        <ButtonWrapper>
          <CustomLink to={{ pathname: 'https://cssoekaki.firebaseapp.com/' }} target="_blank" rel="noopener noreferrer">
            <CommonGreenButton>CSSでお絵かき</CommonGreenButton>
          </CustomLink>
        </ButtonWrapper>
      </Container>
    </ContentContainer>
  );
};
