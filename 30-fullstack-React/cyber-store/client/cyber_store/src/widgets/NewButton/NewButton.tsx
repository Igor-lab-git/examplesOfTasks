import type { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import { Link, type LinkProps } from "react-router-dom";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: "button";
    to?: never;
    htref? :never;
};

type AnkorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
    as?: "a";
    to?: never;
    htref :string;
};

type RouterLinkProps = LinkProps  & {
    as?: "link";
    htref?: never;
    to: string;
};


type INewButton = (ButtonProps | AnkorProps | RouterLinkProps) & {
  className: string;
  children: ReactNode;
};

const NewButton = (props: INewButton) => {
    const { children, className, as = "button", ...rest } = props;

  if(as === "button") {
    return (
        <button  className={className} {...(rest as ButtonProps)}>
            {children}
        </button>
    )
  };

 if(as === "a") {
    const { htref } = rest as AnkorProps;
    return (
        <a href={htref}  className={className} {...(rest as RouterLinkProps)}>
            {children}
        </a>
    )
  };

  if(as === "link") {
    const { to, ...linkRest } = rest as RouterLinkProps;
    return (
        <Link to={to}  className={className} {...linkRest}>
            {children}
        </Link>
    )
  };
  return null;
};

export default NewButton;
