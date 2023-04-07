import styled from "@emotion/styled";
import { fifthAccent, fourthAccent, primaryAccent, primaryDarkLight, secondaryAccent, tertiaryAccent } from "../../utils";
import { ImCross } from "react-icons/im";

export const DeniedContainer = styled("div")({
  display: "flex",
  flexDirection: "row",
  backgroundColor: primaryDarkLight,
  width: '400px',
  // height: '100px',
  boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
  margin: '10px',
  padding: '10px',
});

export const StyledIconDenied = styled(ImCross)({
  color: 'white',
  fontSize: '3rem',
});

export const IconContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '10px',
  backgroundColor: fifthAccent,
  width: 'auto !important',
})

export const DeniedTextContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'right',
  justifyContent: 'right',
  width: 'auto !important',
})

export const DeniedTitle = styled('h1')({
  color: 'gainsboro',
  fontWeight: '400',
  fontSize: '1.2rem',
  margin: '0px',
  padding: '0px',
  marginLeft: '10px',
})

export const DeniedNumber = styled('h1')({
  color: 'white',
  fontWeight: '500',
  fontSize: '1.6rem',
  margin: '0px',
  padding: '0px',
  marginLeft: '10px',
})