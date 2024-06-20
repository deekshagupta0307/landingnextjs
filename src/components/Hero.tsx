import { Button } from "./ui/button";

export function Hero() {
  return (
  <div className="min-h-[600px] bg-purple-950 flex justify-center items-center">
    <div className=" flex flex-col gap-6 items-center pb-10">
      <div className="space-y-4">
<div className="absolute bottom-0 left-0 w-full overflow-hidden">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className="relative block fill-purple-50"></path>
    </svg>
</div>
        <h1 className="text-xl sm:text-4xl lg:text-6xl font-semibold text-center text-white">
            Data <span className="border-b-4 border-green-400 no-underline inline-block">tailored</span> to <br />your needs.</h1>            
      </div>
      <Button className="mr-10 mt-8 text-purple-950 bg-green-400 hover:bg-green-500 font-semibold rounded-none">Learn More</Button>
    </div>
  </div>
  
 );

}
