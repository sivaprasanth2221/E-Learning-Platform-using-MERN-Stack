import React from 'react';
import styled from 'styled-components';
import { Card, CardContent, Typography, Grid, Box, Avatar, Container } from '@mui/material';
import { useSelector } from 'react-redux';

const StudentProfile = () => {
  const { currentUser, response, error } = useSelector((state) => state.user);

  if (response) console.log(response);
  else if (error) console.log(error);

  const sclassName = currentUser.sclassName;
  const studentCollege = currentUser.college;

  return (
    <Container maxWidth="md">
      <ProfileCard>
        <ProfileCardContent>
          <Avatar alt="Student Avatar" sx={{ width: 150, height: 150, margin: '20px' }}>
            {String(currentUser.name).charAt(0)}
          </Avatar>
          <ProfileText variant="h5" component="h2">
            {currentUser.name}
          </ProfileText>
          <ProfileText variant="subtitle1">
            Student Roll No: {currentUser.rollNum}
          </ProfileText>
          <ProfileText variant="subtitle1">
            Class: {sclassName.sclassName}
          </ProfileText>
          <ProfileText variant="subtitle1">
            College: {studentCollege.collegeName}
          </ProfileText>
        </ProfileCardContent>
      </ProfileCard>
    </Container>
  );
};

export default StudentProfile;

const ProfileCard = styled(Card)`
  margin: 20px auto;
  width: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ProfileCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileText = styled(Typography)`
  margin: 10px;
`;
