import { CSSProperties } from "react";
import { FaPhone } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { MdEmail, MdOutlineLocationOn } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";
import { TbDropletFilled } from "react-icons/tb";
import { HiShoppingCart } from "react-icons/hi";
import { AiTwotoneHome } from "react-icons/ai";
import { HiMapPin } from "react-icons/hi2";
import { BsFillPersonFill } from "react-icons/bs";
import Flight from "./flight";

type IconProps = {
  name: string;
  className?: string;
  style?: CSSProperties;
  fill?: string;
  width?: string;
  height?: string;
};

const Icon = ({ name, fill, className, style, width, height }: IconProps) => {
  switch (name) {
    case "FaPhone": {
      return <FaPhone fill={fill} className={className} style={style} />;
    }
    case "TbDropletFilled": {
      return (
        <TbDropletFilled fill={fill} className={className} style={style} />
      );
    }
    case "MdEmail": {
      return <MdEmail fill={fill} className={className} style={style} />;
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
    default:
      return <></>;
  }
};

export default Icon;
