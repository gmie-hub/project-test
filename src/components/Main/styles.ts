import styled from 'styled-components';

export const StyledForm = styled.form`
    // margin-block-end: 5rem;
`

export const StyledFieldContainer = styled.div`
    // display: grid;
    // gap: 1rem;
    // margin-block: 2.5rem;
    // min-width: 0;
    position: relative;
`

export const StyledAmount = styled.span`
    color: #0000FF;
    background-color: #f6f4ff;
    padding: 0.7rem;
    border-radius: 1.5rem;
    font-weight: 500;
`

export const StyledSpan = styled.span`
    color: #bec2cc;
    font-size: 1.4rem;

    @media screen and (max-width: 431px) {
        font-size: 1rem;
        padding-inline-start: 0;
    }
`

export const StyledLabelContainer = styled.label`
    display: flex;
    border: 0.1rem solid #e1e2e5;
    height: 5.2rem;
    width: 100%;
    justify-content: space-between;
    padding-inline: 1.8rem;
    border-radius: 1rem;
    // margin-block-start: 0.7rem;
    color: #515a74;
    
    &.checked {
        border: 0.2rem solid #ab90e7;
        background: #f6f4ff;
    }
`

export const StyledLabel = styled.label`
    color: #4a4a4a;
    padding-bottom: 0.1rem;
    flex: 1 1 100%;
    color: #515a74;
    font-style: normal;
    font-weight: bold;
    font-size: 1.4rem;
    letter-spacing: -0.1rem;
    word-spacing: 0.1rem;
`

export const StyledLabel2 = styled(StyledLabel)`
    position: absolute;
    right: 0;
    font-weight: 550;

    @media screen and (max-width: 391px) {
        font-size: 1rem;
        top: 0.4rem
    }

`

export const GreenSpan = styled.span`
    color: #439e76;
    margin-inline-start: 1rem; 
`