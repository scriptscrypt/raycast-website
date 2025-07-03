import React from 'react';

interface KeyboardContentProps {
  pressedKeys: Set<string>;
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
      fontSize="16"
      letterSpacing="0em"
    >
      {label}
    </text>
  </g>
);

const KeyboardContent: React.FC<KeyboardContentProps> = ({
  pressedKeys
}) => {
  const keyWidth = 64;
  const keyHeight = 64;
  const xGap = 5;
  const yGap = 5;
  const startX = 5;
  const startY = 5;

  const keys = [
    // code property matches KeyboardEvent.code
    // Row 1 (Top)
    { code: 'Escape', x: startX, y: startY, width: keyWidth, height: keyHeight, label: 'Esc' },
    { code: 'F1', x: startX + 1.5*keyWidth, y: startY, width: keyWidth, height: keyHeight, label: 'F1' },
    { code: 'F2', x: startX + 2.5*keyWidth + xGap, y: startY, width: keyWidth, height: keyHeight, label: 'F2' },
    { code: 'F3', x: startX + 3.5*keyWidth + 2*xGap, y: startY, width: keyWidth, height: keyHeight, label: 'F3' },
    { code: 'F4', x: startX + 4.5*keyWidth + 3*xGap, y: startY, width: keyWidth, height: keyHeight, label: 'F4' },
    { code: 'F5', x: startX + 5.5*keyWidth + 4.5*xGap, y: startY, width: keyWidth, height: keyHeight, label: 'F5' },
    { code: 'F6', x: startX + 6.5*keyWidth + 5.5*xGap, y: startY, width: keyWidth, height: keyHeight, label: 'F6' },
    { code: 'F7', x: startX + 7.5*keyWidth + 6.5*xGap, y: startY, width: keyWidth, height: keyHeight, label: 'F7' },
    { code: 'F8', x: startX + 8.5*keyWidth + 7.5*xGap, y: startY, width: keyWidth, height: keyHeight, label: 'F8' },
    { code: 'F9', x: startX + 9.5*keyWidth + 8.5*xGap, y: startY, width: keyWidth, height: keyHeight, label: 'F9' },
    
    // Row 2 (Numbers)
    { code: 'Backquote', x: startX, y: startY + keyHeight + yGap, width: keyWidth, height: keyHeight, label: '`' },
    { code: 'Digit1', x: startX + keyWidth + xGap, y: startY + keyHeight + yGap, width: keyWidth, height: keyHeight, label: '1' },
    { code: 'Digit2', x: startX + 2*keyWidth + 2*xGap, y: startY + keyHeight + yGap, width: keyWidth, height: keyHeight, label: '2' },
    { code: 'Digit3', x: startX + 3*keyWidth + 3*xGap, y: startY + keyHeight + yGap, width: keyWidth, height: keyHeight, label: '3' },
    { code: 'Digit4', x: startX + 4*keyWidth + 4*xGap, y: startY + keyHeight + yGap, width: keyWidth, height: keyHeight, label: '4' },
    { code: 'Digit5', x: startX + 5*keyWidth + 5*xGap, y: startY + keyHeight + yGap, width: keyWidth, height: keyHeight, label: '5' },
    { code: 'Digit6', x: startX + 6*keyWidth + 6*xGap, y: startY + keyHeight + yGap, width: keyWidth, height: keyHeight, label: '6' },
    { code: 'Digit7', x: startX + 7*keyWidth + 7*xGap, y: startY + keyHeight + yGap, width: keyWidth, height: keyHeight, label: '7' },
    { code: 'Digit8', x: startX + 8*keyWidth + 8*xGap, y: startY + keyHeight + yGap, width: keyWidth, height: keyHeight, label: '8' },
    { code: 'Digit9', x: startX + 9*keyWidth + 9*xGap, y: startY + keyHeight + yGap, width: keyWidth, height: keyHeight, label: '9' },
    { code: 'Digit0', x: startX + 10*keyWidth + 10*xGap, y: startY + keyHeight + yGap, width: keyWidth, height: keyHeight, label: '0' },
    
    // Row 3 (QWERTY)
    { code: 'Tab', x: startX, y: startY + 2*(keyHeight + yGap), width: keyWidth*1.5, height: keyHeight, label: 'Tab' },
    { code: 'KeyQ', x: startX + 1.5*keyWidth + xGap, y: startY + 2*(keyHeight + yGap), width: keyWidth, height: keyHeight, label: 'Q' },
    { code: 'KeyW', x: startX + 2.5*keyWidth + 2*xGap, y: startY + 2*(keyHeight + yGap), width: keyWidth, height: keyHeight, label: 'W' },
    { code: 'KeyE', x: startX + 3.5*keyWidth + 3*xGap, y: startY + 2*(keyHeight + yGap), width: keyWidth, height: keyHeight, label: 'E' },
    { code: 'KeyR', x: startX + 4.5*keyWidth + 4*xGap, y: startY + 2*(keyHeight + yGap), width: keyWidth, height: keyHeight, label: 'R' },
    { code: 'KeyT', x: startX + 5.5*keyWidth + 5*xGap, y: startY + 2*(keyHeight + yGap), width: keyWidth, height: keyHeight, label: 'T' },
    { code: 'KeyY', x: startX + 6.5*keyWidth + 6*xGap, y: startY + 2*(keyHeight + yGap), width: keyWidth, height: keyHeight, label: 'Y' },
    { code: 'KeyU', x: startX + 7.5*keyWidth + 7*xGap, y: startY + 2*(keyHeight + yGap), width: keyWidth, height: keyHeight, label: 'U' },
    { code: 'KeyI', x: startX + 8.5*keyWidth + 8*xGap, y: startY + 2*(keyHeight + yGap), width: keyWidth, height: keyHeight, label: 'I' },
    { code: 'KeyO', x: startX + 9.5*keyWidth + 9*xGap, y: startY + 2*(keyHeight + yGap), width: keyWidth, height: keyHeight, label: 'O' },
    { code: 'KeyP', x: startX + 10.5*keyWidth + 10*xGap, y: startY + 2*(keyHeight + yGap), width: keyWidth, height: keyHeight, label: 'P' },
    
    // Row 4 (ASDF)
    { code: 'CapsLock', x: startX, y: startY + 3*(keyHeight + yGap), width: keyWidth*1.75, height: keyHeight, label: 'Caps Lock' },
    { code: 'KeyA', x: startX + 1.75*keyWidth + xGap, y: startY + 3*(keyHeight + yGap), width: keyWidth, height: keyHeight, label: 'A' },
    { code: 'KeyS', x: startX + 2.75*keyWidth + 2*xGap, y: startY + 3*(keyHeight + yGap), width: keyWidth, height: keyHeight, label: 'S' },
    { code: 'KeyD', x: startX + 3.75*keyWidth + 3*xGap, y: startY + 3*(keyHeight + yGap), width: keyWidth, height: keyHeight, label: 'D' },
    { code: 'KeyF', x: startX + 4.75*keyWidth + 4*xGap, y: startY + 3*(keyHeight + yGap), width: keyWidth, height: keyHeight, label: 'F' },
    { code: 'KeyG', x: startX + 5.75*keyWidth + 5*xGap, y: startY + 3*(keyHeight + yGap), width: keyWidth, height: keyHeight, label: 'G' },
    { code: 'KeyH', x: startX + 6.75*keyWidth + 6*xGap, y: startY + 3*(keyHeight + yGap), width: keyWidth, height: keyHeight, label: 'H' },
    { code: 'KeyJ', x: startX + 7.75*keyWidth + 7*xGap, y: startY + 3*(keyHeight + yGap), width: keyWidth, height: keyHeight, label: 'J' },
    { code: 'KeyK', x: startX + 8.75*keyWidth + 8*xGap, y: startY + 3*(keyHeight + yGap), width: keyWidth, height: keyHeight, label: 'K' },
    { code: 'KeyL', x: startX + 9.75*keyWidth + 9*xGap, y: startY + 3*(keyHeight + yGap), width: keyWidth, height: keyHeight, label: 'L' },
    
    // Row 5 (ZXCV)
    { code: 'ShiftLeft', x: startX, y: startY + 4*(keyHeight + yGap), width: keyWidth*2.25, height: keyHeight, label: 'Shift' },
    { code: 'KeyZ', x: startX + 2.25*keyWidth + xGap, y: startY + 4*(keyHeight + yGap), width: keyWidth, height: keyHeight, label: 'Z' },
    { code: 'KeyX', x: startX + 3.25*keyWidth + 2*xGap, y: startY + 4*(keyHeight + yGap), width: keyWidth, height: keyHeight, label: 'X' },
    { code: 'KeyC', x: startX + 4.25*keyWidth + 3*xGap, y: startY + 4*(keyHeight + yGap), width: keyWidth, height: keyHeight, label: 'C' },
    { code: 'KeyV', x: startX + 5.25*keyWidth + 4*xGap, y: startY + 4*(keyHeight + yGap), width: keyWidth, height: keyHeight, label: 'V' },
    { code: 'KeyB', x: startX + 6.25*keyWidth + 5*xGap, y: startY + 4*(keyHeight + yGap), width: keyWidth, height: keyHeight, label: 'B' },
    { code: 'KeyN', x: startX + 7.25*keyWidth + 6*xGap, y: startY + 4*(keyHeight + yGap), width: keyWidth, height: keyHeight, label: 'N' },
    { code: 'KeyM', x: startX + 8.25*keyWidth + 7*xGap, y: startY + 4*(keyHeight + yGap), width: keyWidth, height: keyHeight, label: 'M' },
    { code: 'Comma', x: startX + 9.25*keyWidth + 8*xGap, y: startY + 4*(keyHeight + yGap), width: keyWidth, height: keyHeight, label: ',' },
    
    // Row 6 (Bottom)
    { code: 'Function', x: startX, y: startY + 5*(keyHeight + yGap), width: keyWidth, height: keyHeight, label: 'fn' },
    { code: 'ControlLeft', x: startX + keyWidth + xGap, y: startY + 5*(keyHeight + yGap), width: keyWidth, height: keyHeight, label: '^' },
    { code: 'AltLeft', x: startX + 2*keyWidth + 2*xGap, y: startY + 5*(keyHeight + yGap), width: keyWidth, height: keyHeight, label: '⌥' },
    { id: 'command-key-left', code: 'MetaLeft', x: startX + 3*keyWidth + 3*xGap, y: startY + 5*(keyHeight + yGap), width: keyWidth*1.25, height: keyHeight, label: '⌘' },
    { id: 'space-key', code: 'Space', x: startX + 4.25*keyWidth + 4*xGap, y: startY + 5*(keyHeight + yGap), width: keyWidth*5.5, height: keyHeight, label: '' },
  ];

  const keyboardWidth = startX * 2 + 11.5 * keyWidth + 10 * xGap;
  const keyboardHeight = startY * 2 + 6 * keyHeight + 5 * yGap;

  return (
    <svg width="100%" height="100%" viewBox={`0 0 ${keyboardWidth} ${keyboardHeight}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_f_46_388)">
        <path d={`M${keyboardWidth/2} ${keyboardHeight}C${keyboardWidth*0.8} ${keyboardHeight}, ${keyboardWidth} ${keyboardHeight*0.8}, ${keyboardWidth} ${keyboardHeight/2}C${keyboardWidth} ${keyboardHeight*0.2}, ${keyboardWidth*0.8} 0, ${keyboardWidth/2} 0C${keyboardWidth*0.2} 0, 0 ${keyboardHeight*0.2}, 0 ${keyboardHeight/2}C0 ${keyboardHeight*0.8}, ${keyboardWidth*0.2} ${keyboardHeight}, ${keyboardWidth/2} ${keyboardHeight}Z`} fill="url(#paint0_linear_46_388)"/>
      </g>
      
      {keys.map((key, index) => (
        <Key key={index} {...key} pressed={key.code ? pressedKeys.has(key.code) : false} />
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