import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Gradient from "../reUse/Gradient";

function Questions() {
  return (
    <section className='bg-[url("/faq-bg-line.svg")] pt-10 bg-no-repeat py-20'>
      <h2 className="text-[46px] font-bold text-center ">
        Frequently <Gradient>Asked Questions</Gradient>
      </h2>
      <div className="max-w-[1200px]  mx-auto p-5 space-y-8">
        <div>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography component="span" sx={{fontSize:'22px', fontWeight:"semibold"}}>Is my data secure?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{fontSize:'12px',}}>
                We cover a wide range of documents, including contracts, NDAs,
                compliance reports, and more.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography component="span" sx={{fontSize:'22px', fontWeight:"semibold"}}>
                What types of documents can Ai GoverningDocs generate?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{fontSize:'12px',}}>
                We cover a wide range of documents, including contracts, NDAs,
                compliance reports, and more.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography component="span" sx={{fontSize:'20px', fontWeight:"semibold"}}>
                Can I customize the documents?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{fontSize:'12px',}}>
                We cover a wide range of documents, including contracts, NDAs,
                compliance reports, and more.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export default Questions;
