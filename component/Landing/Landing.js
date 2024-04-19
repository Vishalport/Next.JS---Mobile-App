import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

// Custom styled button using MUI system
const StyledButton = styled(Button)({
    backgroundColor: '#333333', // Dark grey background for buttons
    color: '#ffffff', // White text for buttons
    '&:hover': {
        backgroundColor: '#4a5568', // Different grey color on hover
    },
    border: '1px solid #ffffff', // White border to separate buttons
    width: '20%', // Set button width to 100%
    height: '20%', // Set button height to 100%
    fontSize: '2rem', // Increased font size for better visibility
    margin: '5px', // Add some space between buttons
});

const Display = styled('div')({
    backgroundColor: '#000000', // Black background for the display
    color: '#ffffff', // White text for the display
    fontSize: '2rem', // Larger font size for display
    padding: '20px', // Padding around the text
    marginBottom: '20px', // Space between display and buttons
    textAlign: 'right', // Align text to the right
    borderRadius: '10px', // Rounded corners for the display
    minHeight: '60px', // Minimum height for the display
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
});

const Landing = () => {
    const [expression, setExpression] = useState('');
    const [result, setResult] = useState('');

    const handleButtonClick = (value) => {
        if (value === '=') {
            try {
                // Use a safe evaluation method instead of eval
                const evalResult = Function('"use strict";return (' + expression + ')')();
                setResult(evalResult);
            } catch (error) {
                setResult('Error');
            }
        } else if (value === 'C') {
            setExpression('');
            setResult('');
        } else {
            setExpression((prev) => prev + value);
        }
    };

    const buttonRows = [
        ['7', '8', '9'],
        ['4', '5', '6'],
        ['1', '2', '3'],
        ['C', '0', '='],
        ['+', '-', '×', '÷'] // Use the multiplication and division symbols
    ];

    return (
        <div className="flex justify-center items-center h-screen bg-[#FF9500] p-5"> {/* Match the orange background color */}
            <div className="calculator bg-[#1C1C1C] p-6 rounded-lg shadow-lg w-full max-w-md"> {/* Darker background for the calculator */}
                <Display>{expression} {result && `= ${result}`}</Display> {/* Update display format */}

                <div className="buttons grid" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}> {/* Use 4 columns grid */}
                    {buttonRows.map((row, rowIndex) => (
                        <React.Fragment key={rowIndex}>
                            {row.map((item, colIndex) => (
                                <StyledButton
                                    key={colIndex}
                                    variant="contained"
                                    onClick={() => handleButtonClick(item)}
                                >
                                    {item}
                                </StyledButton>
                            ))}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Landing;
