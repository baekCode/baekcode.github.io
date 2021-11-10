import styled from '../../styles/typed-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 78px;
`;
export const Contents = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Form = styled.form``;
export const InputBox = styled.div`
  display: flex;
  align-items: center;
  &::before {
    content: '{';
  }
  &::after {
    content: '}';
  }
`;
export const Input = styled.input`
  padding: 0 20px;
  font-size: 78px;
  color: #fff;
  border: 0;
  background: transparent;
`;
export const Button = styled.button`
  font-size: 48px;
  color: ${props => props.theme.blueColor};
  border: 0;
  cursor: pointer;
  background: transparent;
`;
export const GreetingMsg = styled.p`
  line-height: 1.3;
  span {
    display: block;
  }
`;
