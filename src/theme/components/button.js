import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const baseStyle = defineStyle({ borderRadius: "0px", outlineOffset: "0", cursor: "pointer" });

const sizes = {
  lg: defineStyle({
    h: "64px",
    px: "17px",
  }),
  xs: defineStyle({
    h: "36px",
    fontSize: "14px",
    px: "18px",
  }),
  sm: defineStyle({
    h: "44px",
    fontSize: "18px",
    px: "35px",
  }),
  xl: defineStyle({
    h: "70px",
    fontSize: "24px",
    px: "35px",
  }),
  md: defineStyle({
    h: "59px",
    fontSize: "18px",
    px: "30px",
  }),
};

const variants = {
  outline: defineStyle((props) => {
    const { colorScheme } = props;
    const colorCombinations = {
      deep_purple_600: {
        borderColor: "deep_purple.600",
        borderWidth: "2px",
        borderStyle: "solid",
        color: "deep_purple.600",
      },
    };
    return colorCombinations[colorScheme] || colorCombinations["deep_purple_600"];
  }),
  fill: defineStyle((props) => {
    const { colorScheme } = props;
    const colorCombinations = {
      deep_purple_600: {
        bg: "deep_purple.600",
        boxShadow: "md",
        color: "gray.50",
      },
      deep_purple_50: {
        bg: "deep_purple.50",
      },
      orange_300: {
        bg: "orange.300",
        color: "gray.900_02",
      },
      gray_100: {
        bg: "gray.100",
        boxShadow: "xl",
        color: "white.A700_01",
      },
    };
    return colorCombinations[colorScheme] || colorCombinations["deep_purple_600"];
  }),
};

const Button = defineStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    variant: "fill",
    size: "md",
  },
});
export default Button;
