
import { ReactNode } from "react"


export type TRoute = {
    path:string,
    element:ReactNode
  }

export type TUserPath = {
  name?:string
  path?:string,
  icon?:ReactNode
  element?:ReactNode,
  children?: TUserPath[]
}

export type TSidebarItem = {
  key: string;
  label: string | ReactNode; 
  icon?: ReactNode;
  children?: TSidebarItem[]; 
};