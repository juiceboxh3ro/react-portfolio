import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import banner from "../img/0.jfif"
import profile from "../img/profilepic.jfif"
import business from "../img/business.png"
import lambda from "../img/lambda.png"

const Container = styled.div`
  box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2);
  width: 100%;
  border-radius: 2px;
  font-size: 1.6rem;
  margin-bottom: 15px;
  padding-bottom: 25px;
  object-fit: cover;
  overflow: hidden;
  background: #fff;

  #img-cont {
    padding: 0 24px;
    display: flex;
    justify-content: flex-start;
    margin-top: -104px;
    
    img {
      width: 152px;
      border: 5px solid #E2E4E5;
      border-radius: 50%;
    }
  }

  #info-cont {
    padding: 0 24px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    #information-left {
      text-align: left;

      h2 {
        font-size: 2.4rem;
        font-weight: 400;
      }

      h3 {
        font-size: 2rem;
        line-height: 1.7;
        font-weight: 100;
      }

      ul {
        line-height: 1.8;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        
        span {
          font-size: 1.6rem;
          color: #0084BF;
          font-weight: 600;
        }

        li {
          font-size: 1.6rem;
          font-weight: 100;
          padding-left: 12px;
          list-style: none;

          .contact-link {
            text-decoration: none;
            font-size: 1.6rem;
            font-weight: 600;
            color: #0084BF;

            &:visited,
            &:active {
              color: #0084BF;
            }
            &:hover {
              cursor: pointer;
            }
          }

          &::before {
            content:"•";
            font-size: 1rem;
            padding-right: 8px;

          }
          
          &:first-child {
            padding-left: 0;
            list-style: none;

          &::before {
            content:"";
            font-size: 0; 
            padding-right: 0;

          }
        }          
      }
    }
  }
`;

const InfoRight = styled.div`
width: 25%;
margin-top: 7px;

  img {
    width: 26px;
    margin-bottom: 8px;
    display: inline-block;
    border-radius: 3px;

  }
  span {
    margin-left: 12px;
    line-height: 1.5;
    font-size: 1.6rem;
    font-weight: 600;
    vertical-align: top;
  }
`;

const Cards = () => {
  return (
    <Container>
      <img src={banner} alt="Banner of Yokohama"></img>
      <div>
        <div className="flexbox">
          <div className="photo"></div>
        </div>
        <div id="img-cont">
          <img src={profile} alt="Profile"></img>
        </div>
        <div id="info-cont">
          <div id="information-left">
            <h2>Jesse Goodburne</h2>
            <h3>Web Developer</h3>
            <ul>
              <li>Laurel, MD</li>
              <li><span>500+ connections</span></li>
              <li><span><Link className="contact-link" to="/contact">Contact info</Link></span></li>
            </ul>
          </div>
          <InfoRight id="information-right">
            <img src={business} alt=""/><span>From Zero, LLC</span><br />
            <img src={lambda} alt=""/><span>Lambda School</span>
          </InfoRight>
        </div>
      </div>
    </Container>
  )
}

export default Cards;