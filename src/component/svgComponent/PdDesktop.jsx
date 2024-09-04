import React from "react";

function PdDesktop() {
  return (
    <svg width="w-full" height="16" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fill-rule="evenodd">
        {/* customized path and g, figured. */}
        <path transform="translate(-30)" fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z"/>
        <g transform="translate(180)" fill="#CEE3E9">
          <rect width="6" height="16" rx="3"/>
          <rect x="14" width="6" height="16" rx="3"/>
        </g>
      </g>
    </svg>
  );
}

export default PdDesktop