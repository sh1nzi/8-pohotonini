import React from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';

const AboutContainer = styled.section`
  max-width: 800px;
  margin: 0 auto;
  padding: 50px 20px;
  text-align: center;
`;

const About = () => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { tension: 150, friction: 25 },
  });

  return (
    <animated.div style={props}>
      <AboutContainer>
        <h2>Обо мне</h2>
        <p>
          Привет! Я — начинающий разработчик, который увлекается созданием веб-сайтов и приложений. Я люблю учиться новому и делиться своими знаниями с другими. Этот блог — место, где я делюсь своим опытом и обучением в мире технологий.
        </p>
      </AboutContainer>
    </animated.div>
  );
};

export default About;
