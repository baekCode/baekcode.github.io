import React from 'react';
import { Container, Input, Form, Contents, GreetingMsg, Button, InputBox } from './styles';

interface IProps {
  onSubmit?: ((event: React.FormEvent<HTMLFormElement>) => void) | undefined;
  onChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
}

const IntroPresenter: React.SFC<IProps> = ({ onSubmit, onChange }) => {
  return (
    <Container>
      <Contents>
        <GreetingMsg>
          반갑습니다.
          <span>백주은 | BaekCo 포트폴리오 페이지입니다.</span>
        </GreetingMsg>
        <Form onSubmit={onSubmit}>
          <InputBox>
            <Input name="name" placeholder="회사/이름을 입력하세요." autoFocus onChange={onChange} />
          </InputBox>
          <Button>&gt; 입력하기</Button>
        </Form>
      </Contents>
    </Container>
  );
};

export default IntroPresenter;
