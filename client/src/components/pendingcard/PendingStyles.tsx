import styled from "@emotion/styled";
import { primaryAccent, primaryDarkLight, tertiaryAccent } from "../../utils";
import { RiFileCopyLine } from "react-icons/ri";

export const PendingContainer = styled("div")({
  display: "flex",
  flexDirection: "row",
  backgroundColor: primaryDarkLight,
  width: '400px',
  // height: '100px',
  boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
  margin: '10px',
  padding: '10px',
});

export const StyledIconPending = styled(RiFileCopyLine)({
  color: 'white',
  fontSize: '3rem',
});

export const IconContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '10px',
  backgroundColor: tertiaryAccent,
  width: 'auto !important',
})

//make a css component that puts the text on the right side of the card but keeps it in the same row

export const PendingTextContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'right',
  justifyContent: 'right',
  // padding: '10px',
  width: 'auto !important',
})

export const PendingTitle = styled('h1')({
  color: 'gainsboro',
  fontWeight: '400',
  fontSize: '1.2rem',
  margin: '0px',
  padding: '0px',
  marginLeft: '10px',
})

export const PendingNumber = styled('h1')({
  color: 'white',
  fontWeight: '500',
  fontSize: '1.6rem',
  margin: '0px',
  padding: '0px',
  marginLeft: '10px',
})