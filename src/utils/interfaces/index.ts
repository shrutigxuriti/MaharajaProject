import { NavigationProp, ParamListBase } from "@react-navigation/native";
export interface NavigationProps {
    navigation: NavigationProp<ParamListBase>;
  }

  export interface ButtonsProps {
    label: string;
    onPress: () => void;
    disabled: boolean;
    variant: string;
    width: number,
    // wrapperCustomStyle: any;
}