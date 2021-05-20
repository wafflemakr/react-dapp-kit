import React, { useContext } from "react";
import { Container, Jumbotron, Image } from "react-bootstrap";

import { Web3Context } from "../web3";

export default function Home() {
  const { account } = useContext(Web3Context);

  return (
    <div className="app-container h-100">
      <Jumbotron className="home-page mt-5">
        <Container className="text-center">
          <h1>React Dapp Starter Kit</h1>
          {!account && (
            <p>
              <h4 className="mt-5 text-secondary">
                Let's start by connecting to a web3 provider!
              </h4>
            </p>
          )}
        </Container>
      </Jumbotron>
      <Image
        style={{ maxWidth: "700px" }}
        src="https://miro.medium.com/max/1024/1*JMkw9e9X4FbuJu_V5wn4fg.png"
        fluid
      />
    </div>
  );
}
