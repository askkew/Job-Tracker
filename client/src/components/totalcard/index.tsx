import React from 'react'
import { IconContainer, TotalContainer, TotalNumber, TotalTextContainer, TotalTitle, StyledIconTotal } from './TotalStyles'
import { Divider } from '@mui/material'

const TotalCard = () => {
  return (
    <TotalContainer>
      <IconContainer>
        <StyledIconTotal />
      </IconContainer>
      <TotalTextContainer>
        <TotalTitle>Total Applications</TotalTitle>
        <TotalNumber>60</TotalNumber>
      </TotalTextContainer>
    </TotalContainer>
  )
}

export default TotalCard