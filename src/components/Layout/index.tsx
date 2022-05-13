import { Typography } from "@mui/material";
import React from "react";
import { ParentCotainer, HeaderComponent, FooterComponent } from "./styles";

export default function Layout(props: any) {
  return (
    <ParentCotainer>
      {/* <HeaderComponent />
      <div style={{height: "70%", overflow: 'scroll'}}> */}
      {props.children}  
      {/* </div>
      <FooterComponent>
          <Typography style={{color: 'white', marginTop: 40}}>
              Made with ❤️ powered by Next
          </Typography>
        </FooterComponent> */}
    </ParentCotainer>
  );
}
