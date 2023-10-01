import Button from "./Button";

function Navbar({ home, features, pricing, faqs, about, randomNumber }) {
  return (
    <nav className="w-full h-16 bg-gray-50 text-black flex justify-between items-center pr-5 text-base">
      <div className="ml-12">
        <h2 className="mb-6">
          <Button randomNumber={(randomNumber = "Random NO")} />
        </h2>
      </div>
      <ul className="flex gap-x-12 mr-12 cursor-pointer">
        <li>
          <a className="text-blue hover:underline underline-offset-8 ">
            {home}
          </a>
        </li>
        <li>
          <a className="text-blue hover:underline underline-offset-8 ">
            {features}
          </a>
        </li>
        <li>
          <a className="text-blue hover:underline underline-offset-8 ">
            {pricing}
          </a>
        </li>
        <li>
          <a className="text-blue hover:underline underline-offset-8 ">
            {faqs}
          </a>
        </li>
        <li>
          <a className="text-blue hover:underline underline-offset-8 ">
            {about}
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
