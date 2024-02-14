import React, { memo } from 'react'

export default memo(function ArrowDown() {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <mask
        id="a"
        style={{
          maskType: 'alpha',
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={24}
        height={24}
      >
        <path transform="rotate(-90 0 24)" fill="#D9D9D9" d="M0 24H24V48H0z" />
      </mask>
      <g mask="url(#a)">
        <path
          d="M17.3 10.7l-4.6 4.6c-.1.1-.208.17-.324.211a1.1 1.1 0 01-.375.063c-.134 0-.259-.02-.375-.063a.871.871 0 01-.325-.212l-4.6-4.6a.948.948 0 01-.275-.7c0-.283.091-.516.275-.7a.948.948 0 01.7-.275c.283 0 .516.092.7.275l3.9 3.9 3.9-3.9a.948.948 0 01.7-.275c.283 0 .516.092.7.275a.948.948 0 01.275.7.948.948 0 01-.275.7z"
          fill="#FFFFFF"
        />
      </g>
    </svg>
  )
})
