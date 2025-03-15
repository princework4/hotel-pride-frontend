import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <div className='footer-container'>
                <div>
                    <h3 className="section-title">
                        Company Name
                    </h3>
                    <Typography variant="body1" sx={{ marginTop: 2 }}>
                        © 2025 All Rights Reserved
                    </Typography>
                </div>

                <div>
                    <Typography variant="h5" className="section-title">
                        Quick Links
                    </Typography>
                    <div>
                        <Link href="#" className="footer-link">
                            Home
                        </Link>
                        <Link href="#" className="footer-link">
                            About
                        </Link>
                        <Link href="#" className="footer-link">
                            Services
                        </Link>
                        <Link href="#" className="footer-link">
                            Contact
                        </Link>
                    </div>
                </div>

                <div>
                    <Typography variant="h5" className="section-title">
                        Follow Us
                    </Typography>
                    <Box className="social-links">
                        <Link href="#" className="footer-link">
                            Facebook
                        </Link>
                        <Link href="#" className="footer-link">
                            Twitter
                        </Link>
                        <Link href="#" className="footer-link">
                            Instagram
                        </Link>
                    </Box>

                </div>
            </div>
            <Box className="corporate-footer">
                <h1></h1>
                <p>© ABC 2025</p>
            </Box>
        </>
    );
};

export default Footer;
