import styled from 'styled-components';

const mobile = "(max-width: 415px)";
const tablet = "(max-width: 768px)";

const navbg = "#283E4A";
const navcolor = "#C7D1D8";
const background = "#F5F5F5"

export const CardDeck = styled.section`
  max-width: 1128px;
  margin: 20px auto -20px;
  border-radius: 3px;
  display: grid;
  grid-template-columns: 800px auto;

  @media ${mobile} {
    max-width: 375px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  padding: 24px 24px 25px;
  margin-bottom: 15px;
  box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2);
  border-radius: 2px;
  background: #fff;
  grid-column-start: 1;

  @media ${mobile} {
    width: 95%;
    line-height: 1.5;
  }
  
    h2 {
      font-size: 2rem;
      font-weight: 400;
      margin-bottom: 20px;
    }
    
    p {
      font-size: 1.4rem;
    }

  .flex-wrapper {
    display: flex;
    justify-content: space-between;
    
    .left {
      width: 50%;
    }

    .right {
      width: 50%;
    }
  }
`;

export const Portfolio = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  position: relative;

  div {
    margin: 0 auto 50px;
    padding: 15px;
    box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2);
    border-radius: 2px;
    font-size: 1.6rem;
    text-align: center;
    width: 200px;
    height: 200px;
    transition: opacity 0.3s ease;
    opacity: 0.7;
      
    &:hover {
      opacity: 1;
    }


    @media ${mobile} {
      width: 100px;
      height: 100px;
    }

    &:nth-child(2),
    &:nth-child(5) {
      @media ${mobile} {
        margin: 0 25px 50px;
      }
    }
  }
`;


export const Container = styled.div`
  box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2);
  width: 100%;
  border-radius: 2px;
  font-size: 1.6rem;
  margin-bottom: 15px;
  padding-bottom: 25px;
  object-fit: cover;
  overflow: hidden;
  background: #fff;

  @media ${mobile} {
    width: 95%;
    font-size: 1.4rem;
  }

  #img-cont {
    padding: 0 24px;
    display: flex;
    justify-content: flex-start;
    margin-top: -75px;
    
    img {
      width: 152px;
      height: 152px;
      border: 5px solid #E2E4E5;
      border-radius: 50%;

      @media ${mobile} {
        width: 120px;
        height: 120px;
        border-radius: 150px;
      }
    }
  }

  #info-cont {
    padding: 0 24px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media ${mobile} {
      flex-direction: column;
    }
    
    #information-left {
      text-align: left;

      h2 {
        font-size: 2.4rem;
        font-weight: 400;
        
        @media ${mobile} { font-size: 2rem; }
      }

      h3 {
        font-size: 2rem;
        line-height: 1.7;
        font-weight: 100;

        @media ${mobile} { font-size: 1.8rem; }
      }

      ul {
        line-height: 1.8;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        

        @media ${mobile} {
          flex-direction: column;
          justify-content: flex-start;
        }
        
        span {
          font-size: 1.6rem;
          color: #0084BF;
          font-weight: 600;

          @media ${mobile} {
            font-size: 1.4rem;
          }
        }

        li {
          font-size: 1.6rem;
          font-weight: 100;
          padding-left: 12px;
          list-style: none;
          
          @media ${mobile} {
            padding-left: 0;
          }

          .contact-link {
            text-decoration: none;
            font-size: 1.6rem;
            font-weight: 600;
            color: #0084BF;

            @media ${mobile} {
              font-size: 1.4rem;
            }

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

            @media ${mobile} {
              content:"";
              padding-right: 0;
            }
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

export const InfoRight = styled.div`
  width: 25%;
  margin-top: 7px;

  @media ${mobile} {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  img {
    width: 26px;
    height: 26px;
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
    
    @media ${mobile} {
      margin-left: 0;
    }
  }
`;

export const NavWrapper = styled.nav`
  background: ${navbg};
`;

export const MyNav = styled.nav`
max-width: 1128px;
margin: 0 auto;
padding: 5px 0;
margin-bottom: 20px;
display: flex;
align-items: center;
justify-content: space-between;

@media ${mobile} {
  width: 95%;
}

  .wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    
    @media ${mobile} {
      margin: 0 auto;
    }
    
    #linked {
      margin-right: 12px;
      margin-top: 2px;
      width: 35px;


      &:hover {
        cursor: pointer;
      }
    }
    
    form {
      width: 250px;
      height: 35px;
      position: relative;
      overflow: hidden;
      
      @media ${mobile} {
        display: none;
      }

      input {
        background: ${background};
        font-size: 1.4rem;
        height: 100%;
        width: 100%;
        border: 0;
        border-radius: 2px;
        padding-left: 8px;
        transition: all 0.3s ease;
      }
      
      label {
        pointer-events: none;
        width: 100%;
        transition: all 0.3s ease;
      }
      
      label #content-search {
        color: ${navcolor};
        font-size: 1.4rem;
        position: absolute;
        bottom: 8px;
        left: 8px;

        &::after {
          content: "";
          position: absolute;
          height: 100%;
          width: 100%;
        }
      }

      input:focus + label, input:valid + label {
        display: none;
      }
    }
  }

  ul {
    display: flex;
    height: 42px;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    position: relative;
  
    li {
      margin-left: 30px;
      list-style: none;
      font-size: 1.2rem;
      color: ${navcolor};
      
      @media ${mobile} {
        display: none;
      }

      &:first-child {
        margin-left: 0;
      }
      
      .nav-link {
        font-size: 1.2rem;
        color: ${navcolor};
        text-decoration: none;
      }

      &:last-child {
        padding-left: 20px;
        
        &::before {
          content: "　";
          height: 52px;
          border-left: 1px solid ${navcolor};
          position: absolute;
          right: 40px;
          top: -5px;
        }
      }
    }
  }
`;


export const ContactWrap = styled.div`
  font-size: 2rem;
  text-align: center;
  width: 1000px;
  margin: 0 auto 100px;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    label, input {
      width: 200px;
      margin: 0 auto;
      font-size: 1.6rem;
      margin-top: 20px;
    }

    textarea {
      min-height: 100px;
      height: 200px;
      max-height: 400px;

      min-width: 200px;
      width: 400px;
      max-width: 400px;
    }

    input[type="submit"] {
      font-size: 1.4rem;
      text-align: center;
    }
  }
`;
