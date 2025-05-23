import { NavLink } from "react-router-dom"
import { TSidebarItem, TUserPath } from "../types/sidebar.type"


export const sidebarItemsGenerator = (items:TUserPath[],role:string)=>{
     const adminSideBar = items.reduce((acc:TSidebarItem[],item)=>{
        if(item.name && item.path && item.icon){
          acc.push({
            key:item.name,
            icon:item.icon,
            label:<NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>
          })
        }
        // if(item.children){
        //   acc.push({
        //     key:item.name  ,
        //     icon:item.icon,
        //     label:item.name,
        //     children:item.children.map((child) =>{
        //       if(child?.name){
        //         return {
        //           key:child.name ,
        //           icon:item.icon,
        //           label:<NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>,
        //         }
        //        }
        //     }

        // )
        //   })
        // }
        return acc
       },[])

       return adminSideBar
    
}