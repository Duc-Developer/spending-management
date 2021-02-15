import React from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon, Badge, Left, Right, Body, Text } from 'native-base';

export default function Dashboard() {
  return (
    <Container>
      <Header>
        <Left />
        <Body>
          <Title>Dashboard</Title>
        </Body>
        <Right />
      </Header>

      <Content padder>
        <Text>
          I'm Dashboard
          </Text>
      </Content>

      <Footer>
        <FooterTab>
          <Button vertical>
            <Icon type="FontAwesome" name="pencil" />
            <Text>Nhập vào</Text>
          </Button>
          <Button vertical>
            <Icon type="FontAwesome" name="paper-plane" />
            <Text>Kế Hoạch</Text>
          </Button>
          <Button active vertical>
            <Icon type="FontAwesome" name="pie-chart" />
            <Text>Báo Cáo</Text>
          </Button>
          <Button vertical>
            <Icon type="Feather" name="more-horizontal" />
            <Text>Khác</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
}