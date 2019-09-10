import React from "react";
import { Card, Container, Grid, Icon, Image } from "semantic-ui-react";

const Main = () => {
  return (
    <Grid verticalAlign="middle" centered className="main-container">
      <Grid.Row>
        <Grid.Column>
          <Container className="start">
            <Card>
              <Image
                src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
                wrapped
                ui={false}
              />
              <Card.Content>
                <Card.Header>Matthew</Card.Header>
                <Card.Meta>
                  <span className="date">Joined in 2015</span>
                </Card.Meta>
                <Card.Description>
                  Matthew is a musician living in Nashville.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name="user" />
                  22 Friends
                </a>
              </Card.Content>
            </Card>
          </Container>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Main;
