import React from "react";
import style from "./StepLine.module.scss";
import { useMediaQuery } from "react-responsive";

export default function StepLine({
  step,
  selectedIndex,
  onSelectStep,
}: {
  step: string[];
  selectedIndex: number;
  onSelectStep: any;
}) {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  if (step.length <= 0) {
    return "No step found";
  }

  return (
    <div className={isMobile && style.mobile}>
      <div className={style.steps_container}>
        {!isMobile && <div className={style.line}></div>}
        {step.map((item, index) => (
          <div
            key={index}
            className={
              index === selectedIndex
                ? `${style.selecte_item} ${style.step}`
                : style.step
            }
            onClick={() => onSelectStep(index)}
          >
            {!isMobile && <div className={style.step_title}>{item}</div>}
            <div className={style.step_cycle}></div>
          </div>
        ))}
      </div>
    </div>
  );
}

// <!DOCTYPE html>
// <html lang="en">
// <head>
// <meta charset="UTF-8">
// <meta name="viewport" content="width=device-width, initial-scale=1.0">
// <title>Horizontal Step-by-Step Guide</title>
// <style>
//     body {
//         font-family: Arial, sans-serif;
//         padding: 20px;
//     }
//     .steps-container {
//         display: flex;
//         align-items: center;
//         position: relative;
//     }
//     .step {
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//         position: relative;
//     }
//     .step-number {
//         width: 20px;
//         height: 20px;
//         background-color: white;
//         color: #000;
//         text-align: center;
//         line-height: 30px;
//         border-radius: 50%;
//         font-weight: bold;
//         margin-bottom: 10px;
//         border: 2px solid gray;
//         margin-left: 150px;
//     }
//     .step-title {
//         text-align: center;
//           margin-left: 150px;
//     }
//     .step-content {
//         width: 300x;
//         text-align: center;
//     }
//     .line {
//         height: 2px;
//         background-color: gray;
//         position: absolute;
//         top: 55%;
//         left: 0;
//         right: 50px;
//         transform: translateY(-1px); /* Center the line vertically */
//     }
// </style>
// </head>
// <body>
//     <div class="steps-container">
//         <div class="line"></div>
//         <div class="step">
//             <div class="step-title">Step 1 Title</div>
//             <div class="step-number"></div>
//         </div>
//         <div class="step">
//             <div class="step-title">Step 2 Title</div>
//             <div class="step-number"></div>
//         </div>
//         <div class="step">
//              <div class="step-title">Step 3 Title</div>
//             <div class="step-number"></div>
//         </div>
//         <!-- Add more steps as needed -->
//     </div>
// </body>
// </html>
