import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Nav, Image } from "react-bootstrap";

import { Web3Context } from "../web3";

export default function Header() {
  const { connectWeb3, account, logout } = useContext(Web3Context);

  return (
    <Container fluid>
      <Row className="header-container border-bottom ">
        <Col sm="3">
          <div className="w-25">
            <Image
              style={{ maxHeight: "60px" }}
              id="logo-image"
              src="https://cdn.worldvectorlogo.com/logos/ethereum-eth.svg"
              alt="eth-logo"
            />
          </div>
        </Col>
        <Col sm="6">
          <Nav activeKey="/home">
            <Nav.Item className="mr-4">
              <Link to="/home">Home</Link>
            </Nav.Item>
            <Nav.Item className="mr-4">
              <Link to="/dashboard" eventKey="dashboard">
                Dashboard
              </Link>
            </Nav.Item>
            <Nav.Item className="mr-4">
              <Link to="/upload" eventKey="create">
                Upload
              </Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col>
          {account ? (
            <Row className="align-items-right">
              <Col sm="8" className="align-self-center">
                <h5 className="text-right">
                  Connected:{" "}
                  <a
                    href={`https://etherscan.io/address/${account}`}
                    target="_blank"
                    rel="noreferrer"
                    className="account-link"
                  >
                    {account.substring(0, 4) +
                      "..." +
                      account.substring(38, 42)}
                  </a>
                </h5>
              </Col>

              <Col>
                <Button
                  className="rounded-pill"
                  variant="outline-secondary"
                  onClick={logout}
                >
                  Logout
                </Button>
              </Col>
            </Row>
          ) : (
            <Button
              className="float-right rounded-pill mr-3"
              variant="outline-secondary"
              onClick={connectWeb3}
            >
              Connect Web3
            </Button>
          )}
        </Col>
      </Row>
    </Container>
  );
}
