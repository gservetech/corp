import Link from "next/link";

import React from "react";

function Header() {
  return (
    <div className="w-full absolute text-white z-10">
      <nav className="container relative flex flex-wrap items-center justify-between mx-auto p-8">
        <Link href="/" className="font-bond text-3xl">
          Home
        </Link>
        <div className="space-x-4 text-xl">
          <Link href="/performance">Performace</Link>
          <Link href="/reliability">reliability</Link>
          <Link href="/scale">scale</Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;
