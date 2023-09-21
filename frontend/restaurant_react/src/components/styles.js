import { TableCell, tableCellClasses, TableRow } from "@mui/material";
import styled from "styled-components";

export const StyledTableCell = styled(TableCell)(
  ({ theme, bgcolor, fontWeight }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: bgcolor,
      color: "white",
      fontSize: 20,
      fontWeight: fontWeight,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 20,
    },
  })
);

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme?.palette?.action?.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
export const Option = styled.div`
  padding: 10px;
  font-size: 25px;
  font-weight: 300;
  border-radius: 10px;
  cursor: pointer;
  border: 1px solid lightgray;
  transition: all;
  margin-bottom: 20px;
  &:hover {
    background-color: #15857f;
    color: white;
  }
`;
export const MYUL = styled.ul`
  line-height: 2.5;
  word-spacing: 1.2;
  font-weight: 400;
  padding-left: 20px;
`;
export const MYP = styled.p`
  font-weight: bolder;
`;
// box shadow
export const Flex = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
export const StripeItem = styled.div`
  padding: 35px;
  border-radius: 15px;
  width: 400px;
  display: grid;
  align-items: center;
  box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.3);
`;
