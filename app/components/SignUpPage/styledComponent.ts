import styled from 'styled-components/native';
import Textarea from 'react-native-textarea';

export const SignUpHeading = styled.Text`
  font-weight: bold;
  font-size: 18px;
`;

export const ContainerCard = styled.View`
  background-color: white;
  margin: 5% 10%;
  padding: 20px;
`;

export const TextComponent = styled.Text`
  color: gray;
  margin: 3.5px 0px;
`;

export const InputComponent = styled.TextInput`
  background-color: #f2f2f2;
  color: black;
  width: 46%;
  padding: 3px;
  margin: 6px 0px;
`;
export const FirstNameLastNameWrapper = styled.View`
  justify-content: space-between;
  flex-direction: row;
  margin-top: 10px;
`;

export const LongTextInputComponent = styled.TextInput`
  background-color: #f2f2f2;
  color: black;
  width: 100%;
  padding: 3px;
  margin: 6px 0px;
`;

export const RadioButtonWrapper = styled.View`
  justify-content: space-between;
  flex-direction: row;
  margin-top: 10px;
`;

export const DateAndPickerWrapper = styled.View`
  justify-content: space-between;
  flex-direction: row;
  margin-top: 10px;
`;

export const LabelWraaper = styled.View`
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
`;

export const StyledPicker = styled.Picker`
  width: 40px;
  height: 40px;
  border: 3px solid black;
`;
export const StyledAddress = styled(Textarea)`
  border: 1px solid gray;
  width: 80%;
  border: 1px solid gold;
`;
export const MediumInput = styled.TextInput`
  flex-grow: 1;
  padding: 3px;
  margin: 14px 0px;
  background-color: #f2f2f2;
`;
export const CheckBoxWrapper = styled.View`
  flex-direction: row;
`;
export const AddressWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SignUpButtonView = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #0498d9;
  padding: 6px;
  width: 40%;
  margin-top: 13px;
  border-radius: 4px;
`;
export const SignUpButtonText = styled.Text`
  color: white;
`;

export const TouchbleSignUp = styled.TouchableHighlight`
  flex-direction: row;
  justify-content: center;
`;

export const SliderWrapper = styled.View`
  flex-direction: row;
`;

export const StyledSlider = styled.Slider`
  width: 90%;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const ColorPickersWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;

export const WhiteText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 19px;
`;
