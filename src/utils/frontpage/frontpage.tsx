import React from "react";
import Link, { LinkProps } from "next/link";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { IconType } from "react-icons/lib";

const contactLists = [
  {
    icon: BsLinkedin,
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/yixuan-shen-309419253/",
  },
  {
    icon: IoMdMail,
    title: "Email",
    link: "mailto:yx2000999@gmail.com",
  },
  {
    icon: BsGithub,
    title: "GitHub",
    link: "https://github.com/Yixuan-Shen",
  },
];

interface ILinkButton {
  icon: IconType;
  i: number;
}

const IconButtonLink: React.ForwardRefExoticComponent<ILinkButton & LinkProps & React.RefAttributes<HTMLAnchorElement>> = React.forwardRef(
  (props, ref) => {
    return (
      <Link href={props.href as string} onClick={props.onClick} ref={ref}>
        <props.icon
          className={`inline box-content w-6 h-6 ${props.i != 0 ? "mx-2" : "mr-2"
            }`}
        ></props.icon>
      </Link>
    );
  }
);
IconButtonLink.displayName = "IconButtonLink";

const Frontpage = () => {
  return (
    <>
      <div className="py-12 px-8 text-white flex flex-col min-h-full md:grid md:grid-cols-12 overflow-hidden">
        <section className="md:col-span-5 md2:col-span-4 md:col-start-1 md:flex md:flex-col md:items-start md:my-auto lg:ml-8">
          <h1 className="text-display-md lg:text-display-lg">
            Yixuan Shen
          </h1>
          <h2 className="text-headline-sm my-2">Full-Stack Developer</h2>
          <ul className="flex flex-wrap">
            {contactLists.map((elem, i) => {
              const prop = {
                href: elem.link,
                icon: elem.icon,
                i,
              };
              return <IconButtonLink {...prop} key={elem.title} />;
            })}
          </ul>
        </section>
      </div>
    </>
  );
};

export default Frontpage;
