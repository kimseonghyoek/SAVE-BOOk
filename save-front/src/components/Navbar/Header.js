import React from "react";
import HeadItem from "./HeadItem";
import Input from "../Input";
import HItems from "../../Mobile/components/HItems";
import { Mobile, PC } from "../../Responsive/responsive";
import { NavItem } from "./NavItem";


const Header = () => {
  return (
    <>
      <PC>
        <div className="h-header bg-green flex items-center justify-between">
          <div className="p-3 flex flex-row items-center">
            <h1 className="text-middle pl-9 pr-9 text-white">SAVE BOOK</h1>
            <Input
              placeholder="search"
              styled="w-modal h-middle rounded-half p-2"
            ></Input>
          </div>
          <div className="flex flex-row items-center p-8">
            <div className="p-8">
              <ul className="flex flex-row text-white">
                {
                  NavItem.map(item => {
                    return (
                      <HeadItem name={item.name} link={item.link} key={item.key}/>
                    )
                  })
                }
              </ul>
            </div>
            <img
              className="rounded-test w-Mprofile h-Mprofile m-2"
              src={process.env.PUBLIC_URL + "/img/sb.png"}
            ></img>
            <p className="text-white p-5">User</p>
          </div>
        </div>
      </PC>
      <Mobile>
        <div className="h-header bg-green flex items-center justify-between p-4 text-white">
            <h1 className="text-middle2 p-3">SAVE BOOK</h1>
            <HItems/>
        </div>
      </Mobile>
    </>
  );
};

export default Header;
