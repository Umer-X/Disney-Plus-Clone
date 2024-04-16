import styled from "styled-components";

const Viewers = (props) => {
  return (
    <Container>
      <Wrap>
        <a>
          <img src="/images/viewers-disney.png" alt="Disney" />
          <video autoPlay={true} loop={true} playsInline={true} muted>
            <source src="/videos/disney.mp4" alt="Disney" />
          </video>
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img src="/images/viewers-marvel.png" alt="Disney" />
          <video autoPlay={true} loop={true} playsInline={true} muted>
            <source src="/videos/marvel.mp4" alt="Disney" />
          </video>
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img src="/images/viewers-starwars.png" alt="Disney" />
          <video autoPlay={true} loop={true} playsInline={true} muted>
            <source src="/videos/star-wars.mp4" alt="Disney" />
          </video>
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img src="/images/viewers-national.png" alt="Disney" />
          <video autoPlay={true} loop={true} playsInline={true} muted>
            <source src="/videos/national-geo.mp4" alt="Disney" />
          </video>
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img src="/images/viewers-pixar.png" alt="Disney" />
          <video autoPlay={true} loop={true} playsInline={true} muted>
            <source src="/videos/pixar.mp4" alt="Disney" />
          </video>
        </a>
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 30px;
  padding: 10px 20px 26px;
  display: grid;
  grid-column-gap: 25px;
  justify-content: space-around;

  grid-template-columns: repeat(5, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    grid-row-gap: 25px;
  }
`;

const Wrap = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* Aspect ratio for 16:9 */
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0px 26px 30px -10px rgba(0, 0, 0, 0.69),
    0px 16px 10px -10px rgba(0, 0, 0, 0.73);
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }

  video {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    opacity: 0;
    z-index: 0;
  }
    &:hover{
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0/ 72%) 0px 30px 22px -10px;

        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);

        video {
            opacity: 1;
        }
    }
  
`;

export default Viewers;
