import styled from "styled-components";
import { useState } from "react";

const Header3 = styled.h3`
    text-align: center;
    padding: 1vw 1vh;
`;

/*css styling for overall calculator*/
const CalcContainer = styled.div`
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #112D4E;
`;

/*css style for overall input, including input button and label*/
const CalcInput = styled.div`
    font-size: calc(4px + 1vw);
    display: flex;
    flex-direction: row;
    width: 100%;

    /*mobile device screen 750 -1000px*/
    @media screen and (max-width: 900px) {
        font-size: calc(4px + 2vw);
        display: flex;
        flex-direction: column;
        width: 50%;
        margin-left: auto;
        margin-right: auto;
    }
`;

/*css styling for both input boxes*/
const StyledInput = styled.input`
    padding: 1vh;
    font-size: calc(3px + 1vw);
    border: calc(1px + 0.1vw) solid #3F72AF;
    border-radius: calc(1px + 1vw);
    background-color: #F5F5F5;

    /*mobile device screen 750 -1000px*/
    @media screen and (max-width: 900px) {
         padding: 1vh 1vw;
        font-size: calc(5px + 1vw);
    }
`;

/*css styling for lable values*/
const StyledLabel = styled.label`
    padding: 1vw;
`;


/*css styling for all buttons*/
const CalcButton = styled.div`
    width: 60%;
    padding: 2vh 2vw;
    display: flex;
    flex-direction: row;
    margin-left: auto;
    margin-right: auto;
`;

/*css styling for individual buttons*/
const StyledButton = styled.button`
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #112D4E;
    font-size: calc(2px + 1vw);
    background-color: #DBE2EF;
    padding: 1vh 1.5vw;
    border: calc(1px + 0.1vw) solid #3F72AF;
    border-radius: calc(1px + 1vw);
    margin-left: auto;
    margin-right: auto;

    /*mobile device screen 750 -1000px*/
    @media screen and (max-width: 900px) {
        font-size: calc(6px + 1vw);
        padding: 1vh 2vw;
        border: calc(1px + 0.1vw) solid #3F72AF;
        border-radius: calc(1px + 1vw);
        margin-left: auto;
        margin-right: auto;
    }
`;


// code inspiration: https://www.typescriptlang.org/play/?noImplicitAny=false#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
export default function Calculator() {
    // initialize both numbers as empty string
    const [firstNum, setFirstNum] = useState(""); // store first number
    const [secondNum, setSecondNum] = useState(""); // store second number
    // result can be string like error message or number
    const [result, setResult] = useState<number | string>("") // store the result

    /*css styling for result of calculator so the result can turn red when negative*/
    const Output = styled.h3`
        width: 50%;
        border: calc(1px + 0.1vw) solid #3F72AF;
        border-radius: calc(1px + 1vw);
        background-color: #F5F5F5;
        padding: 2vh 1vw;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        ${Number(result) < 0 ? "color: red;" : "color: #112D4E" }
    `;

    // const to perform all different types of calculations (handles number conversion and NaN checks)
    const calculation = (operator : (num1 : number, num2 : number) => number | string ) => {
        const num1 = Number(firstNum);
        const num2 = Number(secondNum);

        // checks if a valid number is entered
        if (isNaN(num1) || isNaN(num2)) {
            setResult("Please enter a number")
            return;
        }
        setResult(operator(num1, num2));
    };

    // a const for each operation, make sure division handles divide by 0 and exponent handles negative exponent
    const addition = (num1: number, num2: number) => num1 + num2;
    const subtraction = (num1: number, num2: number) => num1 - num2;
    const multiply = (num1: number, num2: number) => num1 * num2;
    const division = (num1: number, num2: number) => (num2 === 0 ? "Error: Division by zero": num1 / num2);
    const exponent = (num1: number, num2: number) => {
        let result = 1;
        if (num2 >= 0) {
            for (let i = 0; i < num2; i++) {
                result *= num1;
            }
        } else {
            // calculate reciprocal for negative exponent
            for (let i = 0; i < -num2; i++) {
                result *= num1;
            }
            result = 1 / result;
        }
        return result;
    };


    // clear operator
    const clearAll = () => {
        setFirstNum("");
        setSecondNum("");
        setResult("");
    }

    return (
       <CalcContainer>
            <Header3>JS Calculator</Header3>
            <CalcInput>
                <StyledLabel htmlFor="first">First Number:</StyledLabel>
                <StyledInput id="first" type="text" value={firstNum} onChange={(e) => setFirstNum(e.target.value) }/>
                <StyledLabel htmlFor="second">Second Number:</StyledLabel>
                <StyledInput id="second" type="text" value={secondNum} onChange={(e) => setSecondNum(e.target.value) }/>
            </CalcInput>
            <CalcButton>
                <StyledButton onClick={() => calculation(addition)}>+</StyledButton>
                <StyledButton onClick={() => calculation(subtraction)}>-</StyledButton>
                <StyledButton onClick={() => calculation(multiply)}>*</StyledButton>
                <StyledButton onClick={() => calculation(division)}>/</StyledButton>
                <StyledButton onClick={() => calculation(exponent)}>**</StyledButton>
                <StyledButton onClick={clearAll}>Clear</StyledButton>
            </CalcButton>
          <Output>{result}</Output>
       </CalcContainer>
    )

}