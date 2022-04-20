import React from 'react'
import './Button.css'
import { motion } from 'framer-motion'

const STYLES = ['btn_primary', 'btn_outline'];

const SIZES = ['btn_medium', 'btn_large'];

const Button = ({
    children, type, onClick, buttonStyle, buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <motion.button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
    >
        {children}
    </motion.button>
  )
}

export default Button