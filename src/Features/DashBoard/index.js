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
          <Button badge vertical>
            <Badge><Text>2</Text></Badge>
            <Icon name="apps" />
            <Text>Apps</Text>
          </Button>
          <Button vertical>
            <Icon name="camera" />
            <Text>Camera</Text>
          </Button>
          <Button active badge vertical>
            <Badge ><Text>51</Text></Badge>
            <Icon active name="navigate" />
            <Text>Navigate</Text>
          </Button>
          <Button vertical>
            <Icon name="person" />
            <Text>Contact</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
}