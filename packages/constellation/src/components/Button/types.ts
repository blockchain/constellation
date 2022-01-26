import { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonComponentProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
}

export type { ButtonComponentProps }
