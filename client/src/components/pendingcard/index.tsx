import React from 'react'
import { IconContainer, PendingContainer, PendingNumber, PendingTextContainer, PendingTitle, StyledIconPending } from './PendingStyles'
import { Divider } from '@mui/material'

const PendingCard = () => {
  return (
    <PendingContainer>
      <IconContainer>
        <StyledIconPending />
      </IconContainer>
      <PendingTextContainer>
        <PendingTitle>Pending Applications</PendingTitle>
        <PendingNumber>23</PendingNumber>
      </PendingTextContainer>
    </PendingContainer>
  )
}

export default PendingCard