import React, { useState } from 'react';
import { Field, FormikProvider, FormikValues, useFormik } from 'formik';
import styles from '../Main/main.module.css';
import Input from '../../customs/input';
import Select from '../../customs/SelectInput';
import { ReactComponent as Warning } from '../../svg/location-exclamation.svg';
import Button from '../Button/Button';
import { StyledAmount, StyledFieldContainer, StyledForm, StyledLabel, StyledLabel2, StyledLabelContainer, StyledSpan, GreenSpan } from '../Main/styles'

const Main = () => {
    const [selectedOption, setSelectedOption] = useState('option1');

    const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(e.target.value);
    };

    const formik = useFormik<FormikValues>({
        initialValues: {},
        onSubmit: () => {}
    })

    return (
        <div className={styles.container}>
            <div>
                <div>
                    <h1 className={styles.letterSpacing}>Create your hedge</h1>
                    <p>Umoja offers hedging as a service that's simple, affordable, & price transparent.</p>
                </div>
                <div>
                    <div>
                        <div className={styles.title}><h1>Hedging details</h1></div>
                        <FormikProvider value={formik}>
                            <StyledForm>
                                <StyledFieldContainer>
                                    <Field 
                                        name='notionalAmount'
                                        type='text'
                                        label='Notional amount'
                                        placeholder='Notional amount'
                                        as={Input}
                                    />
                                    <StyledSpan>Please enter the amount you are looking to hedge in the base currency.</StyledSpan>
                                    <div className={styles.rightPlaceholder}>
                                        <StyledSpan>Min: <StyledAmount>500k</StyledAmount></StyledSpan>
                                        <StyledSpan>Max: <StyledAmount>5m</StyledAmount></StyledSpan>
                                    </div>
                                </StyledFieldContainer>
                                <StyledFieldContainer>
                                    <Field 
                                        name='baseCurrency'
                                        type='text'
                                        label='Base currency'
                                        placeholder='USD'
                                        as={Input}
                                    />
                                    <StyledSpan>Please select the currency you are looking to protect.</StyledSpan>
                                </StyledFieldContainer>
                                <StyledFieldContainer>
                                    <StyledLabel2>1 USD = <span className={styles.spaceNumber}>17.810</span> MXN</StyledLabel2>
                                    <Field 
                                        name='quoteCurrency'
                                        type='text'
                                        label='Quote currency'
                                        placeholder='MXN'
                                        as={Select}
                                    />
                                    <StyledSpan>Please select the currency you are looking to hedge.</StyledSpan>
                                </StyledFieldContainer>
                                <div className={styles.radioContainer}>
                                    <StyledLabel>Data on direction</StyledLabel>
                                    <StyledLabelContainer className={selectedOption === 'option1' ? 'checked' : ''}>
                                        <div>
                                            <span><Warning /></span>
                                            <span className={styles.radioText}><p>MXN appreciates vs USD</p></span> 
                                        </div>
                                        <input 
                                            type='radio' 
                                            name='radioGroup'
                                            value='option1'
                                            checked={selectedOption === 'option1'}
                                            onChange={handleOptionChange}
                                        />
                                    </StyledLabelContainer>
                                    <StyledLabelContainer className={selectedOption === 'option2' ? 'checked' : ''}>
                                        <div>
                                            <span><Warning /></span>
                                            <div className={styles.radioText}><p>MXN depreciatesD vs USD</p></div> 
                                        </div>
                                        <input 
                                            type='radio'
                                            name='radioGroup'
                                            value='option2' 
                                            checked={selectedOption === 'option2'}
                                            onChange={handleOptionChange}
                                        />
                                    </StyledLabelContainer>
                                </div>
                                <StyledFieldContainer>
                                    <StyledLabel2>1 USD = <span className={styles.spaceNumber}>17.810</span> MXN<GreenSpan>+40%</GreenSpan></StyledLabel2>
                                    <Field 
                                        name='strikeRate'
                                        type='text'
                                        label='Strike rate'
                                        placeholder='Strike rate'
                                        as={Input}
                                    />
                                    <StyledSpan>Please enter the devaluation threshold at which you'd like your currency risk protection to be triggered.</StyledSpan>
                                </StyledFieldContainer>
                                <StyledFieldContainer>
                                    <Field 
                                        name='maturity'
                                        type='text'
                                        label='Maturity'
                                        placeholder='Maturity'
                                        as={Select}
                                    />
                                    <StyledSpan>Please enter the maturity for which you'd like currency risk protection.</StyledSpan>
                                </StyledFieldContainer>
                                <StyledFieldContainer>
                                    <Field 
                                        name='optionType'
                                        type='text'
                                        label='Option type'
                                        placeholder='Option type'
                                        as={Select}
                                    />
                                    <StyledSpan>Protect base currency devaluation against quote currency.</StyledSpan>
                                </StyledFieldContainer>
                                <Button />
                            </StyledForm>
                        </FormikProvider>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Main;

