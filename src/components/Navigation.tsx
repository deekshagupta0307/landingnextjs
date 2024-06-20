import Link from "next/link";

const navList =[
    {
        title: "Apply for access",
        href: "/applyforaccess",
    },
];

export  function Navigation() {
  return (

  <nav>
    <div className="pt-20 flex items-center justify-between bg-purple-950 h-20 z-50">
    <p className="ml-20 text-xl text-white font-bold italic">workit</p>
        <ul className="flex items-center gap-4">
        {navList.map((nav) => {
            return(
                <li key={nav.title}>
                  <Link className="mr-20 text-white text-semibold border-b-2 border-green-400 no-underline inline-block hover:text-green-400"
                  href={nav.href}>{nav.title}</Link>  
                </li>
            );
        })} 
        </ul>
    </div>
  </nav>
  );
}


