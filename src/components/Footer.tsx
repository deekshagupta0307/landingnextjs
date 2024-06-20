import { TwitterLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"


export function Footer() {
  return (
    <footer>
      <div className="mb-30 text-center text-xl font-bold pt-20 pb-4 text-purple-950">Workit 
      <div className="flex justify-center text-xl text-slate-700 space-x-4 mt-6 mb-10">
      <TwitterLogoIcon />   
      <InstagramLogoIcon />
      <LinkedInLogoIcon />
      </div>
      </div>
    </footer>
  ) 
}
