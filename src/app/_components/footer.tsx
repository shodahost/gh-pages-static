import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-red-600  dark:bg-black">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row justify-between">
          <h3 className="text-white text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            This stuff feels weird.
          </h3>
          <div className="flex flex-col  lg:pl-4">
            <h6>Here's a haiku about machine learning:</h6>
            <blockquote className="italic py-4 text-xl">
              Data flows like streams <br />
              Algorithms learn, adapt <br />
              Machines grasp patterns <br />
            </blockquote>
            <a
              href={`https://anthropic.com/${EXAMPLE_PATH}`}
              className=" font-bold  hover:underline text-white"
            >
              written by a machine (Claude.ai)
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
