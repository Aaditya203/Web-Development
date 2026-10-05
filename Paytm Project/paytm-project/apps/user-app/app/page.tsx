"use client"
import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import { Appbar } from "@repo/ui/Appbar";
import { signIn, signOut, useSession } from "next-auth/react";
type Props = Omit<ImageProps, "src"> & {
  srcLight: string;
  srcDark: string;
};

const ThemeImage = (props: Props) => {
  const { srcLight, srcDark, ...rest } = props;

  return (
    <>
      <Image {...rest} src={srcLight} className="imgLight" />
      <Image {...rest} src={srcDark} className="imgDark" />
    </>
  );
};

export default function Home() {
  const session = useSession();
  return (
    <div>
      <Appbar user={session.data?.user} onSignin={signIn} onSignout={signOut}/>
    </div>
  );
}
