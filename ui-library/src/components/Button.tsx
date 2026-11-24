import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'primary' }) => {
  const styles = {
    backgroundColor: variant === 'primary' ? '#c71585' : '#fff',
    color: variant === 'primary' ? '#fff' : '#c71585',
    border: '2px solid #c71585',
    padding: '10px 20px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '16px',
  }

  return (
    <button style={styles} onClick={onClick}>
      {children}
    </button>
  )
}