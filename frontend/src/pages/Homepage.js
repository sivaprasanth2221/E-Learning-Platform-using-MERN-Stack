import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Box} from '@mui/material';
import styled from 'styled-components';
import Students from "../assets/students.png";
import { LightCoralButton } from '../components/buttonStyles';

const Homepage = () => {
    return (
        <StyledContainer>
            <Grid container spacing={0}>
                <Grid item xs={12} md={6}>
                    <img src={Students} alt="students" style={{ width: '100%' }} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <StyledPaper elevation={3}>
                        <StyledTitle>
                            Welcome to
                            <br />
                            E-Learning Platform
                        </StyledTitle>
                        <StyledText>
                        The e-learning platform provides a streamlined interface for accessing diverse educational resources, managing courses, and tracking academic progress. 
                        Through intuitive navigation, users can seamlessly explore functionalities 
                        tailored to enhance the learning and teaching experience.
                        </StyledText>
                        <StyledBox>
                            <StyledLink to="/choose">
                                <LightCoralButton variant="contained" fullWidth>
                                    Login
                                </LightCoralButton>
                            </StyledLink>
                            <StyledText>
                                Don't have an account?{' '}
                                <Link to="/Adminregister" style={{color:"#ff6b6b"}}>
                                    Sign up
                                </Link>
                            </StyledText>
                        </StyledBox>
                    </StyledPaper>
                </Grid>
            </Grid>
        </StyledContainer>
    );
};

export default Homepage;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledPaper = styled.div`
  padding: 24px;
  height: 100vh;
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  gap: 16px;
  padding: 24px;
`;

const StyledTitle = styled.h1`
  font-size: 3rem;
  color: var(--color-primary); /* Coral color for the title */
  font-weight: bold;
  padding-top: 0;
  letter-spacing: normal;
  line-height: normal;
`;

const StyledText = styled.p`
  color: #3f3f3f; /* Dark gray for softer contrast with background */
  margin-top: 30px;
  margin-bottom: 30px;
  letter-spacing: 0.5px; /* Slightly increased for readability */
  line-height: 1.5; /* Increased line-height for better readability */
  font-weight: 500; /* Medium weight for a nice balance */
`;



const StyledLink = styled(Link)`
  text-decoration: none;
`;
