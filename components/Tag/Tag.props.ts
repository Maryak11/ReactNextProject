import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export interface TagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: 'small' | 'large'
  color: 'ghost' | 'red' | 'green' | 'primary' | 'gray'
  href?: string
  children: ReactNode
}
