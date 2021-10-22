import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { ImBlog } from "react-icons/im";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineLogin,
} from "react-icons/ai";
import "../../Styles/Navbar.css";
import { CgFileDocument } from "react-icons/cg";
import { RateReviewOutlined } from "@material-ui/icons";

function NavBar() {
  return (
    <Navbar fixed="top" expand="md" className="sticky">
      <Container>
        {/* <Navbar.Brand href="/">
            <Nav.Item>
                <Nav.Link>
                    Logo
                </Nav.Link>
            </Nav.Item>
        </Navbar.Brand> */}
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav" style={{justifyContent:'flex-end'}}>
          <Nav className="ml-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link >
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> Book Slot
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                /> Categories
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link >
                <CgFileDocument style={{ marginBottom: "2px" }} /> About Us
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link>
                <ImBlog style={{ marginBottom: "2px" }} /> Contact Us
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link>
                <RateReviewOutlined /> Reviews
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <AiOutlineLogin /> Sign Up
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
