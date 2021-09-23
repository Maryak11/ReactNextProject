import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export interface RaitingProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isEditable?: boolean
  raiting: number
  setRaiting?: (raitng: number) => void
}
