import React from 'react';

interface KeyboardContentProps {
  isCommandPressed: boolean;
  isSpacePressed: boolean;
}

const Key: React.FC<{
  x: number;
  y: number;
  width: number;
  height: number;
  label: string;
  id?: string;
  label_x_offset?: number;
  label_y_offset?: number;
  pressed?: boolean;
}> = ({ x, y, width, height, label, pressed, label_x_offset, label_y_offset, id }) => (
  <g className={`key-group ${pressed ? 'translate-y-1' : ''}`} id={id}>
    <rect
      className="keyboard-key"
      x={x}
      y={y}
      width={width}
      height={height}
      rx="7.5"
      fill="black"
    />
    <text
      className="key-text"
      x={x + (label_x_offset || width / 2)}
      y={y + (label_y_offset || height / 2) + 5} 
      textAnchor="middle"
      fontFamily="Inter"
      fontSize="16"
      letterSpacing="0em"
    >
      {label}
    </text>
  </g>
);

const KeyboardContent: React.FC<KeyboardContentProps> = ({
  isCommandPressed,
  isSpacePressed,
}) => {
  const keyWidth = 58;
  const keyHeight = 57;
  const xGap = 5;
  const yGap = 5;
  const startX = 5;
  const startY = 5;

  const keys = [
    // Row 1 (Top)
    { x: startX, y: startY, width: keyWidth, height: keyHeight, label: 'Esc' },
    { x: startX + 1.5*keyWidth, y: startY, width: keyWidth, height: keyHeight, label: 'F1' },
    { x: startX + 2.5*keyWidth + xGap, y: startY, width: keyWidth, height: keyHeight, label: 'F2' },
    { x: startX + 3.5*keyWidth + 2*xGap, y: startY, width: keyWidth, height: keyHeight, label: 'F3' },
    { x: startX + 4.5*keyWidth + 3*xGap, y: startY, width: keyWidth, height: keyHeight, label: 'F4' },
    { x: startX + 5.5*keyWidth + 4.5*xGap, y: startY, width: keyWidth, height: keyHeight, label: 'F5' },
    { x: startX + 6.5*keyWidth + 5.5*xGap, y: startY, width: keyWidth, height: keyHeight, label: 'F6' },
    { x: startX + 7.5*keyWidth + 6.5*xGap, y: startY, width: keyWidth, height: keyHeight, label: 'F7' },
    { x: startX + 8.5*keyWidth + 7.5*xGap, y: startY, width: keyWidth, height: keyHeight, label: 'F8' },
    { x: startX + 9.5*keyWidth + 8.5*xGap, y: startY, width: keyWidth, height: keyHeight, label: 'F9' },
    { x: startX + 10.5*keyWidth + 9.5*xGap, y: startY, width: keyWidth, height: keyHeight, label: 'F10' },
    { x: startX + 11.5*keyWidth + 10.5*xGap, y: startY, width: keyWidth, height: keyHeight, label: 'F11' },
    { x: startX + 12.5*keyWidth + 11.5*xGap, y: startY, width: keyWidth, height: keyHeight, label: 'F12' },
    { x: startX + 13.5*keyWidth + 12.5*xGap, y: startY, width: keyWidth, height: keyHeight, label: 'Eject' },

    // Row 2 (Numbers)
    { x: startX, y: startY + keyHeight + yGap, width: keyWidth, height: keyHeight, label: '`' },
    { x: startX + keyWidth + xGap, y: startY + keyHeight + yGap, width: keyWidth, height: keyHeight, label: '1' },
    { x: startX + 2*keyWidth + 2*xGap, y: startY + keyHeight + yGap, width: keyWidth, height: keyHeight, label: '2' },
    { x: startX + 3*keyWidth + 3*xGap, y: startY + keyHeight + yGap, width: keyWidth, height: keyHeight, label: '3' },
    { x: startX + 4*keyWidth + 4*xGap, y: startY + keyHeight + yGap, width: keyWidth, height: keyHeight, label: '4' },
    { x: startX + 5*keyWidth + 5*xGap, y: startY + keyHeight + yGap, width: keyWidth, height: keyHeight, label: '5' },
    { x: startX + 6*keyWidth + 6*xGap, y: startY + keyHeight + yGap, width: keyWidth, height: keyHeight, label: '6' },
    { x: startX + 7*keyWidth + 7*xGap, y: startY + keyHeight + yGap, width: keyWidth, height: keyHeight, label: '7' },
    { x: startX + 8*keyWidth + 8*xGap, y: startY + keyHeight + yGap, width: keyWidth, height: keyHeight, label: '8' },
    { x: startX + 9*keyWidth + 9*xGap, y: startY + keyHeight + yGap, width: keyWidth, height: keyHeight, label: '9' },
    { x: startX + 10*keyWidth + 10*xGap, y: startY + keyHeight + yGap, width: keyWidth, height: keyHeight, label: '0' },
    { x: startX + 11*keyWidth + 11*xGap, y: startY + keyHeight + yGap, width: keyWidth, height: keyHeight, label: '-' },
    { x: startX + 12*keyWidth + 12*xGap, y: startY + keyHeight + yGap, width: keyWidth, height: keyHeight, label: '=' },
    { x: startX + 13*keyWidth + 13*xGap, y: startY + keyHeight + yGap, width: keyWidth*1.5, height: keyHeight, label: 'Delete' },

    // Row 3 (QWERTY)
    { x: startX, y: startY + 2*(keyHeight + yGap), width: keyWidth*1.5, height: keyHeight, label: 'Tab' },
    { x: startX + 1.5*keyWidth + xGap, y: startY + 2*(keyHeight + yGap), width: keyWidth, height: keyHeight, label: 'Q' },
    { x: startX + 2.5*keyWidth + 2*xGap, y: startY + 2*(keyHeight + yGap), width: keyWidth, height: keyHeight, label: 'W' },
    { x: startX + 3.5*keyWidth + 3*xGap, y: startY + 2*(keyHeight + yGap), width: keyWidth, height: keyHeight, label: 'E' },
    { x: startX + 4.5*keyWidth + 4*xGap, y: startY + 2*(keyHeight + yGap), width: keyWidth, height: keyHeight, label: 'R' },
    { x: startX + 5.5*keyWidth + 5*xGap, y: startY + 2*(keyHeight + yGap), width: keyWidth, height: keyHeight, label: 'T' },
    { x: startX + 6.5*keyWidth + 6*xGap, y: startY + 2*(keyHeight + yGap), width: keyWidth, height: keyHeight, label: 'Y' },
    { x: startX + 7.5*keyWidth + 7*xGap, y: startY + 2*(keyHeight + yGap), width: keyWidth, height: keyHeight, label: 'U' },
    { x: startX + 8.5*keyWidth + 8*xGap, y: startY + 2*(keyHeight + yGap), width: keyWidth, height: keyHeight, label: 'I' },
    { x: startX + 9.5*keyWidth + 9*xGap, y: startY + 2*(keyHeight + yGap), width: keyWidth, height: keyHeight, label: 'O' },
    { x: startX + 10.5*keyWidth + 10*xGap, y: startY + 2*(keyHeight + yGap), width: keyWidth, height: keyHeight, label: 'P' },
    { x: startX + 11.5*keyWidth + 11*xGap, y: startY + 2*(keyHeight + yGap), width: keyWidth, height: keyHeight, label: '[' },
    { x: startX + 12.5*keyWidth + 12*xGap, y: startY + 2*(keyHeight + yGap), width: keyWidth, height: keyHeight, label: ']' },
    { x: startX + 13.5*keyWidth + 13*xGap, y: startY + 2*(keyHeight + yGap), width: keyWidth, height: keyHeight, label: '\\' },

    // Row 4 (ASDF)
    { x: startX, y: startY + 3*(keyHeight + yGap), width: keyWidth*1.75, height: keyHeight, label: 'Caps Lock' },
    { x: startX + 1.75*keyWidth + xGap, y: startY + 3*(keyHeight + yGap), width: keyWidth, height: keyHeight, label: 'A' },
    { x: startX + 2.75*keyWidth + 2*xGap, y: startY + 3*(keyHeight + yGap), width: keyWidth, height: keyHeight, label: 'S' },
    { x: startX + 3.75*keyWidth + 3*xGap, y: startY + 3*(keyHeight + yGap), width: keyWidth, height: keyHeight, label: 'D' },
    { x: startX + 4.75*keyWidth + 4*xGap, y: startY + 3*(keyHeight + yGap), width: keyWidth, height: keyHeight, label: 'F' },
    { x: startX + 5.75*keyWidth + 5*xGap, y: startY + 3*(keyHeight + yGap), width: keyWidth, height: keyHeight, label: 'G' },
    { x: startX + 6.75*keyWidth + 6*xGap, y: startY + 3*(keyHeight + yGap), width: keyWidth, height: keyHeight, label: 'H' },
    { x: startX + 7.75*keyWidth + 7*xGap, y: startY + 3*(keyHeight + yGap), width: keyWidth, height: keyHeight, label: 'J' },
    { x: startX + 8.75*keyWidth + 8*xGap, y: startY + 3*(keyHeight + yGap), width: keyWidth, height: keyHeight, label: 'K' },
    { x: startX + 9.75*keyWidth + 9*xGap, y: startY + 3*(keyHeight + yGap), width: keyWidth, height: keyHeight, label: 'L' },
    { x: startX + 10.75*keyWidth + 10*xGap, y: startY + 3*(keyHeight + yGap), width: keyWidth, height: keyHeight, label: ';' },
    { x: startX + 11.75*keyWidth + 11*xGap, y: startY + 3*(keyHeight + yGap), width: keyWidth, height: keyHeight, label: "'" },
    { x: startX + 12.75*keyWidth + 12*xGap, y: startY + 3*(keyHeight + yGap), width: keyWidth*1.75, height: keyHeight, label: 'Return' },

    // Row 5 (ZXCV)
    { x: startX, y: startY + 4*(keyHeight + yGap), width: keyWidth*2.25, height: keyHeight, label: 'Shift' },
    { x: startX + 2.25*keyWidth + xGap, y: startY + 4*(keyHeight + yGap), width: keyWidth, height: keyHeight, label: 'Z' },
    { x: startX + 3.25*keyWidth + 2*xGap, y: startY + 4*(keyHeight + yGap), width: keyWidth, height: keyHeight, label: 'X' },
    { x: startX + 4.25*keyWidth + 3*xGap, y: startY + 4*(keyHeight + yGap), width: keyWidth, height: keyHeight, label: 'C' },
    { x: startX + 5.25*keyWidth + 4*xGap, y: startY + 4*(keyHeight + yGap), width: keyWidth, height: keyHeight, label: 'V' },
    { x: startX + 6.25*keyWidth + 5*xGap, y: startY + 4*(keyHeight + yGap), width: keyWidth, height: keyHeight, label: 'B' },
    { x: startX + 7.25*keyWidth + 6*xGap, y: startY + 4*(keyHeight + yGap), width: keyWidth, height: keyHeight, label: 'N' },
    { x: startX + 8.25*keyWidth + 7*xGap, y: startY + 4*(keyHeight + yGap), width: keyWidth, height: keyHeight, label: 'M' },
    { x: startX + 9.25*keyWidth + 8*xGap, y: startY + 4*(keyHeight + yGap), width: keyWidth, height: keyHeight, label: ',' },
    { x: startX + 10.25*keyWidth + 9*xGap, y: startY + 4*(keyHeight + yGap), width: keyWidth, height: keyHeight, label: '.' },
    { x: startX + 11.25*keyWidth + 10*xGap, y: startY + 4*(keyHeight + yGap), width: keyWidth, height: keyHeight, label: '/' },
    { x: startX + 12.25*keyWidth + 11*xGap, y: startY + 4*(keyHeight + yGap), width: keyWidth*2.25, height: keyHeight, label: 'Shift' },

    // Row 6 (Bottom)
    { x: startX, y: startY + 5*(keyHeight + yGap), width: keyWidth, height: keyHeight, label: 'fn' },
    { x: startX + keyWidth + xGap, y: startY + 5*(keyHeight + yGap), width: keyWidth, height: keyHeight, label: '^' },
    { x: startX + 2*keyWidth + 2*xGap, y: startY + 5*(keyHeight + yGap), width: keyWidth, height: keyHeight, label: '⌥' },
    { id: 'command-key-left', x: startX + 3*keyWidth + 3*xGap, y: startY + 5*(keyHeight + yGap), width: keyWidth*1.25, height: keyHeight, label: '⌘', pressed: isCommandPressed },
    { id: 'space-key', x: startX + 4.25*keyWidth + 4*xGap, y: startY + 5*(keyHeight + yGap), width: keyWidth*5.5, height: keyHeight, label: '', pressed: isSpacePressed },
    { id: 'command-key-right', x: startX + 9.75*keyWidth + 5*xGap, y: startY + 5*(keyHeight + yGap), width: keyWidth*1.25, height: keyHeight, label: '⌘', pressed: isCommandPressed },
    { x: startX + 11*keyWidth + 6*xGap, y: startY + 5*(keyHeight + yGap), width: keyWidth, height: keyHeight, label: '⌥' },
    // Arrow keys group
    { x: startX + 12*keyWidth + 7*xGap, y: startY + 5*(keyHeight + yGap), width: keyWidth, height: keyHeight/2 - 1, label: '◀', label_y_offset: 15},
    { x: startX + 12*keyWidth + 7*xGap, y: startY + 5.5*keyHeight + yGap - 1, width: keyWidth, height: keyHeight/2 - 1, label: '▶', label_y_offset: 15},
    { x: startX + 13*keyWidth + 8*xGap, y: startY + 5*(keyHeight + yGap), width: keyWidth, height: keyHeight, label: '▲' },
  ];

  const keyboardWidth = startX * 2 + 14.5 * keyWidth + 14 * xGap;
  const keyboardHeight = startY * 2 + 6 * keyHeight + 5 * yGap;

  return (
    <svg width="100%" height="100%" viewBox={`0 0 ${keyboardWidth} ${keyboardHeight}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_f_46_388)">
        <path d={`M${keyboardWidth/2} ${keyboardHeight}C${keyboardWidth*0.8} ${keyboardHeight}, ${keyboardWidth} ${keyboardHeight*0.8}, ${keyboardWidth} ${keyboardHeight/2}C${keyboardWidth} ${keyboardHeight*0.2}, ${keyboardWidth*0.8} 0, ${keyboardWidth/2} 0C${keyboardWidth*0.2} 0, 0 ${keyboardHeight*0.2}, 0 ${keyboardHeight/2}C0 ${keyboardHeight*0.8}, ${keyboardWidth*0.2} ${keyboardHeight}, ${keyboardWidth/2} ${keyboardHeight}Z`} fill="url(#paint0_linear_46_388)"/>
      </g>
      
      {keys.map((key, index) => (
        <Key key={index} {...key} />
      ))}

      <defs>
        <filter id="filter0_f_46_388" x="-5" y="-5" width={keyboardWidth + 10} height={keyboardHeight + 10} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_46_388"/>
        </filter>
        <linearGradient id="paint0_linear_46_388" x1={keyboardWidth/2} y1="0" x2={keyboardWidth/2} y2={keyboardHeight} gradientUnits="userSpaceOnUse">
          <stop stopColor="#121212"/>
          <stop offset="1" stopColor="#121212" stopOpacity="0"/>
        </linearGradient>
      </defs>
    </svg>
  );
};

export default KeyboardContent;