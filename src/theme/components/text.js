const baseStyle = {
  color: "gray.700",
  fontFamily: "Poppins",
};
const sizes = {
  "5xl": {
    fontSize: '{"md":"40px","base":"36px","sm":"38px"}',
    fontWeight: 500,
  },
  xs: {
    fontSize: "11px",
    fontWeight: 400,
  },
  lg: {
    fontSize: "18px",
    fontWeight: 400,
  },
  s: {
    fontSize: "14px",
    fontWeight: 400,
  },
  "2xl": {
    fontSize: '{"md":"23px","base":"23px","sm":"21px"}',
    fontWeight: 500,
  },
  "3xl": {
    fontSize: '{"md":"24px","base":"24px","sm":"22px"}',
    fontWeight: 400,
  },
  "4xl": {
    fontSize: '{"md":"38px","base":"34px","sm":"36px"}',
    fontWeight: 500,
  },
  xl: {
    fontSize: "20px",
    fontWeight: 500,
  },
  md: {
    fontSize: "16px",
    fontWeight: 400,
  },
};
const defaultProps = {
  size: "md",
};

const Text = {
  baseStyle,
  sizes,
  defaultProps,
};
export default Text;
