import React from "react";
import styled from "styled-components";

function Login(props) {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoone src="/images/cta-logo-one.svg" alt="" />
          <SignUp>
           <a href="#">Get it All There</a>
          </SignUp>
          <Description>
            Get Premier access to Raya and Last Dragon for additional
            fee with a Disney+ Suscription. As of 3/1/24,  the price of Disney+
            and Diney's Bundle increase by 1$.
          </Description>
          <CTALogotwo src = "/images/cta-logo-two.png" alt='' />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
}

export default Login;

const Container = styled.section`
  overflow: hidden;
  display: flex;
  text-align: center;
  flex-direction: column;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 88px 48px;
  height: 100%;
`;

const BgImage = styled.div`
  background-image: url("./images/login-background.jpg");
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  position: absolute;
  top: 8;
  right: 0;
  left: 0;
  z-index: -1;
`;

const CTA = styled.div`
 max-width: 650px;
 display: flex;
 flex-direction: column;
 width: 100%;
 margin-bottom: 60px;
 align-items: center;
 justify-content: center;

`;

const CTALogoone = styled.img`
 margin-bottom: 12px;
 max-width: 608px;
 min-height: 1px;
 display: block;
 width: 100%;
`;

const SignUp = styled.a`
 font-weight: bold;
 color: #f9f9f9;
 background-color: #0063e5;
 margin-bottom: 12px;
 width: 100%;
 letter-spacing: 1.5px;
 font-size: 18px;
 padding: 16.5px 0;
 border: 1px solid transparent;
 border-radius: 4px;
&:hover {
    background-color: #0483ee;
}
`;

const Description = styled.p`
 font-size: 11px;
 margin: 0 0 24px;
 line-height: 1.5;
 letter-spacing: 1.5px;
 color: hsla(0, 0% , 95.3%, 1);
`;

const CTALogotwo = styled.img`
 
 max-width: 50vw;
 display: inline-block;
 vertical-align: bottom;
 width: 100%;
 

`;