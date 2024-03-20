import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Container, Typography, Box, Avatar, Paper } from '@mui/material';

const AdminProfile = () => {
    const { currentUser } = useSelector((state) => state.user);

    return (
        <Container maxWidth="md">
            <StyledPaper elevation={3}>
                <Box display="flex" flexDirection="column" alignItems="center" padding={5}>
                    <Avatar alt="Admin Avatar" sx={{ width: 150, height: 150, marginBottom: 2 }}>
                        {currentUser.name.charAt(0)}
                    </Avatar>
                    <Typography variant="h5" component="h2">
                        {currentUser.name}
                    </Typography>
                    <Typography variant="subtitle1">
                        Email: {currentUser.email}
                    </Typography>
                    <Typography variant="subtitle1">
                        College: {currentUser.collegeName}
                    </Typography>
                </Box>
            </StyledPaper>
        </Container>
    );
};

export default AdminProfile;

const StyledPaper = styled(Paper)`
    margin-top: 20px;
    display: flex;
    flexDirection: column;
    alignItems: center;
    padding: 20px;
`;

