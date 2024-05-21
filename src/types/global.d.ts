import { Theme as MuiTheme } from "@mui/material/styles";

export {};

declare global {
  type ReactNode =
    | React.ReactElement<unknown>
    | FunctionComponent<unknown>
    | React.ComponentClass<unknown>
    | null;

  interface IBase extends Record<string, unkonwn> {
    id: string | number;
  }

  interface IUser extends Record<string, unknown> {
    id: string;
    name: string;
    email: string;
    role: string;
    createdAt: string;
    package?: string;
  }

  interface IHeader {
    variant?: string | null;
  }
  interface IMainHeader {
    variant?: string | null;
    rightLinks: {
      icon: JSX.Element;
      fill: JSX.Element;
      title: string;
      url: string;
    }[];
    centerLinks: {
      title: string;
      fill: JSX.Element;
      icon: JSX.Element;
      url: string;
    }[];
    mobileLinks: {
      title: string;
      url: string;
    }[];
  }
  interface IProfile {
    id: string | number;
    name: string;
    stats: string[];
    image: string;
    rank: string;
    position: string;
    height: string;
    weight: string;
    offDef: string;
    exercises: string[];
    coachNotes: string;
    bio: string;
    education: string;
    fourtyYard: string;
    twentyYard: string;
    verticalJump: string;
    broadJump: string;
    threeCone: string;
    bench: string;
    rating: number;
    videos: string[];
    featuredVideo: string;
  }

  interface IVideo {
    url: string;
    name:string;
  }

  interface IPlayerReviewCard {
    name: string;
    rating: number;
    offdef: "Offense" | "Defence";
    position: string;
    weight: string;
    height: string;
    videoSrc: string;
  }

  interface IJoinCard {
    title: string;
    description: string;
    imageSrc: string;
    buttonLink: string;
  }

  interface IExcersize {
    selected: boolean;
    icon: string;
    text: string;
  }
}

declare module "@mui/material/styles/createPalette" {
  type colorNumber = {
    [number]: string;
  };
  export interface PaletteOptions {
    neutral: PaletteColor | colorNumber;
  }
  export interface Palette {
    neutral: PaletteColor | colorNumber;
  }
}

declare module "@emotion/react" {
  export type Theme = MuiTheme;
}
