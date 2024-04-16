import styled from "styled-components";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import db from "../firebaseConfig";

const Detail = (props) => {
  
    const { id } = useParams();
    const [detailData, setdetailData] = useState({});

    useEffect(() => {
        db.collection("movies")
        .doc(id)
        .get()
        .then((doc) => {
             if (doc.exists) {
                setdetailData(doc.data());
             } else {
                console.log("No Such Document in FireBase");
             }
        })
        .catch((err) => {
            console.log("Error");
        })
    }, [id]);

  return (
    <Container>
      <Background>
        <img
          src={detailData.backgroundImg}
          alt={detailData.title}
        />
      </Background>
      <ImageTitle>
        <img
          src= {detailData.titleImg}
          alt= {detailData.title}
        />
      </ImageTitle>
      <ContentMeta>
        <Control>
          <Player>
            <img src="/images/play-icon-black.png" alt="" />
            <span>Player</span>
          </Player>
          <Trailer>
            <img src="/images/play-icon-white.png" alt="" />
            <span>Trailer</span>
          </Trailer>
          <AddList>
            <span />
            <span />
          </AddList>
          <GroupMatch>
            <img src="/images/group-icon.png" alt="" />
          </GroupMatch>
        </Control>
        <SubTitle>{detailData.subTitle}</SubTitle>
        <Description>{detailData.description}</Description>
      </ContentMeta>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  overflow-x: hidden;
  display: block;
  top: 72px;
  min-height: calc(100vh - 250px);
  padding: 0 calc(3.5vw * 5px);
`;

const Background = styled.div`
  left: 0px;
  opacity: 0.8;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: -1;

  img {
    width: 100vw;
    height: 100vh;

    @media (max-width: 768px) {
      width: initial;
    }
  }
`;

const ImageTitle = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: flex-start;
  margin: 0px 24px;
  height: 30vw;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;
  -webkit-box-pack: start;

  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }
`;

const ContentMeta = styled.div`
  max-width: 874px;
`;

const Control = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  margin: 24px 15px;
  min-height: 56px;
`;

const Player = styled.button`
  font-size: 15px;
  margin: 0px 22px 0px 0px;
  padding: 0px 20px;
  height: 56px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  border: none;
  background-color: rgb (249, 249, 249);
  color: rgb(0, 0, 0);
  font-weight: 600;
  img {
    width: 32px;
  }

  &:hover {
    background: rgb(198, 198, 198);
  }

  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;

    img {
      width: 25px;
    }
  }
`;

const Trailer = styled(Player)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;

    img {
      width: 25px;
    }
  }
`;

const AddList = styled.div`
  margin-right: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;

  span {
    background-color: rgb(249, 249, 249);
    display: inline-block;

    &:first-child {
      height: 2px;
      transform: translate(1px, 0px) rotate(0deg);
      width: 16px;
    }
    &:nth-child(2) {
      height: 16px;
      transform: translateX(-8px) rotate(0deg);
      width: 2px;
    }
  }

  @media (max-width: 768px) {
    height: 40px;
    width: 40px;
    margin-right: 10px;
  }
`;

const GroupMatch = styled.div`
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;

  @media (max-width: 768px) {
    height: 42px;
    width: 42px;

    img {
      width: 32px;
    }
  }
`;

const SubTitle = styled.div`
 color: rgb(249, 249, 249);
 font-size: 15px;
 margin-left:20px;
 min-height: 20px;

 @media (max-width: 768px) {
    font-size: 12px;
 }

`;
const Description = styled.div`
 color: rgb(249, 249, 249);
 font-size: 18px;
 padding: 16px 0px;
 margin-left: 20px;
 margin-top: 15px;
 line-height: 1.4;
 

 @media (max-width: 768px) {
    font-size: 14px;
 }
`;

export default Detail;
