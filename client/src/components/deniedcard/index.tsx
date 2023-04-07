import React from 'react'
import { IconContainer, DeniedContainer, DeniedNumber, DeniedTextContainer, DeniedTitle, StyledIconDenied } from './DeniedStyles'
import { Divider } from '@mui/material'

const DeniedCard = () => {
  return (
    <DeniedContainer>
      <IconContainer>
        <StyledIconDenied />
      </IconContainer>
      <DeniedTextContainer>
        <DeniedTitle>Denied Applications</DeniedTitle>
        <DeniedNumber>10</DeniedNumber>
      </DeniedTextContainer>
    </DeniedContainer>
  )
}

export default DeniedCard