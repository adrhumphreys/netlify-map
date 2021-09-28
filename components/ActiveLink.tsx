import { useRouter } from "next/router";
import Link from "next/link";
import React, { Children } from "react";

const ActiveLink = (props: any) => {
  const { children, activeClassName, inActiveClassName } = props;

  const { asPath } = useRouter();
  const child = Children.only(children);
  const childClassName = child.props.className || "";
  const active = asPath === props?.href || asPath === props?.as;

  //   // pages/index.js will be matched via props.href
  //   // pages/about.js will be matched via props.href
  //   // pages/[slug].js will be matched via props.as
  const className = active
    ? `${childClassName} ${activeClassName}`.trim()
    : `${childClassName} ${inActiveClassName}`.trim();

  return (
    <Link {...props}>
      {React.cloneElement(child, {
        className: className || null,
        ariaCurrent: active,
      })}
    </Link>
  );
};

export default ActiveLink;
