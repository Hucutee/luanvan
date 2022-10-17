import PropTypes from 'prop-types';
// material
import {useTheme} from '@material-ui/core/styles';
import {Box} from '@material-ui/core';

// ----------------------------------------------------------------------

Logo.propTypes = {
    sx: PropTypes.object,
};

export default function Logo({sx, props}) {
    const theme = useTheme();
    const PRIMARY_MAIN = theme.palette.primary.main;

    return (
        <Box sx={{width: 40, height: 40, ...sx}} {...props}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.5 47.5">
                <defs>
                    <clipPath id="a">
                        <path d="M0 38h38V0H0v38Z"/>
                    </clipPath>
                </defs>
                <g
                    clipPath="url(#a)"
                    transform="matrix(1.25 0 0 -1.25 0 47.5)"
                    fill={PRIMARY_MAIN}
                    fillRule="evenodd"
                    stroke="none"
                    strokeWidth="1"
                >
                    <path
                        fill={PRIMARY_MAIN}
                        d="M36 11a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v19.687C2 32.896 7.791 37 10 37h20.625C33.719 37 36 34.687 36 31.625V11Z"
                    />
                    <path
                        fill="#ccd6dd"
                        d="M34 7a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v24c0 4.119-.021 4 5 4h21a4 4 0 0 0 4-4V7Z"
                    />
                    <path
                        fill="#e1e8ed"
                        d="M32 6a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v24a3 3 0 0 0 3 3h24a3 3 0 0 0 3-3V6Z"
                    />
                    <path
                        fill={PRIMARY_MAIN}
                        d="M32 5a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v22a4 4 0 0 0 4 4h21a4 4 0 0 0 4-4V5Z"
                    />
                    <path
                        fill={PRIMARY_MAIN}
                        d="M30 5a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v20a4 4 0 0 0 4 4h19.335C28.544 29 30 27.544 30 25.335V5Z"
                    />
                    <path
                        fill={PRIMARY_MAIN}
                        d="M7 31c-1.687 0-1.731 1.922-1 2.75.832.941 2.125 1.25 4.438 1.25H12v2H9.281C5.313 37 2 34.5 2 31.625V5a4 4 0 0 1 4-4h2v30H7z"
                    />
                </g>
            </svg>
        </Box>
    );
}
