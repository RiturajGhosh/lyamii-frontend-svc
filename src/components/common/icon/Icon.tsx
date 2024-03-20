import { CSSProperties } from "react";
import { FaPhone } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import {
  MdAddCircleOutline,
  MdEmail,
  MdOutlineKeyboardBackspace,
  MdOutlineLocationOn,
} from "react-icons/md";
import { CiCalendar } from "react-icons/ci";
import { TbDropletFilled } from "react-icons/tb";
import { HiShoppingCart } from "react-icons/hi";
import { AiTwotoneHome } from "react-icons/ai";
import { PiSunHorizonFill } from "react-icons/pi";
import { BsStars } from "react-icons/bs";
import { HiMapPin } from "react-icons/hi2";
import {
  BsFillMoonFill,
  BsFillPersonFill,
  BsFillSunFill,
} from "react-icons/bs";
import Flight from "./flight";
import { BiSolidMessageMinus } from "react-icons/bi";

type IconProps = {
  name: string;
  className?: string;
  style?: CSSProperties;
  fill?: string;
  width?: string;
  height?: string;
  href?:string;
  onClick?: Function;
};

const Icon = ({
  name,
  fill,
  className,
  style,
  width,
  height,
  href,
  onClick,
}: IconProps) => {
  switch (name) {
    case "FaPhone": {
      return <FaPhone fill={fill} className={className} href={href} style={style} />;
    }
    case "TbDropletFilled": {
      return (
        <TbDropletFilled fill={fill} className={className} style={style} />
      );
    }
    case "MdEmail": {
      return <MdEmail fill={fill} href={href} className={className} style={style} />;
    }
    case "GoHomeFill": {
      return <GoHomeFill fill={fill} className={className} style={style} />;
    }
    case "CiCalendar": {
      return <CiCalendar fill={fill} className={className} style={style} />;
    }
    case "MdOutlineLocationOn": {
      return (
        <MdOutlineLocationOn fill={fill} className={className} style={style} />
      );
    }
    case "HiShoppingCart": {
      return <HiShoppingCart fill={fill} className={className} style={style} />;
    }

    case "BsFillPersonFill": {
      return (
        <BsFillPersonFill fill={fill} className={className} style={style} />
      );
    }
    case "AiTwotoneHome": {
      return <AiTwotoneHome fill={fill} className={className} style={style} />;
    }
    case "HiMapPin": {
      return <HiMapPin fill={fill} className={className} style={style} />;
    }
    case "flight": {
      return <Flight width={width} height={height} />;
    }
    case "back": {
      return (
        <MdOutlineKeyboardBackspace
          fill={fill}
          className={className}
          style={style}
        />
      );
    }
    case "message": {
      return (
        <BiSolidMessageMinus fill={fill} className={className} style={style} />
      );
    }
    case "evening": {
      return <BsFillMoonFill fill={fill} className={className} style={style} />;
    }
    case "morning": {
      return (
        <PiSunHorizonFill fill={fill} className={className} style={style} />
      );
    }
    case "night": {
      return <BsStars fill={fill} className={className} style={style} />;
    }
    case "afternoon": {
      return <BsFillSunFill fill={fill} className={className} style={style} />;
    }

    case "addRoundButton": {
      return (
        <MdAddCircleOutline
          fill={fill}
          className={className}
          onClick={() => onClick && onClick()}
          style={style}
        />
      );
    }
    default:
      return <></>;
  }
};

export default Icon;
