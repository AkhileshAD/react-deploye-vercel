const baseStyle = {
  color: "deep_purple.600",
  fontFamily: "Garnett Semibold",
};
const sizes = {
  "3xl": {
    fontSize: '{"md":"50px","base":"40px","sm":"46px"}',
    fontWeight: 700,
  },
  "2xl": {
    fontSize: '{"md":"42px","base":"32px","sm":"38px"}',
    fontWeight: 600,
  },
  xl: {
    fontSize: '{"md":"38px","base":"34px","sm":"36px"}',
    fontWeight: 600,
  },
  "4xl": {
    fontSize: '{"md":"60px","base":"46px","sm":"52px"}',
    fontWeight: 700,
  },
  s: {
    fontSize: "22px",
    fontWeight: 600,
  },
  md: {
    fontSize: '{"md":"24px","base":"24px","sm":"22px"}',
    fontWeight: 700,
  },
  xs: {
    fontSize: "16px",
    fontWeight: 600,
  },
  lg: {
    fontSize: '{"md":"35px","base":"31px","sm":"33px"}',
    fontWeight: 600,
  },
};
const defaultProps = {
  size: "2xl",
};

const Heading = {
  baseStyle,
  sizes,
  defaultProps,
};
export default Heading;
