import React from "react";
import Image from "next/image";

function Navbar() {
  return (
    <div>
      <nav className="flex items-center flex-row ml-8 pt-4 bg-transparent justify-between px-9">
        <div className="flex">
          <Image src="/Logo1.svg" width="30" height="30" alt="logo" />
          <span className="text-black text-center ml-4">
            Orna<span className="text-[#308967]">tredec</span>
          </span>
        </div>
        <div className="flex items-center text-center space-x-4">
          <span>Home</span>
          <span>Forum</span>
          <span>Produk</span>
          <span>Edukasi</span>
          <span>About</span>
        </div>
        <div>
          <button>login</button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
